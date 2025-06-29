import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Header />

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
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <input 
                    type="text" 
                    name="name"
                    className="contact-form-control" 
                    placeholder="Họ và tên *" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
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
                  ></textarea>
                </div>
                <button type="submit" className="contact-btn-submit">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-container">
            <div className="map-wrapper">
              <img 
                src="/map.jpg" 
                alt="Bản đồ vị trí văn phòng - Delta Đại Học FPT, Thạch Thất, Thạch Hòa" 
                className="contact-map"
              />
            </div>
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
                <p>0367123217<br/>Miễn phí cuộc gọi</p>
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
                <p>alight.fpt@gmail.com</p>
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