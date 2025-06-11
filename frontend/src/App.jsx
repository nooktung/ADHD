// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './page/LandingPage';
import ContactUs from './page/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* Các route khác có thể thêm sau */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;