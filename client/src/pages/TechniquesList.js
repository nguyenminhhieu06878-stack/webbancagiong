import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './TechniquesList.css';

const TechniquesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams] = useSearchParams();

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
      id: 3,
      title: 'Cá trắm cỏ có dễ nuôi không? Tìm hiểu ngay',
      excerpt: 'Cá trắm cỏ là một loại cá nước ngọt, có kích thước lớn, ăn thơm ngon, giá trị dinh dưỡng cao. Cá trắm cỏ được nuôi phổ biến ở nhiều địa phương...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-27-300x225.png',
      date: '24/01/2025',
      views: 289,
      category: 'Kỹ Thuật Nuôi Cá'
    },
    {
      id: 4,
      title: 'Chuẩn bị ao nuôi cá tra thương phẩm giúp đạt năng suất cao',
      excerpt: 'Nuôi cá tra là một ngành nghề dày thách thức nhưng cũng mang lại những cơ hội kinh doanh lớn khi được thực hiện đúng cách...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-24-300x225.png',
      date: '23/01/2025',
      views: 412,
      category: 'Kỹ thuật nuôi cá thương phẩm'
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
      id: 6,
      title: 'Phòng và trị bệnh cho cá giống hiệu quả',
      excerpt: 'Bệnh tật là một trong những nguyên nhân gây thiệt hại lớn trong nuôi trồng thủy sản. Việc phòng bệnh đúng cách sẽ giúp giảm thiểu rủi ro và tăng năng suất...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-25-300x225.png',
      date: '18/01/2025',
      views: 445,
      category: 'Chia Sẻ Kinh Nghiệm'
    },
    {
      id: 7,
      title: 'Cách chọn cá giống chất lượng cho ao nuôi',
      excerpt: 'Chọn cá giống tốt là bước đầu tiên quyết định đến thành công của mô hình nuôi. Cá giống khỏe mạnh sẽ có tỷ lệ sống cao và phát triển tốt...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-26-300x225.png',
      date: '15/01/2025',
      views: 389,
      category: 'Chia Sẻ Kinh Nghiệm'
    },
    {
      id: 8,
      title: 'Kỹ thuật nuôi lươn không bùn trong bể xi măng',
      excerpt: 'Nuôi lươn không bùn là phương pháp nuôi hiện đại, sạch sẽ và dễ quản lý. Phương pháp này giúp tiết kiệm diện tích và dễ dàng thu hoạch...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2023/03/51.png',
      date: '12/01/2025',
      views: 523,
      category: 'Kỹ thuật nuôi'
    },
    {
      id: 9,
      title: 'Quản lý chất lượng nước trong ao nuôi cá',
      excerpt: 'Chất lượng nước là yếu tố quan trọng nhất ảnh hưởng đến sức khỏe và tốc độ sinh trưởng của cá. Cần theo dõi và điều chỉnh thường xuyên...',
      image: 'https://thuysantunganh.vn/wp-content/uploads/2020/10/cach-tha-ca-giong-dat-ty-le-song-cao-300x197.jpg',
      date: '10/01/2025',
      views: 478,
      category: 'Kỹ Thuật Nuôi Cá'
    }
  ];

  const categories = [
    'Tất cả',
    'Chia Sẻ Kinh Nghiệm',
    'Kỹ thuật nuôi',
    'Kỹ Thuật Nuôi Cá',
    'Kỹ thuật nuôi cá thương phẩm'
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="techniques-list-page">
      {/* Banner Section */}
      <section className="techniques-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">TÀI LIỆU KỸ THUẬT</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Tài liệu kỹ thuật</span>
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

              {/* Category Tabs */}
              <div className="category-tabs">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
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
                <h3 className="widget-title">CHUYÊN MỤC BÀI VIẾT</h3>
                <ul className="category-list">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/techniques-list?category=${encodeURIComponent(category)}`}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3 className="widget-title">BÀI VIẾT PHỔ BIẾN</h3>
                <div className="popular-articles">
                  {articles.slice(0, 5).sort((a, b) => b.views - a.views).map(article => (
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

export default TechniquesList;
