import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import './PaymentResult.css';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get('orderId');
  const [checking, setChecking] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái thanh toán từ PayOS
    const verifyPayment = async () => {
      if (!orderId) {
        setChecking(false);
        return;
      }

      try {
        const token = localStorage.getItem('token');
        
        // Gọi API kiểm tra trạng thái thanh toán
        const response = await axios.get(`/api/payment/check-payment/${orderId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('Payment status:', response.data);

        // Nếu thanh toán thành công, cập nhật database
        if (response.data.status === 'PAID') {
          // Gọi API để cập nhật trạng thái đơn hàng
          await axios.post(`/api/payment/confirm-payment/${orderId}`, {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          setVerified(true);
          
          // Xóa giỏ hàng sau khi thanh toán thành công
          localStorage.removeItem('cart');
          window.dispatchEvent(new Event('cartChange'));
        }
      } catch (error) {
        console.error('Lỗi kiểm tra thanh toán:', error);
      } finally {
        setChecking(false);
      }
    };

    verifyPayment();
  }, [orderId]);

  if (checking) {
    return (
      <div className="payment-result-page">
        <div className="payment-result-container">
          <div className="payment-result-card">
            <FaSpinner className="result-icon spinning" />
            <h1>Đang xác nhận thanh toán...</h1>
            <p>Vui lòng đợi trong giây lát</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-result-page">
      <div className="payment-result-container">
        <div className="payment-result-card success">
          <FaCheckCircle className="result-icon" />
          <h1>Thanh toán thành công!</h1>
          <p>Đơn hàng #{orderId} của bạn đã được thanh toán thành công.</p>
          <p>Chúng tôi sẽ liên hệ với bạn sớm để xác nhận và giao hàng.</p>
          
          <div className="result-actions">
            <button onClick={() => navigate('/orders')} className="btn-primary">
              Xem đơn hàng
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
