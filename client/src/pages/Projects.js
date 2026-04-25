import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    { id: 1, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 2, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 3, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 4, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 5, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 6, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
    { id: 7, title: 'Thả Cá Phóng Sanh', image: 'https://traicatandung.vn/wp-content/uploads/2025/06/92-300x200.png', category: 'phong-sanh' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="projects-page">
      {/* Banner Section */}
      <section className="projects-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">DỰ ÁN ĐÃ THẢ</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span className="separator">›</span>
            <span>Dự án</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="projects-content">
        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Tìm kiếm" 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              TẤT CẢ
            </button>
            <button 
              className={`tab ${activeTab === 'phong-sanh' ? 'active' : ''}`}
              onClick={() => setActiveTab('phong-sanh')}
            >
              PHÓNG SANH
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="project-card"
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
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

export default Projects;
