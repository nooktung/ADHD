import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const menuItems = [
  {
    id: "awareness",
    title: "Nhận Thức về ADHD",
    content: {
      title: "Nhận Thức về ADHD",
      description:
        "Tại sao chúng ta cần Nhận thức về ADHD?\nNhững sự thật về ADHD bạn nên biết là gì?\nTìm hiểu những câu trả lời này và nhiều hơn nữa trong trang danh mục Nhận thức về ADHD:",
      link: "Tìm hiểu về Nhận thức ADHD",
      icon: "📚",
    },
  },
  {
    id: "diagnosis",
    title: "Chẩn Đoán ADHD",
    content: {
      title: "Chẩn Đoán ADHD",
      description:
        "Làm thế nào để được chẩn đoán ADHD?\nTại sao mọi người bị chẩn đoán sai hoặc không bao giờ được chẩn đoán?\nTìm hiểu tất cả những gì bạn cần biết về Chẩn đoán ADHD tại đây:",
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

const sidebarItems = ["Sự thật ADHD", "Trợ giúp ADHD", "Điều trị ADHD", "Tất cả bài viết"];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("awareness");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const activeContent = menuItems.find((item) => item.id === activeMenuItem)?.content;

  return (
    <div className="header-wrapper">
      {/* Header */}
      <header className="header-new">
        <div className="header-container-new">
          {/* Logo */}
          <div className="logo-section-new">
            <Link to="/" className="logo-new">
              <img src="/2.png" alt="ADHD Coach" className="logo-icon-new" />
              <span className="logo-text-new">Sổ Tay Tự Đánh Giá ADHD</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav-menu-new">
            <a href="#" className="nav-link-new">
              Sổ Tay Tự Đánh Giá ADHD
            </a>

            <div 
              className="dropdown-new" 
              ref={dropdownRef} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-trigger">
                <span>Tài Nguyên ADHD</span>
                <svg 
                  className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`}
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

              {/* Mega Menu Dropdown */}
              <div 
                className={`mega-dropdown ${isDropdownOpen ? 'open' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mega-dropdown-container">
                  <div className="mega-dropdown-grid">
                    {/* Left Section - Stacked Cards */}
                    <div className="mega-left-section">
                      {/* Our ADHD Content Card */}
                      <div className="content-card purple-card">
                        <div className="card-header">
                          <div className="card-icon">
                            <span>👩‍💻</span>
                          </div>
                          <div>
                            <h3 className="card-title">Nội Dung ADHD của Chúng Tôi</h3>
                          </div>
                        </div>
                        <p className="card-description">Duyệt qua tất cả các bài viết của chúng tôi!</p>
                        <a href="#" className="card-link">
                          Blog ADHD
                        </a>
                      </div>

                      {/* Self-Assessment Workbook Card */}
                      <div className="content-card cyan-card">
                        <div className="card-header">
                          <div className="card-icon">
                            <span>📋</span>
                          </div>
                        </div>
                        <h3 className="card-title">Sổ Tay Tự Đánh Giá ADHD</h3>
                        <p className="card-description">
                          Trực quan hóa và đánh giá 25 đặc điểm ADHD và hiểu cách chúng ảnh hưởng đến cuộc sống của bạn.
                        </p>
                        <a href="#" className="card-link">
                          Sổ Tay ADHD
                        </a>
                      </div>
                    </div>

                    {/* Center - Menu Items */}
                    <div className="mega-center-section">
                      <div className="menu-items-list">
                        {menuItems.map((item) => (
                          <button
                            key={item.id}
                            onMouseEnter={() => setActiveMenuItem(item.id)}
                            className={`menu-item-btn ${activeMenuItem === item.id ? 'active' : ''}`}
                          >
                            <span className="menu-item-text">{item.title}</span>
                            <svg className="menu-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right Section - Active Content */}
                    <div className="mega-right-section">
                      {activeContent && (
                        <div className={`active-content ${isDropdownOpen ? 'visible' : ''}`}>
                          <div className="content-header">
                            <div className="content-icon">
                              <span>{activeContent.icon}</span>
                            </div>
                            <h3 className="content-title">{activeContent.title}</h3>
                          </div>

                          <p className="content-description">
                            {activeContent.description}
                          </p>

                          <a href="#" className="content-link">
                            {activeContent.link}
                            <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                          </a>

                          {/* Sidebar Items */}
                          <div className="sidebar-section">
                            <div className="sidebar-items">
                              {sidebarItems.map((item, index) => (
                                <a
                                  key={index}
                                  href="#"
                                  className={`sidebar-item ${index === sidebarItems.length - 1 ? 'last-item' : ''}`}
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

            <a href="#" className="nav-link-new">Cửa Hàng</a>
            <Link to="/ContactUs" className="nav-link-new">Về Chúng Tôi</Link>
          </nav>

          {/* Search and CTA */}
          <div className="header-actions-new">
            <form onSubmit={handleSearchSubmit} className="search-form-new">
              <input
                type="text"
                placeholder="Tôi muốn tìm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-new"
              />
              <button type="submit" className="search-btn-new">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </form>

            <button className="cta-btn-new">Kiểm Tra ADHD Miễn Phí</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;