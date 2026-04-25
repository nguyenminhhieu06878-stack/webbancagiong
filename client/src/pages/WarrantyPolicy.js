import React from 'react';
import './SupportPage.css';

const WarrantyPolicy = () => {
  return (
    <div className="support-page">
      {/* Banner Section */}
      <section className="support-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">CHÍNH SÁCH BẢO HÀNH – ĐỔI TRẢ</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Hỗ trợ</span>
            <span className="separator">›</span>
            <span>Chính sách bảo hành - đổi trả</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="support-content">
        <div className="container">
          <div className="content-box">
            <h2 className="page-title">CHÍNH SÁCH BẢO HÀNH – ĐỔI TRẢ</h2>

            <div className="content-section">
              <h3>1. Thông tin đơn vị Bảo hành</h3>
              <ul>
                <li><strong>Tên đơn vị:</strong> Công Ty TNHH Thủy Sản Tùng Anh</li>
                <li><strong>Địa chỉ:</strong> Quốc Lộ 1A - Lộc Thái - Mỹ Châu - Phù Mỹ - Bình Định</li>
                <li><strong>Hotline:</strong> 076 999 9295</li>
                <li><strong>Người phụ trách kỹ thuật:</strong> 0977 34 7171</li>
                <li><strong>Thời gian hỗ trợ kỹ thuật:</strong></li>
              </ul>
            </div>

            <div className="content-section">
              <h3>2. Đối tượng áp dụng Bảo hành – đổi trả</h3>
              <p>Tất cả cá giống được cung cấp bởi Thủy Sản Tùng Anh, cụ thể đó:</p>
              <ul>
                <li>Phiếu giao hàng
                  <ul>
                    <li>Hóa đơn điện tử hoặc chứng từ đặt cọc</li>
                    <li>Biên bản nghiệm thu (Nếu có)</li>
                  </ul>
                </li>
                <li>Phát là hỗ trợ áp dụng trong vòng 24 – 48h sau khi nhận hàng, tùy vùng miền</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>3. Trường hợp được hỗ trợ Bảo hành – đổi trả</h3>
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Tình huống</th>
                    <th>Cách xử lý – Chính sách hỗ trả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cá giống chết trên 10% khi mới nhận (có video)</td>
                    <td>Bù cá lần sau theo tỉ lệ 1:1 (miễn phí giao tại trại hoặc bình phí ship)</td>
                  </tr>
                  <tr>
                    <td>Giống Cá sai, không đúng size</td>
                    <td>Hỗ trợ giao lại đúng giống / size hoặc trừ/đổi vào đơn tiếp theo</td>
                  </tr>
                  <tr>
                    <td>Bệnh, dị hình, di tật bất thường phát hiện sớm</td>
                    <td>Hướng dẫn xử lý – nếu do trại cá thì hỗ trợ đổi / bù ngay</td>
                  </tr>
                  <tr>
                    <td>Túi cá bị rò oxy, cá yếu do đóng gói</td>
                    <td>Ghi nhận và hỗ trợ gửi lại tùy số lượng và bằng chứng cụ thể</td>
                  </tr>
                </tbody>
              </table>
              <p className="note-text">
                <strong>Lưu ý:</strong> Tất cả tình huống phải được ghi hình, chụp ảnh rõ nét ngay khi mở túi cá, có biên bản giao hàng (có chành xe hoặc nhân viên giao hàng nếu có)
              </p>
            </div>

            <div className="content-section">
              <h3>4. Trường hợp không nằm trong chính sách Bảo hành – đổi trả</h3>
              <ul>
                <li>Cá chết do người nuôi không kỹ thuật hoặc gặp (ví dụ: thả sai thời điểm, xác nhất...)</li>
                <li>Không cung cấp được hình ảnh / video chứng minh sự cố</li>
                <li>Cá bị doanh bại tại tư ao, đã thả không thể</li>
                <li>Trễ báo lỗi cá quá thời hạn tối đa (xác nhận cá</li>
                <li>Tự ý đổi bao tự, thỏa lại các giống với người khác</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>5. Cách thức tiếp cận và Xử lý bảo hành</h3>
              <ul>
                <li><strong>Bước 1:</strong> Liên hệ hotline kỹ thuật (trong vòng 24 – 48h)</li>
                <li><strong>Bước 2:</strong> Cung cấp video mở bao – hình ảnh sự cố – số lượng cụ thể</li>
                <li><strong>Bước 3:</strong> Trại xác minh và phản hồi trong vòng 24h</li>
                <li><strong>Bước 4:</strong> Tiến hành bù / đổi hoặc hướng dẫn xử lý kịp theo</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>6. Cam kết của Thủy Sản Tùng Anh</h3>
              <ul>
                <li>Bảo hành đúng hạn, đúng giống – ưu tiên quyền lợi khách hàng lâu năm</li>
                <li>Không đùn đẩy trách nhiệm – sẵn sàng đồng hành giải quyết vấn đề từ trại</li>
                <li>Có chính sách ưu đãi cho nhanh trong vòng 24h với khách khu vực gần</li>
              </ul>
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

export default WarrantyPolicy;
