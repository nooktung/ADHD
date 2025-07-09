// Enhanced Team.jsx - Component with Realistic Student Profiles and EmailJS Integration
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Team.css';
import emailjs from '@emailjs/browser';

// Popup Notification Component (reused from ContactUs)
const PopupNotification = ({ type, message, isVisible, onClose }) => {
  if (!isVisible) return null;

  const getNotificationStyle = () => {
    const baseStyle = {
      position: 'fixed',
      top: '20px',
      right: '20px',
      maxWidth: '400px',
      padding: '16px 20px',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 9999,
      animation: 'slideInRight 0.4s ease-out',
      border: '1px solid',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };

    if (type === 'success') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        borderColor: '#10b981',
        color: 'white'
      };
    } else {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        borderColor: '#ef4444',
        color: 'white'
      };
    }
  };

  const getIcon = () => {
    if (type === 'success') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      );
    } else {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      );
    }
  };

  return (
    <div 
      style={getNotificationStyle()}
      onClick={onClose}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
      }}
    >
      <div style={{ flexShrink: 0 }}>
        {getIcon()}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', marginBottom: '4px' }}>
          {type === 'success' ? 'Gửi email thành công!' : 'Có lỗi xảy ra!'}
        </div>
        <div style={{ opacity: 0.9, fontSize: '13px' }}>
          {message}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{
          background: 'none',
          border: 'none',
          color: 'currentColor',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          opacity: 0.7,
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0.7'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
};

