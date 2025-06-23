// Team.jsx - Component trang Team đã sửa lỗi
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

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

  return (
    <>
      <Header />
      
      <div className="team-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="team-hero-content">
            <h1>Đội Ngũ Thành Viên</h1>
            <p>
              Gặp gỡ những thành viên tài năng và nhiệt huyết của chúng tôi - những người đã cùng nhau 
              xây dựng nên một dự án ý nghĩa về ADHD với kiến thức chuyên môn và tinh thần đồng đội tuyệt vời.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="team-container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                {/* Image */}
                <div className="team-card-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = '/placeholder-avatar.png'; // Fallback image
                    }}
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
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedMember && (
          <div className="team-modal-overlay" onClick={handleOverlayClick}>
            <div className="team-modal">
              {/* Modal Header */}
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
                    <p>{selectedMember.position}</p>
                    <div className="team-modal-meta">
                      <div className="team-modal-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                        {selectedMember.experience}
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

              {/* Modal Content */}
              <div className="team-modal-content">
                {/* About */}
                <section className="team-modal-section">
                  <h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Về thành viên
                  </h3>
                  <p>{selectedMember.fullBio}</p>
                </section>

                {/* Education & Experience */}
                <div className="team-modal-grid">
                  <section>
                    <h4>Học vấn</h4>
                    <p>{selectedMember.education}</p>
                  </section>
                  
                  <section>
                    <h4>Kinh nghiệm</h4>
                    <p>{selectedMember.experience} trong lĩnh vực chuyên môn</p>
                  </section>
                </div>

                {/* Certifications */}
                {selectedMember.certifications && selectedMember.certifications.length > 0 && (
                  <section className="team-modal-section">
                    <h4>Chứng chỉ & Kỹ năng</h4>
                    <div className="team-certifications">
                      {selectedMember.certifications.map((cert, index) => (
                        <span key={index} className="team-certification-tag">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Achievements */}
                {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                  <section className="team-modal-section">
                    <h4>Thành tựu nổi bật</h4>
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
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="team-contact-link email"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Email
                    </a>
                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="team-contact-link phone"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      Điện thoại
                    </a>
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
                  e.target.src = '/placeholder-avatar.png';
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