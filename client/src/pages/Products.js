import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFish, FaFilter, FaSortAmountDown, FaTh, FaThList } from 'react-icons/fa';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [selectedCategory, searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (searchTerm) params.append('search', searchTerm);
      
      const response = await axios.get(`/api/products?${params}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/products/categories/all');
      setCategories(response.data);
    } catch (error) {
      console.error('Lỗi khi tải danh mục:', error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Sản phẩm cá giống</h1>
          <p>Khám phá các loại cá giống chất lượng cao của chúng tôi</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-left">
            <div className="filter-dropdown-wrapper">
              <button 
                className="filter-bar-btn"
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              >
                <FaFilter className="filter-bar-icon" />
                <span>Bộ lọc</span>
              </button>
              {showFilterDropdown && (
                <div className="filter-dropdown">
                  <button
                    className={`filter-dropdown-item ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory('all');
                      setShowFilterDropdown(false);
                    }}
                  >
                    Tất cả
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`filter-dropdown-item ${selectedCategory === category.name ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setShowFilterDropdown(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="filter-dropdown-wrapper">
              <button 
                className="filter-bar-btn"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <FaSortAmountDown className="filter-bar-icon" />
                <span>Sắp xếp</span>
              </button>
              {showSortDropdown && (
                <div className="filter-dropdown">
                  <button
                    className={`filter-dropdown-item ${sortBy === 'default' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('default');
                      setShowSortDropdown(false);
                    }}
                  >
                    Mặc định
                  </button>
                  <button
                    className={`filter-dropdown-item ${sortBy === 'price-asc' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('price-asc');
                      setShowSortDropdown(false);
                    }}
                  >
                    Giá: Thấp đến cao
                  </button>
                  <button
                    className={`filter-dropdown-item ${sortBy === 'price-desc' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('price-desc');
                      setShowSortDropdown(false);
                    }}
                  >
                    Giá: Cao đến thấp
                  </button>
                  <button
                    className={`filter-dropdown-item ${sortBy === 'name-asc' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('name-asc');
                      setShowSortDropdown(false);
                    }}
                  >
                    Tên: A-Z
                  </button>
                  <button
                    className={`filter-dropdown-item ${sortBy === 'name-desc' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('name-desc');
                      setShowSortDropdown(false);
                    }}
                  >
                    Tên: Z-A
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="filter-right">
            <button className="view-btn active">
              <FaTh className="view-icon" />
              <span>Thu gọn</span>
            </button>
            <button className="view-btn">
              <FaThList className="view-icon" />
              <span>Chi tiết</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="loading">Đang tải sản phẩm...</div>
        ) : products.length === 0 ? (
          <div className="no-products">
            <FaFish className="no-products-icon" />
            <h3>Không tìm thấy sản phẩm</h3>
            <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
          </div>
        ) : (
          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image_url ? (
                    <img src={product.image_url} alt={product.name} />
                  ) : (
                    <div className="no-image">
                      <FaFish />
                    </div>
                  )}
                  {product.stock_quantity <= 10 && (
                    <div className="stock-badge">Sắp hết hàng</div>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category_name}</p>
                  <p className="product-size">Kích thước: {product.size}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="price-info">
                      <span className="product-price">{formatPrice(product.price)}/con</span>
                      <span className="stock-info">Còn: {product.stock_quantity} con</span>
                    </div>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && products.length > 0 && totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹ Trước
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              className="pagination-btn"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Sau ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;