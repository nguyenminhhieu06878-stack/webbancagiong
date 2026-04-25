import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaTag } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('info');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, [id]);

  const formatPrice = (price) => {
    if (!price && price !== 0) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      const data = response.data;
      
      // Parse images if it's JSON string
      let images = [];
      if (data.images) {
        try {
          images = JSON.parse(data.images);
        } catch {
          images = [data.image_url || 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'];
        }
      } else if (data.image_url) {
        images = [data.image_url];
      } else {
        images = ['https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png'];
      }
      
      const productData = {
        ...data,
        images: images,
        commitments: [
          'Giao hàng toàn quốc – đúng giống – đúng size',
          'Có giấy kiểm dịch – hợp đồng rõ – hình thái/video thả',
          'Chính sách đổi trả, bảo hành, hậu mãi rõ ràng KHMT'
        ]
      };
      console.log('Product data:', productData);
      console.log('scientific_name:', productData.scientific_name);
      setProduct(productData);
      setLoading(false);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="loading-message">Đang tải thông tin sản phẩm...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="error-message">Không tìm thấy sản phẩm</div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    // Get current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
      // Update quantity if product exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: quantity
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Dispatch event to update cart badge
    window.dispatchEvent(new Event('cartChange'));
    
    // Show success message
    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb-nav">
          <Link to="/">Trang chủ</Link>
          <span className="separator">›</span>
          <Link to="/products">Sản phẩm cá giống</Link>
          <span className="separator">›</span>
          <span className="current">{product.category}</span>
        </div>

        {/* Product Main Section */}
        <div className="product-main">
          {/* Left - Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <button className="gallery-nav prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="main-image"
              />
              <button className="gallery-nav next" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
            <div className="thumbnail-list">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-code">Mã sản phẩm: <span>{product.id || 'Đang cập nhật...'}</span></p>

            <div className="product-price-box">
              <FaTag className="price-icon" />
              <span className="product-price">{formatPrice(product.price)}</span>
              <span className="price-unit">/con</span>
            </div>

            <div className="product-features">
              {product.scientific_name && (
                <p className="feature-item">
                  <strong>Tên giống:</strong> {product.scientific_name}
                </p>
              )}
              {product.breeding_model && (
                <p className="feature-item">
                  <strong>Mô hình nuôi:</strong> {product.breeding_model}
                </p>
              )}
              {product.economic_value && (
                <p className="feature-item">
                  <strong>Giá trị kinh tế:</strong> {product.economic_value}
                </p>
              )}
              {product.key_features && (
                <p className="feature-item">
                  <strong>Đặc điểm nổi bật:</strong> {product.key_features}
                </p>
              )}
              {product.food && (
                <p className="feature-item">
                  <strong>Thức ăn:</strong> {product.food}
                </p>
              )}
              {product.breeding_time && (
                <p className="feature-item">
                  <strong>Thời gian nuôi:</strong> {product.breeding_time}
                </p>
              )}
              {product.difficulty && (
                <p className="feature-item">
                  <strong>Độ khó nuôi:</strong> {product.difficulty}
                </p>
              )}
              {product.suitable_for && (
                <p className="feature-item">
                  <strong>Phù hợp với:</strong> {product.suitable_for}
                </p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <label htmlFor="quantity">Số lượng:</label>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  className="quantity-input" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="quantity-unit">con</span>
            </div>

            <div className="product-actions">
              <button 
                onClick={() => handleAddToCart()} 
                className="btn-order"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
              <a href="tel:0769999295" className="btn-hotline">HOTLINE 076 999 9295</a>
            </div>

            <div className="commitment-box">
              <div className="commitment-header">
                <span className="icon">🎁</span>
                <span>Tiêu chuẩn chất lượng !!!</span>
              </div>
            </div>

            <div className="guarantee-box">
              {product.commitments.map((item, index) => (
                <div key={index} className="guarantee-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Thông Tin Chi Tiết
            </button>
            <button 
              className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => setActiveTab('guide')}
            >
              Hướng Dẫn Mua Hàng
            </button>
            <button 
              className={`tab-btn ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => setActiveTab('support')}
            >
              Hỗ Trợ Kỹ Thuật
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'info' && (
              <div className="tab-panel">
                <h2>{product.name} – {product.detailed_description || 'Thông tin chi tiết'}</h2>
                <p>{product.description || 'Đang cập nhật thông tin chi tiết...'}</p>

                {product.detailed_description && (
                  <>
                    <h3>Thông tin chi tiết:</h3>
                    <p>{product.detailed_description}</p>
                  </>
                )}

                <h3>Thông số kỹ thuật:</h3>
                <ul>
                  {product.size && <li><strong>Kích thước:</strong> {product.size}</li>}
                  {product.breeding_time && <li><strong>Thời gian nuôi:</strong> {product.breeding_time}</li>}
                  {product.difficulty && <li><strong>Độ khó:</strong> {product.difficulty}</li>}
                  {product.food && <li><strong>Thức ăn:</strong> {product.food}</li>}
                </ul>
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="tab-panel">
                <h2>Hướng Dẫn Mua Hàng</h2>
                <h3>BƯỚC 1: LỰA CHỌN GIỐNG CÁ PHÙ HỢP</h3>
                <p>Liên hệ với chúng tôi qua hotline hoặc Zalo để được tư vấn về loại giống phù hợp với mô hình nuôi của bạn.</p>
                
                <h3>BƯỚC 2: ĐẶT HÀNG VÀ XÁC NHẬN</h3>
                <p>Cung cấp thông tin: số lượng, kích thước, địa chỉ giao hàng. Chúng tôi sẽ báo giá và thời gian giao hàng cụ thể.</p>
                
                <h3>BƯỚC 3: THANH TOÁN</h3>
                <p>Thanh toán đặt cọc hoặc toàn bộ qua chuyển khoản. Thông tin tài khoản sẽ được cung cấp khi xác nhận đơn hàng.</p>
                
                <h3>BƯỚC 4: GIAO HÀNG</h3>
                <p>Cá giống được đóng gói chuyên nghiệp, bơm oxy đầy đủ và vận chuyển đến tận nơi.</p>
                
                <h3>BƯỚC 5: KIỂM TRA VÀ NHẬN HÀNG</h3>
                <p>Kiểm tra số lượng, kích thước và tình trạng cá ngay khi nhận hàng. Chụp ảnh/video nếu có vấn đề.</p>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="tab-panel">
                <h2>Hỗ Trợ Kỹ Thuật</h2>
                <h3>1. Tư vấn trước khi thả giống</h3>
                <ul>
                  <li>Hướng dẫn chuẩn bị ao nuôi</li>
                  <li>Tư vấn mật độ thả giống phù hợp</li>
                  <li>Hướng dẫn xử lý nước ao</li>
                </ul>

                <h3>2. Hỗ trợ trong quá trình nuôi</h3>
                <ul>
                  <li>Tư vấn chế độ dinh dưỡng</li>
                  <li>Hướng dẫn phòng và trị bệnh</li>
                  <li>Giải đáp thắc mắc 24/7</li>
                </ul>

                <h3>3. Liên hệ hỗ trợ</h3>
                <p><strong>Hotline:</strong> 076 999 9295</p>
                <p><strong>Zalo:</strong> 076 999 9295</p>
                <p><strong>Email:</strong> thuysantandung@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
