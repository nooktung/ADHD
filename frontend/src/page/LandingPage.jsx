"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/LandingPage.css"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const stories = [
    {
      id: 1,
      name: "Nguyễn Như Thành Đạt",
      age: 18,
      avatar: "Đ",
      title: "Nguyễn Như Thành Đạt được chẩn đoán ADHD ở tuổi 16 tại Việt Nam",
      content:
        "Tôi thực ra đã được chẩn đoán mắc chứng tự kỷ trong những năm đầu đời trước đây, và bố tôi cũng bị tự kỷ. Người bạn thân nhất của tôi cũng bị ADHD kết hợp. Tôi nghĩ rằng không ai có thể mắc chứng tự kỷ và ADHD cùng lúc nhưng sau đó anh tôi đã được chẩn đoán mắc cả 2 hội chứng này. Tôi đã nghiên cứu về ADHD một thời gian để cố gắng hiểu người bạn thân nhất của mình. Sau đó, tôi nhận ra rằng tôi thực sự liên quan đến hầu hết các hội chứng và tôi tự hỏi 'Khoan đã…mình có bị ADHD không?' Vì vậy tôi đã yêu cầu mẹ đưa tôi đi chẩn đoán trước sinh nhật 17 tuổi của tôi vài tháng. Và thật sự, điều đó đã xảy ra.",
      currentAge: 18,
      country: "Việt Nam",
      diagnosedAt: 16,
      buttonColor: "#ec4899",
      link: "/adhd-story1",
    },
    {
      id: 2,
      name: "Nguyễn Ngọc Hiếu",
      age: 24,
      avatar: "H",
      title: "Nguyễn Ngọc Hiếu được chẩn đoán ADHD ở tuổi 18 tại Việt Nam",
      content:
        "Tôi đã từng là người không thể chú ý trong thời gian quá dài, tôi hay quên hơn những người khác, tôi viết chữ rất xấu và thường không thể ngồi yên, giáo viên chủ nhiệm lớp 3 của tôi đã bảo bố mẹ tôi thử tham khảo ý kiến ​​của một nhà tâm lý học. Tôi đã cố hỏi bố mẹ tôi về chẩn đoán và bố mẹ tôi đã quên mất chẩn đoán đó vì nó đã xảy ra từ rất lâu rồi. Đến thời điểm hiện tại khi tôi đang học đại học, tôi vẫn gặp phải những vấn đề tương tự nên lần này tôi quyết định đi khám bác sĩ tâm thần và vâng, tôi đã nhận được câu trả lời chính xác, đó là ADHD.",
      currentAge: 24,
      country: "Việt Nam",
      diagnosedAt: 18,
      buttonColor: "#0d9488",
      link: "/adhd-story2",
    },
    {
      id: 3,
      name: "Phan Sỹ Hưng",
      age: 31,
      avatar: "H",
      title: "Phan Sỹ Hưng được chẩn đoán ADHD ở tuổi 27 tại Việt Nam",
      content:
        "Tôi cảm thấy như cả cuộc đời mình, tôi đã phải bù đắp cho những điều nhỏ nhặt dường như khiến cuộc sống của tôi và của bất kỳ ai khác trở nên khó khăn hơn. Khi Covid-19 tấn công, tôi đã không nhận ra não mình cần cấu trúc đó đến mức nào. Khi ngồi ở nhà với gia đình và con, tôi nhận thấy (những gì tôi biết bây giờ là các triệu chứng của ADHD/Tự kỷ) mình đã chi bao nhiêu tiền cho những món đồ vô nghĩa, hoặc tôi đã ăn quá nhiều/vô thức như thế nào. Tôi bắt đầu nhận ra rằng tất cả những việc tôi đang làm đều không 'bình thường' vì tôi sẽ thấy gia đình mình không phải vật lộn với những điều tương tự.",
      currentAge: 31,
      country: "Việt Nam",
      diagnosedAt: 27,
      buttonColor: "#ec4899",
      link: "/adhd-story3",
    },
    {
      id: 4,
      name: "Trần Mai Thảo Vy",
      age: 21,
      avatar: "V",
      title: "Trần Mai Thảo Vy được chẩn đoán ADHD ở tuổi 21 tại Việt Nam",
      content:
        "Tôi nghĩ mình đang tiến đến tình trạng kiệt sức vì áp lực công việc. ADHD luôn ở trong tâm trí tôi kể từ khi được một người quản lý mà tôi làm việc cùng nhắc đến cách đây 9 năm. Khi đó, bác sĩ tâm thần của tôi đã bác bỏ điều đó, người đang điều trị chứng trầm cảm cho tôi. Tôi đã nghiên cứu, nhưng vẫn hoài nghi. Cuối cùng, tôi chỉ đặt lịch hẹn vì tôi đang tiến đến tình trạng sụp đổ và cháy rụi.",
      currentAge: 21,
      country: "Việt Nam",
      diagnosedAt: 21,
      buttonColor: "#3b82f6",
      link: "/adhd-story4",
    },
    {
      id: 5,
      name: "Lê Khắc Hải",
      age: 23,
      avatar: "H",
      title: "Lê Khắc Hải được chẩn đoán ADHD ở tuổi 23 tại Việt Nam",
      content:
        "Tôi đã vật lộn với sức khỏe tâm thần của mình trong nhiều năm và mặc dù đã dùng thuốc nhưng nó không giúp ích theo đúng cách. Tôi thấy mình đang dành từng chút năng lượng để cố gắng hoạt động 'bình thường'. Sau khi vật lộn ở trường đại học, tôi quyết định xem liệu có điều gì khác đang xảy ra không và cuối cùng nghĩ rằng đó có thể là ADHD.",
      currentAge: 23,
      country: "Việt Nam",
      diagnosedAt: 23,
      buttonColor: "#22c55e",
      link: "/adhd-story5",
    },
    {
      id: 6,
      name: "Nguyễn Mai Trang",
      age: 30,
      avatar: "T",
      title: "Nguyễn Mai Trang được chẩn đoán ADHD ở tuổi 27 tại Việt Nam",
      content:
        "Tôi luôn để lại các dự án ở trường đến phút cuối (kể cả những môn tôi thích) và đôi khi từ chối làm dự án ở những môn tôi ghét. Tôi không thích bài tập về nhà, tôi liên tục quên những thứ như đồ dùng học tập quan trọng và những cuộc trò chuyện tôi đã có vào ngày hôm trước. Tôi không lắng nghe trong lớp và luôn nhìn chằm chằm ra cửa sổ hoặc vẽ vào vở đã trống.",
      currentAge: 30,
      country: "Việt Nam",
      diagnosedAt: 27,
      buttonColor: "#8b5cf6",
      link: "/adhd-story6",
    },
    {
      id: 7,
      name: "Lương Ngọc Mai",
      age: 22,
      avatar: "M",
      title: "Lương Ngọc Mai được chẩn đoán ADHD ở tuổi 20 tại Việt Nam",
      content:
        "Tôi đang làm luận văn thạc sĩ thì nhận ra mình đã làm liên tục trong 8 tiếng mà không ăn gì. Sau đó, tôi nhận ra rằng trong suốt những năm qua, 'khả năng' tập trung tuyệt vời 'bất ngờ' (hoặc gần đến hạn chót) là lý do duy nhất khiến tôi vượt qua được kỳ thi đại học. Tôi không thể chú ý trong lớp học nên đây là giải pháp duy nhất của tôi. Nhưng tôi biết điều đó không lành mạnh và tôi đã đọc thêm về nó và tìm thấy thuật ngữ 'tập trung cao độ'.",
      currentAge: 22,
      country: "Việt Nam",
      diagnosedAt: 20,
      buttonColor: "#f97316",
      link: "/adhd-story7",
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

  // Scroll to top when story modal link changes (for full story)
  useEffect(() => {
    if (selectedStory && selectedStory.link) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedStory]);

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
              <div style={{ textAlign: 'center', marginTop: 24 }}>
                <Link to={selectedStory.link} className="full-story-btn" style={{ padding: '10px 24px', background: '#2563eb', color: '#fff', borderRadius: 8, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                  Đọc đầy đủ câu chuyện
                </Link>
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
              src="logo.jpg"
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

      {/* Features Section - Updated with interactive cards */}
      <section className="features">
        <div className="features-container">
          <h2>Tìm hiểu về ADHD với nội dung minh họa của chúng tôi!</h2>
          <p className="features-subtitle">
            Chúng tôi kết hợp tất cả các đặc điểm để giúp bạn hiểu và khám phá điều gì đó về bản thân.
          </p>

          <div className="features-new-layout">
            {/* Left Large Card - Clickable */}
            <Link to="/adhd-awareness" className="left-large-card">
              <div className="cute-brain-container">
                <span className="cute-brain">🧠</span>
              </div>
              <h3 className="main-question">Nhận thức về ADHD</h3>
              <p className="subtitle-text">
                Tăng cường nhận thức về ADHD rất quan trọng để giảm kỳ thị, giúp chẩn đoán và điều trị sớm,
                từ đó nâng cao chất lượng cuộc sống cho người mắc bệnh.
              </p>
            </Link>

            <div className="right-section">
              {/* Triệu chứng Card - Horizontal Layout */}
              <div className="horizontal-card" style={{ marginBottom: '24px', background: '#e8c5e8' }}>
                <Link to="/adhd-symptoms" style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '100%', textDecoration: 'none', color: 'inherit' }}>
                  <div className="workbook-icon" style={{ flex: '0 0 60px' }}>
                    <span style={{ fontSize: '70px' }}>📚</span>
                  </div>
                  <div className="workbook-text" style={{ flex: 1 }}>
                    <h3 className="main-question" style={{ fontSize: '25px', color: '#8b4a8b', marginBottom: '8px' }}>Triệu chứng</h3>
                    <p className="subtitle-text" style={{ fontSize: '15px', color: '#8b4a8b', margin: 0, whiteSpace: 'normal' }}>
                      Các triệu chứng ADHD thường bao gồm sự giảm chú ý, tính tăng động và tính xung động, nhưng có thể biểu hiện rất đa dạng về hình thái và cường độ, đôi khi bị che lấp hoặc không được nhận diện trong nhiều năm.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Horizontal Card - Clickable */}
              <div className="horizontal-card">
                <Link to="/adhd-life">
                  <div className="workbook-icon">
                    <span>⚖️</span>
                  </div>
                  <div className="workbook-text">
                    <h3>Sống chung với ADHD</h3>
                    <p style={{ marginTop: '8px' }}>
                      Sống chung với ADHD bao gồm việc vượt qua những thách thức độc đáo và khai thác điểm mạnh của từng cá nhân. Điều này thường có nghĩa là phải đối mặt với sự tập trung không ổn định, kiểm soát sự bốc đồng và tìm ra các chiến lược để sắp xếp các công việc hàng ngày
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container" style={{display: 'flex', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <div className="stats-content" style={{flex: 1, minWidth: 280}}>
            <h2>Tại sao việc nâng cao nhận thức về ADHD là rất quan trọng:</h2>
            <div className="stat-item">
              <div className="stat-number">5%</div>
              <div className="stat-text">
                <div className="stat-description">người trưởng thành mắc ADHD theo các nghiên cứu gần đây</div>
                <p className="stat-detail">
                  Khoảng 8 triệu người trưởng thành ở Hoa Kỳ bị ảnh hưởng bởi ADHD. ADHD không chỉ ảnh hưởng đến trẻ em.
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
          <div className="stats-image" style={{flex: '0 0 340px', maxWidth: 340, minWidth: 220, display: 'flex', justifyContent: 'center'}}>
            <img src="/image2.jpg" alt="Nâng cao nhận thức về ADHD" style={{width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 2px 12px #0002'}} />
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
                <Link to={post.link} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
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
                  style={{ backgroundColor: story.buttonColor }}
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
            <h2>Theo dõi chúng tôi trên Mạng Xã Hội!</h2>
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
                  <img src="/logo.jpg" alt="Bản Giao Hưởng Tập Trung" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div className="profile-info">
                  <h3>BẢN GIAO HƯỞNG TẬP TRUNG</h3>
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