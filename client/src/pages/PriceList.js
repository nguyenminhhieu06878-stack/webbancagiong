import React, { useState } from 'react';
import './PriceList.css';

const PriceList = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const priceData = {
    group1: [
      { name: 'Cá Rô Phi Lướng Tính', quantity: 'Số lượng con tầm 100 con / kg', price: '120.000 - 140.000đ/kg' },
      { name: 'Cá Rô Phi Đơn Tính', quantity: 'Số lượng con tầm 100 con / kg', price: '160.000 - 180.000đ/kg' },
      { name: 'Cá Rô Phi Bảo Lộc', quantity: 'Số lượng con tầm 100 con / kg', price: '150.000 - 170.000đ/kg' },
      { name: 'Cá Rô Đồng Lai', quantity: 'Số lượng con tầm 100 con / kg', price: '150.000 - 170.000đ/kg' },
      { name: 'Cá Chép', quantity: 'Số lượng con tầm 80 - 100 con / kg', price: '120.000 - 140.000đ/kg' },
      { name: 'Cá Mè Trắng', quantity: 'Số lượng con tầm 50 - 70 con/ kg', price: '100.000 - 120.000đ/kg' },
      { name: 'Cá Mè Hoa', quantity: 'Số lượng con tầm 50 - 70 con/ kg', price: '100.000 - 120.000đ/kg' },
      { name: 'Cá Diếc', quantity: 'Số lượng con tầm 50 - 70 con/ kg', price: '150.000 - 170.000đ/kg' },
      { name: 'Cá Trê Lai', quantity: 'Số lượng con tầm 80 - 100 con/ kg', price: '70.000 - 90.000đ/kg' },
    ],
    group2: [
      { name: 'Cá Diêu Hồng', quantity: 'Số lượng con tầm 80 - 100 con / kg', price: '120.000 - 140.000đ/kg' },
      { name: 'Cá Chép Giòn (v1)', quantity: 'Số lượng con tầm 80 - 100 con / kg', price: '160.000 - 180.000đ/kg' },
      { name: 'Cá Chim Trắng', quantity: '500 con / kg', price: '1.000đ/con' },
      { name: 'Cá Lóc', quantity: 'Số lượng con tầm ~400 con / kg', price: '1.000đ/con' },
      { name: 'Cá Lóc Bông', quantity: 'Số lượng con tầm ~700 con / kg', price: '3.000đ/con' },
      { name: 'Cá Tra', quantity: 'Số lượng con tầm ~100 con / kg', price: '2.500đ/con' },
      { name: 'Cá Tra Dầu', quantity: 'Liên hệ', price: 'Liên hệ' },
      { name: 'Cá Basa', quantity: 'Số lượng con tầm ~100 con / kg', price: '1.00đ/con' },
      { name: 'Cá Lăng', quantity: 'Số lượng con tầm ~120 con / kg', price: '5.000đ/con' },
      { name: 'Cá Nheo', quantity: 'Số lượng con tầm 50 - 70 con / kg', price: 'Liên hệ' },
    ],
    group3: [
      { name: 'Cá Trắm Đen', quantity: 'Số lượng con tầm ~50 con / kg', price: '10.000đ/con' },
      { name: 'Cá Thát Lát Cườm giống', quantity: 'Tùy chọn size', price: '5.000đ/con' },
      { name: 'Cá Bóng Tượng giống', quantity: 'Số lượng con tầm 30 - 50 con/ kg', price: '300.000đ/kg' },
      { name: 'Cá Tầm giống', quantity: 'Tùy chọn size', price: 'Liên hệ' },
      { name: 'Cá Vồ Đém (Cá Hú)', quantity: 'Tùy chọn size', price: 'Liên hệ' },
      { name: 'Cá Chạch Lấu giống', quantity: 'Tùy chọn size', price: 'Liên hệ' },
    ],
    group4: [
      { name: 'Cá Chép Đỏ', quantity: 'Số lượng con tầm 80 - 100 con / kg', price: '160.000đ/kg' },
      { name: 'Cá Trắm Cỏ', quantity: 'Số lượng con tầm 50 - 70 con/ kg', price: '140.000đ/kg' },
      { name: 'Cá Trôi Đỏ', quantity: 'Số lượng con tầm 50 - 70 con / kg', price: '125.000đ/kg' },
      { name: 'Cá Trôi Trắng', quantity: 'Số lượng con tầm 50 - 70 con / kg', price: '125.000đ/kg' },
      { name: 'Cá Lăng Đuôi Đỏ', quantity: 'Số lượng con tầm ~100 con / kg', price: 'Liên hệ' },
      { name: 'Cá Tai Tượng', quantity: 'Số lượng con tầm 50 - 70 con/ kg', price: 'Liên hệ' },
      { name: 'Cá Heo', quantity: 'Liên hệ', price: 'Liên hệ' },
      { name: 'Cá Hổ', quantity: 'Liên hệ', price: 'Liên hệ' },
      { name: 'Cá Koi Việt', quantity: 'Tùy chọn size', price: '300.000đ/kg' },
      { name: 'Cá Koi F1', quantity: 'Tùy chọn size', price: 'Liên hệ' },
    ],
    group5: [
      { name: 'Chình Giống mẩu 10 con', quantity: 'Số lượng con 10 con/ kg', price: '1.450.000 đ/kg' },
      { name: 'Chình Giống mẩu 15 con', quantity: 'Số lượng con 15 con/ kg', price: '1.800.000 đkg' },
      { name: 'Chình Giống mẩu 20 con', quantity: 'Số lượng con 20 con/ kg', price: '2.250.000 đ/kg' },
      { name: 'Chình Giống mẩu 25 con', quantity: 'Số lượng con 25 con/kg', price: '2.350.000 đ/kg' },
      { name: 'Chình Giống mẩu 30 con', quantity: 'Số lượng con 30 con/kg', price: '2.500.000 đ/kg' },
      { name: 'Chình Giống mẩu 35 con', quantity: 'Số lượng con 35 con/kg', price: '2.650.000 đ/kg' },
      { name: 'Chình Giống mẩu 40 con', quantity: 'Số lượng con 40 con/kg', price: '2.760.000 đ/kg' },
      { name: 'Chình Giống mẩu 50 con', quantity: 'Số lượng con 50 con/kg', price: '3.250.000 đ/kg' },
      { name: 'Chình Giống mẩu 60 con', quantity: 'Số lượng con 60 con/kg', price: '3.360.000 đ/kg' },
      { name: 'Chình Giống mẩu 70 con', quantity: 'Số lượng con 70 con/kg', price: '3.500.000 đ/kg' },
    ],

  };

  return (
    <div className="price-list-page">
      {/* Banner Section */}
      <section className="price-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">BẢNG GIÁ CÁ GIỐNG</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Bảng giá</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="price-content">
        <div className="container">
          <div className="price-grid">
            {/* Box 1 - Left */}
            <div className="price-info-box">
              <h2>Bảng giá được cập nhật theo hàng tuần</h2>
              <p>Bảng giá tham khảo, giá sẽ có thể lên xuống theo từng thời điểm và tình trạng hàng.</p>
            </div>

            {/* Box 2 - Middle */}
            <div className="price-details-box">
              <p>
                Để đảm bảo chất lượng con giống, cá sẽ được vận chuyển mới lớn các ao nuôi về liền tục và giao trong 1-2 ngày sẽ hết. Nên trại sẽ không dự 100% các loại cá trong bảng giá. Quý khách vui lòng liên hệ trại trước khi đến để tránh tình trạng đến không có cá sẵn.
              </p>
              <p>
                Giá cá chưa bao gồm phí giao hàng, miễn phí giao hàng trong bán kính 20 Km.
              </p>
            </div>

            {/* Box 3 - Right */}
            <div className="price-details-box">
              <p>
                Thuỷ Sản Tân Dũng mở cửa hoạt động từ <strong>06:00 Sáng đến 20:00 Chiều</strong> liên tục tất cả các ngày trong năm kể cả ngày lễ, tết. Trường hợp cần gặp có thể liên hệ để được hỗ trợ ngoại giờ.
              </p>
              <p>
                <strong>Các ngày như:</strong> Mùng 1, Rằm, Tết. Trại cá hoạt động đến 19:00 Tối.
              </p>
            </div>
          </div>

          {/* Price Tables Accordion */}
          <div className="price-tables">
            <div className={`price-accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                <div className="accordion-icon">$</div>
                <h3>BẢNG GIÁ CÁ GIỐNG NHÓM 1</h3>
                <div className={`accordion-arrow ${openAccordion === 0 ? 'open' : ''}`}>▼</div>
              </div>
              {openAccordion === 0 && (
                <div className="accordion-content">
                  {priceData.group1.map((item, index) => (
                    <div key={index} className="price-item">
                      <div className="price-item-left">
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="price-item-dots"></div>
                      <div className="price-item-right">
                        <span className="price-value">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`price-accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                <div className="accordion-icon">$</div>
                <h3>BẢNG GIÁ CÁ GIỐNG NHÓM 2</h3>
                <div className={`accordion-arrow ${openAccordion === 1 ? 'open' : ''}`}>▼</div>
              </div>
              {openAccordion === 1 && (
                <div className="accordion-content">
                  {priceData.group2.map((item, index) => (
                    <div key={index} className="price-item">
                      <div className="price-item-left">
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="price-item-dots"></div>
                      <div className="price-item-right">
                        <span className="price-value">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`price-accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                <div className="accordion-icon">$</div>
                <h3>BẢNG GIÁ CÁ GIỐNG NHÓM 3</h3>
                <div className={`accordion-arrow ${openAccordion === 2 ? 'open' : ''}`}>▼</div>
              </div>
              {openAccordion === 2 && (
                <div className="accordion-content">
                  {priceData.group3.map((item, index) => (
                    <div key={index} className="price-item">
                      <div className="price-item-left">
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="price-item-dots"></div>
                      <div className="price-item-right">
                        <span className="price-value">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`price-accordion-item ${openAccordion === 3 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(3)}>
                <div className="accordion-icon">$</div>
                <h3 className="text-teal">BẢNG GIÁ CÁ GIỐNG NHÓM 4</h3>
                <div className={`accordion-arrow ${openAccordion === 3 ? 'open' : ''}`}>▼</div>
              </div>
              {openAccordion === 3 && (
                <div className="accordion-content">
                  {priceData.group4.map((item, index) => (
                    <div key={index} className="price-item">
                      <div className="price-item-left">
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="price-item-dots"></div>
                      <div className="price-item-right">
                        <span className="price-value">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`price-accordion-item ${openAccordion === 4 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(4)}>
                <div className="accordion-icon">$</div>
                <h3>BẢNG GIÁ CÁ CHÌNH HOA GIỐNG</h3>
                <div className={`accordion-arrow ${openAccordion === 4 ? 'open' : ''}`}>▼</div>
              </div>
              {openAccordion === 4 && (
                <div className="accordion-content">
                  {priceData.group5.map((item, index) => (
                    <div key={index} className="price-item">
                      <div className="price-item-left">
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="price-item-dots"></div>
                      <div className="price-item-right">
                        <span className="price-value">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Hỗ trợ 24/7</h3>
                <p>6h00 - 21h00 (T2 - CN)</p>
              </div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Pháp lý</h3>
                <p>Giấy kiểm dịch, hợp đồng đầy đủ</p>
              </div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                  <path d="M15 18H9"/>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                  <circle cx="17" cy="18" r="2"/>
                  <circle cx="7" cy="18" r="2"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Giao hàng</h3>
                <p>Hệ thống giao toàn quốc</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
