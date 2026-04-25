import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fishType: '',
    quantity: '',
    date: '',
    deliveryMethod: '',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">LIÊN HỆ</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Liên Hệ</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Column - Contact Info */}
            <div className="contact-info">
              <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
              <p className="contact-subtitle">
                Đội tư vấn sẽ gọi xác nhận - gửi ảnh giống thật - chốt tích giao hàng.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon zalo-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                  </div>
                  <div className="method-text">
                    <p>Nhắn tin qua</p>
                    <strong>Zalo OA</strong>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon facebook-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="method-text">
                    <p>Nhắn tin qua</p>
                    <strong>Fanpage</strong>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon phone-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div className="method-text">
                    <p>Bán hàng & tư vấn</p>
                    <strong>076 999 9295</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại (Zalo)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="fishType"
                  value={formData.fishType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Loại cá cần đặt</option>
                  <option value="ca-ro-phi">Cá Rô Phi</option>
                  <option value="ca-chep">Cá Chép</option>
                  <option value="ca-me">Cá Mè</option>
                  <option value="ca-tre">Cá Trê</option>
                  <option value="ca-loc">Cá Lóc</option>
                  <option value="ca-tra">Cá Tra</option>
                  <option value="ca-lang">Cá Lăng</option>
                  <option value="khac">Khác</option>
                </select>

                <input
                  type="text"
                  name="quantity"
                  placeholder="Số lượng đặt (con hoặc kg)"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />

                <input
                  type="date"
                  name="date"
                  placeholder="Ngày dự kiến thả"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />

                <select
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Tình/thành cần giao hàng</option>
                  <option value="binh-dinh">Bình Định</option>
                  <option value="phu-yen">Phú Yên</option>
                  <option value="khanh-hoa">Khánh Hòa</option>
                  <option value="gia-lai">Gia Lai</option>
                  <option value="dak-lak">Đắk Lắk</option>
                  <option value="quang-ngai">Quảng Ngãi</option>
                  <option value="khac">Tỉnh khác</option>
                </select>

                <textarea
                  name="note"
                  placeholder="Ghi chú thêm (nếu có)"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                ></textarea>

                <button type="submit" className="submit-btn">
                  GỬI ĐƠN ĐẶT GIỐNG NGAY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;