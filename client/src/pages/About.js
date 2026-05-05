import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import axios from 'axios';
import './About.css';

const About = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  const fetchPopularProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      // Get specific products by ID: 12 (Rô Đồng Lai), 15 (Chình Trắng), 13 (Diêu Hồng), 24 (Lươn), 25 (Ếch Thái)
      const productIds = [12, 15, 13, 24, 25];
      const products = response.data.filter(p => productIds.includes(p.id));
      setPopularProducts(products);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
    }
  };

  return (
    <div className="about-page">
      {/* Main Layout with Banner/Content and Sidebar */}
      <section className="about-main-layout">
        <div className="container">
          <div className="layout-grid">
            {/* Left Column - Banner and Content */}
            <div className="main-column">
              <img src="/about.png" alt="Công ty TNHH Thuỷ sản Tùng Anh - Bán cá giống" className="banner-image" />
              
              <h1 className="company-title">CÔNG TY TNHH THUỶ SẢN TÙNG ANH</h1>

              <div className="content-section">
                <h2>Giới thiệu về Công ty</h2>
                <p>
                  Công ty TNHH Thuỷ sản Tùng Anh là đơn vị chuyên cung cấp cá giống nước ngọt chất lượng cao 
                  với hơn 40 năm kinh nghiệm trong lĩnh vực nuôi trồng và sản xuất cá giống.
                </p>
                <p>
                  Chúng tôi tự hào là đối tác tin cậy của hàng nghìn hộ nuôi, trang trại và doanh nghiệp 
                  trên khắp cả nước, cung cấp đa dạng các loại cá giống chất lượng với tỷ lệ sống cao.
                </p>
              </div>

              <div className="content-section">
                <h2>Sản phẩm & Dịch vụ</h2>
                <p>
                  <strong>Chuyên bán sỉ & lẻ các sản phẩm thủy sản:</strong>
                </p>
                <ul className="product-list">
                  <li>Cá giống: Trê lai, Cá lóc, Diêu hồng, Rô phi, Trắm cỏ, Trôi, Mè, Chép</li>
                  <li>Thác lác, Cá lăng, Cá tra, Lươn, Ếch, Baba, Cá chình giống...v.v</li>
                  <li>Cá cảnh: Cá Koi, Cá thịt & thức ăn cho cá</li>
                </ul>
              </div>

              <div className="content-section">
                <h2>Cam kết chất lượng</h2>
                <ul className="commitment-list">
                  <li>✓ Cá giống khỏe mạnh, đạt tiêu chuẩn chất lượng</li>
                  <li>✓ Có giấy kiểm dịch đầy đủ</li>
                  <li>✓ Tư vấn kỹ thuật nuôi trồng miễn phí</li>
                  <li>✓ Hỗ trợ vận chuyển toàn quốc</li>
                  <li>✓ Bảo hành đổi trả theo chính sách</li>
                </ul>
              </div>

              <div className="content-section">
                <h2>Thông tin liên hệ</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div>
                      <strong>Hotline:</strong>
                      <p>089.958.9259</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaGlobe className="contact-icon" />
                    <div>
                      <strong>Website:</strong>
                      <p>thuysantunganh.vn</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <strong>Địa chỉ:</strong>
                      <p>Số 123 Đường Láng, Quận Đống Đa, Hà Nội</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="sidebar-column">
              <div className="sidebar-widget">
                <h3>CHUYÊN MỤC BÀI VIẾT</h3>
                <ul className="sidebar-links">
                  <li><Link to="/techniques-list?category=Chia%20S%E1%BA%BB%20Kinh%20Nghi%E1%BB%87m">Chia Sẻ Kinh Nghiệm</Link></li>
                  <li><Link to="/techniques-list?category=K%E1%BB%B9%20thu%E1%BA%ADt%20nu%C3%B4i">Kỹ thuật nuôi</Link></li>
                  <li><Link to="/techniques-list?category=K%E1%BB%B9%20Thu%E1%BA%ADt%20Nu%C3%B4i%20C%C3%A1">Kỹ Thuật Nuôi Cá</Link></li>
                  <li><Link to="/techniques-list?category=K%E1%BB%B9%20thu%E1%BA%ADt%20nu%C3%B4i%20c%C3%A1%20th%C6%B0%C6%A1ng%20ph%E1%BA%A9m">Kỹ thuật nuôi cá thương phẩm</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>CÁ GIỐNG BÁN CHẠY</h3>
                <div className="popular-products">
                  {popularProducts.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`} className="popular-product-item">
                      <img src={product.image_url || '/api/placeholder/80/80'} alt={product.name} />
                      <div className="product-info">
                        <h4>{product.name}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;