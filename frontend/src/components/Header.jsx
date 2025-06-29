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
    id: "life",
    title: "Sống chung với ADHD",
    content: {
      title: "Sống chung với ADHD",
      description:
        "Sống chung với ADHD bao gồm việc vượt qua những thách thức độc đáo và khai thác điểm mạnh của từng cá nhân.",
      icon: "🩺",
      bgColor: "green",
    },
    sidebarItems: [
      { label: "ADHD & Sức khỏe", link: "/adhd-and-health" },
      { label: "Cuộc sống ADHD", link: "/adhd-life" },
      { label: "Mối quan hệ ADHD", link: "/adhd-relationship" },
      { label: "Cảm xúc ADHD", link: "/adhd-emotions" },
      { label: "Tổ chức ADHD", link: "/adhd-organization" },
      { label: "Công việc ADHD", link: "/adhd-workplace" },
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
    title: "Những câu chuyên về ADHD",
    content: {
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
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [activeMenuItem, setActiveMenuItem] = useState("awakeness")
  const [searchQuery, setSearchQuery] = useState("")
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Dropdown handlers
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  // Search handlers
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Submitting search for:", searchQuery.trim())
      const searchUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      console.log("Navigating to:", searchUrl)
      navigate(searchUrl)
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const activeContent = MENU_ITEMS.find((item) => item.id === activeMenuItem)?.content

  return (
    <div className="header-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <Link to="/" className="logo" onClick={() => (window.location.href = "/")}>
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
              <button className="dropdown__trigger" aria-haspopup="true" aria-expanded={isDropdownOpen}>
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

            <Link to="/ContactUs" className="nav__link">
              Liên hệ
            </Link>
            <Link to="/HandBook" className="nav__link">
              HandBook
            </Link>
            <Link to="/Team" className="nav__link">
              Giới thiệu nhóm
            </Link>
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
        className={`mega-dropdown ${isDropdownOpen ? "mega-dropdown--open" : ""}`}
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
                <a
                  href="https://www.facebook.com/people/ADHD-B%E1%BA%A3n-Giao-H%C6%B0%E1%BB%9Fng-T%E1%BA%ADp-Trung/61576988307181/"
                  className="feature-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <p className="feature-card__description">Duyệt qua tất cả các bài viết của chúng tôi!</p>
                <a
                  href="https://www.facebook.com/people/ADHD-B%E1%BA%A3n-Giao-H%C6%B0%E1%BB%9Fng-T%E1%BA%ADp-Trung/61576988307181/"
                  className="feature-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    onMouseEnter={() => setActiveMenuItem(item.id)}
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

                  {/* Sidebar Items riêng cho từng menu item */}
                  <div className={`sidebar-section${activeMenuItem === "story" ? " no-bg" : ""}`}>
                    <div className="sidebar-items">
                      {activeMenuItem === "awakeness" && (
                        <>
                          <Link to="/adhd-facts" className="sidebar-item">
                            Sự thật về ADHD
                          </Link>
                        </>
                      )}
                      
                      {activeMenuItem === "life" && (
                        <>
                          <Link to="/adhd-and-health" className="sidebar-item">
                            ADHD & Sức khỏe
                          </Link>
                          <Link to="/adhd-life" className="sidebar-item">
                            Cuộc sống ADHD
                          </Link>
                          <Link to="/adhd-relationship" className="sidebar-item">
                            Mối quan hệ ADHD
                          </Link>
                          <Link to="/adhd-emotions" className="sidebar-item">
                            Cảm xúc ADHD
                          </Link>
                          <Link to="/adhd-organization" className="sidebar-item">
                            Tổ chức ADHD
                          </Link>
                          <Link to="/adhd-workplace" className="sidebar-item">
                            Công việc ADHD
                          </Link>
                        </>
                      )}
                      
                      {activeMenuItem === "symptoms" && (
                        <>
                          <Link to="/adhd-inattentive" className="sidebar-item">
                            ADHD thể Giảm chú ý
                          </Link>
                          <Link to="/adhd-hyperactive" className="sidebar-item">
                            ADHD thể Tăng động - Bốc đồng
                          </Link>
                          <Link to="/adhd-unofficial" className="sidebar-item">
                            Các triệu chứng ADHD không chính thức
                          </Link>
                        </>
                      )}
                      
                      {activeMenuItem === "story" && (
                        <>
                          <Link to="/adhd-story1" className="sidebar-item--story">
                            Nguyễn Như Thành Đạt
                          </Link>
                          <Link to="/adhd-story2" className="sidebar-item--story">
                            Nguyễn Ngọc Hiếu
                          </Link>
                          <Link to="/adhd-story3" className="sidebar-item--story">
                            Phan Sỹ Hưng
                          </Link>
                          <Link to="/adhd-story4" className="sidebar-item--story">
                            Trần Mai Thảo Vy
                          </Link>
                          <Link to="/adhd-story5" className="sidebar-item--story">
                            Lê Khắc Hải
                          </Link>
                          <Link to="/adhd-story6" className="sidebar-item--story">
                            Nguyễn Mai Trang
                          </Link>
                          <Link to="/adhd-story7" className=" sidebar-item--story">
                            Lương Ngọc Mai
                          </Link>
                          <Link to="/all-story" className=" sidebar-item--story sidebar-item--all-stories">
                            Tất cả câu chuyện
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