// Quick Email Modal Component
const QuickEmailModal = ({ isOpen, onClose, recipient, onSendEmail }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && recipient) {
      setFormData(prev => ({
        ...prev,
        subject: `Liên hệ từ website ADHD - Bản Giao Hưởng Tập Trung`,
        message: `Xin chào ${recipient.name},\n\nTôi muốn liên hệ với bạn về dự án ADHD - Bản Giao Hưởng Tập Trung.\n\n`
      }));
    }
  }, [isOpen, recipient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSendEmail(formData, recipient);
      setFormData({
        senderName: '',
        senderEmail: '',
        phone: '',
        subject: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !recipient) return null;

  return (
    <div className="email-modal-overlay" onClick={handleOverlayClick}>
      <div className="email-modal">
        <div className="email-modal-header">
          <h3>Gửi email cho {recipient.name}</h3>
          <button onClick={onClose} className="email-modal-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="email-modal-form">
          <div className="email-form-group">
            <label>Tên của bạn *</label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              placeholder="Nhập họ tên của bạn"
            />
          </div>
          
          <div className="email-form-group">
            <label>Email của bạn *</label>
            <input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="email-form-group">
            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Số điện thoại của bạn (không bắt buộc)"
            />
          </div>
          
          <div className="email-form-group">
            <label>Tiêu đề *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="email-form-group">
            <label>Nội dung tin nhắn *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              rows="6"
              placeholder="Nhập nội dung tin nhắn..."
            />
          </div>
          
          <div className="email-form-actions">
            <button
              type="button"
              onClick={onClose}
              className="email-btn-cancel"
              disabled={isSubmitting}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="email-btn-send"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="spinner" style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                  Đang gửi...
                </span>
              ) : (
                'Gửi email'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentView, setCurrentView] = useState('team'); // 'team' or 'sponsors'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextView, setNextView] = useState(null);
  const [emailModal, setEmailModal] = useState({ isOpen: false, recipient: null });
  const [notification, setNotification] = useState({
    isVisible: false,
    type: '',
    message: ''
  });
  
  const teamPageRef = useRef(null);
  const heroRef = useRef(null);
  const contentWrapperRef = useRef(null);

  // EmailJS Configuration - Template mới để gửi email cho team members
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_40nc14n',
    TEMPLATE_ID: 'template_eivf0vn', // Template mới cho team contact
    PUBLIC_KEY: '-X79ZPUklb2a2uDnH'
  };

  const teamMembers = [
    {
      id: 1,
      name: "Mai Thị Lan Anh",
      position: "Internal Coordinator",
      image: "Mai Thị Lan Anh.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Mai Thị Lan Anh là sinh viên năm 3 chuyên ngành Digital Marketing tại FPT University. Là Internal Coordinator của nhóm, Lan Anh có khả năng quản lý và tổ chức các hoạt động nội bộ hiệu quả, đảm bảo mọi thành viên trong nhóm đều có thể phát huy tối đa năng lực của mình. Với tính cách nhiệt tình và trách nhiệm cao, em luôn là cầu nối tin cậy giữa các bộ phận trong dự án.",
      email: "nookhanhtungf5@gmail.com",
      phone: "0987654321",
      location: "Thanh Hóa, Việt Nam",
      experience: "Sinh viên năm 3",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Sinh viên giỏi kỳ Summer 2024",
        "Sinh viên suất sắc kỳ Fall 2024",
        "Sinh viên suất sắc kỳ Spring 2025",
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/MLAnhVera.3504"
      }
    },
    {
      id: 2,
      name: "Lê Thị Thanh Hằng",
      position: "Leader",
      image: "Lê Thị Thanh Hằng.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Xin chào mọi người! Mình là Hằng – trưởng dự án 'Bản Giao Hưởng Tập Trung', hay như mọi người trong team hay gọi đùa là 'nhạc trưởng thiên tài'. Là người hay mất tập trung trong… chính cuộc họp do mình chủ trì, mình hiểu sâu sắc cảm giác của những người luôn phải 'chiến đấu' với bộ não của chính mình mỗi ngày. Với vai trò team leader, mình luôn cố gắng tạo ra môi trường làm việc thoải mái và hiệu quả cho tất cả thành viên.",
      email: "Bangsuong1122004@gmail.com",
      phone: "0367123217",
      location: "Hưng Yên, Việt Nam",
      experience: "Sinh viên năm 3",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Team Leader của 2 dự án môn học thành công",
        "Sinh viên giỏi kỳ Summer 2024",
        "Sinh viên suất sắc kỳ Fall 2024",
        "Sinh viên suất sắc kỳ Spring 2025",
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
      fullBio: "Chào mọi người mình là Bích Ngọc hay còn được gọi là Gemmie, Content Strategist của nhóm Alight. Hiện tại đang học năm 3 ngành Digital Marketing tại FPU, mình đảm nhiệm vai trò sáng tạo nội dung chính cho dự án 'ADHD – Bản giao hưởng tập trung'. Với niềm đam mê kể chuyện bằng ngôn từ và hình ảnh, mình không chỉ viết – mình tạo ra những nội dung có chiều sâu cảm xúc và luôn hướng đến sự kết nối với cộng đồng.",
      email: "iamgem2910@gmail.com",
      phone: "0344883495",
      location: "Tuyên Quang, Việt Nam",
      experience: "Sinh viên năm 3",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Content Writer cho Fanpage chính thức FPU (1 năm)",
        "Top 5 cuộc thi Viết content sáng tạo FPU 2024",
        "Freelance content cho 3 doanh nghiệp nhỏ",
        "Hoàn thành khóa thực tập Digital Marketing Agency",
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/obichngoc.466733"
      }
    },
    {
      id: 4,
      name: "Nguyễn Thị Phương Thảo",
      position: "Lead HR",
      image: "Nguyễn Thị Phương Thảo.jpg",
      shortBio: "K19 - Digital Marketing",
      fullBio: "Chào mọi người, mình là Nguyễn Thị Phương Thảo, người đời gọi mình là Thảo Nhi, hiện đang là em út của nhóm Alight. Mình đang học năm 2 ngành Digital Marketing và rất thích nghe nhạc, nhảy. Mình tham gia dự án ADHD vì muốn góp phần thay đổi góc nhìn của mọi người về ADHD - đây không phải là một bệnh mà là một hội chứng thần kinh phát triển cần được hiểu và tôn trọng.",
      email: "nguyenphuongthao22570@gmail.com",
      phone: "0385777969",
      location: "Hà Nội, Việt Nam",
      experience: "Sinh viên năm 2",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Tham gia tổ chức FPU Orientation Day cho K20",
        "Tình nguyện viên xuất sắc chương trình Mùa hè xanh",
        "Hoàn thành Workshop 'Kỹ năng lãnh đạo cho sinh viên'",
        "GPA 3.0+ trong 3 kỳ học liên tiếp"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/ihnotah22570"
      }
    },
    {
      id: 5,
      name: "Nguyễn Thùy Linh",
      position: "Event Leader",
      image: "Nguyễn Thùy Linh.jpg",
      shortBio: "K18 - Digital Marketing",
      fullBio: "Chào mọi người, mình là Nguyễn Thùy Linh, hiện đang giữ vai trò Event Leader trong nhóm Alight. Mình chịu trách nhiệm lên ý tưởng, lập kế hoạch và tổ chức các hoạt động, sự kiện chính của dự án. Là sinh viên năm 3 Digital Marketing, mình luôn cố gắng tạo ra những sự kiện ý nghĩa để mọi người có thể trực tiếp trải nghiệm và thấu hiểu hơn về ADHD.",
      email: "linhnths180037@fpt.edu.vn",
      phone: "0335346735",
      location: "Hà Nội, Việt Nam",
      experience: "Sinh viên năm 3",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Trưởng ban tổ chức Ngày hội tuyển sinh FPU 2024",
        "Giải Nhì cuộc thi 'Ý tưởng sự kiện sáng tạo' FPU",
        "Hoàn thành thực tập tại công ty Event Marketing",
        "Thành viên tích cực CLB Event & Marketing FPU"
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
      fullBio: "Chào mọi người, mình là Bùi Thị Thúy Duyên, sinh viên khóa K18 chuyên ngành Digital Marketing. Mình là người khá trầm tính nhưng luôn cố gắng hết mình trong công việc và học tập. Với vai trò Finance Lead, mình chịu trách nhiệm quản lý ngân sách và tài chính cho toàn bộ dự án. Mình tin rằng mỗi cơ hội đều là một trải nghiệm quý giá, và chỉ cần nghiêm túc thì kết quả sẽ tự đến.",
      email: "hs180254buithithuyduyen@gmail.com",
      phone: "0968387416",
      location: "Hà Nội, Việt Nam",
      experience: "Sinh viên năm 3",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Nhận học bổng khuyến khích học tập",
        "Hoàn thành khóa thực tập Kế toán doanh nghiệp",
        "GPA 3.3+ trong 4 kỳ học liên tiếp"
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/bui.t.duyen.904"
      }
    },
    {
      id: 7,
      name: "Vũ Thị Phương Linh",
      position: "External Relations",
      image: "Vũ Thị Phương Linh.jpg",
      shortBio: "K19 - Digital Marketing",
      fullBio: "Chào mọi người, mình là Vũ Thị Phương Linh, một mảnh ghép của nhóm Alight, đồng thời đảm nhiệm vai trò External Relations. Mình đang học năm 2 ngành Digital Marketing và phụ trách việc kết nối, xây dựng mối quan hệ với các đối tác bên ngoài. Mình tin rằng ADHD không phải là 'thiếu tập trung' hay 'bệnh lười biếng' mà là một hội chứng cần được hiểu đúng và nhìn nhận với sự cảm thông.",
      email: "linhvt@fpt.edu.vn",
      phone: "0903456789",
      location: "Hải Phòng, Việt Nam",
      experience: "Sinh viên năm 2",
      education: "Digital Marketing - Đại học FPT",
      certifications: [
        "Academic Skills for University Success",
        "Human Resource Management: HR for People Managers",
        "Human Resource Management and Leadership",
        "Information​ ​Systems",
        "Social Media Marketing"
      ],
      achievements: [
        "Đại diện sinh viên tham gia Hội thảo Marketing 2024",
        "Thành viên Ban đối ngoại Hội sinh viên khoa",
        "Kết nối thành công 3 đối tác cho dự án nhóm",
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/linh.phuongg.943173"
      }
    }
  ];
  const sponsors = [
    {
      id: 1,
      name: "ThS.BSCKI.BSNT. Nguyễn Trung Nghĩa",
      specialty: "Tâm lý – Tâm thần",
      image: "Nguyễn Trung Nghĩa.jpg",
      shortBio: "Phó Giám đốc Trung tâm Chăm sóc sức khỏe tinh thần, Bệnh viện Đa khoa Quốc tế Vinmec Times City",
      fullBio: "ThS.BSCKI Nguyễn Trung Nghĩa là chuyên gia uy tín trong lĩnh vực Tâm lý - Tâm thần với kinh nghiệm dày đan trong cả điều trị lâm sàng và đào tạo. Bác sĩ đã tốt nghiệp Thủ khoa chương trình đào tạo Bác sĩ Nội tâm thần tượng tại Đại học Y Dược TP.HCM và liên tục tham gia các khóa đào tạo chuyên sâu tại nhiều quốc gia như Thái Lan, Malaysia, Nhật Bản, Hà Lan. Hiện bác sĩ đang giữ vai trò lãnh đạo tại Vinmec, giảng dạy tại VinUni và là tác giả sách, diễn giả cho hơn 120 tổ chức, doanh nghiệp về sức khỏe tinh thần.",
      location: "Hà Nội, Việt Nam",
      position: [
        "Phó Giám đốc Trung tâm Chăm sóc sức khỏe tinh thần, Bệnh viện Đa khoa Quốc tế Vinmec Times City.",
        "Trưởng phân môn Tâm thần, Viện Khoa học Sức khỏe, Trường Đại học VinUni."
      ],
      training: [
        "Tốt nghiệp Thủ khoa Bác sĩ Nội ngoại chuyên ngành Tâm thần, Đại học Y Dược TP.HCM.",
        "Đào tạo về liệu pháp Kích thích từ xuyên sọ (TMS), Đại học Maastricht, Hà Lan.",
        "Đào tạo về các phương pháp dựa trên Chánh niệm tại Trung tâm Làng Mai (Thái Lan) và Trung tâm Thở và Cười (Hong Kong).",
        "Hoàn thành nhiều khóa đào tạo chuyên sâu về Tâm bệnh học, Y học giấc ngủ tại châu Á."
      ],
      expertise: [
        "Tâm thần học chính xác và kỹ thuật cao (Kích thích từ xuyên sọ - TMS).",
        "Tâm thần học Dinh dưỡng.",
        "Phong cách tăng động giảm chú ý (ADHD) và Tự kỷ (ASD) ở người trưởng thành.",
        "Kiểu nhân cách.",
        "Y học ngủ.",
        "Trị liệu Chấp nhận và Cam kết (ACT) & Chánh niệm (Chánh niệm)."
      ],
      program: [
        "Tác dụng trung gian của việc thực hành chánh niệm đối với hoạt động não bộ của sinh viên đại học: Một nghiên cứu về điện não đồ (Tạp chí IBRO Neuroscience Reports, 2023).",
        "Tỷ lệ rối loạn trầm cảm tại cơ sở chăm sóc sức khỏe ban đầu tại Thành phố Hồ Chí Minh (Tạp chí Tạp chí Quốc tế về Tâm thần học trong Y học, 2022).",
        "Nhiều báo cáo khoa học khác về sức khỏe tâm thần trong đại dịch COVID-19."
      ],
      philosophy :"“Trị liệu trên tinh thần hợp tác. Bạn là người hiểu nhất về cuộc đời mình và những vấn đề của mình. Tôi là người được đào tạo để có một chút hiểu biết về cách giải quyết các vấn đề đó. Chúng ta hợp tác cùng với nhau để vượt qua những khó khăn về sức khỏe tinh thần, cùng tìm kiếm hạnh phúc.” "
    },
    {
      id: 2,
      name: "ThS. BSCKI. BSNT. Huỳnh Thanh Tân",
      specialty: "Tâm lý – Tâm thần",
      image: "Huỳnh Thanh Tân.jpg",
      shortBio: "Bác sĩ Tâm thần, Trung tâm Chăm sóc Sức khỏe tinh thần, Bệnh viện Đa khoa Quốc tế Vinmec Times City",
      fullBio: "ThS.BSCKI. Huỳnh Thanh Tân là một bác sĩ có nền tảng học vấn vững chắc từ các trường đại học y khoa hàng đầu. Sau khi hoàn thành chương trình Bác sĩ Nội trú tại Đại học Y Dược TP.HCM, bác sĩ đã có kinh nghiệm giảng dạy tại Đại học Y khoa Phạm Ngọc Thạch và nhiều trường đại học khác. Với sự nhiệt huyết và chuyên môn sâu, bác sĩ Tân tập trung vào việc áp dụng các liệu pháp hiện đại, bao gồm cả liệu pháp dùng thuốc và không dùng thuốc, để mang lại hiệu quả điều trị tối ưu cho người bệnh.",
      location: "Hà Nội, Việt Nam",
      position: [
        "Trưởng phân môn Tâm thần, Viện Khoa học Sức khỏe, Trường Đại học VinUni."
      ],
      training: [
        "Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch.",
        "Hoàn thành chương trình Bác sĩ Nội trú, Bác sĩ Chuyên khoa I và Thạc sĩ chuyên ngành Tâm thần tại Đại học Y Dược TP.HCM.",
        "Tham gia các khóa đào tạo chuyên sâu về phương pháp nghiên cứu khoa học và các liệu pháp tâm lý hiện đại như Trị liệu Chấp nhận và Cam kết (ACT)."
      ],
      expertise: [
        "Chẩn đoán và điều trị toàn diện các rối loạn sức khỏe tinh thần (trầm cảm, lo âu, ADHD, tự kỷ, loạn thần, rối loạn lưỡng cực, rối loạn giấc ngủ...).",
        "Hóa dược trị liệu (sử dụng thuốc).",
        "Kích thích từ xuyên sọ (rTMS).",
        "Y học giấc ngủ, đặc biệt là trị liệu nhận thức hành vi cho chứng mất ngủ (i-CBT)."
      ],
      program: [
        "Báo cáo viên tại Hội nghị Quốc tế về Alzheimer & Sa sút trí tuệ lần thứ 4 (Barcelona, Tây Ban Nha) với đề tài về thang đo trầm cảm trong sa sút trí tuệ.",
        "Tác giả đề tài nghiên cứu cấp cơ sở về 'Lo âu, trầm cảm ở sinh viên các trường đại học tại TP.HCM năm 2023'.",
        "Tham luận tại Hội thảo Khoa học Quốc gia về 'Giải pháp phổ biến hoạt động tâm lý trị liệu trong nhà trường'."
      ],
      philosophy :"“Mỗi người trong chúng ta đều có những khó khăn và thử thách trong cuộc sống, tôi chỉ là người may mắn hơn khi được đào tạo những kỹ năng và có những công cụ hỗ trợ để có thể đương đầu với cuộc sống. Tôi muốn chia sẻ với bạn những điều này, để chặng đường của bạn đỡ gian nan hơn”.  "
    },
    {
      id: 3,
      name: "Thạc sĩ, Bác sĩ Nguyễn Minh Quyết",
      specialty: "Tâm lý – Tâm thần",
      image: "Nguyễn Minh Quyết.jpg",
      shortBio: "Bác sĩ Tâm thần tại Phòng Khám Chuyên khoa Yên Hoà",
      fullBio: "Thạc sĩ, Bác sĩ Nguyễn Minh Quyết là chuyên gia uy tín trong lĩnh vực Sức khỏe Tâm thần, được đào tạo chuyên sâu và bài bản từ Đại học Y Hà Nội với chương trình Bác sĩ Nội trú Tâm thần danh giá. Với kinh nghiệm làm việc tại các đơn vị y tế tuyến đầu như Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai và Bệnh viện Nhi Trung ương, bác sĩ có chuyên môn sâu rộng trong việc chẩn đoán và điều trị các rối loạn tâm lý - tâm thần. Hiện nay, bác sĩ Quyết đang công tác tại Phòng khám Chuyên khoa Yên Hoà góp phần quan trọng vào công tác chăm sóc sức khỏe tinh thần",
      location: "Hà Nội, Việt Nam",
      position: [
        "Bác sĩ điều trị tại Khoa Tâm thần, Bệnh viện Nhi Trung ương.",
        "Giảng viên Bộ môn Tâm thần, Đại học Y Hà Nội.",
        "Bác sĩ Nội trú, Viện sức khỏe Tâm thần Bệnh viện Bạch Mai.",
        "Hiện nay, bác sĩ Quyết đang công tác tại Phòng Khám Chuyên khoa Yên Hoà."
      ],
      training: [
        "Tốt nghiệp Đại học Y Hà Nội.",
        "Hoàn thành chương trình Bác sĩ Nội trú chuyên ngành Tâm thần tại Đại học Y Hà Nội."
      ],
      collaborate:[
        "Bác sĩ khoa Tâm thần, Bệnh viện Nhi Trung ương.",
        "Giảng viên bộ môn Tâm thần, Đại học Y Hà Nội.",
        "Bác sĩ nội trú, Viện sức khỏe Tâm thần Bệnh viện Bạch Mai."
      ],
      expertise: [
        "Tâm thần, tâm lý.",
        "Rối loạn tự kỷ: Chậm nói, giảm tương tác, ít nhìn mắt,…",
        "Rối loạn tăng động giảm chú ý: Tăng hoạt động, không tập trung, học kém.",
        "Rối loạn tic: Nháy mắt, nhếch mũi, khịt mũi, hắng giọng, thở rướn, thở dài.",
        "Rối loạn giấc ngủ: Mất ngủ, khó vào giấc, ngủ hay tỉnh, hay mơ.",
        "Rối loạn lo âu: Căng thẳng, lo lắng, hồi hộp, vã mồ hôi,…",
        "Rối loạn trầm cảm: Buồn chán, mệt mỏi, thiếu tự tin, thiếu động lực.",
        "Rối loạn stress: Căng thẳng, ăn kém, ngủ kém,…",
        "Rối loạn dạng cơ thể: Đau đầu, đau ngực, đau bụng, mất ngủ, lo lắng,…"
      ],
      program: [
        "Liên quan giữa nhân cách với nhóm triệu chứng da ở người bệnh rối loạn cơ thể hóa.",
        "Đặc điểm nhân cách ở người bệnh rối loạn cơ thể hóa điều trị nội trú tại Viện Sức khỏe Tâm thần."
      ],
    },
  ];

  // Show notification
  const showNotification = (type, message) => {
    setNotification({
      isVisible: true,
      type,
      message
    });

    // Auto hide after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  // Hide notification
  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Open email modal
  const openEmailModal = (recipient) => {
    setEmailModal({ isOpen: true, recipient });
    document.body.style.overflow = 'hidden';
  };

  // Close email modal
  const closeEmailModal = () => {
    setEmailModal({ isOpen: false, recipient: null });
    document.body.style.overflow = 'unset';
  };

  // Send email with EmailJS - Updated template params
  const sendEmailWithEmailJS = async (formData, recipient) => {
    try {
      const templateParams = {
        to_name: recipient.name,
        to_email: recipient.email,
        from_name: formData.senderName,
        from_email: formData.senderEmail,
        phone: formData.phone || 'Không cung cấp',
        message: formData.message,
        subject: formData.subject,
        reply_to: formData.senderEmail,
        website: 'ADHD - Bản Giao Hưởng Tập Trung'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      showNotification('success', `Email đã được gửi thành công đến ${recipient.name}!`);
      return { success: true };
    } catch (error) {
      console.error('EmailJS Error:', error);
      showNotification('error', `Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.`);
      throw error;
    }
  };

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
        } else if (emailModal.isOpen) {
          closeEmailModal();
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedMember, zoomedImage, emailModal.isOpen]);

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
        {/* Popup Notification */}
        <PopupNotification
          type={notification.type}
          message={notification.message}
          isVisible={notification.isVisible}
          onClose={hideNotification}
        />

        {/* Quick Email Modal */}
        <QuickEmailModal
          isOpen={emailModal.isOpen}
          onClose={closeEmailModal}
          recipient={emailModal.recipient}
          onSendEmail={sendEmailWithEmailJS}
        />

        {/* Hero Section */}
        <section ref={heroRef} className={`team-hero${currentView === 'sponsors' ? ' sponsor-hero' : ''}`}>
          {/* Navigation Arrows */}
          {currentView === 'team' && !isTransitioning && (
            <button 
              className="hero-nav-arrow hero-nav-right"
              onClick={() => switchView('sponsors')}
              aria-label="Xem Các bên chuyên môn"
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
              {currentView === 'team' ? 'Đội Ngũ Thành Viên' : 'Các bên chuyên môn'}
            </h1>
            <p>
              {currentView === 'team' 
                ? 'Gặp gỡ những thành viên tài năng và nhiệt huyết của chúng tôi - những sinh viên FPT University đã cùng nhau xây dựng nên một dự án ý nghĩa về ADHD với tinh thần học hỏi và đồng đội tuyệt vời.'
                : 'Chúng tôi xin trân trọng cảm ơn các chuyên gia Tâm lý - Tâm thần đã tin tưởng, hỗ trợ và đồng hành cùng chúng tôi trong hành trình phát triển dự án ADHD-Bản giao hưởng tập trung, mang lại giá trị tích cực cho cộng đồng.'
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
                    <p className="team-card-position sponsor-category">{sponsor.specialty}</p>
                    <p className="team-card-bio">{sponsor.shortBio}</p>

                    {/* Contact Info */}
                    <div className="team-card-info">
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
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedMember && (
          <div className="team-modal-overlay" onClick={handleOverlayClick}>
            <div className="team-modal">
              <div className={currentView === 'sponsors' ? 'sponsor-modal-header' : 'team-modal-header'}>
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
                      e.target.src = currentView === 'team' ? '/placeholder-avatar.png' : '/placeholder-company.png';
                    }}
                  />
                  <div className="team-modal-info">
                    <h2>{selectedMember.name}</h2>
                    <p>{currentView === 'team' ? selectedMember.position : selectedMember.specialty}</p>
                    <div className="team-modal-meta">
                      <div className="team-modal-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                        {currentView === 'team' ? selectedMember.experience : 'Chuyên gia Tâm lý - Tâm thần'}
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
                    {currentView === 'team' ? 'Về thành viên' : 'Về chuyên gia'}
                  </h3>
                  <p>{selectedMember.fullBio}</p>
                </section>

                {/* Education & Experience / Position & Training */}
                {currentView === 'team' ? (
                  <>
                    <section className="team-modal-section">
                      <h4>Học vấn</h4>
                      <p>{selectedMember.education}</p>
                    </section>
                    <section className="team-modal-section">
                      <h4>Trình độ</h4>
                      <p>{selectedMember.experience}</p>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="team-modal-section">
                      <h4>Chức vụ</h4>
                      <ul className="sponsor-position-list">
                        {selectedMember.position?.map((pos, index) => (
                          <li key={index} className="sponsor-position-item">
                            <span className="sponsor-position-bullet"></span>
                            <span>{pos}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section className="team-modal-section">
                      <h4>Đào tạo & Chứng chỉ</h4>
                      <ul className="sponsor-training-list">
                        {selectedMember.training?.map((train, index) => (
                          <li key={index} className="sponsor-training-item">
                            <span className="sponsor-training-bullet"></span>
                            <span>{train}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </>
                )}

                {/* Certifications / Expertise */}
                {currentView === 'team' && selectedMember.certifications && (
                  <section className="team-modal-section">
                    <h4>Chứng chỉ & Kỹ năng</h4>
                    <div className="team-certifications">
                      {selectedMember.certifications.map((item, index) => (
                        <span key={index} className="team-certification-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Expertise for Sponsors */}
                {currentView === 'sponsors' && selectedMember.expertise && (
                  <section className="team-modal-section">
                    <h4>Lĩnh vực chuyên môn sâu</h4>
                    <ul className="sponsor-expertise">
                      {selectedMember.expertise.map((item, index) => (
                        <li key={index} className="sponsor-expertise-item">
                          <span className="sponsor-expertise-bullet"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Achievements / Research */}
                {currentView === 'team' && selectedMember.achievements && selectedMember.achievements.length > 0 && (
                  <section className="team-modal-section">
                    <h4>Thành tích học tập & Hoạt động</h4>
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

                {/* Research & Publications for Sponsors */}
                {currentView === 'sponsors' && selectedMember.program && selectedMember.program.length > 0 && (
                  <section className="team-modal-section">
                    <h4>Nghiên cứu & Công trình khoa học</h4>
                    <ul className="sponsor-research-list">
                      {selectedMember.program.map((research, index) => (
                        <li key={index} className="sponsor-research-item">
                          <span className="sponsor-research-bullet"></span>
                          <span>{research}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Philosophy for Sponsors */}
                {currentView === 'sponsors' && selectedMember.philosophy && (
                  <section className="team-modal-section">
                    <h4>Triết lý điều trị</h4>
                    <div className="sponsor-philosophy">
                      <p>{selectedMember.philosophy}</p>
                    </div>
                  </section>
                )}

                {/* Contact & Social - Only for Team Members */}
                {currentView === 'team' && (
                  <section className="team-modal-section">
                    <h4>Liên hệ</h4>
                    <div className="team-contact-links">
                      {selectedMember.email && (
                        <button
                          onClick={() => openEmailModal(selectedMember)}
                          className="team-contact-link email"
                          type="button"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          Gửi Email
                        </button>
                      )}
                      {selectedMember.phone && (
                        <a
                          href={`tel:${selectedMember.phone.replace(/\s/g, '')}`}
                          className="team-contact-link phone"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          Gọi điện
                        </a>
                      )}
                      {selectedMember.socialLinks && Object.entries(selectedMember.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`team-contact-link social ${platform}`}
                        >
                          {platform !== 'facebook' && platform !== 'linkedin' && platform !== 'instagram' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                            </svg>
                          )}
                          {platform === 'facebook' ? 'Facebook' : platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {/* Quá trình công tác cho bác sĩ Nguyễn Minh Quyết */}
                {currentView === 'sponsors' && selectedMember.name === 'Thạc sĩ, Bác sĩ NGUYỄN MINH QUYẾT' && selectedMember.collaborate && (
                  <section className="team-modal-section">
                    <h4>Quá trình công tác</h4>
                    <ul className="sponsor-expertise">
                      {selectedMember.collaborate.map((item, index) => (
                        <li key={index} className="sponsor-expertise-item">
                          <span className="sponsor-expertise-bullet"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
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

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Email Modal Styles */
        .email-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          backdrop-filter: blur(4px);
        }

        .email-modal {
          background: white;
          border-radius: 16px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: modalSlideIn 0.3s ease-out;
        }

        .email-modal-header {
          padding: 24px 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 24px;
        }

        .email-modal-header h3 {
          margin: 0;
          color: #1f2937;
          font-size: 18px;
          font-weight: 600;
        }

        .email-modal-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s;
          color: #6b7280;
        }

        .email-modal-close:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .email-modal-form {
          padding: 0 24px 24px;
        }

        .email-form-group {
          margin-bottom: 20px;
        }

        .email-form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .email-form-group input,
        .email-form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
          font-family: inherit;
          box-sizing: border-box;
        }

        .email-form-group input:focus,
        .email-form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .email-form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .email-form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .email-btn-cancel {
          padding: 10px 20px;
          border: 1px solid #d1d5db;
          background: white;
          color: #374151;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }

        .email-btn-cancel:hover {
          background: #f9fafb;
          border-color: #9ca3af;
        }

        .email-btn-send {
          padding: 10px 24px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }

        .email-btn-send:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .email-btn-send:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .team-contact-link.email {
          background: none;
          border: none;
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
        }

        .team-contact-link.email:hover {
          background: #f3f4f6;
          color: #3b82f6;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .email-modal {
            width: 95%;
            margin: 10px;
          }
          
          .email-modal-header {
            padding: 20px 20px 0;
          }
          
          .email-modal-form {
            padding: 0 20px 20px;
          }
          
          .email-form-actions {
            flex-direction: column-reverse;
          }
          
          .email-btn-cancel,
          .email-btn-send {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Team;