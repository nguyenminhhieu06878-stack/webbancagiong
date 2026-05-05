import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1 - Company Info */}
          <div className="footer-col">
            <h3 className="footer-title">Thuỷ sản Tùng Anh</h3>
            <p className="footer-desc">
              Chuyên cung cấp cá giống nước ngọt chất lượng cao với hơn 10 năm kinh nghiệm 
              trong lĩnh vực nuôi trồng thuỷ sản.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Liên hệ</h3>
            <ul className="footer-list">
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Số 123 Đường Láng, Quận Đống Đa, Hà Nội</span>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <a href="tel:0899589259" style={{ color: 'inherit', textDecoration: 'none' }}>089 958 9259</a>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>anhkien051204@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div className="footer-col">
            <h3 className="footer-title">Sản phẩm</h3>
            <ul className="footer-list">
              <li><Link to="/products?category=ca-tra">Cá tra giống</Link></li>
              <li><Link to="/products?category=ca-basa">Cá basa giống</Link></li>
              <li><Link to="/products?category=ca-ro-phi">Cá rô phi giống</Link></li>
              <li><Link to="/products?category=ca-chep">Cá chép giống</Link></li>
            </ul>
          </div>

          {/* Column 4 - Information */}
          <div className="footer-col">
            <h3 className="footer-title">Thông tin</h3>
            <ul className="footer-list">
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
              <li><Link to="/support/warranty-policy">Chính sách bảo hành</Link></li>
              <li><Link to="/techniques-list">Hướng dẫn nuôi trồng</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Công ty Thuỷ sản Tùng Anh. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
