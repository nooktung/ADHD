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
import ADHDLiving from './page/ADHDLiving';
import SearchResults from './page/SearchResults';
import Story1 from './page/Story1';
import Story2 from './page/Story2';
import Story3 from './page/Story3';
import Story4 from './page/Story4';
import Story5 from './page/Story5';
import Story6 from './page/Story6';
import Story7 from './page/Story7';
import AllStory from './page/AllStory';
import ScrollToTop from './components/ScrollToTop';
import Hanbook from './page/Hanbook';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutadhd" element={<AboutADHD />} />
        <Route path="/team" element={<Team />} />
        
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
        <Route path="/adhd-living" element={<ADHDLiving/>} />
        <Route path="/adhd-story1" element={<Story1/>} />
        <Route path="/adhd-story2" element={<Story2/>} />
        <Route path="/adhd-story3" element={<Story3/>} />
        <Route path="/adhd-story4" element={<Story4/>} />
        <Route path="/adhd-story5" element={<Story5/>} />
        <Route path="/adhd-story6" element={<Story6/>} />
        <Route path="/adhd-story7" element={<Story7/>} />
        <Route path="/all-story" element={<AllStory/>} />
        <Route path="/hanbook" element={<Hanbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;