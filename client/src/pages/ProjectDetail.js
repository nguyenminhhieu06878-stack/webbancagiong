import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset selected image when id changes
  useEffect(() => {
    setSelectedImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  const project = {
    id: 1,
    title: 'Thả Cá Phóng Sanh',
    organizer: 'Thiện Tịnh Hộ',
    type: 'Hoạt động thiện nguyện - Phóng sanh cá',
    date: 'Tháng 07/2025',
    quantity: '2.000 con',
    location: 'Biển Sông Thủ Đức - TP.HCM',
    scope: 'Gồm cá chép, cá rô phi, cá trắm... Đảm bảo đích kỳ thuật trước khi thả',
    description: `Dự án "Thả Cá Phóng Sanh" do Thiện Tịnh Hộ tổ chức mang thông điệp yêu thương và lan tỏa lòng từ bi đến muôn loài. Mỗi cá thể được phóng sanh không chỉ là một hành động của lòng nhân ái mà còn là lời nhắc nhở về nhân quả và lòng vị tha.

Buổi lễ được thực hiện trang nghiêm, kết hợp tụng kinh nguyện, niệm Phật và chia sẻ ý nghĩa phóng sanh. Các loại cá được chọn đều phù hợp với điều kiện sống tự nhiên tại sông, đảm bảo không xâm hại hệ sinh thái.

Chương trình đã nhận được sự hưởng ứng nhiệt tình từ cộng đồng, tạm thời làm, sẽ góp phần chuyển hóa xã hội lòng từ hơn.`,
    images: [
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
      'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png',
    ]
  };

  const relatedProjects = [
    { id: 2, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
    { id: 3, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
    { id: 4, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
    { id: 5, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
    { id: 6, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
    { id: 7, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png' },
  ];

  return (
    <div className="project-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span className="separator">›</span>
            <Link to="/projects">Thả cá phóng sanh</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="project-detail-content">
        <div className="container">
          <div className="detail-grid">
            {/* Left Column - Gallery */}
            <div className="gallery-column">
              <div className="main-image">
                <img src={project.images[selectedImage]} alt={project.title} />
              </div>
              <div className="thumbnail-grid">
                {project.images.slice(0, 4).map((img, index) => (
                  <div 
                    key={index} 
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${project.title} ${index + 1}`} />
                    {index === 3 && project.images.length > 4 && (
                      <div className="more-overlay">
                        +{project.images.length - 4}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="info-column">
              <div className="info-box">
                <h1 className="project-title-detail">THÔNG TIN DỰ ÁN</h1>
                
                <div className="info-item">
                  <span className="info-label">• CHỦ TRÌ TỔ CHỨC:</span>
                  <span className="info-value">{project.organizer}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">• LOẠI DỰ ÁN:</span>
                  <span className="info-value">{project.type}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">• THỜI GIAN THỰC HIỆN:</span>
                  <span className="info-value">{project.date}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">• SỐ LƯỢNG CÁ PHÓNG SANH:</span>
                  <span className="info-value">{project.quantity}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">• ĐỊA ĐIỂM:</span>
                  <span className="info-value">{project.location}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">• QUY MÔ:</span>
                  <span className="info-value">{project.scope}</span>
                </div>
              </div>

              <div className="description-box">
                <h2>GIỚI THIỆU DỰ ÁN</h2>
                <p>{project.description}</p>
                <button className="view-all-btn">XEM TẤT CẢ →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="related-projects">
        <div className="container">
          <h2 className="section-title">DỰ ÁN LIÊN QUAN</h2>
          <div className="related-grid">
            {relatedProjects.map(relatedProject => (
              <Link 
                key={relatedProject.id} 
                to={`/projects/${relatedProject.id}`}
                className="related-card"
              >
                <div className="related-image">
                  <img src={relatedProject.image} alt={relatedProject.title} />
                  <div className="related-overlay">
                    <h3>{relatedProject.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
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

export default ProjectDetail;
