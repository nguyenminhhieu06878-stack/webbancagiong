import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Techniques.css';

const Techniques = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const articlesData = {
    1: {
      id: 1,
      title: 'Kỹ thuật nuôi cá Chim Trắng giống',
      date: '01/12/2025',
      views: 423,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-26-300x225.png',
      content: 'Kỹ Thuật Nuôi Cá Chim Trắng Giống Hiệu Quả – Tăng Trưởng Nhanh, Ít Rủi Ro',
      description: 'Cá chim trắng giống là loại cá nước ngọt dễ nuôi, tốc độ lớn nhanh và có dầu ra rất ổn định quanh năm. Nhờ đặc tính ăn tạp – thích nghi tốt – ít bệnh, cá chim trắng trở thành lựa chọn hàng đầu cho người mới bắt đầu hoặc những phần vụ trang trại quy mô lớn.',
      sections: [
        {
          title: 'Cá Chim Trắng Giống Là Gì? Vì Sao Nên Nuôi?',
          subsections: [
            'Ưu điểm nổi bật của cá chim trắng giống',
            'Điều Kiện Ao Nuôi Cá Chim Trắng Giống',
            'Diện tích – Độ sâu – thiết kế ao',
            'Thông số nước lý tưởng',
            'Xử lý ao trước khi thả giống'
          ]
        },
        {
          title: 'Chọn Cá Chim Trắng Giống Chất Lượng',
          subsections: [
            'Tiêu chuẩn cá giống tốt',
            'Mật độ thả giống chuẩn',
            'Nguồn cung cấp giống uy tín'
          ]
        },
        {
          title: 'Kỹ Thuật Chăm Sóc & Cho Ăn Cá Chim Trắng Giống',
          subsections: [
            'Thức ăn theo từng giai đoạn',
            'Tần suất & lượng ăn',
            'Quản lý chất lượng nước'
          ]
        }
      ]
    },
    2: {
      id: 2,
      title: 'Kỹ thuật nuôi cá chình trong bể xi măng bà con cần nắm',
      date: '25/01/2025',
      views: 356,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-28-300x225.png',
      content: 'Hướng Dẫn Chi Tiết Kỹ Thuật Nuôi Cá Chình Trong Bể Xi Măng',
      description: 'Từ việc chọn địa điểm, xây dựng bể nuôi, đến chăm sóc hàng ngày và phòng bệnh, mọi thứ đều được hướng dẫn chi tiết để đạt được hiệu suất tốt nhất trong kỹ thuật nuôi cá chình trong bể xi măng. Phương pháp này giúp tiết kiệm diện tích và dễ quản lý.',
      sections: [
        {
          title: 'Chuẩn Bị Bể Xi Măng Nuôi Cá Chình',
          subsections: [
            'Kích thước bể phù hợp',
            'Xử lý bể mới trước khi thả giống',
            'Hệ thống tuần hoàn nước',
            'Thiết bị cần thiết'
          ]
        },
        {
          title: 'Chọn Giống Cá Chình Chất Lượng',
          subsections: [
            'Tiêu chuẩn con giống khỏe mạnh',
            'Nguồn giống uy tín',
            'Mật độ thả giống hợp lý'
          ]
        },
        {
          title: 'Chăm Sóc và Quản Lý',
          subsections: [
            'Chế độ dinh dưỡng',
            'Kiểm soát chất lượng nước',
            'Phòng và trị bệnh'
          ]
        }
      ]
    },
    3: {
      id: 3,
      title: 'Cá trắm cỏ có dễ nuôi không? Tìm hiểu ngay',
      date: '24/01/2025',
      views: 289,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-27-300x225.png',
      content: 'Cá Trắm Cỏ - Loại Cá Dễ Nuôi, Hiệu Quả Kinh Tế Cao',
      description: 'Cá trắm cỏ là một loại cá nước ngọt, có kích thước lớn, ăn thơm ngon, giá trị dinh dưỡng cao. Cá trắm cỏ được nuôi phổ biến ở nhiều địa phương trên cả nước với chi phí thấp và hiệu quả cao. Đây là lựa chọn tốt cho người mới bắt đầu.',
      sections: [
        {
          title: 'Đặc Điểm Cá Trắm Cỏ',
          subsections: [
            'Hình thái đặc trưng',
            'Thói quen sinh sống và ăn uống',
            'Giá trị dinh dưỡng và kinh tế'
          ]
        },
        {
          title: 'Kỹ Thuật Nuôi Cá Trắm Cỏ',
          subsections: [
            'Chuẩn bị ao nuôi',
            'Chọn giống và thả giống',
            'Chăm sóc và cho ăn',
            'Thu hoạch'
          ]
        },
        {
          title: 'Kinh Nghiệm Nuôi Hiệu Quả',
          subsections: [
            'Nuôi kết hợp với các loại cá khác',
            'Phòng bệnh thường gặp',
            'Tối ưu chi phí thức ăn'
          ]
        }
      ]
    },
    4: {
      id: 4,
      title: 'Chuẩn bị ao nuôi cá tra thương phẩm giúp đạt năng suất cao',
      date: '23/01/2025',
      views: 412,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-24-300x225.png',
      content: 'Hướng Dẫn Chuẩn Bị Ao Nuôi Cá Tra Đạt Năng Suất Cao',
      description: 'Nuôi cá tra là một ngành nghề dày thách thức nhưng cũng mang lại những cơ hội kinh doanh lớn khi được thực hiện đúng cách. Việc chuẩn bị môi trường ao nuôi là yếu tố quyết định đến năng suất và chất lượng cá thu hoạch.',
      sections: [
        {
          title: 'Thiết Kế Ao Nuôi Cá Tra',
          subsections: [
            'Diện tích và độ sâu phù hợp',
            'Hệ thống cấp thoát nước',
            'Xử lý đáy ao',
            'Hệ thống sục khí'
          ]
        },
        {
          title: 'Quản Lý Chất Lượng Nước',
          subsections: [
            'Các thông số quan trọng',
            'Phương pháp xử lý nước',
            'Kiểm tra định kỳ'
          ]
        },
        {
          title: 'Kỹ Thuật Nuôi Cá Tra Thương Phẩm',
          subsections: [
            'Mật độ thả giống',
            'Chế độ dinh dưỡng',
            'Phòng và trị bệnh',
            'Thu hoạch đúng kỹ thuật'
          ]
        }
      ]
    },
    5: {
      id: 5,
      title: 'Kỹ thuật nuôi cá Rô Phi đơn tính năng suất cao',
      date: '20/01/2025',
      views: 567,
      image: 'https://traicatandung.vn/wp-content/uploads/2020/10/carodong-hinh1-100x100.jpg',
      content: 'Hướng Dẫn Nuôi Cá Rô Phi Đơn Tính Đạt Năng Suất Cao Nhất',
      description: 'Cá Rô Phi đơn tính là giống cá được ưa chuộng nhất trong nuôi trồng thủy sản hiện nay. Với tốc độ sinh trưởng nhanh, khả năng thích nghi cao và dễ chăm sóc, cá Rô Phi đơn tính mang lại hiệu quả kinh tế cao cho người nuôi.',
      sections: [
        {
          title: 'Ưu Điểm Của Cá Rô Phi Đơn Tính',
          subsections: [
            'Tốc độ sinh trưởng nhanh',
            'Khả năng thích nghi cao',
            'Dễ chăm sóc và ít bệnh tật',
            'Thị trường tiêu thụ ổn định'
          ]
        },
        {
          title: 'Kỹ Thuật Nuôi Cá Rô Phi Đơn Tính',
          subsections: [
            'Chuẩn bị ao nuôi',
            'Chọn giống chất lượng',
            'Mật độ thả giống hợp lý',
            'Chế độ dinh dưỡng phù hợp'
          ]
        },
        {
          title: 'Quản Lý và Phòng Bệnh',
          subsections: [
            'Kiểm soát môi trường nước',
            'Các bệnh thường gặp',
            'Biện pháp phòng ngừa',
            'Thu hoạch và tiêu thụ'
          ]
        }
      ]
    },
    6: {
      id: 6,
      title: 'Phòng và trị bệnh cho cá giống hiệu quả',
      date: '18/01/2025',
      views: 445,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-25-300x225.png',
      content: 'Hướng Dẫn Phòng Và Trị Bệnh Cho Cá Giống Hiệu Quả',
      description: 'Bệnh tật là một trong những nguyên nhân gây thiệt hại lớn trong nuôi trồng thủy sản. Việc phòng bệnh đúng cách sẽ giúp giảm thiểu rủi ro và tăng năng suất. Bài viết này hướng dẫn chi tiết các biện pháp phòng và trị bệnh hiệu quả.',
      sections: [
        {
          title: 'Các Bệnh Thường Gặp Ở Cá Giống',
          subsections: [
            'Bệnh do vi khuẩn',
            'Bệnh do ký sinh trùng',
            'Bệnh do nấm',
            'Bệnh do môi trường'
          ]
        },
        {
          title: 'Biện Pháp Phòng Bệnh',
          subsections: [
            'Quản lý chất lượng nước',
            'Chọn giống khỏe mạnh',
            'Vệ sinh ao nuôi định kỳ',
            'Sử dụng men vi sinh'
          ]
        },
        {
          title: 'Cách Trị Bệnh Hiệu Quả',
          subsections: [
            'Nhận biết triệu chứng bệnh',
            'Phương pháp điều trị',
            'Thuốc và liều lượng',
            'Theo dõi sau điều trị'
          ]
        }
      ]
    },
    7: {
      id: 7,
      title: 'Cách chọn cá giống chất lượng cho ao nuôi',
      date: '15/01/2025',
      views: 389,
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-26-300x225.png',
      content: 'Bí Quyết Chọn Cá Giống Chất Lượng Cao',
      description: 'Chọn cá giống tốt là bước đầu tiên quyết định đến thành công của mô hình nuôi. Cá giống khỏe mạnh sẽ có tỷ lệ sống cao và phát triển tốt. Bài viết này chia sẻ kinh nghiệm chọn cá giống chất lượng từ các chuyên gia.',
      sections: [
        {
          title: 'Tiêu Chí Chọn Cá Giống Tốt',
          subsections: [
            'Kích thước đồng đều',
            'Màu sắc tươi sáng',
            'Hoạt động nhanh nhẹn',
            'Không có dấu hiệu bệnh tật'
          ]
        },
        {
          title: 'Nguồn Cung Cấp Giống Uy Tín',
          subsections: [
            'Chọn trại giống có uy tín',
            'Kiểm tra giấy tờ kiểm dịch',
            'Tham khảo ý kiến người có kinh nghiệm'
          ]
        },
        {
          title: 'Vận Chuyển và Thả Giống',
          subsections: [
            'Cách vận chuyển an toàn',
            'Quy trình thả giống đúng kỹ thuật',
            'Chăm sóc sau khi thả giống'
          ]
        }
      ]
    },
    8: {
      id: 8,
      title: 'Kỹ thuật nuôi lươn không bùn trong bể xi măng',
      date: '12/01/2025',
      views: 523,
      image: 'https://traicatandung.vn/wp-content/uploads/2023/03/51.png',
      content: 'Hướng Dẫn Nuôi Lươn Không Bùn Hiệu Quả',
      description: 'Nuôi lươn không bùn là phương pháp nuôi hiện đại, sạch sẽ và dễ quản lý. Phương pháp này giúp tiết kiệm diện tích và dễ dàng thu hoạch. Đây là xu hướng nuôi lươn được nhiều người áp dụng thành công.',
      sections: [
        {
          title: 'Ưu Điểm Của Phương Pháp Nuôi Lươn Không Bùn',
          subsections: [
            'Tiết kiệm diện tích',
            'Dễ quản lý và thu hoạch',
            'Giảm thiểu bệnh tật',
            'Chất lượng lươn tốt hơn'
          ]
        },
        {
          title: 'Chuẩn Bị Bể Nuôi',
          subsections: [
            'Thiết kế bể xi măng',
            'Hệ thống lọc nước',
            'Vật liệu làm tổ cho lươn',
            'Xử lý bể trước khi thả giống'
          ]
        },
        {
          title: 'Kỹ Thuật Nuôi và Chăm Sóc',
          subsections: [
            'Chọn giống lươn',
            'Mật độ thả giống',
            'Chế độ dinh dưỡng',
            'Quản lý nước và phòng bệnh'
          ]
        }
      ]
    },
    9: {
      id: 9,
      title: 'Quản lý chất lượng nước trong ao nuôi cá',
      date: '10/01/2025',
      views: 478,
      image: 'https://traicatandung.vn/wp-content/uploads/2020/10/cach-tha-ca-giong-dat-ty-le-song-cao-300x197.jpg',
      content: 'Hướng Dẫn Quản Lý Chất Lượng Nước Trong Ao Nuôi',
      description: 'Chất lượng nước là yếu tố quan trọng nhất ảnh hưởng đến sức khỏe và tốc độ sinh trưởng của cá. Cần theo dõi và điều chỉnh thường xuyên các thông số nước để đảm bảo môi trường sống tốt nhất cho cá.',
      sections: [
        {
          title: 'Các Thông Số Nước Quan Trọng',
          subsections: [
            'Độ pH',
            'Hàm lượng oxy hòa tan',
            'Nhiệt độ nước',
            'Độ kiềm, độ cứng',
            'Ammonia và Nitrite'
          ]
        },
        {
          title: 'Phương Pháp Kiểm Tra Chất Lượng Nước',
          subsections: [
            'Dụng cụ kiểm tra',
            'Tần suất kiểm tra',
            'Cách đọc kết quả'
          ]
        },
        {
          title: 'Xử Lý Khi Nước Bị Ô Nhiễm',
          subsections: [
            'Nhận biết dấu hiệu nước xấu',
            'Biện pháp xử lý khẩn cấp',
            'Sử dụng men vi sinh',
            'Thay nước định kỳ'
          ]
        }
      ]
    }
  };

  // Get current article or default to first article
  const currentArticle = articlesData[id] || articlesData[1];

  const relatedArticles = [
    {
      id: 2,
      title: 'Kỹ thuật nuôi cá chình trong bể xi măng bà con cần nắm',
      description: 'Từ việc chọn địa điểm, xây dựng bể nuôi, đến chăm sóc hàng ngày và phòng bệnh, mọi thứ đều được hướng dẫn chi tiết để đạt được hiệu suất tốt nhất trong kỹ thuật...',
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-28-300x225.png',
      date: '25',
      month: 'Th1'
    },
    {
      id: 3,
      title: 'Cá trắm cỏ có dễ nuôi không? Tìm hiểu ngay',
      description: 'Cá trắm cỏ là một loại cá nước ngọt, có kích thước lớn, ăn thơm ngon, giá trị dinh dưỡng cao. Cá trắm cỏ được nuôi phổ biến ở nhiều địa phương trên cả nước...',
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-27-300x225.png',
      date: '24',
      month: 'Th1'
    },
    {
      id: 4,
      title: 'Chuẩn bị ao nuôi cá tra thương phẩm giúp đạt năng suất cao',
      description: 'Nuôi cá tra là một ngành nghề dày thách thức nhưng cũng mang lại những cơ hội kinh doanh lớn khi được thực hiện đúng cách. Việc chuẩn bị môi trường ao nu...',
      image: 'https://traicatandung.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-24-300x225.png',
      date: '23',
      month: 'Th1'
    }
  ].filter(article => article.id !== parseInt(id)); // Filter out current article

  const categories = [
    'Chia Sẻ Kinh Nghiệm',
    'Kỹ thuật nuôi',
    'Kỹ Thuật Nuôi Cá',
    'Kỹ thuật nuôi cá thương phẩm'
  ];

  const popularProducts = [
    { id: 1, name: 'Cá Rô Đồng Lai Giống', image: '/api/placeholder/80/80' },
    { id: 2, name: 'Cá Chình giống', image: '/api/placeholder/80/80' },
    { id: 3, name: 'Cá Diêu Hồng Giống', image: '/api/placeholder/80/80' },
    { id: 4, name: 'Lươn giống', image: '/api/placeholder/80/80' },
    { id: 5, name: 'Ếch Thái giống', image: '/api/placeholder/80/80' }
  ];

  return (
    <div className="techniques-page">
      <div className="container">
        <div className="techniques-layout">
          {/* Main Content */}
          <div className="main-content">
            <article className="article-detail">
              <h1 className="article-title">{currentArticle.title}</h1>
              
              <div className="article-meta">
                <span className="meta-date">📅 {currentArticle.date}</span>
                <span className="meta-views">👁 {currentArticle.views}</span>
              </div>

              <h2 className="article-subtitle">{currentArticle.content}</h2>

              <p className="article-intro">{currentArticle.description}</p>

              {currentArticle.image && (
                <div className="article-featured-image">
                  <img src={currentArticle.image} alt={currentArticle.title} />
                </div>
              )}

              <div className="article-body">
                <div className="table-of-contents">
                  <h3>Nội dung chính [ẩn]</h3>
                  {currentArticle.sections.map((section, index) => (
                    <div key={index} className="toc-section">
                      <div className="toc-main">{index + 1} {section.title}</div>
                      {section.subsections && section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="toc-sub">
                          {index + 1}.{subIndex + 1} {sub}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="article-content">
                  <p>
                    Bài viết này cung cấp <strong>kỹ thuật nuôi từ A–Z</strong>, giúp bà con tăng năng suất, giảm rủi ro và tối ưu lợi nhuận.
                  </p>
                  
                  {currentArticle.sections.map((section, index) => (
                    <div key={index} className="content-section">
                      <h3>{index + 1}. {section.title}</h3>
                      <p>Nội dung chi tiết về {section.title.toLowerCase()} sẽ được trình bày đầy đủ tại đây...</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">CHUYÊN MỤC BÀI VIẾT</h3>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/techniques-list?category=${encodeURIComponent(category)}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">BÀI VIẾT PHỔ BIẾN</h3>
              <div className="popular-articles">
                {Object.values(articlesData).sort((a, b) => b.views - a.views).slice(0, 5).map(article => (
                  <Link
                    key={article.id}
                    to={`/techniques/${article.id}`}
                    className="popular-article-item"
                  >
                    <img src={article.image || '/api/placeholder/80/80'} alt={article.title} />
                    <div className="popular-info">
                      <h4>{article.title}</h4>
                      <span className="popular-views">👁 {article.views}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles - Outside Layout */}
        <section className="related-articles">
          <h2 className="related-title">Bài viết liên quan</h2>
          <div className="related-grid">
            {relatedArticles.map(article => (
              <Link 
                key={article.id} 
                to={`/techniques/${article.id}`} 
                className="related-article-card"
              >
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <span className="article-date">{article.date}<br/>{article.month}</span>
                </div>
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="related-navigation">
            <button className="nav-arrow prev-arrow">‹</button>
            <button className="nav-arrow next-arrow">›</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Techniques;
