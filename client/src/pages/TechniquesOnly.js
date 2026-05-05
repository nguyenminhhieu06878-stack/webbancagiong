import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TechniquesList.css';

const TechniquesOnly = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Chỉ lấy các bài viết thuộc chuyên mục "Kỹ thuật nuôi"
  const articles = [
    {
      id: 1,
      title: 'Kỹ thuật nuôi cá Chim Trắng giống',
      excerpt: 'Cá chim trắng giống là loại cá nước ngọt dễ nuôi, tốc độ lớn nhanh và có dầu ra rất ổn định quanh năm. Nhờ đặc tính ăn tạp – thích nghi tốt – ít bệnh...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-26-300x225.png',
      date: '01/12/2025',
      views: 423,
      category: 'Kỹ thuật nuôi'
    },
    {
      id: 2,
      title: 'Kỹ thuật nuôi cá chình trong bể xi măng bà con cần nắm',
      excerpt: 'Từ việc chọn địa điểm, xây dựng bể nuôi, đến chăm sóc hàng ngày và phòng bệnh, mọi thứ đều được hướng dẫn chi tiết để đạt được hiệu suất tốt nhất...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-28-300x225.png',
      date: '25/01/2025',
      views: 356,
      category: 'Kỹ thuật nuôi'
    },
    {
      id: 5,
      title: 'Kỹ thuật nuôi cá Rô Phi đơn tính năng suất cao',
      excerpt: 'Cá Rô Phi đơn tính là giống cá được ưa chuộng nhất trong nuôi trồng thủy sản hiện nay. Với tốc độ sinh trưởng nhanh, khả năng thích nghi cao...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2020/10/carodong-hinh1-100x100.jpg',
      date: '20/01/2025',
      views: 567,
      category: 'Kỹ thuật nuôi'
    },
    {
      id: 8,
      title: 'Kỹ thuật nuôi lươn không bùn trong bể xi măng',
      excerpt: 'Nuôi lươn không bùn là phương pháp nuôi hiện đại, sạch sẽ và dễ quản lý. Phương pháp này giúp tiết kiệm diện tích và dễ dàng thu hoạch...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2023/03/51.png',
      date: '12/01/2025',
      views: 523,
      category: 'Kỹ thuật nuôi'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="techniques-list-page">
      {/* Banner Section */}
      <section className="techniques-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">KỸ THUẬT NUÔI</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Kỹ thuật nuôi</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="techniques-content">
        <div className="container">
          <div className="techniques-layout">
            {/* Main Content */}
            <div className="articles-main">
              {/* Search Bar */}
              <div className="search-section">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input-techniques"
                />
              </div>

              {/* Articles Grid */}
              <div className="articles-grid">
                {filteredArticles.map(article => (
                  <Link
                    key={article.id}
                    to={`/techniques/${article.id}`}
                    className="article-card"
                  >
                    <div className="card-image">
                      <img src={article.image} alt={article.title} />
                      <span className="card-category">{article.category}</span>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{article.title}</h3>
                      <p className="card-excerpt">{article.excerpt}</p>
                      <div className="card-meta">
                        <span className="meta-date">📅 {article.date}</span>
                        <span className="meta-views">👁 {article.views}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="no-results">
                  <p>Không tìm thấy bài viết nào phù hợp.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="techniques-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">CHUYÊN MỤC KHÁC</h3>
                <ul className="category-list">
                  <li>
                    <Link to="/techniques-list">Tất cả bài viết</Link>
                  </li>
                  <li>
                    <Link to="/techniques-list">Chia Sẻ Kinh Nghiệm</Link>
                  </li>
                  <li>
                    <Link to="/techniques-list">Kỹ Thuật Nuôi Cá</Link>
                  </li>
                  <li>
                    <Link to="/techniques-list">Kỹ thuật nuôi cá thương phẩm</Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3 className="widget-title">BÀI VIẾT PHỔ BIẾN</h3>
                <div className="popular-articles">
                  {articles.sort((a, b) => b.views - a.views).map(article => (
                    <Link
                      key={article.id}
                      to={`/techniques/${article.id}`}
                      className="popular-article-item"
                    >
                      <img src={article.image} alt={article.title} />
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
        </div>
      </section>
    </div>
  );
};

export default TechniquesOnly;
