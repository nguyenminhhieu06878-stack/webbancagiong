import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './PaymentResult.css';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    // Xóa giỏ hàng sau khi thanh toán thành công
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartChange'));
  }, []);

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
