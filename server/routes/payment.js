const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const payos = require('../services/payos');
const { db } = require('../database/db');

const JWT_SECRET = process.env.JWT_SECRET || 'thuysan_tunganh_secret_key';

// Middleware xác thực token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Không có token xác thực' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token không hợp lệ' });
    }
    req.user = user;
    next();
  });
};

// POST - Tạo link thanh toán PayOS
router.post('/create-payment-link', authenticateToken, async (req, res) => {
  try {
    if (!payos) {
      return res.status(503).json({ 
        error: 'PayOS chưa được cấu hình. Vui lòng sử dụng phương thức thanh toán COD.' 
      });
    }

    const { orderId, amount, description, returnUrl, cancelUrl } = req.body;

    if (!orderId || !amount) {
      return res.status(400).json({ error: 'Thiếu thông tin đơn hàng' });
    }

    // Tạo payment link với PayOS
    const paymentData = {
      orderCode: Number(orderId),
      amount: Number(amount),
      description: description || `Thanh toán đơn hàng #${orderId}`,
      returnUrl: returnUrl || `${process.env.CLIENT_URL || 'http://localhost:3000'}/payment/success`,
      cancelUrl: cancelUrl || `${process.env.CLIENT_URL || 'http://localhost:3000'}/payment/cancel`,
    };

    const paymentLinkResponse = await payos.createPaymentLink(paymentData);

    res.json({
      success: true,
      checkoutUrl: paymentLinkResponse.checkoutUrl,
      paymentLinkId: paymentLinkResponse.paymentLinkId
    });
  } catch (error) {
    console.error('Lỗi tạo link thanh toán:', error);
    res.status(500).json({ 
      error: 'Không thể tạo link thanh toán',
      details: error.message 
    });
  }
});

// GET - Kiểm tra trạng thái thanh toán
router.get('/check-payment/:orderId', authenticateToken, async (req, res) => {
  try {
    const { orderId } = req.params;

    const paymentInfo = await payos.getPaymentLinkInformation(Number(orderId));

    res.json({
      success: true,
      status: paymentInfo.status,
      data: paymentInfo
    });
  } catch (error) {
    console.error('Lỗi kiểm tra thanh toán:', error);
    res.status(500).json({ 
      error: 'Không thể kiểm tra trạng thái thanh toán',
      details: error.message 
    });
  }
});

// POST - Webhook nhận thông báo từ PayOS
router.post('/webhook', async (req, res) => {
  try {
    const webhookData = req.body;
    
    console.log('PayOS Webhook received:', webhookData);

    // Verify webhook signature
    const isValid = payos.verifyPaymentWebhookData(webhookData);
    
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    // Xử lý theo trạng thái thanh toán
    const { orderCode, status } = webhookData.data;

    if (status === 'PAID') {
      // Cập nhật trạng thái đơn hàng trong database
      db.run(
        'UPDATE orders SET payment_status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        ['paid', orderCode],
        (err) => {
          if (err) {
            console.error('Lỗi cập nhật trạng thái đơn hàng:', err);
          } else {
            console.log(`Đơn hàng #${orderCode} đã được thanh toán`);
          }
        }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Lỗi xử lý webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// POST - Hủy link thanh toán
router.post('/cancel-payment/:orderId', authenticateToken, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { cancellationReason } = req.body;

    await payos.cancelPaymentLink(
      Number(orderId),
      cancellationReason || 'Khách hàng hủy đơn hàng'
    );

    res.json({
      success: true,
      message: 'Đã hủy link thanh toán'
    });
  } catch (error) {
    console.error('Lỗi hủy thanh toán:', error);
    res.status(500).json({ 
      error: 'Không thể hủy link thanh toán',
      details: error.message 
    });
  }
});

module.exports = router;
