import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src="/2.png" alt="ADHD Coach" className="logo-icon" />
            <span className="logo-text">Sổ Tay Tự Đánh Giá ADHD</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <div className="nav-item dropdown">
            <span className="nav-link">Tài Nguyên ADHD</span>
            <div className="dropdown-content">
              <a href="#">Nhận Thức về ADHD</a>
              <a href="#">Chẩn Đoán ADHD</a>
              <a href="#">Triệu Chứng ADHD</a>
              <a href="#">Sống Chung với ADHD</a>
            </div>
          </div>
          <a href="#" className="nav-link">Cửa Hàng</a>
          <a href="/ContactUs" className="nav-link">Về Chúng Tôi</a>
        </nav>

        {/* Search and CTA Section */}
        <div className="header-actions">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Tôi muốn tìm..." 
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn">Tìm Kiếm</button>
          </div>
          <button className="cta-btn">Kiểm Tra ADHD Miễn Phí</button>
        </div>
      </div>
    </header>
  );
};

export default Header;