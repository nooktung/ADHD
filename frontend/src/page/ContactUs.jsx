import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ContactUs.css";

const ContactUs = () => (
  <>
    <Header />

    <div className="contact-page-title">
      <div className="container">
        <h1>LIÊN HỆ</h1>
      </div>
    </div>

    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Liên hệ với chúng tôi</h2>
            <p>Chúng tôi luôn sẵn sàng lắng nghe mọi ý kiến đóng góp của bạn để phát triển dịch vụ ngày càng tốt hơn.</p>
            <div className="contact-social-icons">
              <a href="#" className="contact-social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="contact-social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="contact-social-icon"><i className="fab fa-youtube"></i></a>
              <a href="#" className="contact-social-icon"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="contact-form-group">
                <input type="text" className="contact-form-control" placeholder="Họ và tên" required />
              </div>
              <div className="contact-form-group">
                <input type="email" className="contact-form-control" placeholder="Email" required />
              </div>
              <div className="contact-form-group">
                <input type="tel" className="contact-form-control" placeholder="Số điện thoại" required />
              </div>
              <div className="contact-form-group">
                <textarea className="contact-form-control" placeholder="Nội dung tin nhắn" required></textarea>
              </div>
              <button type="submit" className="contact-btn-submit">Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-map-section">
      <div className="container">
        <div className="contact-map-container">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=21.0285,105.8542&zoom=15&size=1200x400&maptype=roadmap&markers=color:red%7C21.0285,105.8542&key=YOUR_API_KEY" alt="Bản đồ" />
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-card-content">
              <h3>Địa chỉ của tôi</h3>
              <p>88 TA, Hai Bà Trưng, Hà Nội</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-card-content">
              <h3>Số điện thoại</h3>
              <p>0987654321</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-card-content">
              <h3>Email</h3>
              <p>info@reptisist.vn</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default ContactUs;
