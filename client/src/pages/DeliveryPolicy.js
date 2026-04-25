import React from 'react';
import './SupportPage.css';

const DeliveryPolicy = () => {
  return (
    <div className="support-page">
      {/* Banner Section */}
      <section className="support-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">CHÍNH SÁCH GIAO HÀNG</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Hỗ trợ</span>
            <span className="separator">›</span>
            <span>Chính sách giao hàng</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="support-content">
        <div className="container">
          <div className="content-box">
            <h2 className="page-title">CHÍNH SÁCH GIAO HÀNG</h2>

            <div className="content-section">
              <h3>1. Thông tin đơn vị Cung cấp</h3>
              <ul>
                <li><strong>Tên đơn vị:</strong> Công Ty TNHH Thủy Sản Tùng Anh</li>
                <li><strong>Địa chỉ:</strong> Quốc Lộ 1A - Lộc Thái - Mỹ Châu - Phù Mỹ - Bình Định</li>
                <li><strong>Hotline:</strong> 076 999 9295 - 0977 34 7171</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>2. Hình thức và Phạm vi giao hàng</h3>
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>NỘI DUNG</th>
                    <th>CHI TIẾT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PHƯƠNG THỨC GIAO</td>
                    <td>GIAO TẬN NHÀ / GIAO TẠI CHÀNH XE / NHẬN TẠI TRẠI</td>
                  </tr>
                  <tr>
                    <td>PHẠM VI GIAO HÀNG</td>
                    <td>TOÀN QUỐC – THỐNG QUẢN ĐỘ TÁC VẬN CHI/TÍN NHỊU TẬU BẢY XE KHÁCH, XE TẢI, CHÀNH XE</td>
                  </tr>
                  <tr>
                    <td>ĐÓNG GÓI VẬN CHUYỂN</td>
                    <td>TÚI NILON 2 – 4 LỚP / THÙNG XỐP / CỌNH / THÙNG / BAO LƯỚ TỰY ĐƠN</td>
                  </tr>
                  <tr>
                    <td>LƯU Ý KHI GỬI</td>
                    <td>Túi có quyền đổu chính sách giao hàng nếu khối bất đầu hoặc đơn hàng vận chuyển</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="content-section">
              <h3>3. Thời gian giao hàng</h3>
              <ul>
                <li>Khu vực miền Trung – Khoảng 1 – 2 ngày</li>
                <li>Khu vực Miền Bắc 2 – 3 ngày tùy theo giống cá điều kiện vận chuyển</li>
                <li>Liên hệ trước khi đặt hàng nếu có đơn khẩn hàng</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>4. Phí vận chuyển</h3>
              <ul>
                <li>Miễn phí giao nội vùng với đơn hàng dưới 20 km (trừ 1.000 con tùy giống)</li>
                <li>Phí từ km ra 50.000 – 350.000đ tùy tùy loại giống & đơn điểm giao</li>
                <li>Báo phí vận chuyển chính xác khi tư vấn đơn hàng</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>5. Trách nhiệm Hai bên trong quá trình giao hàng</h3>
              
              <h4>5.1 Trách nhiệm của Thủy Sản Tùng Anh</h4>
              <ul>
                <li>Thông báo trước lịch giao ít nhất 1 ngày cho khách hàng</li>
                <li>Hướng dẫn kiểm tra cá ngay khi nhận- tính khác, số lượng, size cá</li>
                <li>Đảm bảo gọi đúng đơn hàng đã thỏa kỹ thuật, oxy đủ, cá khỏe mạnh khi rời trại</li>
              </ul>

              <h4>5.2 Trách nhiệm của Khách hàng</h4>
              <ul>
                <li>Có mặt đúng giờ để nhận hàng, kiểm tra ngay tại điểm giao</li>
                <li>Ghi hình ảnh / nếu có bất thường xây ra khi nhận- (số vỏ, cá chết, sai số lượng).</li>
                <li>Ký nhận phiếu giao hàng/ biên nghiệm thu sau khi kiểm hàng</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>6. Các trường hợp hỗ trợ – Xử lý sự cố giao hàng</h3>
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Tình huống</th>
                    <th>Cách xử lý</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cá chết quá số đồng giao / vận chuyển</td>
                    <td>Hỗ trợ đổi / bù giống theo tỉ lệ cam kết trước (Tùy loại hình)</td>
                  </tr>
                  <tr>
                    <td>Sai giống, sai size</td>
                    <td>Trả lại vận đổi miễn phí (giao lại hàng đúng khi yêu cầu)</td>
                  </tr>
                  <tr>
                    <td>Thời giao hàng do khách không nhận được kịp</td>
                    <td>Phạn lại lần – có thể kénh phí vận vận chuyển lại</td>
                  </tr>
                  <tr>
                    <td>Giao trễ do yếu tố bất khả kháng</td>
                    <td>Hỗ trợ tính đúng điều chính sửa và thống báo trước & mất 24h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="content-section">
              <h3>7. Điều khoản khác</h3>
              <ul>
                <li>Chính sách giao hàng này có thể sửa đổi tùy vào tình hình thực tế đơn hàng phát sinh tại ngày</li>
                <li>Chúng tôi luôn tỉ Mối mọi giống khách hàng nhận = Rủi ro về vỏ nước</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPolicy;
