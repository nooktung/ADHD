import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <img src="/logo-icon.png" alt="ADHD Coach" className="logo-icon" />
            <span className="logo-text">ADHD Self-Assessment Workbook</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <div className="nav-item dropdown">
            <span className="nav-link">ADHD Resources</span>
            <div className="dropdown-content">
              <a href="#">ADHD Awareness</a>
              <a href="#">ADHD Diagnosis</a>
              <a href="#">ADHD Symptoms</a>
              <a href="#">Living with ADHD</a>
            </div>
          </div>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About us</a>
        </nav>

        {/* Search and CTA Section */}
        <div className="header-actions">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="I want to find..." 
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn">Search</button>
          </div>
          <button className="cta-btn">Free ADHD Test</button>
        </div>
      </div>
    </header>
  );
};

export default Header;