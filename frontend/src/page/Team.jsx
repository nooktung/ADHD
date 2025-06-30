// Enhanced Team.jsx - Component with Smooth Page Transitions
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentView, setCurrentView] = useState('team'); // 'team' or 'sponsors'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextView, setNextView] = useState(null);
  
  const teamPageRef = useRef(null);
  const heroRef = useRef(null);
  const contentWrapperRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Mai Thị Lan Anh",
      position: "Internal Coordinator",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Mai Thị Lan Anh là chuyên gia điều phối nội bộ với kinh nghiệm trong lĩnh vực Digital Marketing. Cô có khả năng quản lý và tổ chức các hoạt động nội bộ hiệu quả, đảm bảo mọi thành viên trong nhóm đều có thể phát huy tối đa năng lực của mình. Với tính cách nhiệt tình và trách nhiệm cao, cô luôn là cầu nối tin cậy giữa các bộ phận.",
      email: "lananh@adhdcoach.vn",
      phone: "+84 987 654 321",
      location: "Hà Nội, Việt Nam",
      experience: "3+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["Digital Marketing Specialist", "Project Management", "Team Leadership"],
      achievements: [
        "Quản lý thành công 15+ dự án marketing",
        "Tăng hiệu quả làm việc nhóm 40%",
        "Nhân viên xuất sắc năm 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/MLAnhVera.3504"
      }
    },
    {
      id: 2,
      name: "Lê Thị Thanh Hằng",
      position: "Project Leader",
      image: "Lê Thị Thanh Hằng.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Lê Thị Thanh Hằng là một Project Leader kinh nghiệm với khả năng lãnh đạo và quản lý dự án xuất sắc. Cô đã dẫn dắt nhiều dự án thành công từ khâu lên ý tưởng đến triển khai. Với tư duy chiến lược và kỹ năng giao tiếp tốt, cô luôn đảm bảo các dự án được hoàn thành đúng tiến độ và chất lượng.",
      email: "thanhhang@adhdcoach.vn",
      phone: "+84 912 345 678",
      location: "Hưng Yên, Việt Nam",
      experience: "4+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["PMP Certified", "Agile Project Management", "Leadership Skills"],
      achievements: [
        "Dẫn dắt 20+ dự án thành công",
        "Tăng hiệu suất team 35%",
        "Giải thưởng Project Leader xuất sắc 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/bang.suong.75457"
      }
    },
    {
      id: 3,
      name: "Đỗ Bích Ngọc",
      position: "Content Strategist",
      image: "Đỗ Bích Ngọc.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Đỗ Bích Ngọc là một Content Strategist tài năng với khả năng sáng tạo nội dung độc đáo và hấp dẫn. Cô có hiểu biết sâu sắc về hành vi người dùng và xu hướng truyền thông số. Với kinh nghiệm trong việc xây dựng chiến lược nội dung đa nền tảng, cô đã giúp nhiều thương hiệu tiếp cận và tương tác hiệu quả với khách hàng.",
      email: "bichngoc@adhdcoach.vn",
      phone: "+84 908 765 432",
      location: "Tuyên Quang, Việt Nam",
      experience: "3+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["Content Marketing Specialist", "SEO Expert", "Social Media Strategy"],
      achievements: [
        "Tạo ra 100+ chiến dịch content thành công",
        "Tăng engagement rate lên 60%",
        "Content Creator của năm 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/obichngoc.466733"
      }
    },
    {
      id: 4,
      name: "Nguyễn Thị Phương Thảo",
      position: "Designer",
      image: "Nguyễn Thị Phương Thảo.jpg",
      shortBio: "K19 - Digital Marketing",
      fullBio: "Nguyễn Thị Phương Thảo là một Designer sáng tạo với đam mê thiết kế và nghệ thuật thị giác. Cô có khả năng biến những ý tưởng trừu tượng thành các sản phẩm thiết kế cụ thể và ấn tượng. Với kinh nghiệm trong thiết kế đa phương tiện, cô đã tạo ra nhiều tác phẩm được đánh giá cao về tính thẩm mỹ và hiệu quả truyền thông.",
      email: "phuongthao@adhdcoach.vn",
      phone: "+84 901 234 567",
      location: "Hà Nội, Việt Nam",
      experience: "2+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["Adobe Certified Expert", "UI/UX Design", "Graphic Design"],
      achievements: [
        "Thiết kế 50+ project thành công",
        "Giải nhất cuộc thi thiết kế sinh viên 2023",
        "Được featured trên 5+ tạp chí thiết kế"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/ihnotah22570?comment_id=Y29tbWVudDoxMjIxMTA2MTAyNTg4OTk2MTBfMTI1MTcwNzc4OTk0ODExMg%3D%3D"
      }
    },
    {
      id: 5,
      name: "Nguyễn Thùy Linh",
      position: "Designer",
      image: "Nguyễn Thùy Linh.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Nguyễn Thùy Linh là một Designer tài năng với chuyên môn về thiết kế trải nghiệm người dùng và giao diện. Cô có cái nhìn tinh tế về màu sắc, bố cục và typography. Với tinh thần học hỏi không ngừng và khả năng thích ứng nhanh với các xu hướng thiết kế mới, cô luôn tạo ra những sản phẩm thiết kế hiện đại và thu hút.",
      email: "thuylinh@adhdcoach.vn",
      phone: "+84 915 678 901",
      location: "Hà Nội, Việt Nam",
      experience: "3+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["UI/UX Specialist", "Adobe Creative Suite", "Design Thinking"],
      achievements: [
        "Thiết kế giao diện cho 30+ ứng dụng",
        "Tăng user experience score 45%",
        "Best Designer Award 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/thuy.linh.423951"
      }
    },
    {
      id: 6,
      name: "Bùi Thị Thúy Duyên",
      position: "Finance Lead",
      image: "Bùi Thị Thúy Duyên.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Bùi Thị Thúy Duyên là Finance Lead với khả năng quản lý tài chính chuyên nghiệp và tỉ mỉ. Cô có kiến thức sâu rộng về kế toán, ngân sách và phân tích tài chính. Với tính cách cẩn thận và có trách nhiệm cao, cô đảm bảo mọi hoạt động tài chính của team được thực hiện minh bạch và hiệu quả.",
      email: "thuyduyen@adhdcoach.vn",
      phone: "+84 902 345 789",
      location: "Hà Nội, Việt Nam",
      experience: "3+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["Financial Analysis", "Budget Management", "Accounting Fundamentals"],
      achievements: [
        "Quản lý ngân sách 20+ dự án thành công",
        "Tối ưu hóa chi phí 25%",
        "Financial Manager xuất sắc 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/bui.t.duyen.904"
      }
    },
    {
      id: 7,
      name: "Vũ Thị Phương Linh",
      position: "Design",
      image: "Vũ Thị Phương Linh.jpg",
      shortBio: "K19 - Digital Marketing",
      fullBio: "Vũ Thị Minh Thư là Marketing Analyst với khả năng phân tích dữ liệu và insight thị trường xuất sắc. Cô có kinh nghiệm trong việc nghiên cứu hành vi khách hàng, phân tích xu hướng thị trường và đưa ra các khuyến nghị chiến lược marketing hiệu quả. Với tư duy logic và kỹ năng phân tích sắc bén, cô là người đóng góp quan trọng trong việc định hướng các chiến dịch marketing của team.",
      email: "minhthu@adhdcoach.vn",
      phone: "+84 903 456 789",
      location: "Hải Phòng, Việt Nam",
      experience: "3+ năm",
      education: "Digital Marketing - Đại học FPT",
      certifications: ["Google Analytics Certified", "Data Analysis", "Market Research"],
      achievements: [
        "Phân tích 50+ chiến dịch marketing thành công",
        "Tăng ROI marketing 30%",
        "Best Analyst Award 2023"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/linh.phuongg.943173"
      }
    }
  ];

  const sponsors = [
    {
      id: 1,
      name: "Công ty TNHH Phát triển Công nghệ Giáo dục",
      category: "Nhà tài trợ chính",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "Đối tác chiến lược trong lĩnh vực giáo dục",
      fullBio: "Công ty TNHH Phát triển Công nghệ Giáo dục là đối tác chiến lược hàng đầu của chúng tôi trong việc phát triển các giải pháp giáo dục số. Với kinh nghiệm hơn 10 năm trong lĩnh vực công nghệ giáo dục, công ty đã hỗ trợ chúng tôi không chỉ về mặt tài chính mà còn chia sẻ chuyên môn và kinh nghiệm quý báu.",
      website: "https://edutech.com.vn",
      phone: "+84 24 3825 6789",
      location: "Hà Nội, Việt Nam",
      partnership: "3+ năm",
      industry: "Công nghệ Giáo dục",
      supportType: ["Tài chính", "Công nghệ", "Tư vấn chuyên môn"],
      achievements: [
        "Tài trợ phát triển 5+ ứng dụng giáo dục",
        "Hỗ trợ đào tạo 100+ sinh viên",
        "Đối tác tin cậy suốt 3 năm qua"
      ],
      socialLinks: {
        website: "https://edutech.com.vn",
        linkedin: "https://linkedin.com/company/edutech"
      }
    },
    {
      id: 2,
      name: "Quỹ Phát triển Khoa học và Công nghệ",
      category: "Nhà tài trợ nghiên cứu",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "Quỹ hỗ trợ nghiên cứu khoa học",
      fullBio: "Quỹ Phát triển Khoa học và Công nghệ là tổ chức phi lợi nhuận chuyên hỗ trợ các dự án nghiên cứu khoa học có tính ứng dụng cao. Quỹ đã tin tưởng và đầu tư vào dự án nghiên cứu về ADHD của chúng tôi, góp phần quan trọng vào việc phát triển những giải pháp hỗ trợ cộng đồng.",
      website: "https://sciencefund.gov.vn",
      phone: "+84 24 3976 5432",
      location: "Hà Nội, Việt Nam",
      partnership: "2+ năm",
      industry: "Nghiên cứu Khoa học",
      supportType: ["Tài chính nghiên cứu", "Hỗ trợ xuất bản", "Kết nối chuyên gia"],
      achievements: [
        "Tài trợ 3 dự án nghiên cứu lớn",
        "Hỗ trợ xuất bản 10+ bài báo khoa học",
        "Kết nối với 20+ chuyên gia trong nước và quốc tế"
      ],
      socialLinks: {
        website: "https://sciencefund.gov.vn"
      }
    },
    {
      id: 3,
      name: "Tập đoàn Y tế và Sức khỏe Việt Nam",
      category: "Đối tác y tế",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "Đối tác chuyên môn y tế",
      fullBio: "Tập đoàn Y tế và Sức khỏe Việt Nam là đối tác y tế chiến lược, cung cấp chuyên môn và hỗ trợ trong việc phát triển các giải pháp chăm sóc sức khỏe tâm thần. Với đội ngũ bác sĩ chuyên khoa tâm thần và tâm lý học hàng đầu, tập đoàn đã đóng góp quan trọng vào tính chính xác và độ tin cậy của dự án.",
      website: "https://vietnamhealth.vn",
      phone: "+84 28 3822 1234",
      location: "TP. Hồ Chí Minh, Việt Nam",
      partnership: "4+ năm",
      industry: "Y tế - Sức khỏe",
      supportType: ["Tư vấn chuyên môn", "Đào tạo", "Nghiên cứu lâm sàng"],
      achievements: [
        "Tư vấn cho 50+ ca bệnh ADHD",
        "Đào tạo 30+ chuyên gia tâm lý",
        "Nghiên cứu lâm sàng trên 200+ trường hợp"
      ],
      socialLinks: {
        website: "https://vietnamhealth.vn",
        facebook: "https://facebook.com/vietnamhealth"
      }
    },
    {
      id: 4,
      name: "Hiệp hội Tâm lý học Việt Nam",
      category: "Đối tác chuyên môn",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "Tổ chức chuyên môn tâm lý học",
      fullBio: "Hiệp hội Tâm lý học Việt Nam là tổ chức chuyên môn hàng đầu trong lĩnh vực tâm lý học tại Việt Nam. Hiệp hội đã hỗ trợ chúng tôi trong việc xây dựng các tiêu chuẩn chuyên môn, đảm bảo tính khoa học và hiệu quả của các giải pháp hỗ trợ ADHD.",
      website: "https://vpa.org.vn",
      phone: "+84 24 3573 8901",
      location: "Hà Nội, Việt Nam",
      partnership: "5+ năm",
      industry: "Tâm lý học",
      supportType: ["Chứng nhận chuyên môn", "Đào tạo", "Nghiên cứu"],
      achievements: [
        "Chứng nhận 15+ chương trình đào tạo",
        "Hỗ trợ nghiên cứu cho 25+ luận văn",
        "Tổ chức 10+ hội thảo chuyên môn"
      ],
      socialLinks: {
        website: "https://vpa.org.vn",
        linkedin: "https://linkedin.com/company/vpa"
      }
    }
  ];

  // Enhanced smooth transition function
  const switchView = useCallback((view) => {
    if (view === currentView || isTransitioning) return;
    
    setIsTransitioning(true);
    setNextView(view);
    
    // Add transitioning class to enable CSS transitions
    if (teamPageRef.current) {
      teamPageRef.current.classList.add('transitioning');
    }
    
    // Phase 1: Fade out current content
    if (contentWrapperRef.current) {
      contentWrapperRef.current.classList.add('exiting');
    }
    
    // Phase 2: Change hero background and content after delay
    setTimeout(() => {
      if (heroRef.current) {
        if (view === 'sponsors') {
          heroRef.current.classList.add('sponsor-hero');
        } else {
          heroRef.current.classList.remove('sponsor-hero');
        }
      }
      
      setCurrentView(view);
      
      // Phase 3: Fade in new content
      if (contentWrapperRef.current) {
        contentWrapperRef.current.classList.remove('exiting');
        contentWrapperRef.current.classList.add('entering');
      }
    }, 300);
    
    // Phase 4: Complete transition
    setTimeout(() => {
      setIsTransitioning(false);
      setNextView(null);
      
      if (teamPageRef.current) {
        teamPageRef.current.classList.remove('transitioning');
      }
      
      if (contentWrapperRef.current) {
        contentWrapperRef.current.classList.remove('entering');
      }
    }, 800);
  }, [currentView, isTransitioning]);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  const openImageZoom = (imageSrc, memberName) => {
    setZoomedImage({ src: imageSrc, name: memberName });
    document.body.style.overflow = 'hidden';
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close image zoom when clicking outside
  const handleImageZoomOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeImageZoom();
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          closeImageZoom();
        } else if (selectedMember) {
          closeModal();
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedMember, zoomedImage]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe team cards when they appear
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [currentView]);

  // Preload images for smooth transitions
  useEffect(() => {
    const allMembers = [...teamMembers, ...sponsors];
    allMembers.forEach((member) => {
      const img = new Image();
      img.src = member.image;
    });
  }, []);

  return (
    <>
      <Header />
      
      <div ref={teamPageRef} className={`team-page ${isTransitioning ? 'transitioning' : ''}`}>
        {/* Hero Section */}
        <section ref={heroRef} className={`team-hero${currentView === 'sponsors' ? ' sponsor-hero' : ''}`}>
          {/* Navigation Arrows */}
          {currentView === 'team' && !isTransitioning && (
            <button 
              className="hero-nav-arrow hero-nav-right"
              onClick={() => switchView('sponsors')}
              aria-label="Xem nhà tài trợ"
              disabled={isTransitioning}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          )}
          
          {currentView === 'sponsors' && !isTransitioning && (
            <button 
              className="hero-nav-arrow hero-nav-left"
              onClick={() => switchView('team')}
              aria-label="Xem đội ngũ"
              disabled={isTransitioning}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
          )}

          <div className="team-hero-content">
            <h1>
              {currentView === 'team' ? 'Đội Ngũ Thành Viên' : 'Nhà Tài Trợ & Đối Tác'}
            </h1>
            <p>
              {currentView === 'team' 
                ? 'Gặp gỡ những thành viên tài năng và nhiệt huyết của chúng tôi - những người đã cùng nhau xây dựng nên một dự án ý nghĩa về ADHD với kiến thức chuyên môn và tinh thần đồng đội tuyệt vời.'
                : 'Chúng tôi xin trân trọng cảm ơn các nhà tài trợ và đối tác đã tin tưởng, hỗ trợ và đồng hành cùng chúng tôi trong hành trình phát triển dự án ADHD Coach, mang lại giá trị tích cực cho cộng đồng.'
              }
            </p>
          </div>
        </section>

        {/* Content Container */}
        <section className="team-container">
          <div ref={contentWrapperRef} className={`content-wrapper ${currentView}`}>
            {/* Team Grid */}
            <div className={`team-grid ${currentView === 'team' ? 'active' : ''}`}>
              {teamMembers.map((member) => (
                <div key={member.id} className="team-card">
                  {/* Image */}
                  <div className="team-card-image">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = '/placeholder-avatar.png';
                      }}
                      loading="lazy"
                    />
                    <div className="team-card-overlay" />
                  </div>

                  {/* Content */}
                  <div className="team-card-content">
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-position">{member.position}</p>
                    <p className="team-card-bio">{member.shortBio}</p>

                    {/* Contact Info */}
                    <div className="team-card-info">
                      <div className="team-info-item">
                        <svg className="team-info-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        {member.email}
                      </div>
                      <div className="team-info-item">
                        <svg className="team-info-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {member.location}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => openModal(member)}
                      className="team-card-button"
                      disabled={isTransitioning}
                    >
                      Xem thêm
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sponsors Grid */}
            <div className={`team-grid ${currentView === 'sponsors' ? 'active' : ''}`}>
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="team-card sponsor-card">
                  {/* Image */}
                  <div className="team-card-image">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      onError={(e) => {
                        e.target.src = '/placeholder-company.png';
                      }}
                      loading="lazy"
                    />
                    <div className="team-card-overlay" />
                  </div>

                  {/* Content */}
                  <div className="team-card-content">
                    <h3 className="team-card-name">{sponsor.name}</h3>
                    <p className="team-card-position sponsor-category">{sponsor.category}</p>
                    <p className="team-card-bio">{sponsor.shortBio}</p>

                    {/* Contact Info */}
                    <div className="team-card-info">
                      <div className="team-info-item">
                        <svg className="team-info-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                        {sponsor.website || sponsor.industry}
                      </div>
                      <div className="team-info-item">
                        <svg className="team-info-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {sponsor.location}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => openModal(sponsor)}
                      className="team-card-button"
                      disabled={isTransitioning}
                    >
                      Xem thêm
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedMember && (
          currentView === 'team' ? (
            <div className="team-modal-overlay" onClick={handleOverlayClick}>
              <div className="team-modal">
                <div className="team-modal-header">
                  <button
                    onClick={closeModal}
                    className="team-modal-close"
                    aria-label="Đóng modal"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="team-modal-profile">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="team-modal-avatar"
                      onClick={() => openImageZoom(selectedMember.image, selectedMember.name)}
                      onError={(e) => {
                        e.target.src = '/placeholder-avatar.png';
                      }}
                    />
                    <div className="team-modal-info">
                      <h2>{selectedMember.name}</h2>
                      <p>{selectedMember.position || selectedMember.category}</p>
                      <div className="team-modal-meta">
                        <div className="team-modal-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                          </svg>
                          {selectedMember.experience || selectedMember.partnership}
                        </div>
                        <div className="team-modal-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {selectedMember.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-modal-content">
                  {/* About */}
                  <section className="team-modal-section">
                    <h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {currentView === 'team' ? 'Về thành viên' : 'Về đối tác'}
                    </h3>
                    <p>{selectedMember.fullBio}</p>
                  </section>

                  {/* Education & Experience / Industry & Partnership */}
                  <div className="team-modal-grid">
                    <section>
                      <h4>{currentView === 'team' ? 'Học vấn' : 'Lĩnh vực'}</h4>
                      <p>{selectedMember.education || selectedMember.industry}</p>
                    </section>
                    
                    <section>
                      <h4>{currentView === 'team' ? 'Kinh nghiệm' : 'Thời gian hợp tác'}</h4>
                      <p>{selectedMember.experience || selectedMember.partnership} {currentView === 'team' ? 'trong lĩnh vực chuyên môn' : 'đồng hành cùng dự án'}</p>
                    </section>
                  </div>

                  {/* Certifications / Support Types */}
                  {((currentView === 'team' && selectedMember.certifications) || (currentView === 'sponsors' && selectedMember.supportType)) && (
                    <section className="team-modal-section">
                      <h4>{currentView === 'team' ? 'Chứng chỉ & Kỹ năng' : 'Hình thức hỗ trợ'}</h4>
                      <div className="team-certifications">
                        {(selectedMember.certifications || selectedMember.supportType)?.map((item, index) => (
                          <span key={index} className="team-certification-tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Achievements */}
                  {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                    <section className="team-modal-section">
                      <h4>{currentView === 'team' ? 'Thành tựu nổi bật' : 'Đóng góp & Thành tựu'}</h4>
                      <ul className="team-achievements">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="team-achievement-item">
                            <span className="team-achievement-bullet"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Contact & Social */}
                  <section className="team-modal-section">
                    <h4>Liên hệ</h4>
                    <div className="team-contact-links">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="team-contact-link email"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          Email
                        </a>
                      )}
                      {selectedMember.phone && (
                        <a
                          href={`tel:${selectedMember.phone}`}
                          className="team-contact-link phone"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          Điện thoại
                        </a>
                      )}
                      {selectedMember.website && (
                        <a
                          href={selectedMember.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-contact-link social"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                          Website
                        </a>
                      )}
                      {selectedMember.socialLinks && Object.entries(selectedMember.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-contact-link social"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          ) : (
            <div className="sponsor-modal-overlay" onClick={handleOverlayClick}>
              <div className="sponsor-modal">
                <div className="sponsor-modal-header">
                  <button
                    onClick={closeModal}
                    className="sponsor-modal-close"
                    aria-label="Đóng modal"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="sponsor-modal-profile">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="sponsor-modal-avatar"
                      onClick={() => openImageZoom(selectedMember.image, selectedMember.name)}
                      onError={(e) => {
                        e.target.src = '/placeholder-company.png';
                      }}
                    />
                    <div className="sponsor-modal-info">
                      <h2>{selectedMember.name}</h2>
                      <p>{selectedMember.position || selectedMember.category}</p>
                      <div className="sponsor-modal-meta">
                        <div className="sponsor-modal-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                          </svg>
                          {selectedMember.experience || selectedMember.partnership}
                        </div>
                        <div className="sponsor-modal-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {selectedMember.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sponsor-modal-content">
                  {/* About */}
                  <section className="team-modal-section">
                    <h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {currentView === 'team' ? 'Về thành viên' : 'Về đối tác'}
                    </h3>
                    <p>{selectedMember.fullBio}</p>
                  </section>

                  {/* Education & Experience / Industry & Partnership */}
                  <div className="team-modal-grid">
                    <section>
                      <h4>{currentView === 'team' ? 'Học vấn' : 'Lĩnh vực'}</h4>
                      <p>{selectedMember.education || selectedMember.industry}</p>
                    </section>
                    
                    <section>
                      <h4>{currentView === 'team' ? 'Kinh nghiệm' : 'Thời gian hợp tác'}</h4>
                      <p>{selectedMember.experience || selectedMember.partnership} {currentView === 'team' ? 'trong lĩnh vực chuyên môn' : 'đồng hành cùng dự án'}</p>
                    </section>
                  </div>

                  {/* Certifications / Support Types */}
                  {((currentView === 'team' && selectedMember.certifications) || (currentView === 'sponsors' && selectedMember.supportType)) && (
                    <section className="team-modal-section">
                      <h4>{currentView === 'team' ? 'Chứng chỉ & Kỹ năng' : 'Hình thức hỗ trợ'}</h4>
                      <div className="team-certifications">
                        {(selectedMember.certifications || selectedMember.supportType)?.map((item, index) => (
                          <span key={index} className="team-certification-tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Achievements */}
                  {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                    <section className="team-modal-section">
                      <h4>{currentView === 'team' ? 'Thành tựu nổi bật' : 'Đóng góp & Thành tựu'}</h4>
                      <ul className="team-achievements">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="team-achievement-item">
                            <span className="team-achievement-bullet"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Contact & Social */}
                  <section className="team-modal-section">
                    <h4>Liên hệ</h4>
                    <div className="team-contact-links">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="team-contact-link email"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          Email
                        </a>
                      )}
                      {selectedMember.phone && (
                        <a
                          href={`tel:${selectedMember.phone}`}
                          className="team-contact-link phone"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          Điện thoại
                        </a>
                      )}
                      {selectedMember.website && (
                        <a
                          href={selectedMember.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-contact-link social"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                          Website
                        </a>
                      )}
                      {selectedMember.socialLinks && Object.entries(selectedMember.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-contact-link social"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )
        )}

        {/* Image Zoom Modal */}
        {zoomedImage && (
          <div className="image-zoom-overlay" onClick={handleImageZoomOverlayClick}>
            <div className="image-zoom-container">
              <button
                onClick={closeImageZoom}
                className="image-zoom-close"
                aria-label="Đóng phóng to ảnh"
              >
                ×
              </button>
              <img
                src={zoomedImage.src}
                alt={zoomedImage.name}
                className="image-zoom-image"
                onError={(e) => {
                  e.target.src = currentView === 'team' ? '/placeholder-avatar.png' : '/placeholder-company.png';
                }}
              />
              <div className="image-zoom-info">
                {zoomedImage.name}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Team;