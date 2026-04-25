import React from 'react';
import './SupportPage.css';

const BuyingGuide = () => {
  return (
    <div className="support-page">
      {/* Banner Section */}
      <section className="support-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">HƯỚNG DẪN KIỂM TRA CÁ KHI NHẬN HÀNG</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Hỗ trợ</span>
            <span className="separator">›</span>
            <span>Hướng dẫn kiểm tra cá khi nhận</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="support-content">
        <div className="container">
          <div className="content-box">
            <h2 className="page-title">HƯỚNG DẪN KIỂM TRA CÁ KHI NHẬN HÀNG</h2>

            <div className="content-section">
              <h3>I. MỤC ĐÍCH</h3>
              <p>Chính sách này giúp khách hàng kiểm tra chất lượng cá giống ngay khi nhận hàng, đảm bảo:</p>
              <ul>
                <li>Giống đúng loại, đúng size, đúng số lượng.</li>
                <li>Cá khỏe mạnh, không bị tổn thương hoặc suy yếu do vận chuyển.</li>
                <li>Hạn chế rủi ro khi thả và hỗ trợ xử lý đổi trả kịp thời nếu có vấn đề.</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>II. CÁC BƯỚC KIỂM TRA BẮT BUỘC KHI NHẬN CÁ</h3>

              <h4>1. Kiểm tra bao bì & môi trường vận chuyển</h4>
              <ul>
                <li>Bao nilon còn căng khí, không xì hơi, không rò nước.</li>
                <li>Oxy đầy đủ – nước trong bao mát, không bị nóng.</li>
              </ul>

              <h4>2. Kiểm tra số lượng & size giống</h4>
              <ul>
                <li>Đếm số bộ – đối chiếu với <strong>phiếu giao hàng</strong>.</li>
                <li>Kích cỡ cá cho phép sai số ±10% so với đơn hàng đã xác nhận.</li>
              </ul>

              <h4>3. Kiểm tra sức khỏe cá giống</h4>
              <ul>
                <li>Cá bơi đều, khỏe mạnh – không nổi đầu, không lờ đờ.</li>
                <li>Không bị trầy xước, không đốm trắng, không đỏ thân, không dấu hiệu nấm.</li>
                <li>Chấp nhận chết tỉ lệ 1–2 con/túi. Nếu vượt quá 5%, báo ngay cho kỹ thuật.</li>
              </ul>

              <h4>4. Chụp ảnh/video làm bằng chứng</h4>
              <ul>
                <li>Toàn bộ túi cá – zoom kỹ nếu cá bất thường.</li>
                <li>Bắt buộc có ảnh/video nếu muốn phản hồi hoặc yêu cầu hỗ trợ.</li>
              </ul>

              <h4>5. Xác nhận nghiệm thu</h4>
              <ul>
                <li>Điền vào <strong>Phiếu nghiệm thu giao hàng</strong> và ký xác nhận hai bên.</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>III. LƯU Ý QUAN TRỌNG</h3>
              <ul>
                <li>Tuyệt đối không xả bao hoặc thả cá ra ao trước khi kiểm tra xong & chụp ảnh.</li>
                <li>Phản hồi mọi vấn đề trong vòng 2 giờ kể từ khi nhận cá.</li>
                <li>Gửi hình ảnh qua Zalo 0977 347 171 để được xác minh và hỗ trợ đổi trả nếu cần.</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>IV. THÔNG TIN HỖ TRỢ</h3>
              <ul>
                <li><strong>Zalo kỹ thuật viên:</strong> 0977 347 171</li>
                <li><strong>Email:</strong> thuysantandung@gmail.com</li>
                <li><strong>Website:</strong> thuysantandung.vn</li>
              </ul>
              <p><strong>Địa chỉ:</strong> QL1A, thôn Lộc Thái, xã Mỹ Châu, huyện Phù Mỹ, tỉnh Bình Định</p>
            </div>

            <div className="support-footer">
              <div className="support-item">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
                  </svg>
                </div>
                <div className="support-text">
                  <h4>Hỗ trợ 24/7</h4>
                  <p>6h00 - 21h00 (T2 - CN)</p>
                </div>
              </div>
              <div className="support-item">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                  </svg>
                </div>
                <div className="support-text">
                  <h4>Pháp lý</h4>
                  <p>Giấy kiểm dịch, hợp đồng đầy đủ</p>
                </div>
              </div>
              <div className="support-item">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                    <path d="M15 18H9"/>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                    <circle cx="17" cy="18" r="2"/>
                    <circle cx="7" cy="18" r="2"/>
                  </svg>
                </div>
                <div className="support-text">
                  <h4>Giao hàng</h4>
                  <p>Hệ thống giao toàn quốc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyingGuide;
