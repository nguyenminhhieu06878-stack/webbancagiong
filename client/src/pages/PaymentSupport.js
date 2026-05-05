import React from 'react';
import './SupportPage.css';

const PaymentSupport = () => {
  return (
    <div className="support-page">
      {/* Banner Section */}
      <section className="support-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">CHÍNH SÁCH THANH TOÁN & HỖ TRỢ KỸ THUẬT</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Hỗ trợ</span>
            <span className="separator">›</span>
            <span>Thanh toán & hỗ trợ kỹ thuật</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="support-content">
        <div className="container">
          <div className="content-box">
            <h2 className="page-title">CHÍNH SÁCH THANH TOÁN & HỖ TRỢ KỸ THUẬT</h2>

            <div className="content-section">
              <h3>I. CHÍNH SÁCH THANH TOÁN</h3>
              
              <h4>1. Hình thức thanh toán</h4>
              
              <p><strong>1.1. Chuyển khoản trước (ưu tiên):</strong></p>
              <ul>
                <li>Áp dụng cho các đơn hàng tính xa hoặc cần gửi trước hàng tình thời</li>
                <li>Giảm 5% đơn hàng (tuân số mức)</li>
              </ul>
              <p className="sub-list-title">Thông tin chuyển khoản:</p>
              <ul className="sub-list">
                <li>Thụ hưởng: Phạm Thị Hạnh</li>
                <li>Hình ảnh/video gửng Phục Vỹ</li>
                <li>Liên hệ hàng tư hỗ</li>
              </ul>

              <p><strong>1.2. Thanh toán khi nhận hàng (COD):</strong></p>
              <ul>
                <li>Áp dụng khi khách hàng 50 km, Bình Định – Phú Yên – Quảng Ngãi hoặc các điểm gần có đại lý</li>
                <li>Khách có thể đặt cọc trước 10-20% số cá, chuyển khi giao hàng hoặc yêu cầu</li>
              </ul>

              <p><strong>1.3. Thanh toán theo hợp đồng dài hạng (Hỗ chành nghiệp):</strong></p>
              <ul>
                <li>Thanh toán đối khác thỏa trong hợp đồng [COI]</li>
                <li>Cá đây đổi theo đơn VAT và trả trong tâm thạn</li>
              </ul>

              <h4>2. Thông tin chuyển khoản</h4>
              <ul>
                <li>Chủ tài khoản: Công Ty TNHH Thủy Sản Tùng Anh</li>
                <li>Ngân hàng: Ngân hàng TMCP Á Châu – PGD Bông Sơn</li>
                <li>Số tài khoản: 0566677778</li>
                <li>Nội dung chuyển khoản: [Tên khách] – [Loại giống] – [SĐT hoặc Zalo]</li>
              </ul>
              <p className="note-text">
                <strong>Xác nhận:</strong> Hãng vào khi chuyển khoản: 089 958 9259 (Zalo/Call)
              </p>

              <h4>3. Quy định giữ / đường giống</h4>
              <ul>
                <li>Chi giữ đường giống khi có nước cọc mới tính ra thể</li>
                <li>Thời gian giữ đường giống tối đa 3-5 ngày tùy lớn</li>
                <li>Thay đổi lên/hủy giống vui lòng liên hệ ít nhất 24-48h để đạm tối tốn cho sản vật</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>II. CHÍNH SÁCH HỖ TRỢ KỸ THUẬT</h3>
              <p>Chúng tôi cam kết, hướng dẫn khách hàng nuôi cá nội công</p>
              <p className="sub-text">Hỗ trợ kỹ thuật được thực hiện theo 3 giai đoạn</p>

              <h4>1. Trước khi giao hàng</h4>
              <p>Khách gọi xin cơ phối, kỹ thuật viên sẽ tư vấn chọn giống, tập kiến:</p>
              <ul>
                <li>Đặc tính cá 30 cá</li>
                <li>Nguồn nước hợp lý</li>
                <li>Mùa vụ và mục tiêu nuôi (bán thương phẩm / phóng sinh / dùng cá 3d)</li>
              </ul>
              <p className="sub-text">Gửi tài liệu kỹ thuật PDF gồm:</p>
              <ul className="sub-list">
                <li>Cách xử lý nước bao đầu</li>
                <li>Kỹ thuật thả giống và chăm sóc</li>
                <li>Chế độ ăn đường, mức ăn theo giai đoạn phòng bệnh vận bình</li>
              </ul>

              <h4>2. Trong quá trình nuôi</h4>
              <p>Hỗ trợ qua Zalo kỹ thuật viên (hàng thứ tư, tụy, hỏi, vấn):</p>
              <ul>
                <li>Tư vấn khi cá có dấu hiệu bất thường</li>
                <li>Hướng dẫn xử lý cá đỏ bao, độc do, nổi dầu</li>
                <li>Gọi tư/ý nhận, kiểm tra nước đổ, 24/0 mỗi khẩng</li>
              </ul>
              <p className="sub-list-item">
                📌 Gửi video hoặc ảnh tình trạng cá thực tế để có tư vấn chính xác<br/>
                📌 Cập nhật nội dung = thời điểm tình hình phát hiện theo lộng
              </p>

              <h4>3. Sau khi giao hàng</h4>
              <p>Cần tài hỗ trợ đến khi ao đã đạt sau khi:</p>
              <ul>
                <li>Khách có thể gọi bình viên 24/7 (cao điểm có thể chậm hồi âm 30-60 phút)</li>
                <li>Hỗ trợ trực tiếp tại địa điểm cần thiết (Miễn phí trong bán kính 20km hàng đơn ~nhận đặt)</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>THÔNG TIN LIÊN HỆ HỖ TRỢ</h3>
              <ul>
                <li><strong>Zalo bán hàng:</strong> 089 958 9259</li>
                <li><strong>Zalo kỹ thuật viên:</strong> 089 958 9259</li>
                <li><strong>Email:</strong> anhkien051204@gmail.com</li>
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

export default PaymentSupport;
