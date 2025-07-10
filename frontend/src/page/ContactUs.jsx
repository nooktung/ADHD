import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ContactUs.css";
import emailjs from '@emailjs/browser';

// Popup Notification Component
const PopupNotification = ({ type, message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div 
      className={`popup-notification ${type}`}
      onClick={onClose}
    >
      <div className="icon">
        {type === 'success' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22,4 12,14.01 9,11.01"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        )}
      </div>
      <div className="content">
        <div className="title">
          {type === 'success' ? 'Gửi thành công!' : 'Có lỗi xảy ra!'}
        </div>
        <div className="message">
          {message}
        </div>
      </div>
      <button
        className="close-btn"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
};

// Simple Interactive Map Component
const SimpleInteractiveMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  const openGoogleMaps = () => {
    const address = "Đại Học FPT, Thạch Thất, Thạch Hòa, Hà Nội, Việt Nam";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsURL, '_blank');
  };

  const getDirections = () => {
    window.open('https://www.google.com/maps/dir//Đại+Học+FPT,+Thạch+Thất,+Thạch+Hòa,+Hà+Nội', '_blank');
  };

  const getEmbedUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863939077427!2d105.52437207503176!3d21.01254778063901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b465a4e65fb%3A0x30c0543b98670b31!2zxJDhuqFpIGjhu41jIEZQVCwgVGjhuqFjaCBUaOG6pXQsIFRow6FjaCBIw7JhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1704708123456!5m2!1svi!2s";
    
    if (mapType === 'satellite') {
      return baseUrl.replace('!5e0!', '!5e1!');
    }
    return baseUrl;
  };

  return (
    <div className="contact-map-container">
      <iframe
        src={getEmbedUrl()}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bản đồ tương tác Đại Học FPT"
      />
      <div className="map-action-buttons">
        <button
          className="map-action-button"
          onClick={getDirections}
          title="Xem chỉ đường chi tiết"
        >
          🚗 Chỉ đường
        </button>
        <button
          className="map-action-button"
          onClick={openGoogleMaps}
          title="Mở Google Maps ở tab mới"
        >
          🗺️ Mở Maps
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    type: '',
    message: ''
  });

  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_40nc14n',
    TEMPLATE_ID: 'template_li498ck',
    PUBLIC_KEY: '-X79ZPUklb2a2uDnH'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
          nameInputRef.current.style.boxShadow = '0 0 0 3px rgba(66, 153, 225, 0.3)';
          nameInputRef.current.style.borderColor = '#4299e1';
          
          setTimeout(() => {
            nameInputRef.current.style.boxShadow = '';
            nameInputRef.current.style.borderColor = '';
          }, 2000);
        }
      }, 500);
    }
  };

  const showNotification = (type, message) => {
    setNotification({
      isVisible: true,
      type,
      message
    });

    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const sendEmailWithEmailJS = async (formData) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Không cung cấp',
        message: formData.message,
        to_email: 'alight.fpt@gmail.com',
        subject: `Liên hệ từ ${formData.name} - Website ADHD`,
        reply_to: formData.email,
        website: 'Bản Giao Hưởng Tập Trung'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      return { success: true };
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name.trim()) {
        throw new Error('Vui lòng nhập họ và tên');
      }
      if (!formData.email.trim()) {
        throw new Error('Vui lòng nhập email');
      }
      if (!formData.message.trim()) {
        throw new Error('Vui lòng nhập nội dung tin nhắn');
      }

      await sendEmailWithEmailJS(formData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      showNotification('success', 'Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể!');
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('error', 'Vui lòng thử lại hoặc liên hệ trực tiếp: alight.fpt@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <PopupNotification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      <div className="contact-page-title">
        <div className="container">
          <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
        </div>
      </div>
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Hãy kết nối với chúng tôi!</h2>
              <p>
                Chúng tôi luôn sẵn sàng lắng nghe mọi ý kiến đóng góp của bạn để phát triển dịch vụ ngày càng tốt hơn. 
                Đội ngũ của chúng tôi cam kết hỗ trợ bạn trong hành trình hiểu về ADHD và tìm kiếm những giải pháp phù hợp.
              </p>
              <p>
                <strong>Thời gian làm việc:</strong><br/>
                Thứ 2 - Thứ 6: 9:00 - 17:00<br/>
                Thứ 7: 9:00 - 12:00<br/>
                Chủ nhật: Nghỉ
              </p>
              <div className="contact-social-icons">
                <a href="https://www.facebook.com/profile.php?id=61576988307181" className="contact-social-icon" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <button 
                  onClick={scrollToForm}
                  className="contact-social-icon" 
                  title="Gửi tin nhắn qua form liên hệ"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="contact-form" ref={formRef}>
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <input 
                    ref={nameInputRef}
                    type="text" 
                    name="name"
                    className="contact-form-control" 
                    placeholder="Họ và tên *" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="contact-form-group">
                  <input 
                    type="email" 
                    name="email"
                    className="contact-form-control" 
                    placeholder="Địa chỉ email *" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="contact-form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    className="contact-form-control" 
                    placeholder="Số điện thoại" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="contact-form-group">
                  <textarea 
                    name="message"
                    className="contact-form-control" 
                    placeholder="Nội dung tin nhắn *" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{ minHeight: '120px' }}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="contact-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <span className="spinner"></span>
                      Đang gửi...
                    </span>
                  ) : (
                    'Gửi tin nhắn'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-container">
            <SimpleInteractiveMap />
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>Địa chỉ văn phòng</h3>
                <p>Đại Học FPT, Thạch Thất, Thạch Hòa<br/>Hà Nội, Việt Nam</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>Hotline hỗ trợ</h3>
                <p>
                  <a href="tel:0367123217" style={{ color: 'inherit', textDecoration: 'none' }}>
                    0367123217
                  </a>
                  <br/>Miễn phí cuộc gọi
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>Email liên hệ</h3>
                <p>
                  <a 
                    href="mailto:alight.fpt@gmail.com" 
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    title="Gửi email ngay"
                  >
                    alight.fpt@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;