"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/LandingPage.css"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const stories = [
    {
      id: 1,
      name: "Jenna",
      age: 16,
      avatar: "J",
      title: "Jenna được chẩn đoán ADHD ở tuổi 16 tại Hoa Kỳ",
      content:
        "Tôi thực ra đã được chẩn đoán mắc chứng tự kỷ từ những năm đầu đời, và bố tôi cũng mắc chứng tự kỷ. Người bạn thân nhất của tôi cũng mắc ADHD kết hợp. Tôi nghĩ rằng không ai có thể mắc cả tự kỷ và ADHD cùng lúc, nhưng sau đó họ hàng của tôi được chẩn đoán mắc cả hai. Tôi đã nghiên cứu về ADHD một thời gian để cố gắng hiểu người bạn thân của mình. Sau đó tôi nhận ra rằng tôi thực sự liên quan đến hầu hết các triệu chứng và tôi nghĩ 'Đợi đã... liệu tôi có mắc ADHD không?' Vì vậy tôi đã nhờ mẹ đưa tôi đi khám vài tháng trước sinh nhật 17 tuổi. Và đó là cách nó xảy ra.",
      currentAge: 17,
      country: "Hoa Kỳ",
      diagnosedAt: 16,
      buttonColor: "#ec4899",
    },
    {
      id: 2,
      name: "Mick",
      age: 18,
      avatar: "M",
      title: "Mick được chẩn đoán ADHD ở tuổi 18 tại Indonesia",
      content:
        "Tôi là người không thể tập trung quá lâu, tôi quên mọi thứ thường xuyên hơn người khác. Chữ viết tay của tôi rất tệ, và thường xuyên tôi không thể ngồi yên, giáo viên chủ nhiệm lớp 3 của tôi đã nói với bố mẹ tôi nên tham khảo ý kiến của một nhà tâm lý học. Khi tôi hỏi bố mẹ về chẩn đoán, bố mẹ tôi đã quên mất chẩn đoán là gì vì đó là từ rất lâu rồi. Đến hiện tại khi tôi đang học đại học, tôi vẫn gặp những vấn đề tương tự nên tôi quyết định đi khám bác sĩ tâm thần, và vâng, tôi đã có câu trả lời chính xác, đó là ADHD.",
      currentAge: 18,
      country: "Indonesia",
      diagnosedAt: 18,
      buttonColor: "#0d9488",
    },
    {
      id: 3,
      name: "Lyndsy",
      age: 27,
      avatar: "L",
      title: "Lyndsy được chẩn đoán ADHD ở tuổi 27 tại Hoa Kỳ",
      content:
        "Tôi cảm thấy như cả cuộc đời tôi đã phải bù đắp cho những điều nhỏ nhặt khiến cuộc sống của tôi khó khăn hơn người khác. Khi Covid-19 xảy ra, tôi không nhận ra bộ não của mình cần cấu trúc đó đến mức nào. Khi tôi ngồi ở nhà với gia đình và con, tôi nhận thấy (những gì tôi biết bây giờ là triệu chứng ADHD/Tự kỷ) tôi đã chi tiêu bao nhiêu cho những món đồ vô nghĩa, hoặc ăn quá nhiều/vô thức. Tôi bắt đầu thấy rằng tất cả những điều tôi đang làm không 'bình thường' vì tôi thấy gia đình không gặp khó khăn với những điều tương tự.",
      currentAge: 27,
      country: "Hoa Kỳ",
      diagnosedAt: 27,
      buttonColor: "#ec4899",
    },
    {
      id: 4,
      name: "Alex",
      age: 23,
      avatar: "A",
      title: "Alex được chẩn đoán ADHD ở tuổi 23 tại Canada",
      content:
        "Lớn lên, tôi luôn cảm thấy khác biệt với bạn bè. Tôi gặp khó khăn trong việc tập trung ở trường, liên tục ngọ nguậy, và khó hoàn thành nhiệm vụ. Giáo viên thường gắn mác tôi là lười biếng hoặc thiếu động lực. Mãi đến khi học đại học, một cố vấn mới gợi ý rằng tôi có thể mắc ADHD. Việc được chẩn đoán đã thay đổi cuộc đời tôi - đột nhiên mọi thứ trở nên có ý nghĩa.",
      currentAge: 23,
      country: "Canada",
      diagnosedAt: 23,
      buttonColor: "#3b82f6",
    },
    {
      id: 5,
      name: "Sarah",
      age: 31,
      avatar: "S",
      title: "Sarah được chẩn đoán ADHD ở tuổi 31 tại Úc",
      content:
        "Là một người mẹ đi làm, tôi nghĩ rằng việc liên tục cảm thấy quá tải và không thể tổ chức công việc chỉ là một phần của việc bận rộn. Khi con gái tôi được chẩn đoán mắc ADHD, tôi bắt đầu nghiên cứu và nhận ra nhiều triệu chứng ở bản thân. Việc được chẩn đoán ở tuổi 31 đã giúp tôi hiểu được những khó khăn suốt đời và tìm ra các chiến lược đối phó tốt hơn.",
      currentAge: 31,
      country: "Úc",
      diagnosedAt: 31,
      buttonColor: "#22c55e",
    },
    {
      id: 6,
      name: "David",
      age: 19,
      avatar: "D",
      title: "David được chẩn đoán ADHD ở tuổi 19 tại Vương quốc Anh",
      content:
        "Đại học là hồi chuông cảnh tỉnh cho tôi. Không có cấu trúc của trường trung học, tôi thấy mình không thể quản lý thời gian hoặc tập trung vào các bài giảng. Điểm số của tôi giảm sút, và tôi cảm thấy lạc lõng. Một người bạn đề nghị tôi nói chuyện với ai đó về ADHD, và sau khi đánh giá, cuối cùng tôi đã có câu trả lời cho những khó khăn suốt đời với sự chú ý và hiếu động.",
      currentAge: 19,
      country: "Vương quốc Anh",
      diagnosedAt: 19,
      buttonColor: "#8b5cf6",
    },
    {
      id: 7,
      name: "Maria",
      age: 25,
      avatar: "M",
      title: "Maria được chẩn đoán ADHD ở tuổi 25 tại Tây Ban Nha",
      content:
        "Tôi luôn nghĩ mình chỉ là người hay mơ mộng. Ở trường, tôi thường xuyên mất tập trung trong các lớp học và gặp khó khăn trong việc hoàn thành bài tập đúng hạn. Khi trưởng thành, tôi tiếp tục gặp vấn đề với tổ chức và quản lý thời gian. Khi tôi tìm hiểu về ADHD ở phụ nữ, tôi nhận ra nhiều trải nghiệm của mình phù hợp với ADHD dạng thiếu chú ý.",
      currentAge: 25,
      country: "Tây Ban Nha",
      diagnosedAt: 25,
      buttonColor: "#f97316",
    },
    {
      id: 8,
      name: "James",
      age: 29,
      avatar: "J",
      title: "James được chẩn đoán ADHD ở tuổi 29 tại New Zealand",
      content:
        "Làm việc trong môi trường doanh nghiệp khiến các triệu chứng ADHD của tôi rõ ràng hơn. Tôi gặp khó khăn với các cuộc họp dài, giấy tờ chi tiết, và duy trì tập trung vào các nhiệm vụ lặp đi lặp lại. Các đánh giá hiệu suất của tôi liên tục đề cập đến vấn đề về sự chú ý đến chi tiết. Sau khi nghiên cứu về ADHD, tôi tìm kiếm sự giúp đỡ chuyên môn và cuối cùng đã có được chẩn đoán giải thích tất cả.",
      currentAge: 29,
      country: "New Zealand",
      diagnosedAt: 29,
      buttonColor: "#6366f1",
    },
    {
      id: 9,
      name: "Emma",
      age: 22,
      avatar: "E",
      title: "Emma được chẩn đoán ADHD ở tuổi 22 tại Đức",
      content:
        "Tôi luôn là học sinh 'thông minh nhưng lộn xộn'. Tôi có thể siêu tập trung vào các môn học tôi yêu thích nhưng hoàn toàn bỏ bê những môn khác. Phòng của tôi luôn bừa bộn, tôi liên tục làm mất đồ, và tôi gặp khó khăn với việc quản lý thời gian. Khi tôi bắt đầu gặp khó khăn ở đại học, một giáo sư đã đề nghị tôi đi kiểm tra ADHD.",
      currentAge: 22,
      country: "Đức",
      diagnosedAt: 22,
      buttonColor: "#ef4444",
    },
    {
      id: 10,
      name: "Ryan",
      age: 26,
      avatar: "R",
      title: "Ryan được chẩn đoán ADHD ở tuổi 26 tại Ireland",
      content:
        "Tôi đã trải qua thời học sinh nghĩ rằng mình không đủ thông minh. Tôi phải làm việc gấp đôi so với bạn cùng lớp để đạt được kết quả tương tự. Mãi đến khi đi làm và vẫn gặp khó khăn với sự tập trung và tổ chức, tôi mới tìm hiểu về ADHD ở người lớn. Việc được chẩn đoán đã giúp tôi hiểu rằng bộ não của tôi chỉ hoạt động khác biệt.",
      currentAge: 26,
      country: "Ireland",
      diagnosedAt: 26,
      buttonColor: "#10b981",
    },
  ]

  // Updated blog posts with ADHD content from docx
  const blogPosts = [
    {
      id: 1,
      title: "I. Giới thiệu ADHD",
      category: "Kiến thức cơ bản",
      excerpt: "Tìm hiểu về định nghĩa, độ tuổi, giới tính và các dạng ADHD. ADHD là rối loạn phát triển thần kinh ảnh hưởng đến khả năng tập trung và kiểm soát hành vi.",
      image: "image.png",
      author: "Nhóm Alight",
      date: "24/06/2025",
      link: "/adhd-signs"
    },
    {
      id: 3,
      title: "III. Nguyên nhân và cơ chế não bộ ADHD",
      category: "Khoa học",
      excerpt: "Khám phá các nguyên nhân gây ra ADHD và cơ chế hoạt động của não bộ. Tìm hiểu về yếu tố di truyền, môi trường và chất dẫn truyền thần kinh.",
      image: "image.png",
      author: "Nhóm Alight",
      date: "24/06/2025",
      link: "/adhd-causes"
    },
    {
      id: 4,
      title: "IV. ADHD trong cuộc sống",
      category: "Thực tế",
      excerpt: "Tác động của ADHD đến học tập, công việc và sinh hoạt hàng ngày. Các ví dụ thực tế và kinh nghiệm sống chung với ADHD.",
      image: "image.png",
      author: "Nhóm Alight",
      date: "24/06/2025",
      link: "/adhd-in-life"
    },
    {
      id: 5,
      title: "V. So sánh ADHD với rối loạn lo âu",
      category: "So sánh",
      excerpt: "Phân biệt giữa ADHD và rối loạn lo âu trong các tình huống khác nhau. Hiểu về sự khác biệt và điểm chung giữa hai tình trạng này.",
      image: "image.png",
      author: "Nhóm Alight",
      date: "24/06/2025",
      link: "/adhd-vs-anxiety"
    },
    {
      id: 6,
      title: "VI. Cách cải thiện trong đời sống",
      category: "Hướng dẫn",
      excerpt: "Các phương pháp cải thiện chất lượng cuộc sống với ADHD. Mẹo về giấc ngủ, ăn uống, tập thể dục và mối quan hệ xã hội.",
      image: "image.png",
      author: "Nhóm Alight",
      date: "24/06/2025",
      link: "/adhd-improvement"
    }
  ]

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedStory, setSelectedStory] = useState(null)
  const scrollContainerRef = useRef(null)
  const blogScrollContainerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  const scrollBlogLeft = () => {
    if (blogScrollContainerRef.current) {
      blogScrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollBlogRight = () => {
    if (blogScrollContainerRef.current) {
      blogScrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  const handleStoryClick = (story) => {
    setSelectedStory(story)
  }

  const handleCloseModal = () => {
    setSelectedStory(null)
  }

  // Social media posts data
  const socialPosts = [
    // 2. Ảnh có số 5 ở đầu
    {
      id: 1,
      image: "story1.jpg",
      title: "Nội dung ADHD",
      description: "Chia sẻ kiến thức về ADHD"
    },
    {
      id: 2,
      image: "story2.jpg",
      title: "Tài liệu ADHD",
      description: "Tài liệu giáo dục về ADHD"
    },
    {
      id: 3,
      image: "story3a.jpg",
      title: "Thông tin ADHD",
      description: "Thông tin hữu ích về ADHD"
    },
    {
      id: 4,
      image: "story3b.jpg",
      title: "Hướng dẫn ADHD",
      description: "Hướng dẫn thực tế cho ADHD"
    },
    {
      id: 5,
      image: "story3c.jpg",
      title: "Kinh nghiệm ADHD",
      description: "Chia sẻ kinh nghiệm sống với ADHD"
    },
    {
      id: 6,
      image: "story4.jpg",
      title: "Cộng đồng ADHD",
      description: "Kết nối cộng đồng ADHD"
    },
    
  ]

  return (
    <>
      <Header />

      {/* Story Modal */}
      {selectedStory && (
        <div className="story-modal-overlay" onClick={handleCloseModal}>
          <div className="story-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            <div className="story-modal-content">
              <div className="story-modal-header">
                <div className="story-avatar-new">{selectedStory.avatar}</div>
                <div className="story-info">
                  <h3 className="story-name-new">{selectedStory.name}</h3>
                  <p className="story-age">{selectedStory.age}</p>
                </div>
              </div>
              <h4 className="story-title-new">{selectedStory.title}</h4>
              <div className="story-content-section">
                <h5 className="story-question-new">1. Điều gì khiến bạn quyết định đi khám?</h5>
                <p className="story-text-new">{selectedStory.content}</p>
              </div>
              <div className="story-stats">
                <div className="stat-box">
                  <p className="stat-label">Tuổi:</p>
                  <p className="stat-number-large">{selectedStory.currentAge}</p>
                </div>
                <div className="stat-box">
                  <p className="stat-label">Quốc gia:</p>
                  <p className="stat-country">{selectedStory.country}</p>
                </div>
                <div className="stat-box">
                  <p className="stat-label">Chẩn đoán lúc:</p>
                  <p className="stat-number-large">{selectedStory.diagnosedAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Updated with content from "Lời mở đầu" */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Bản Giao Hưởng Tập Trung</h1>
            <p>
              Có những người vẫn luôn cố gắng từng ngày nhưng lại bị hiểu lầm là lười biếng. 
              Có những người luôn khao khát được tập trung nhưng tâm trí lại cứ trôi dạt về nơi khác. 
              ADHD không chỉ là khó khăn, ADHD còn là một khả năng. Chỉ cần được lắng nghe, 
              được hiểu đúng, mọi nốt nhạc lệch nhịp đều có thể góp phần làm nên một bản giao hưởng trọn vẹn.
            </p>
          </div>
          <div className="hero-visual">
            <img 
              src="image.png" 
              alt="ADHD Traits Visualization" 
              className="hero-visual-image"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2>Tìm hiểu về ADHD với nội dung minh họa của chúng tôi!</h2>
          <p className="features-subtitle">
            Chúng tôi kết hợp tất cả các đặc điểm để giúp bạn hiểu và khám phá điều gì đó về bản thân.
          </p>

          <div className="features-new-layout">
            <div className="left-large-card">
              <div className="cute-brain-container">
                <span className="cute-brain">🧠</span>
              </div>
              <h3 className="main-question">Hiểu về ADHD toàn diện</h3>
              <p className="subtitle-text">
                Chúng tôi đã tạo một hệ thống thông tin toàn diện về ADHD dựa trên nghiên cứu khoa học 
                để giúp bạn hiểu rõ về rối loạn tăng động giảm chú ý từ cơ bản đến nâng cao.
              </p>
            </div>

            <div className="right-section">
              <div className="small-cards-grid">
                <div className="small-card adhd-awareness">
                  <Link to="/adhd-introduction">
                    <div className="card-icon">
                      <span>📚</span>
                    </div>
                    <h4>Giới thiệu ADHD</h4>
                  </Link>
                </div>

                <div className="small-card adhd-diagnosis">
                  <Link to="/adhd-signs">
                    <div className="card-icon">
                      <span>🩺</span>
                    </div>
                    <h4>Dấu hiệu ADHD</h4>
                  </Link>
                </div>

                <div className="small-card adhd-symptoms">
                  <Link to="/adhd-causes">
                    <div className="card-icon">
                      <span>🧠</span>
                    </div>
                    <h4>Nguyên nhân</h4>
                  </Link>
                </div>

                <div className="small-card living-adhd">
                  <Link to="/adhd-in-life">
                    <div className="card-icon">
                      <span>🏠</span>
                    </div>
                    <h4>ADHD trong cuộc sống</h4>
                  </Link>
                </div>
              </div>

              <div className="horizontal-card">
                <div className="horizontal-card-content">
                  <div className="workbook-icon">
                    <span>⚖️</span>
                  </div>
                  <div className="workbook-text">
                    <h3>So sánh ADHD với lo âu & Cách cải thiện</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stats-content">
            <h2>Tại sao việc nâng cao nhận thức về ADHD là rất quan trọng:</h2>

            <div className="stat-item">
              <div className="stat-number">5%</div>
              <div className="stat-text">
                <div className="stat-description">người trưởng thành mắc ADHD theo các nghiên cứu gần đây</div>
                <p className="stat-detail">
                  Khoảng 8 triệu người trưởng thành ở Hoa Kỳ bị ảnh hưởng bởi ADHD. ADHD không chỉ ảnh hưởng đến
                  trẻ em.
                </p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-number">80%</div>
              <div className="stat-text">
                <div className="stat-description">người trưởng thành mắc ADHD không được chẩn đoán</div>
                <p className="stat-detail">
                  Các triệu chứng ADHD ở người lớn có thể bị hiểu nhầm là các triệu chứng liên quan đến trầm cảm, lo âu, hoặc rối loạn lưỡng cực.
                </p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-number">75%</div>
              <div className="stat-text">
                <div className="stat-description">người trưởng thành được chẩn đoán ADHD không được điều trị</div>
                <p className="stat-detail">
                  Điều này là do thiếu hiểu biết về ADHD, chi phí điều trị đắt đỏ không phải lúc nào cũng được bảo hiểm chi trả, và sự kỳ thị mà ADD/ADHD vẫn còn mang theo ở một số nơi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Updated with ADHD content */}
      <section className="blog">
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-title-section">
              <h2>Kiến Thức ADHD Từ Báo Cáo</h2>
              <p className="blog-subtitle">Khám phá thông tin chi tiết về ADHD từ nghiên cứu chuyên sâu</p>
            </div>
          </div>

          <div className="blog-nav">
            <button className="nav-arrow" onClick={scrollBlogLeft}>
              ←
            </button>
            <button className="nav-arrow" onClick={scrollBlogRight}>
              →
            </button>
          </div>

          <div className="blog-scroll-container" ref={blogScrollContainerRef}>
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card-new">
                <div className="blog-image-container">
                  <img src={post.image} alt={post.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">
                    {post.excerpt}
                  </p>
                  <div className="blog-meta">
                    <div className="blog-author">
                      <img src="image.png" alt={post.author} className="author-avatar" />
                      <span className="author-name">{post.author}</span>
                    </div>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
                <Link to={post.link} style={{position: 'absolute', inset: 0, zIndex: 1}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories-new">
        <div className="stories-new-container">
          <div className="stories-header">
            <div className="stories-title-section">
              <h2>Câu Chuyện ADHD</h2>
              <p className="stories-subtitle">Trải nghiệm thực tế từ những người sống với ADHD</p>
            </div>
          </div>

          <div className="stories-nav">
            <button className="nav-arrow" onClick={scrollLeft}>
              ←
            </button>
            <button className="nav-arrow" onClick={scrollRight}>
              →
            </button>
          </div>

          <div className="stories-scroll-container" ref={scrollContainerRef} onScroll={checkScrollButtons}>
            {stories.map((story) => (
              <div key={story.id} className="story-card-new" onClick={() => handleStoryClick(story)}>
                <div className="story-header-new">
                  <div className="story-avatar-new">{story.avatar}</div>
                  <div className="story-info">
                    <h3 className="story-name-new">{story.name}</h3>
                    <p className="story-age">{story.age}</p>
                  </div>
                </div>
                <h4 className="story-title-new">{story.title}</h4>
                <div className="story-content-section">
                  <h5 className="story-question-new">Điều gì khiến bạn quyết định đi khám?</h5>
                  <p className="story-text-new">{story.content}</p>
                </div>
                <div className="story-stats">
                  <div className="stat-box">
                    <p className="stat-label">Tuổi:</p>
                    <p className="stat-number-large">{story.currentAge}</p>
                  </div>
                  <div className="stat-box">
                    <p className="stat-label">Quốc gia:</p>
                    <p className="stat-country">{story.country}</p>
                  </div>
                  <div className="stat-box">
                    <p className="stat-label">Chẩn đoán lúc:</p>
                    <p className="stat-number-large">{story.diagnosedAt}</p>
                  </div>
                </div>
                <button 
                  className="story-btn-new" 
                  style={{backgroundColor: story.buttonColor}}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStoryClick(story);
                  }}
                >
                  Đọc thêm
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section - Updated with Facebook Style */}
      <section className="social-media-section">
        <div className="social-media-container">
          {/* Header */}
          <div className="social-header">
            <h2>Theo dõi @the_mini_adhd_coach trên Mạng Xã Hội!</h2>
            <p className="social-subtitle">
              Xem nội dung giáo dục hàng ngày của chúng tôi trên Facebook
              <a href="https://www.facebook.com/profile.php?id=61576988307181" className="social-link">
                ngay tại đây <span className="external-icon">↗</span>
              </a>
            </p>
          </div>

          {/* Social Media Feed */}
          <div className="social-feed-card">
            <div className="social-feed-header">
              <div className="social-profile">
                <div className="profile-avatar">
                  <span className="profile-initial">M</span>
                </div>
                <div className="profile-info">
                  <h3>The Mini ADHD Coach</h3>
                  <p>ADHD Resources & Tips</p>
                </div>
              </div>
            </div>

            <div className="social-feed-content">
              <div className="social-posts-grid">
                {socialPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="social-post-card"
                    onClick={() => setSelectedImage(post.image)}
                  >
                    <div className="post-image-container">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="post-image"
                      />
                      <div className="post-overlay">
                        <div className="post-content">
                          <h4>{post.title}</h4>
                          <p>{post.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-feed-footer">
              <button 
                className="follow-button"
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61576988307181', '_blank')}
              >
                Theo dõi trên Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="image-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-button" 
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img 
                src={selectedImage} 
                alt="ADHD content enlarged"
                className="modal-image"
              />
            </div>
          </div>
        )}
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta-container">
          <span className="cute-character">🧠</span>
          <h2>Chúng ta vẫn còn nhiều điều để học về ADHD</h2>
          <p>
            Bất kể bạn đang ở đâu trong hành trình ADHD, chúng tôi có thể đảm bảo rằng bạn có thể học hỏi từ nội dung của chúng tôi. 
            Việc được chẩn đoán mắc ADHD ở tuổi 29 đã thay đổi cuộc đời tôi và truyền cảm hứng cho tôi để giúp đỡ những người khác như tôi.
          </p>
          <button
            className="btn-primary"
            onClick={() => window.location.href = "/"}
          >
            Khám phá kiến thức ADHD
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default LandingPage