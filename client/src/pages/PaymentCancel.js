import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import './PaymentResult.css';

const PaymentCancel = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get('orderId');

  return (
    <div className="payment-result-page">
      <div className="payment-result-container">
        <div className="payment-result-card cancel">
          <FaTimesCircle className="result-icon" />
          <h1>Thanh toán bị hủy</h1>
          <p>Đơn hàng #{orderId} chưa được thanh toán.</p>
          <p>Bạn có thể thử lại hoặc chọn phương thức thanh toán khác.</p>
          
          <div className="result-actions">
            <button onClick={() => navigate('/checkout')} className="btn-primary">
              Thử lại
            </button>
            <button onClick={() => navigate('/cart')} className="btn-secondary">
              Quay lại giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
