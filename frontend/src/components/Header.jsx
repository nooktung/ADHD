import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

// Menu configuration - Updated with new ADHD content
const MENU_ITEMS = [
  {
    id: "LivingWithADHD",
    title: "Sống chung với ADHD",
    content: {
      title: "Sống chung với ADHD",
      description: "Sống chung với ADHD bao gồm việc vượt qua những thách thức độc đáo và khai thác điểm mạnh của từng cá nhân. Điều này thường có nghĩa là phải đối mặt với sự tập trung không ổn định, kiểm soát sự bốc đồng và tìm ra các chiến lược để sắp xếp các công việc hàng ngày.",
      link: "/adhd-in-life",
      linkText: "Tìm hiểu về ADHD",
      icon: "📚",
    },
  },
  {
    id: "signs",
    title: "II. Dấu hiệu và biểu hiện ADHD",
    content: {
      title: "Dấu hiệu và biểu hiện ADHD",
      description: "Nhận biết các dấu hiệu ADHD ở trẻ em, người lớn và người lớn tuổi.\nHiểu rõ cách ADHD biểu hiện ở từng độ tuổi khác nhau.",
      link: "/adhd-signs",
      linkText: "Tìm hiểu dấu hiệu ADHD",
      icon: "🩺",
    },
  },
  {
    id: "causes",
    title: "III. Nguyên nhân và cơ chế não bộ",
    content: {
      title: "Nguyên nhân và cơ chế não bộ ADHD",
      description: "Khám phá các nguyên nhân gây ra ADHD và cơ chế hoạt động của não bộ.\nTìm hiểu về yếu tố di truyền và môi trường.",
      link: "/adhd-causes",
      linkText: "Tìm hiểu nguyên nhân ADHD",
      icon: "🧠",
    },
  },
  {
    id: "life",
    title: "IV. ADHD trong cuộc sống",
    content: {
      title: "ADHD trong cuộc sống",
      description: "Tác động của ADHD đến học tập, công việc và sinh hoạt hàng ngày.\nCác ví dụ thực tế và kinh nghiệm sống chung với ADHD.",
      link: "/adhd-in-life",
      linkText: "Tìm hiểu ADHD trong cuộc sống",
      icon: "🏠",
    },
  },
  {
    id: "comparison",
    title: "V. So sánh ADHD với rối loạn lo âu",
    content: {
      title: "So sánh ADHD với rối loạn lo âu",
      description: "Phân biệt giữa ADHD và rối loạn lo âu trong các tình huống khác nhau.\nHiểu về sự khác biệt và điểm chung giữa hai tình trạng này.",
      link: "/adhd-vs-anxiety",
      linkText: "So sánh ADHD và lo âu",
      icon: "⚖️",
    },
  },
  {
    id: "improvement",
    title: "VI. Cách cải thiện trong đời sống",
    content: {
      title: "Cách cải thiện trong đời sống",
      description: "Các phương pháp cải thiện chất lượng cuộc sống với ADHD.\nMẹo về giấc ngủ, ăn uống, tập thể dục và mối quan hệ.",
      link: "/adhd-improvement",
      linkText: "Cách cải thiện với ADHD",
      icon: "🌟",
    },
  },
];

const SIDEBAR_ITEMS = ["Kiến thức ADHD", "Hỗ trợ ADHD", "Cộng đồng ADHD"];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("introduction");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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
      console.log('Submitting search for:', searchQuery.trim()); // Debug log
      const searchUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      console.log('Navigating to:', searchUrl); // Debug log
      navigate(searchUrl);
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
              <span className="logo__text">Bản Giao Hưởng Tập Trung</span>
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
                       <Link to="/ContactUs" className="nav__link">Liên hệ</Link>
                       <Link to="/HandBook" className="nav__link">HandBook</Link>
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

                  <Link to={activeContent.link} className="content-panel__link">
                    {activeContent.linkText}
                    <svg className="content-panel__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </Link>

                  {/* Sidebar Items */}
                  <div className="sidebar-section">
                    <div className="sidebar-items">
                      {SIDEBAR_ITEMS.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className={`sidebar-item`}
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