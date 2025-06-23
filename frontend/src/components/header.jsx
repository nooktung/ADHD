import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

// Menu configuration
const MENU_ITEMS = [
  {
    id: "awareness",
    title: "Nhận Thức về ADHD",
    content: {
      title: "Nhận Thức về ADHD",
      description: "Tại sao chúng ta cần Nhận thức về ADHD?\nNhững sự thật về ADHD bạn nên biết là gì?\nTìm hiểu những câu trả lời này và nhiều hơn nữa trong trang danh mục Nhận thức về ADHD:",
      link: "Tìm hiểu về Nhận thức ADHD",
      icon: "📚",
    },
  },
  {
    id: "diagnosis",
    title: "Chẩn Đoán ADHD",
    content: {
      title: "Chẩn Đoán ADHD",
      description: "Làm thế nào để được chẩn đoán ADHD?\nTại sao mọi người bị chẩn đoán sai hoặc không bao giờ được chẩn đoán?\nTìm hiểu tất cả những gì bạn cần biết về Chẩn đoán ADHD tại đây:",
      link: "Tìm hiểu về Chẩn đoán ADHD",
      icon: "🩺",
    },
  },
  {
    id: "symptoms",
    title: "Triệu Chứng ADHD",
    content: {
      title: "Triệu Chứng ADHD",
      description: "Hiểu về các triệu chứng khác nhau của ADHD và cách chúng biểu hiện trong cuộc sống hàng ngày.",
      link: "Tìm hiểu về Triệu chứng ADHD",
      icon: "🧠",
    },
  },
  {
    id: "living",
    title: "Sống Chung với ADHD",
    content: {
      title: "Sống Chung với ADHD",
      description: "Mẹo và chiến lược để quản lý cuộc sống hàng ngày với ADHD.",
      link: "Tìm hiểu về Sống chung với ADHD",
      icon: "🏠",
    },
  },
  {
    id: "stories",
    title: "Câu chuyện ADHD",
    content: {
      title: "Câu chuyện ADHD",
      description: "Trải nghiệm thực tế và câu chuyện từ những người sống với ADHD.",
      link: "Đọc câu chuyện ADHD",
      icon: "📖",
    },
  },
];

const SIDEBAR_ITEMS = ["Sự thật ADHD", "Trợ giúp ADHD", "Điều trị ADHD", "Tất cả bài viết"];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("awareness");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Dropdown handlers
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  // Search handlers
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const activeContent = MENU_ITEMS.find(item => item.id === activeMenuItem)?.content;

  return (
    <div className="header-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          
          {/* Logo */}
          <div className="header__logo">
            <Link to="/" className="logo">
              <div className="logo__icon">
                <img src="/logo.jpg" alt="ADHD Coach" />
              </div>
              <span className="logo__text">Bản Giao Hưởng ADHD</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="header__nav">

            {/* Dropdown */}
            <div 
              className="nav__dropdown"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="dropdown__trigger"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <span>Tài Nguyên ADHD</span>
                <svg 
                  className={`dropdown__icon ${isDropdownOpen ? 'dropdown__icon--rotated' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
            </div>
                       <Link to="/ContactUs" className="nav__link">Về Chúng Tôi</Link>
                       <Link to="/Team" className="nav__link">Giới thiệu nhóm</Link>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            {/* Search */}
            <div className="search">
              <form onSubmit={handleSearchSubmit} className="search__form">
                <input
                  type="text"
                  placeholder="Tôi muốn tìm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search__input"
                />
                <button type="submit" className="search__btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </form>
            </div>

          </div>

        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <div
        className={`mega-dropdown ${isDropdownOpen ? 'mega-dropdown--open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mega-dropdown__container">
          <div className="mega-dropdown__grid">
            
            {/* Left Section - Stacked Cards */}
            <div className="mega-dropdown__left">
              {/* Our ADHD Content Card */}
              <div className="feature-card feature-card--purple">
                <div className="feature-card__header">
                  <div className="feature-card__icon">
                    <span>👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="feature-card__title">Nội Dung ADHD của Chúng Tôi</h3>
                  </div>
                </div>
                <p className="feature-card__description">Duyệt qua tất cả các bài viết của chúng tôi!</p>
                <a href="#" className="feature-card__link">
                  Blog ADHD
                </a>
              </div>

              {/* Self-Assessment Workbook Card */}
              <div className="feature-card feature-card--cyan">
                <div className="feature-card__header">
                  <div className="feature-card__icon">
                    <span>📋</span>
                  </div>
                </div>
                <h3 className="feature-card__title">Sổ Tay Tự Đánh Giá ADHD</h3>
                <p className="feature-card__description">
                  Trực quan hóa và đánh giá 25 đặc điểm ADHD và hiểu cách chúng ảnh hưởng đến cuộc sống của bạn.
                </p>
                <a href="#" className="feature-card__link">
                  Sổ Tay ADHD
                </a>
              </div>
            </div>

            {/* Center - Menu Items */}
            <div className="mega-dropdown__center">
              <div className="menu-items">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setActiveMenuItem(item.id)}
                    className={`menu-item ${activeMenuItem === item.id ? 'menu-item--active' : ''}`}
                  >
                    <span className="menu-item__text">{item.title}</span>
                    <svg className="menu-item__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section - Active Content */}
            <div className="mega-dropdown__right">
              {activeContent && (
                <div className={`content-panel ${isDropdownOpen ? 'content-panel--visible' : ''}`}>
                  <div className="content-panel__header">
                    <div className="content-panel__icon">
                      <span>{activeContent.icon}</span>
                    </div>
                    <h3 className="content-panel__title">{activeContent.title}</h3>
                  </div>

                  <p className="content-panel__description">
                    {activeContent.description}
                  </p>

                  <a href="#" className="content-panel__link">
                    {activeContent.link}
                    <svg className="content-panel__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </a>

                  {/* Sidebar Items */}
                  <div className="sidebar-section">
                    <div className="sidebar-items">
                      {SIDEBAR_ITEMS.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className={`sidebar-item ${index === SIDEBAR_ITEMS.length - 1 ? 'sidebar-item--muted' : ''}`}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;