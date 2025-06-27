// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './page/LandingPage';
import ContactUs from './page/ContactUs';
import AboutADHD from './page/AboutADHD';
import Team from './page/Team';
import ADHDIntroduction from './page/ADHDIntroduction';
import ADHDOrganization from './page/ADHDOrganization';
import ADHDSigns2 from './page/ADHDSigns2';
import ADHDRelationship from './page/ADHDRelationship';
import ADHDLife from './page/ADHDLife';
import ADHDAndHealth from './page/ADHDAndHealth';
import ADHdEmotions from './page/ADHDEmotions';
import ADHDWorkplace from './page/ADHDWorkplace';
import ADHDAwareness from './page/ADHDAwareness';
import ADHDFacts from './page/ADHDFacts';
import ADHDSymptoms from './page/ADHDSymptoms';
import ADHDInattentive from './page/ADHDInattentive';
import ADHDHyperactive from './page/ADHDHyperactive';
import ADHDUnofficial from './page/ADHDUnofficial';
import SearchResults from './page/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutADHD" element={<AboutADHD />} />
        <Route path="/Team" element={<Team />} />
        
        {/* Search Results */}
        <Route path="/search" element={<SearchResults />} />
        
        {/* New ADHD pages */}
        <Route path="/adhd-introduction" element={<ADHDIntroduction />} />
        <Route path="/adhd-organization" element={<ADHDOrganization />} />
        <Route path="/adhd-signs2" element={<ADHDSigns2 />} />
        <Route path="/adhd-relationship" element={<ADHDRelationship />} />
        <Route path="/adhd-life" element={<ADHDLife />} />
        <Route path="/adhd-and-health" element={<ADHDAndHealth />} />
        <Route path="/adhd-emotions" element={<ADHdEmotions />} />
        <Route path="/adhd-workplace" element={<ADHDWorkplace />} />
        <Route path="/adhd-awareness" element={<ADHDAwareness />} />
        <Route path="/adhd-facts" element={<ADHDFacts />} />
        <Route path="/adhd-symptoms" element={<ADHDSymptoms />} />
        <Route path="/adhd-inattentive" element={<ADHDInattentive />} />
        <Route path="/adhd-hyperactive" element={<ADHDHyperactive/>} />
        <Route path="/adhd-unofficial" element={<ADHDUnofficial/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;