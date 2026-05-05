import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaBox, FaTruck, FaCheckCircle, FaTimesCircle, FaEye } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, processing, completed, cancelled
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Vui lòng đăng nhập để xem đơn hàng');
      navigate('/login');
      return;
    }

    fetchOrders();
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Lỗi khi tải đơn hàng:', err);
      setLoading(false);
      if (err.response?.status === 401) {
        toast.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.');
        navigate('/login');
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
      case 'confirmed':
        return 'Đã xác nhận';
      case 'shipping':
        return 'Đang giao hàng';
      case 'delivered':
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
      case 'confirmed':
        return 'status-confirmed';
      case 'shipping':
        return 'status-processing';
      case 'delivered':
        return 'status-completed';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

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
    return <div className="orders-loading">Đang tải đơn hàng...</div>;
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <div className="header-content">
            <FaShoppingBag className="header-icon" />
            <div>
              <h1>Đơn Hàng Của Tôi</h1>
              <p>Quản lý và theo dõi đơn hàng của bạn</p>
            </div>
          </div>
        </div>

        <div className="orders-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tất cả ({orders.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Chờ xác nhận ({orders.filter(o => o.status === 'pending').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'confirmed' ? 'active' : ''}`}
            onClick={() => setFilter('confirmed')}
          >
            Đã xác nhận ({orders.filter(o => o.status === 'confirmed').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'shipping' ? 'active' : ''}`}
            onClick={() => setFilter('shipping')}
          >
            Đang giao ({orders.filter(o => o.status === 'shipping').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'delivered' ? 'active' : ''}`}
            onClick={() => setFilter('delivered')}
          >
            Hoàn thành ({orders.filter(o => o.status === 'delivered').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setFilter('cancelled')}
          >
            Đã hủy ({orders.filter(o => o.status === 'cancelled').length})
          </button>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="orders-empty">
            <FaShoppingBag className="empty-icon" />
            <h3>Chưa có đơn hàng nào</h3>
            <p>Bạn chưa có đơn hàng nào. Hãy bắt đầu mua sắm ngay!</p>
            <button onClick={() => navigate('/products')} className="btn-shop">
              Mua sắm ngay
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {filteredOrders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <span className="order-id">Đơn hàng #{order.id}</span>
                    <span className="order-date">{formatDate(order.created_at)}</span>
                  </div>
                  <div className={`order-status ${getStatusClass(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{getStatusText(order.status)}</span>
                  </div>
                </div>

                <div className="order-items">
                  {order.items && order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img 
                        src={item.image_url || '/logo.png'} 
                        alt={item.product_name}
                        className="item-image"
                      />
                      <div className="item-info">
                        <h4>{item.product_name}</h4>
                        <p>Số lượng: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <span>Tổng tiền:</span>
                    <strong>{formatPrice(order.total_amount)}</strong>
                  </div>
                  <button 
                    className="btn-view-detail"
                    onClick={() => navigate(`/orders/${order.id}`)}
                  >
                    <FaEye /> Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
