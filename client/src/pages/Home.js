import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFish, FaAward, FaShippingFast, FaHeadset, FaArrowRight, FaPhone, FaGlobe } from 'react-icons/fa';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [ornamentalProducts, setOrnamentalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    fetchFeaturedProducts();
    fetchOrnamentalProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get('/api/products?limit=6');
      setFeaturedProducts(response.data.slice(0, 6));
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrnamentalProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      // Filter by category_id = 5 (Cá Nuôi Cảnh)
      const ornamental = response.data.filter(product => product.category_id === 5).slice(0, 6);
      setOrnamentalProducts(ornamental);
    } catch (error) {
      console.error('Lỗi khi tải cá nuôi cảnh:', error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const scrollCarousel = (carouselId, direction) => {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    const cardWidth = 300 + 24; // card width + gap
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
    
    if (direction === 'left') {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Giống cá khỏe mạnh – kiểm dịch đầy đủ",
      answer: [
        "– Cá bơi khỏe – không trầy xước – không dị tật",
        "– Xử lý phòng bệnh trước khi xuất trại",
        "– Video kiểm tra trước khi đóng gói",
        "– Đóng túi 2 lớp + bơm oxy đầy – chống sốc",
        "– Có giấy kiểm dịch + số xuất trại kèm theo"
      ]
    },
    {
      question: "Đúng giống – đúng size – đủ số lượng",
      answer: [
        "Bảo hành – đổi trả:",
        "→ Cá chết do vận chuyển: hỗ trợ bù theo tỷ lệ, có bằng chứng hình ảnh."
      ]
    },
    {
      question: "Hỗ trợ kỹ thuật trước – trong – sau khi thả",
      answer: [
        "– Tư vấn chuẩn bị ao nuôi",
        "– Hướng dẫn thả giống đúng kỹ thuật",
        "– Theo dõi và hỗ trợ trong quá trình nuôi",
        "– Tư vấn xử lý khi có vấn đề phát sinh"
      ]
    },
    {
      question: "Tiêu chuẩn vận hành minh bạch",
      answer: [
        "– Quy trình sản xuất công khai, minh bạch",
        "– Có thể tham quan cơ sở sản xuất",
        "– Cung cấp đầy đủ giấy tờ pháp lý",
        "– Cam kết chất lượng bằng văn bản"
      ]
    }
  ];

  return (
    <div className="home">
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="banner-background">
          <div className="banner-content">
            <div className="banner-image">
              <img src="/panner.png" alt="Thuỷ sản Tùng Anh - Cá giống nước ngọt" className="main-banner-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section - Modern Design */}
      <section className="product-categories-modern">
        <div className="container">
          {/* Cá giống bán chạy */}
          <div className="category-section-modern">
            <div className="section-header-modern">
              <div className="section-title-content">
                <h2>Cá giống bán chạy</h2>
                <p>Những sản phẩm được khách hàng tin tưởng nhất</p>
              </div>
              <Link to="/products" className="explore-btn">
                Khám phá thêm
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
            <div className="carousel-container">
              <button className="carousel-nav-btn prev" onClick={() => scrollCarousel('bestseller-featured', 'left')}>
                <FaArrowRight style={{transform: 'rotate(180deg)'}} />
              </button>
              <div className="featured-products-carousel" id="bestseller-featured-carousel">
                {loading ? (
                  <div className="loading-message">Đang tải sản phẩm...</div>
                ) : featuredProducts.length > 0 ? (
                  featuredProducts.map(product => (
                    <div key={product.id} className="featured-product-card">
                      <div className="featured-product-image">
                        {product.image_url ? (
                          <img src={product.image_url} alt={product.name} />
                        ) : (
                          <div className="no-image">
                            <FaFish />
                          </div>
                        )}
                      </div>
                      <div className="featured-product-info">
                        <h3>{product.name}</h3>
                        <p className="product-category">{product.category_name}</p>
                        <p className="product-size">Kích thước: {product.size}</p>
                        <div className="featured-product-footer">
                          <span className="featured-product-price">{formatPrice(product.price)}/con</span>
                          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-products-message">Không có sản phẩm nào</div>
                )}
              </div>
              <button className="carousel-nav-btn next" onClick={() => scrollCarousel('bestseller-featured', 'right')}>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Cá nuôi cảnh */}
          <div className="category-section-modern">
            <div className="section-header-modern">
              <div className="section-title-content">
                <h2>Cá nuôi cảnh</h2>
                <p>Đa dạng các loại cá cảnh trang trí</p>
              </div>
              <Link to="/products" className="explore-btn">
                Khám phá thêm
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
            <div className="carousel-container">
              <button className="carousel-nav-btn prev" onClick={() => scrollCarousel('freshwater-featured', 'left')}>
                <FaArrowRight style={{transform: 'rotate(180deg)'}} />
              </button>
              <div className="featured-products-carousel" id="freshwater-featured-carousel">
                {loading ? (
                  <div className="loading-message">Đang tải sản phẩm...</div>
                ) : ornamentalProducts.length > 0 ? (
                  ornamentalProducts.map(product => (
                    <div key={product.id} className="featured-product-card">
                      <div className="featured-product-image">
                        {product.image_url ? (
                          <img src={product.image_url} alt={product.name} />
                        ) : (
                          <div className="no-image">
                            <FaFish />
                          </div>
                        )}
                      </div>
                      <div className="featured-product-info">
                        <h3>{product.name}</h3>
                        <p className="product-category">{product.category_name}</p>
                        <p className="product-size">Kích thước: {product.size}</p>
                        <div className="featured-product-footer">
                          <span className="featured-product-price">{formatPrice(product.price)}/con</span>
                          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-products-message">Không có sản phẩm nào</div>
                )}
              </div>
              <button className="carousel-nav-btn next" onClick={() => scrollCarousel('freshwater-featured', 'right')}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <div className="commitment-text">
              <div className="section-tag">CAM KẾT</div>
              <h2>Chất lượng giống cá?</h2>
              <p>Với hơn 40 năm trong nghề nuôi – sản xuất – cung ứng cá giống, Thuỷ Sản Tân Dũng cam kết:</p>
              
              <div className="commitment-details">
                <p>– Cung cấp giống chuẩn chất lượng, đúng loại, đúng size, đúng kỹ thuật.</p>
                <p>– Đồng hành kỹ thuật tận nơi – giảm rủi ro đầu vào – tăng hiệu quả nuôi.</p>
                <p>– Đảm bảo minh bạch, rõ ràng, có hồ sơ kiểm dịch, video, kỹ thuật đi kèm.</p>
                <p className="highlight">"Một mẻ giống không chuẩn = Rủi ro cả vụ nuôi"</p>
                <p>Vì vậy, chúng tôi lấp bản cam kết này để khẳng định trách nhiệm & quyền lợi của khách hàng.</p>
              </div>
              
              <Link to="/contact" className="btn btn-primary btn-lg commitment-btn">
                ĐẶT HÀNG NGAY
              </Link>
            </div>
            
            <div className="commitment-faq">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <span className="faq-icon">?</span>
                    <span>{faq.question}</span>
                    <FaArrowRight className={`faq-arrow ${openFaq === index ? 'rotated' : ''}`} />
                  </div>
                  {openFaq === index && (
                    <div className="faq-answer">
                      {faq.answer.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag">Ý KIẾN KHÁCH HÀNG</div>
            <h2>Khách hàng nói gì về chúng tôi?</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <span>★★★★★</span>
              </div>
              <p className="testimonial-text">
                "Tôi từng làm đại lý cho vài trại. Nhưng Tân Dũng là nơi đầu tiên hỗ trợ kỹ thuật cả cho khách của tôi. Họ quy slide báo giá – hỗ sở hợp tác rất chuyên nghiệp. Mỗi lúa tôi nhập từ 10-30 nghìn con, không lo thiếu giống."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/60/60" alt="Đại Lý Nam" />
                </div>
                <div className="author-info">
                  <h4>ĐẠI LÝ NAM</h4>
                  <p>ĐỐI TÁC PHÂN PHỐI TẠI TÂY NGUYÊN</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                <span>★★★★★</span>
              </div>
              <p className="testimonial-text">
                "Gia đình tôi hay tổ chức mua cá phóng sanh. Lần này thử đặt 3.000 con cá mè – bên Tân Dũng có giấy kiểm dịch rõ ràng, cá khỏe – về vần bơi mạnh. Thả ra sông thấy yên tâm vì làm việc đúng tâm – đúng cách."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/60/60" alt="Gia đình chú Trung" />
                </div>
                <div className="author-info">
                  <h4>GIA ĐÌNH CHÚ TRUNG</h4>
                  <p>NUÔi CÁ PHÓNG SANH Ở QUẢNG TRỊ</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                <span>★★★★★</span>
              </div>
              <p className="testimonial-text">
                "HTX tụi tôi thường khó tìm nguồn giống số lượng lớn mà đảm bảo. Tân Dũng có thể hỗ trợ cả về số theo 2 đợt, có hóa đơn – kiểm dịch – hợp đồng đầy đủ. Cá tỏ vẻn đều hài lòng vì tỷ lệ sống đạt trên 95%."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/60/60" alt="Cô Hạnh" />
                </div>
                <div className="author-info">
                  <h4>CÔ HẠNH</h4>
                  <p>HỢP TÁC XÃ NUÔI CÁ Ở HƯNG YÊN</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-navigation">
            <div className="nav-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="knowledge-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag">NƠI CHIA SẺ CÁC KINH NGHIỆM</div>
            <h2>Kiến thức & kỹ thuật nuôi</h2>
          </div>
          
          <div className="knowledge-grid">
            <Link to="/techniques/2" className="knowledge-card">
              <div className="knowledge-image">
                <img src="https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-28-300x225.png" alt="Kỹ thuật nuôi cá chình" />
                <div className="knowledge-date">
                  <span className="day">25</span>
                  <span className="month">Th1</span>
                </div>
              </div>
              <div className="knowledge-content">
                <h3>Kỹ thuật nuôi cá chình trong bể xi măng bà con cần nắm</h3>
                <p>Từ việc chọn địa điểm, xây dựng bể nuôi, đến chăm sóc hàng ngày và phòng bệnh, mọi bước đều quan trọng để đạt được hiệu suất tốt nhất trong kỹ thuật...</p>
              </div>
            </Link>
            
            <Link to="/techniques/3" className="knowledge-card">
              <div className="knowledge-image">
                <img src="https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-27-300x225.png" alt="Cá trắm có có để nuôi không" />
                <div className="knowledge-date">
                  <span className="day">24</span>
                  <span className="month">Th1</span>
                </div>
              </div>
              <div className="knowledge-content">
                <h3>Cá trắm có có để nuôi không? Tìm hiểu ngay</h3>
                <p>Cá trắm có là một loại cá nước ngọt, có kích thước lớn, thịt thơm ngon, giá trị dinh dưỡng cao. Cá trắm có được nuôi phổ biến ở nhiều địa phương trên cả nước...</p>
              </div>
            </Link>
            
            <Link to="/techniques/4" className="knowledge-card">
              <div className="knowledge-image">
                <img src="https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-24-300x225.png" alt="Chuẩn bị ao nuôi cá tra" />
                <div className="knowledge-date">
                  <span className="day">23</span>
                  <span className="month">Th1</span>
                </div>
              </div>
              <div className="knowledge-content">
                <h3>Chuẩn bị ao nuôi cá tra thương phẩm giúp đạt năng suất cao</h3>
                <p>Nuôi cá tra là một ngành nghề đầy thách thức nhưng cũng mang lại những cơ hội kinh doanh lớn khi được thực hiện đúng cách. Việc chuẩn bị ao môi trường ao nu...</p>
              </div>
            </Link>
          </div>
          
          <div className="knowledge-footer">
            <Link to="/techniques-list" className="btn btn-outline">
              Trải nghiệm thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <div className="section-tag">VÌ SAO CHỌN THUỶ SẢN TÙNG ANH?</div>
              <h2>Làm lớn – nuôi nhiều – không thể dễ rủi ro bắt đầu từ con giống</h2>
              <p>Đối tác tin cậy và đồng hành cùng các Hộ nuôi nhỏ, trang trại nuôi thương phẩm cho đến mô hình nuôi Hợp tác xã & Doanh nghiệp vừa và lớn.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3>Hệ thống ao ương dưỡng giống</h3>
                    <p>Khu ao ương dưỡng – bể lọc – bể dưỡng: Phân tách theo từng dòng cá giống</p>
                    <p>Phân khu kỹ thuật: Xử lý nước, tiêm phòng, chọn lọc giống cá</p>
                    <p>Bể lắng – hệ thống lọc tuần hoàn: Kiểm soát chất lượng đầu vào nghiêm ngặt</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3>Năng lực cung ứng toàn quốc</h3>
                    <p>Tổng sản lượng giống mỗi tháng > 3.000.000 con</p>
                    <p>Chúng loại giống đang cung ứng > 40 loại giống cá nước ngọt</p>
                    <p>Hệ thống đại lý chính tại Đồng Nai, Đồng Tháp, Đắk Lắk, Bắc Ninh</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="why-choose-image">
              <div className="image-container">
                <img src="/noibat.png" alt="Đội ngũ chuyên nghiệp Thuỷ sản Tùng Anh" className="team-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Năm kinh nghiệm</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Khách hàng tin tưởng</p>
            </div>
            <div className="stat-item">
              <h3>60+</h3>
              <p>Loại cá giống</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Tỷ lệ sống</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Bạn cần tư vấn về cá giống?</h2>
            <p>Liên hệ ngay với chúng tôi để được tư vấn miễn phí về các loại cá giống phù hợp</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;