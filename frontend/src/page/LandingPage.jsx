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

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedStory, setSelectedStory] = useState(null)
  const scrollContainerRef = useRef(null)
  const blogScrollContainerRef = useRef(null)

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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>WELCOME PAGE : ......</h1>
            <p>
              Tìm hiểu vị trí của bạn trên phổ ADHD bằng cách trả lời 28 câu hỏi lấy cảm hứng từ Thang Đánh Giá Tự Báo Cáo
              Người Lớn (ASRS).
            </p>
          </div>
          <div className="hero-visual">
            <h3>Trực quan hóa các đặc điểm ADHD của bạn!</h3>
            <img 
              src="image.png" 
              alt="ADHD Traits Visualization" 
              className="hero-visual-image"
              style={{
                maxWidth: '50%',
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
              <h3 className="main-question">So sánh ADHD với lo âu</h3>
              <p className="subtitle-text">
                Chúng tôi đã tạo một bài kiểm tra miễn phí dựa trên các triệu chứng ADHD chính thức được mô tả trong DSM-V để cho bạn biết
                khả năng bạn mắc ADHD và loại ADHD nào (Hiếu động-Bốc đồng, Thiếu chú ý hoặc Kết hợp).
              </p>
            </div>

            <div className="right-section">
              <div className="small-cards-grid">
                <div className="small-card adhd-awareness">
                  <Link to="/AboutADHD">
                    <div className="card-icon">
                      <span>🎀</span>
                    </div>
                    <h4>Giới thiệu về ADHD</h4>
                  </Link>
                </div>

                <div className="small-card adhd-diagnosis">
                  <div className="card-icon">
                    <span>👨‍⚕️</span>
                  </div>
                  <h4>Dấu hiệu</h4>
                </div>

                <div className="small-card adhd-symptoms">
                  <div className="card-icon">
                    <span>📋</span>
                  </div>
                  <h4>Nguyên nhân</h4>
                </div>

                <div className="small-card living-adhd">
                  <div className="card-icon">
                    <span>👥</span>
                  </div>
                  <h4>ADHD trong cuộc sống</h4>
                </div>
              </div>

              <div className="horizontal-card">
                <div className="horizontal-card-content">
                  <div className="workbook-icon">
                    <span>📖</span>
                  </div>
                  <div className="workbook-text">
                    <h3>Cải thiện trong cuộc sống</h3>
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

          <div className="stats-visual">
            <img
              src="image.png"
              alt="Sổ Tay Tự Đánh Giá ADHD"
              className="workbook-image"
            />
            <h3>Sổ Tay Tự Đánh Giá ADHD</h3>
            <p>
              Trực quan hóa và đánh giá 25 đặc điểm ADHD và hiểu cách chúng ảnh hưởng đến cuộc sống của bạn. Sổ tay bao gồm
              60 trang với các ví dụ trực quan.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-title-section">
              <h2>Bài Viết Mới Nhất</h2>
              <p className="blog-subtitle">Khám phá thông tin chi tiết về ADHD và các chủ đề liên quan</p>
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
            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Nuôi dạy trẻ ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Nuôi dạy con</span>
                <h3 className="blog-title">Hiểu về ADHD ở Trẻ em: Hướng dẫn cho Phụ huynh</h3>
                <p className="blog-excerpt">
                  Tìm hiểu về các dấu hiệu, triệu chứng và chiến lược hỗ trợ trẻ em mắc ADHD trong cuộc sống hàng ngày.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Sarah Johnson" className="author-avatar" />
                    <span className="author-name">Sarah Johnson</span>
                  </div>
                  <span className="blog-date">15/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Dinh dưỡng ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sức khỏe</span>
                <h3 className="blog-title">Dinh dưỡng và ADHD: Thực phẩm giúp tập trung</h3>
                <p className="blog-excerpt">
                  Khám phá cách dinh dưỡng phù hợp có thể giúp quản lý các triệu chứng ADHD và cải thiện khả năng tập trung.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Dr. Lisa Chen" className="author-avatar" />
                    <span className="author-name">Dr. Lisa Chen</span>
                  </div>
                  <span className="blog-date">14/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Tập thể dục ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Lối sống</span>
                <h3 className="blog-title">Tập thể dục và ADHD: Sức mạnh của vận động</h3>
                <p className="blog-excerpt">
                  Tìm hiểu cách hoạt động thể chất thường xuyên có thể giúp quản lý các triệu chứng ADHD và tăng cường sức khỏe tâm thần.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Mike Thompson" className="author-avatar" />
                    <span className="author-name">Mike Thompson</span>
                  </div>
                  <span className="blog-date">13/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Mối quan hệ ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Mối quan hệ</span>
                <h3 className="blog-title">Xây dựng mối quan hệ bền vững với ADHD</h3>
                <p className="blog-excerpt">
                  Mẹo và chiến lược để duy trì các mối quan hệ lành mạnh trong khi quản lý các triệu chứng ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Emma Rodriguez" className="author-avatar" />
                    <span className="author-name">Emma Rodriguez</span>
                  </div>
                  <span className="blog-date">12/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Công nghệ ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Công nghệ</span>
                <h3 className="blog-title">Ứng dụng và công cụ hàng đầu để quản lý ADHD</h3>
                <p className="blog-excerpt">
                  Hướng dẫn toàn diện về các công cụ và ứng dụng kỹ thuật số tốt nhất để quản lý các triệu chứng ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Alex Wong" className="author-avatar" />
                    <span className="author-name">Alex Wong</span>
                  </div>
                  <span className="blog-date">11/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Giấc ngủ ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sức khỏe</span>
                <h3 className="blog-title">Cải thiện chất lượng giấc ngủ với ADHD</h3>
                <p className="blog-excerpt">
                  Chiến lược thực tế để vệ sinh giấc ngủ tốt hơn và quản lý các vấn đề về giấc ngủ liên quan đến ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Dr. James Wilson" className="author-avatar" />
                    <span className="author-name">Dr. James Wilson</span>
                  </div>
                  <span className="blog-date">10/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Sáng tạo ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sáng tạo</span>
                <h3 className="blog-title">Khai thác tiềm năng sáng tạo của ADHD</h3>
                <p className="blog-excerpt">
                  Cách chuyển hóa các đặc điểm ADHD thành thế mạnh sáng tạo và tư duy đổi mới.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Sophie Martinez" className="author-avatar" />
                    <span className="author-name">Sophie Martinez</span>
                  </div>
                  <span className="blog-date">09/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Giáo dục ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Giáo dục</span>
                <h3 className="blog-title">Kỹ thuật học tập thân thiện với ADHD</h3>
                <p className="blog-excerpt">
                  Chiến lược học tập và phương pháp học tập hiệu quả cho học sinh mắc ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Prof. David Lee" className="author-avatar" />
                    <span className="author-name">Prof. David Lee</span>
                  </div>
                  <span className="blog-date">08/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Chánh niệm ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sức khỏe</span>
                <h3 className="blog-title">Thực hành chánh niệm cho ADHD</h3>
                <p className="blog-excerpt">
                  Kỹ thuật chánh niệm đơn giản để giúp quản lý các triệu chứng ADHD và cải thiện khả năng tập trung.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Anna Patel" className="author-avatar" />
                    <span className="author-name">Anna Patel</span>
                  </div>
                  <span className="blog-date">07/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Tổ chức ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Năng suất</span>
                <h3 className="blog-title">Hệ thống tổ chức cho ADHD</h3>
                <p className="blog-excerpt">
                  Phương pháp và hệ thống tổ chức thực tế được thiết kế cho não bộ ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Rachel Kim" className="author-avatar" />
                    <span className="author-name">Rachel Kim</span>
                  </div>
                  <span className="blog-date">06/03/2024</span>
                </div>
              </div>
            </div>

            <div className="blog-card-new">
              <div className="blog-image-container">
                <img src="image.png" alt="Cảm xúc ADHD" className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sức khỏe tâm thần</span>
                <h3 className="blog-title">Quản lý điều hòa cảm xúc với ADHD</h3>
                <p className="blog-excerpt">
                  Hiểu và quản lý phản ứng cảm xúc và điều hòa tâm trạng trong ADHD.
                </p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="image.png" alt="Dr. Maria Garcia" className="author-avatar" />
                    <span className="author-name">Dr. Maria Garcia</span>
                  </div>
                  <span className="blog-date">05/03/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media Section */}
      <section className="social">
        <div className="social-container">
          <h2>Theo dõi @the_mini_adhd_coach trên Mạng Xã Hội!</h2>
          <p className="social-subtitle">Xem nội dung giáo dục hàng ngày của chúng tôi!</p>

          <div className="social-grid">
            <div className="social-post post1">
              <span className="social-emoji">🧠</span>
              <h4>DOPAMINE ADHD</h4>
              <p>Hiểu về hệ thống khen thưởng của não bộ</p>
            </div>
            <div className="social-post post2">
              <span className="social-emoji">📱</span>
              <h4>ADHD TẠI NƠI LÀM VIỆC</h4>
              <p>Mẹo năng suất cho nơi làm việc</p>
            </div>
            <div className="social-post post3">
              <span className="social-emoji">💡</span>
              <h4>CHỨC NĂNG ĐIỀU HÀNH ADHD</h4>
              <p>Khám phá thách thức về chức năng điều hành</p>
            </div>
            <div className="social-post post4">
              <span className="social-emoji">📚</span>
              <h4>HỌC TẬP VỚI ADHD</h4>
              <p>Chiến lược học tập thực sự hiệu quả</p>
            </div>
            <div className="social-post post5">
              <span className="social-emoji">💖</span>
              <h4>CHĂM SÓC BẢN THÂN ADHD</h4>
              <p>Chăm sóc bộ não thần kinh của bạn</p>
            </div>
            <div className="social-post post6">
              <span className="social-emoji">⭐</span>
              <h4>LỐI SỐNG ADHD</h4>
              <p>Sống cuộc sống ADHD tốt nhất của bạn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta-container">
          <span className="cute-character">🧠</span>
          <h2>Chúng ta vẫn còn nhiều điều để học về ADHD</h2>
          <p>
            Bất kể bạn đang ở đâu trong hành trình ADHD, chúng tôi có thể đảm bảo rằng bạn có thể học hỏi từ nội dung của chúng tôi. Làm thế nào
            chúng tôi có thể đảm bảo điều đó? Chúng tôi đã viết nội dung về ADHD trong nhiều năm và chúng tôi vẫn học được điều mới mỗi lần.
          </p>
          <button className="btn-primary">Xem Blog ADHD của chúng tôi</button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default LandingPage