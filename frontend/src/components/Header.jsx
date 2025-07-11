"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/Header.css"

// Menu configuration - Updated with new ADHD content
const MENU_ITEMS = [
  {
    id: "awakeness",
    title: "Nhận thức về ADHD",
    content: {
      title: "Nhận thức về ADHD",
      description:
        "Rối loạn tăng động giảm chú ý (ADHD) là một rối loạn phát triển thần kinh đặc trưng bởi các triệu chứng kéo dài của giảm chú ý, tăng hoạt động và hành vi bốc đồng.",
      icon: "📚",
      bgColor: "purple",
    },
    sidebarItems: [{ label: "Sự thật về ADHD", link: "/adhd-facts" }],
  },
  {
    id: "living",
    title: "Sống chung với ADHD",
    content: {
      title: "Sống chung với ADHD",
      description:
        "Sống chung với ADHD_fu của ADHD bao gồm việc áp dụng các thói quen có cấu trúc và các chiến lược để tăng cường sự tập trung, tổ chức và sức khỏe cảm xúc, đồng thời tìm kiếm sự hỗ trợ từ cộng đồng hiểu được trải nghiệm ADHD.",
      icon: "🩺",
      bgColor: "green",
    },
    sidebarItems: [
      { label: "ADHD & Sức khỏe", link: "/adhd-and-health" },
      { label: "ADHD trong cuộc sống", link: "/adhd-life" },
      { label: "ADHD & Các mối quan hệ", link: "/adhd-relationship" },
      { label: "ADHD & Cảm xúc", link: "/adhd-emotions" },
      { label: "ADHD trong tổ chức", link: "/adhd-organization" },
      { label: "ADHD & Công việc", link: "/adhd-workplace" },
    ],
  },
  {
    id: "symptoms",
    title: "Các triệu chứng ADHD",
    content: {
      title: "Các triệu chứng ADHD",
      description:
        "Các triệu chứng ADHD thường bao gồm sự giảm chú ý, tính tăng động và tính xung động, nhưng có thể biểu hiện rất đa dạng về hình thái và cường độ, đôi khi bị che lấp hoặc không được nhận diện trong nhiều năm.",
      icon: "🧠",
      bgColor: "orange",
    },
    sidebarItems: [
      { label: "ADHD thể Giảm chú ý", link: "/adhd-inattentive" },
      { label: "ADHD thể Tăng động - Bốc đồng ", link: "/adhd-hyperactive" },
      { label: "Các triệu chứng ADHD không chính thức", link: "/adhd-unofficial" },
    ],
  },
  {
    id: "story",
    title: "Những câu chuyện về ADHD",
    content: {
      title: "Những câu chuyện về ADHD",
      description: "Khám phá những câu chuyện thật về cuộc sống với ADHD từ những người trong cộng đồng.",
      icon: "📖",
      bgColor: "blue",
    },
    sidebarItems: [
      { label: "Nguyễn Như Thành Đạt", link: "/adhd-story1" },
      { label: "Nguyễn Ngọc Hiếu", link: "/adhd-story2" },
      { label: "Phan Sỹ Hưng", link: "/adhd-story3" },
      { label: "Trần Mai Thảo Vy", link: "/adhd-story4" },
      { label: "Lê Khắc Hải", link: "/adhd-story5" },
      { label: "Nguyễn Mai Trang", link: "/adhd-story6" },
      { label: "Lương Ngọc Mai", link: "/adhd-story7" },
      { label: "Tất cả câu chuyện", link: "/all-story", className: "sidebar-item--all-stories" },
    ],
  },
]

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [activeMenuItem, setActiveMenuItem] = useState("awakeness")
  const [activeMobileMenuItem, setActiveMobileMenuItem] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const headerRef = useRef(null)
  const navigate = useNavigate()

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      if (!mobile && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [isMobileMenuOpen])

  // Desktop dropdown handlers
  const handleMouseEnter = () => {
    if (isMobile) return
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  // Mobile/Tablet dropdown handlers
  const handleDropdownClick = () => {
    if (!isMobile) return
    setIsDropdownOpen(!isDropdownOpen)
    setIsMobileSearchOpen(false)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      document.body.style.overflow = 'unset'
    }
  }

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsMobileSearchOpen(false)
    setIsDropdownOpen(false)
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen)
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }

  const toggleMobileMenuItem = (itemId) => {
    setActiveMobileMenuItem(activeMobileMenuItem === itemId ? null : itemId)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileSearchOpen(false)
    setActiveMobileMenuItem(null)
    setIsDropdownOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Search handlers
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      navigate(searchUrl)
      closeMobileMenu()
    }
  }

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        if (isMobile) {
          setIsDropdownOpen(false)
        }
        closeMobileMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobile, isMobileMenuOpen, isMobileSearchOpen, isDropdownOpen])

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
      document.body.style.overflow = 'unset'
    }
  }, [hoverTimeout])

  const activeContent = MENU_ITEMS.find((item) => item.id === activeMenuItem)?.content

  return (
    <div className="header-wrapper" ref={headerRef}>
      {/* Header */}
      <header className="header">
        <div className="header__container">
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Logo */}
          <div className="header__logo">
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <div className="logo__icon">
                <img src="/logo.jpg" alt="ADHD-Bản giao hưởng tập trung" />
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
                onClick={handleDropdownClick}
                aria-haspopup="true" 
                aria-expanded={isDropdownOpen}
              >
                <span>Tài Nguyên ADHD</span>
                <svg
                  className={`dropdown__icon ${isDropdownOpen ? "dropdown__icon--rotated" : ""}`}
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

            <div className="nav__links">
              <Link to="/contactus" className="nav__link" onClick={closeMobileMenu}>
                Liên hệ
              </Link>
              <Link to="/hanbook" className="nav__link" onClick={closeMobileMenu}>
                HandBook
              </Link>
              <Link to="/team" className="nav__link" onClick={closeMobileMenu}>
                Thành viên và Cố vấn
              </Link>
            </div>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            {/* Desktop Search */}
            <div className="search search--desktop">
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

            {/* Mobile Search Button */}
            <button 
              className="mobile-search-btn"
              onClick={toggleMobileSearch}
              aria-label="Toggle search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={`mobile-search ${isMobileSearchOpen ? 'mobile-search--open' : ''}`}>
          <form onSubmit={handleSearchSubmit} className="mobile-search__form">
            <input
              type="text"
              placeholder="Tôi muốn tìm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search__input"
              autoFocus={isMobileSearchOpen}
            />
            <button type="submit" className="mobile-search__btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <div
        className={`mega-dropdown ${isDropdownOpen ? "mega-dropdown--open" : ""} ${isMobile ? "mega-dropdown--mobile" : ""}`}
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      >
        <div className="mega-dropdown__container">
          <div className="mega-dropdown__grid">
            {/* Left Section - Feature Cards */}
            <div className="mega-dropdown__left">
              <div className="feature-card feature-card--purple">
                <div className="feature-card__header">
                  <div className="feature-card__icon">
                    <span>👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="feature-card__title">Nội Dung ADHD của Chúng Tôi</h3>
                  </div>
                </div>
                <p className="feature-card__description">Xem tất cả các bài viết của chúng tôi!</p>
                <a
                  href="https://www.facebook.com/people/ADHD-B%E1%BA%A3n-Giao-H%C6%B0%E1%BB%9Fng-T%E1%BA%ADp-Trung/61576988307181/"
                  className="feature-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Page ADHD
                </a>
              </div>

              <div className="feature-card feature-card--blue">
                <div className="feature-card__header">
                  <div className="feature-card__icon">
                    <span>👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="feature-card__title">Ấn phẩm sách</h3>
                  </div>
                </div>
                <p className="feature-card__description">Xem sản phẩm đầu tay của chúng tôi</p>
                <a
                  href="https://www.facebook.com/people/ADHD-B%E1%BA%A3n-Giao-H%C6%B0%E1%BB%9Fng-T%E1%BA%ADp-Trung/61576988307181/"
                  className="feature-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Handbook
                </a>
              </div>
            </div>

            {/* Center - Menu Items */}
            <div className="mega-dropdown__center">
              <div className="menu-items">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onMouseEnter={!isMobile ? () => setActiveMenuItem(item.id) : undefined}
                    onClick={isMobile ? () => setActiveMenuItem(item.id) : undefined}
                    className={`menu-item ${activeMenuItem === item.id ? "menu-item--active" : ""}`}
                    data-bg-color={item.content?.bgColor}
                  >
                    <span className="menu-item__text">{item.title}</span>
                    <svg
                      className="menu-item__arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section - Active Content */}
            <div className={`mega-dropdown__right mega-dropdown__right--${activeContent?.bgColor || "default"}`}>
              {activeContent && (
                <div className={`content-panel ${isDropdownOpen ? "content-panel--visible" : ""}`}>
                  {activeMenuItem !== "story" && (
                    <div className="content-panel__wrapper">
                      <div className="content-panel__header">
                        <div className="content-panel__icon">
                          <span>{activeContent.icon}</span>
                        </div>
                        <h3 className="content-panel__title">{activeContent.title}</h3>
                      </div>
                      <p className="content-panel__description">{activeContent.description}</p>
                    </div>
                  )}

                  <div className={`sidebar-section${activeMenuItem === "story" ? " no-bg" : ""}`}>
                    <div className="sidebar-items">
                      {MENU_ITEMS.find(item => item.id === activeMenuItem)?.sidebarItems.map((sidebarItem, index) => (
                        <Link 
                          key={index}
                          to={sidebarItem.link} 
                          className={`sidebar-item ${activeMenuItem === "story" ? "sidebar-item--story" : ""} ${sidebarItem.className || ""}`}
                          onClick={closeMobileMenu}
                        >
                          {sidebarItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}
      >
        <div className="mobile-menu__overlay" onClick={closeMobileMenu}></div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <h2>Menu</h2>
            <button 
              className="mobile-menu__close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="mobile-menu__body">
            <div className="mobile-menu-nav">
              <Link to="/contactus" className="mobile-menu-nav__link" onClick={closeMobileMenu}>
                <span className="mobile-menu-nav__icon">📞</span>
                Liên hệ
              </Link>
              <Link to="/hanbook" className="mobile-menu-nav__link" onClick={closeMobileMenu}>
                <span className="mobile-menu-nav__icon">📚</span>
                HandBook
              </Link>
              <Link to="/team" className="mobile-menu-nav__link" onClick={closeMobileMenu}>
                <span className="mobile-menu-nav__icon">👥</span>
                Thành viên và Cố vấn
              </Link>
            </div>

            <div className="mobile-menu-social">
              <h3>Theo dõi chúng tôi</h3>
              <div className="mobile-menu-social__links">
                <a
                  href="https://www.facebook.com/people/ADHD-B%E1%BA%A3n-Giao-H%C6%B0%E1%BB%9Fng-T%E1%BA%ADp-Trung/61576988307181/"
                  className="mobile-menu-social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <span>📘</span>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(isMobileMenuOpen || isMobileSearchOpen) && (
        <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
      )}
    </div>
  )
}

export default Header