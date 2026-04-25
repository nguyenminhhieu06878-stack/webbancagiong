const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
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

// PUT - Cập nhật thông tin khách hàng
router.put('/profile', authenticateToken, (req, res) => {
  const { fullName, phone, address } = req.body;
  const customerId = req.user.id;

  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }

  db.run(
    'UPDATE customers SET full_name = ?, phone = ?, address = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [fullName, phone, address || null, customerId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Lỗi cập nhật thông tin' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
      }

      res.json({ 
        message: 'Cập nhật thông tin thành công',
        data: {
          fullName,
          phone,
          address
        }
      });
    }
  );
});

// GET - Lấy thông tin khách hàng
router.get('/profile', authenticateToken, (req, res) => {
  const customerId = req.user.id;

  db.get(
    'SELECT id, full_name, email, phone, address, created_at FROM customers WHERE id = ?',
    [customerId],
    (err, customer) => {
      if (err) {
        return res.status(500).json({ error: 'Lỗi server' });
      }

      if (!customer) {
        return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
      }

      res.json({
        id: customer.id,
        fullName: customer.full_name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        created_at: customer.created_at
      });
    }
  );
});

module.exports = router;
