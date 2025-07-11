import React, { useState } from 'react';
import '../css/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand Info */}
        <div className="footer-brand">
          <div className="brand-header">
            <div className="brand-logo">
              <img src="/logo.jpg" alt="ADHD-Bản giao hưởng tập trung" className="footer-logo-icon" />
              <span className="brand-name">Bản giao hưởng tập trung</span>
            </div>
          </div>
          
          <div className="brand-description">
            <p>
            Nghiên cứu tại Đại học FPT khảo sát tác động của ADHD trong môi trường học đường thông qua ba nhóm đối tượng: sinh viên (đã chẩn đoán, có biểu hiện chưa chẩn đoán), giảng viên (có kinh nghiệm với sinh viên ADHD), và chuyên viên tư vấn học đường. Mục tiêu là hiểu rõ cách nhà trường hỗ trợ sinh viên ADHD và cải thiện môi trường học tập.
            </p>
            <p className="hashtag">#ADHD được giải thích bằng hình vẽ dễ thương</p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            
            <a href="https://www.facebook.com/profile.php?id=61576988307181" className="social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
           
          </div>
        </div>

        {/* Middle Section - Legal */}
        <div className="footer-section">
          <h3 className="section-title">Pháp Lý</h3>
          <ul className="footer-links">
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Điều khoản và điều kiện</a></li>
            <li><a href="#">Chính sách cookie</a></li>
          </ul>
        </div>

        {/* Right Section - ADHD Resources & Newsletter */}
        <div className="footer-section">
          <h3 className="section-title">Tài Nguyên ADHD</h3>
          <ul className="footer-links">
            <li><a href="/adhd-awareness">Nhận Thức về ADHD</a></li>
            <li><a href="/adhd-symptoms">Triệu Chứng ADHD</a></li>
            <li><a href="/adhd-life">Sống Chung với ADHD</a></li>
          </ul>
          <a href="/landingpage" className="browse-all">
            Xem tất cả bài viết về ADHD →
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Website bởi NooktVera</p>
      </div>
    </footer>
  );
};

export default Footer;