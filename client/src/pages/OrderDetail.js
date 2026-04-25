import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaBox, FaTruck, FaCheckCircle, FaTimesCircle, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import './OrderDetail.css';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Vui lòng đăng nhập để xem đơn hàng');
      navigate('/login');
      return;
    }

    fetchOrderDetail();
  }, [id, navigate]);

  const fetchOrderDetail = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/api/orders/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setOrder(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Lỗi khi tải chi tiết đơn hàng:', err);
      setLoading(false);
      if (err.response?.status === 401) {
        toast.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.');
        navigate('/login');
      } else if (err.response?.status === 404) {
        toast.error('Không tìm thấy đơn hàng');
        navigate('/orders');
      }
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaBox className="status-icon pending" />;
      case 'processing':
        return <FaTruck className="status-icon processing" />;
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />;
      case 'cancelled':
        return <FaTimesCircle className="status-icon cancelled" />;
      default:
        return <FaBox className="status-icon" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Chờ xác nhận';
      case 'processing':
        return 'Đang giao hàng';
      case 'completed':
        return 'Hoàn thành';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'processing':
        return 'status-processing';
      case 'completed':
        return 'status-completed';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="order-detail-loading">Đang tải chi tiết đơn hàng...</div>;
  }

  if (!order) {
    return (
      <div className="order-detail-page">
        <div className="order-detail-container">
          <div className="order-not-found">
            <h2>Không tìm thấy đơn hàng</h2>
            <Link to="/orders" className="btn-back">
              <FaArrowLeft /> Quay lại danh sách đơn hàng
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-detail-page">
      <div className="order-detail-container">
        <div className="order-detail-header">
          <Link to="/orders" className="btn-back-link">
            <FaArrowLeft /> Quay lại
          </Link>
          <div className="header-info">
            <h1>Chi Tiết Đơn Hàng #{order.id}</h1>
            <p>Đặt ngày {formatDate(order.created_at)}</p>
          </div>
          <div className={`order-status-badge ${getStatusClass(order.status)}`}>
            {getStatusIcon(order.status)}
            <span>{getStatusText(order.status)}</span>
          </div>
        </div>

        <div className="order-detail-content">
          <div className="order-main-info">
            <div className="info-card">
              <h2>
                <FaUser /> Thông tin người nhận
              </h2>
              <div className="info-content">
                <div className="info-row">
                  <span className="info-label">Họ và tên:</span>
                  <span className="info-value">{order.customer_name || 'N/A'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">
                    <FaPhone /> Số điện thoại:
                  </span>
                  <span className="info-value">{order.phone || 'N/A'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">
                    <FaMapMarkerAlt /> Địa chỉ:
                  </span>
                  <span className="info-value">{order.shipping_address || 'N/A'}</span>
                </div>
                {order.notes && (
                  <div className="info-row">
                    <span className="info-label">Ghi chú:</span>
                    <span className="info-value">{order.notes}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="info-card">
              <h2>Sản phẩm đã đặt</h2>
              <div className="order-items-list">
                {order.items && order.items.map((item, index) => (
                  <div key={index} className="order-detail-item">
                    <img 
                      src={item.image_url || '/logo.png'} 
                      alt={item.product_name}
                      className="item-image"
                    />
                    <div className="item-info">
                      <h3>{item.product_name}</h3>
                      <p className="item-price">Đơn giá: {formatPrice(item.price)}</p>
                      <p className="item-quantity">Số lượng: {item.quantity}</p>
                    </div>
                    <div className="item-total">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-summary-sidebar">
            <div className="summary-card">
              <h2>Tóm tắt đơn hàng</h2>
              
              <div className="summary-row">
                <span>Tạm tính:</span>
                <strong>{formatPrice(order.total_amount)}</strong>
              </div>

              <div className="summary-row">
                <span>Phí vận chuyển:</span>
                <strong>Liên hệ</strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Tổng cộng:</span>
                <strong>{formatPrice(order.total_amount)}</strong>
              </div>

              <div className="payment-info">
                <h3>Phương thức thanh toán</h3>
                <p>Thanh toán khi nhận hàng (COD)</p>
              </div>

              <div className="order-timeline">
                <h3>Trạng thái đơn hàng</h3>
                <div className="timeline">
                  <div className={`timeline-item ${order.status === 'pending' || order.status === 'processing' || order.status === 'completed' ? 'active' : ''}`}>
                    <div className="timeline-icon">
                      <FaBox />
                    </div>
                    <div className="timeline-content">
                      <strong>Chờ xác nhận</strong>
                      <p>Đơn hàng đã được đặt</p>
                    </div>
                  </div>

                  <div className={`timeline-item ${order.status === 'processing' || order.status === 'completed' ? 'active' : ''}`}>
                    <div className="timeline-icon">
                      <FaTruck />
                    </div>
                    <div className="timeline-content">
                      <strong>Đang giao hàng</strong>
                      <p>Đơn hàng đang được vận chuyển</p>
                    </div>
                  </div>

                  <div className={`timeline-item ${order.status === 'completed' ? 'active' : ''}`}>
                    <div className="timeline-icon">
                      <FaCheckCircle />
                    </div>
                    <div className="timeline-content">
                      <strong>Hoàn thành</strong>
                      <p>Đơn hàng đã được giao</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="support-info">
                <p>☎ Hotline hỗ trợ:</p>
                <strong>076 999 9295</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
