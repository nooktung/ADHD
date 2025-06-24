// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './page/LandingPage';
import ContactUs from './page/ContactUs';
import AboutADHD from './page/AboutADHD';
import Team from './page/Team';
import ADHDIntroduction from './page/ADHDIntroduction';
import ADHDSigns from './page/ADHDSigns';
import ADHDSigns2 from './page/ADHDSigns2';
import ADHDCauses from './page/ADHDCauses';
import ADHDInLife from './page/ADHDInLife';
import ADHDVsAnxiety from './page/ADHDVsAnxiety';
import ADHDImprovement from './page/ADHDImprovement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutADHD" element={<AboutADHD />} />
        <Route path="/Team" element={<Team />} />
        
        {/* New ADHD pages */}
        <Route path="/adhd-introduction" element={<ADHDIntroduction />} />
        <Route path="/adhd-signs" element={<ADHDSigns />} />
        <Route path="/adhd-signs2" element={<ADHDSigns2 />} />
        <Route path="/adhd-causes" element={<ADHDCauses />} />
        <Route path="/adhd-in-life" element={<ADHDInLife />} />
        <Route path="/adhd-vs-anxiety" element={<ADHDVsAnxiety />} />
        <Route path="/adhd-improvement" element={<ADHDImprovement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;