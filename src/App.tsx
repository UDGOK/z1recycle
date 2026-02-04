import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import FacilityOverview from './pages/facility/FacilityOverview';
import ZoneA from './pages/facility/ZoneA';
import ZoneB from './pages/facility/ZoneB';
import ZoneC from './pages/facility/ZoneC';
import RecyclingProcess from './pages/process/RecyclingProcess';
import ManufacturingProcess from './pages/process/ManufacturingProcess';
import EquipmentGuide from './pages/process/EquipmentGuide';
import Sustainability from './pages/Sustainability';
import StrategicImpact from './pages/StrategicImpact';
import TechSpecs from './pages/TechSpecs';
import Timeline from './pages/about/Timeline';
import FAQ from './pages/about/FAQ';
import Team from './pages/about/Team';
import Contact from './pages/about/Contact';
import TermsOfService from './pages/TermsOfService';
import Community from './pages/Community';
import InvestorRelations from './pages/InvestorRelations';
import MarketIntelligence from './pages/MarketIntelligence';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Strategic Impact */}
          <Route path="/strategic-impact" element={<StrategicImpact />} />
          <Route path="/technology" element={<TechSpecs />} />
          
          {/* Facility */}
          <Route path="/facility" element={<FacilityOverview />} />
          <Route path="/facility/zone-a" element={<ZoneA />} />
          <Route path="/facility/zone-b" element={<ZoneB />} />
          <Route path="/facility/zone-c" element={<ZoneC />} />
          
          {/* Process */}
          <Route path="/process" element={<RecyclingProcess />} />
          <Route path="/process/recycling" element={<RecyclingProcess />} />
          <Route path="/process/manufacturing" element={<ManufacturingProcess />} />
          <Route path="/process/equipment" element={<EquipmentGuide />} />
          
          {/* Sustainability */}
          <Route path="/sustainability" element={<Sustainability />} />
          
          {/* Community */}
          <Route path="/community" element={<Community />} />
          
          {/* About */}
          <Route path="/about" element={<Timeline />} />
          <Route path="/about/timeline" element={<Timeline />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/faq" element={<FAQ />} />
          <Route path="/about/contact" element={<Contact />} />
          
          {/* Investor Relations */}
          <Route path="/investors" element={<InvestorRelations />} />
          
          {/* Market Intelligence */}
          <Route path="/market" element={<MarketIntelligence />} />
          
          {/* Legal */}
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    <Analytics />
  </>
  );
}

export default App;
