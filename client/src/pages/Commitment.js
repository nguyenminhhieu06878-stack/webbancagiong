import React from 'react';
import './Commitment.css';

const Commitment = () => {
  return (
    <div className="commitment-page">
      {/* Banner Section */}
      <section className="commitment-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">CAM KẾT TIÊU CHUẨN CHẤT LƯỢNG GIỐNG CÁ</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Cam kết tiêu chuẩn chất lượng giống cá</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="commitment-content">
        <div className="content-box">
          <div className="content-inner">
            <h2 className="main-title">CAM KẾT TIÊU CHUẨN CHẤT LƯỢNG GIỐNG CÁ</h2>

            {/* Section 1 */}
            <div className="content-section">
              <h3>1. Mục đích cam kết</h3>
              <p>
                Với hơn 40 năm trong nghề nuôi - sản xuất - cung ứng cá giống, Thuỷ Sản Tân Dũng cam kết:
              </p>
              <ul>
                <li>Cung cấp giống <strong>chuẩn chất lượng</strong>, đúng loại, đúng size, đúng kỹ thuật.</li>
                <li><strong>Đồng hành kỹ thuật tận nơi</strong> - giảm rủi ro thả vào - tăng hiệu quả nuôi.</li>
                <li><strong>Đảm bảo minh bạch về giống</strong> cá hộ có kiểm dịch, nhãn, sự thuật đi kèm.</li>
              </ul>
              <p className="quote">
                <em>"Một mét giống không chuẩn = Bỏ cả vụ nuôi"</em>
              </p>
              <p>
                Vì vậy, chúng tôi luôn kiểm soát vật cư <strong>từ khâu định dạng đến xuất nhập</strong> kỹ của khách hàng.
              </p>
            </div>

            {/* Section 2 */}
            <div className="content-section">
              <h3>2. Nội dung cam kết cụ thể</h3>
              
              <h4>CAM KẾT 1: Giống cá khỏe mạnh – kiểm dịch đầy đủ</h4>
              <ul>
                <li>Cá loại tốt - không thấy xuất - không dị tật</li>
                <li>Xử lý phòng bệnh trước khi xuất trại</li>
                <li>V diện kiểm tra trước khi đóng gói</li>
                <li>Đóng túi 2 lớp + bơm oxy dầy - phồng các</li>
                <li>Có giấy kiểm dịch + sổ xuất trại kèm theo</li>
              </ul>
              <p className="warranty"><strong>Bảo hành – đổi trả:</strong></p>
              <p>Cá chết do vận chuyển hỏi túi khi chưa tỉ lệ, có bằng chứng hình ảnh.</p>

              <h4>CAM KẾT 2: Đúng giống – đúng size – đủ số lượng</h4>
              <ul>
                <li>Giao đúng loại - không trộn giống - không thay đổi sản khi chưa xác nhận</li>
                <li>Có ảnh / video xác nhận trước khi giao</li>
                <li>Size đồng đều, hạn / Trung / Lớn theo yêu cầu</li>
                <li>Cân rõ số lượng, tính giống, sẵn kiểm tra lại cá</li>
              </ul>
              <p className="warranty"><strong>Bảo hành – đổi trả:</strong></p>
              <p>Hiếu giống sai / thiếu hỏi số lượng - trừ vận chuyển đến sau.</p>

              <h4>CAM KẾT 3: Hỗ trợ kỹ thuật trước – trong – sau khi thả</h4>
              <ul>
                <li>Tư vấn chọn giống theo mùa vụ - điều kiện - mô hình</li>
                <li>Gửi tài liệu TTQP kỹ thuật + checklist xử lý vốc</li>
                <li>Có video hướng dẫn cách thả, xử lý stress cá</li>
                <li>Bổ trí kỹ thuật viên hỗ trợ nếu yêu cầu theo vùng</li>
              </ul>
            </div>

            {/* Section 3 - Table */}
            <div className="content-section">
              <h3>3. Tiêu chuẩn vận hành minh bạch</h3>
              
              <div className="comparison-table">
                <div className="table-row table-header">
                  <div className="table-cell">Tiêu chí</div>
                  <div className="table-cell">Thuỷ Sản Tân Dũng cam kết</div>
                </div>
                
                <div className="table-row">
                  <div className="table-cell">Tỷ lệ sống khi vận chuyển</div>
                  <div className="table-cell">≥ 95% (giao tận nơi - đóng gói kỹ thuật)</div>
                </div>

                <div className="table-row">
                  <div className="table-cell">Tư vấn chọn giống theo mùa vụ</div>
                  <div className="table-cell">Cá nhân hóa theo từng hộ nuôi</div>
                </div>

                <div className="table-row">
                  <div className="table-cell">Đội ngũ kỹ thuật hỗ trợ sau bán</div>
                  <div className="table-cell">24/7 qua Zalo – có nhóm kỹ thuật theo khu vực</div>
                </div>

                <div className="table-row">
                  <div className="table-cell">Bảo hành sự cố đầu vào</div>
                  <div className="table-cell">Có – hỗ trợ đổi / bù hoặc trả đổi sau</div>
                </div>

                <div className="table-row">
                  <div className="table-cell">Giống – size – số lượng minh bạch</div>
                  <div className="table-cell">Có ảnh / video xác nhận trước khi giao</div>
                </div>
              </div>
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

export default Commitment;
