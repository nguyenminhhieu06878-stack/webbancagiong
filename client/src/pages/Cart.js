import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  };

  const updateCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
    window.dispatchEvent(new Event('cartChange'));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const handleRemoveItem = (itemId, itemName) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedCart);
    toast.success(`Đã xóa ${itemName} khỏi giỏ hàng`);
  };

  const handleClearCart = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
      updateCart([]);
      toast.success('Đã xóa tất cả sản phẩm');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Vui lòng đăng nhập để đặt hàng');
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-empty">
            <FaShoppingCart className="empty-icon" />
            <h2>Giỏ hàng trống</h2>
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Link to="/products" className="btn-continue-shopping">
              <FaArrowLeft /> Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>
            <FaShoppingCart /> Giỏ Hàng Của Bạn
          </h1>
          <p>Bạn có {cartItems.length} sản phẩm trong giỏ hàng</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-items-header">
              <span className="col-product">Sản phẩm</span>
              <span className="col-price">Đơn giá</span>
              <span className="col-quantity">Số lượng</span>
              <span className="col-total">Thành tiền</span>
              <span className="col-action">Xóa</span>
            </div>

            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img 
                    src={item.image_url || '/logo.png'} 
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-info">
                    <Link to={`/products/${item.id}`} className="item-name">
                      {item.name}
                    </Link>
                    <span className="item-size">{item.size || 'Liên hệ'}</span>
                  </div>
                </div>

                <div className="item-price">
                  {formatPrice(item.price)}
                </div>

                <div className="item-quantity">
                  <button 
                    className="qty-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                    className="qty-input"
                    min="1"
                  />
                  <button 
                    className="qty-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>

                <div className="item-action">
                  <button 
                    className="btn-remove"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    title="Xóa sản phẩm"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/products" className="btn-continue">
                <FaArrowLeft /> Tiếp tục mua sắm
              </Link>
            </div>
          </div>

          <div className="cart-summary">
            <h3>Tóm tắt đơn hàng</h3>
            
            <div className="summary-row">
              <span>Tạm tính:</span>
              <strong>{formatPrice(calculateTotal())}</strong>
            </div>

            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <strong>Liên hệ</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Tổng cộng:</span>
              <strong className="total-amount">{formatPrice(calculateTotal())}</strong>
            </div>

            <button onClick={handleCheckout} className="btn-checkout">
              Tiến hành đặt hàng
            </button>

            <div className="cart-note">
              <p>☎ Hotline hỗ trợ: <strong>076 999 9295</strong></p>
              <p>🚚 Miễn phí vận chuyển cho đơn hàng trên 5 triệu</p>
              <p>✓ Cam kết cá giống chất lượng cao</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
