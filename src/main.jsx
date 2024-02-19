// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

// Layout and Page Component Imports
import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AcademyPage from './Pages/AcademyPage/AcademyPage';
import Pricing from './Pages/AcademyPage/Pricing';
import PrivacyPolicyPage from './Pages/LegelPages/PrivacyPolicyPage';
import CookiesPolicyPage from './Pages/LegelPages/CookiesPolicyPage';
import SolutionPage from './Pages/SolutionPage/SolutionPage';
import LevelUpO2 from './Pages/LevelUpO2/LevelUpO2';
import WaitingListPage from './Pages/WaitingListPage/WaitingListPage';
import Resources from './Pages/Resources/Resources';

// Service Pages Imports
import EsgServices from './Pages/Services/EsgServices';
import BusinessServices from './Pages/Services/BusinessServices';
import ESGControllershipPage from './Pages/ServicePages/ESGControllershipPage';
import ESGIAProgramPage from './Pages/ServicePages/ESGIAProgramPage';
import ESGGovernance from './Pages/ServicePages/ESGGovernancePage';
import ESGAssurance from './Pages/ServicePages/ESGAssurancePage';
import StrategicStakeholder from './Pages/ServicePages/StrategicStakeholderPage';
import ESGStrategy from './Pages/ServicePages/ESGStrategyPage';
import ERMProgram from './Pages/ServicePages/ERMProgramPage';
import ESGDiagnostic from './Pages/ServicePages/ESGDiagnosticPage';
import BoardLevel from './Pages/ServicePages/BoardLevelPage';
import ESGPluse from './Pages/PulsePage/PulsePage';    // ESGPluse
import Compliance from './Pages/BusinessServices/Compliance';
import RiskManagement from './Pages/BusinessServices/RiskManagement';
import Finance from './Pages/BusinessServices/Finance';
import DataLab from './Pages/DataLab/DataLab';

import ESGProgramEstablishment from './Pages/GettingStarted/ESGProgramEstablishment';
import ESGGAp from './Pages/GettingStarted/ESGGAP';
import MaterialityAssessmentStrategy from './Pages/GettingStarted/MaterialityAssessmentStrategy';
import ESGSustainabilityManagedServices from './Pages/GettingStarted/ESGSustainabilityManagedServices';
import ESGGovern from './Pages/Levelling-Up/ESGGovernance';
import ESGDataManagement from './Pages/Levelling-Up/ESGDataManagement';
import GreenwashingControls from './Pages/Levelling-Up/GreenwashingControls';
import ESGDisclosuresReporting from './Pages/Levelling-Up/ESGDisclosuresReporting';
import ESGThirdPartyAssurance from './Pages/Assurance/ESGThirdPartyAssurance';
import ESGSupplyChainAudits from './Pages/Assurance/ESGSupplyChainAudits';
import CorporateSustainabilityDueDiligence from './Pages/Assurance/CorporateSustainabilityDueDiligence';
import InternalAudit from './Pages/Business/InternalAudit';
import ESGCompliance from './Pages/Business/ESGCompliance';
import ESGERMResilience from './Pages/Business/ESGERMResilience';

import SustainabilityTracker from './Pages/ESGsoftwarePages/SustainabilityTracker';

// Blog Pages Imports
import BlogDashBoard from './Pages/DashBoards/BlogDashBoard/BlogDashBoard';
import BlogsDiscoveryPage from './Pages/Blogs/BlogsDiscoveryPage';
import BlogTemplete from './Pages/Blogs/blogTemplete';

// Style Sheets Imports
// none-assets file should have it's own absolute path
import '/public/assets/css/index.css';
import '/public/assets/css/fonts.css';
import ESGSoftware from './Pages/ESGsoftwarePages/ESGSoftware';
import ServiceTempletePage from './Pages/ServicePages/ServiceTempletePage';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route wraps all page routes */}
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<LandingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="academy" element={<AcademyPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="solution" element={<SolutionPage />} />
          <Route path="solution/level-up-o2" element={<LevelUpO2 />} />
          <Route path="waiting-list" element={<WaitingListPage />} />
          <Route path="academy/blogs" element={<BlogsDiscoveryPage />} />
          <Route path="resources" element={<Resources />} />

          {/* Legal pages */}
          <Route path="legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="legal/cookies" element={<CookiesPolicyPage />} />

          {/* Service pages */}
          <Route path="service/esg" element={<EsgServices />} />
          <Route path="service/business" element={<BusinessServices />} />
          <Route path="service/serviceTemplete" element={<ServiceTempletePage />} />
          <Route path="service/esg-controllership" element={<ESGControllershipPage />} />
          <Route path="service/esg-ia-program" element={<ESGIAProgramPage />} />
          <Route path="service/esg-governance" element={<ESGGovernance />} />
          <Route path="service/esg-assurance" element={<ESGAssurance />} />
          <Route path="service/strategic-stakeholder" element={<StrategicStakeholder />} />
          <Route path="service/esg-strategy" element={<ESGStrategy />} />
          <Route path="service/esg-compliance" element={<ESGCompliance />} />
          <Route path="service/erm-program" element={<ERMProgram />} />
          <Route path="service/esg-diagnostic" element={<ESGDiagnostic />} />
          <Route path="service/esg-pulse" element={<ESGPluse />} />
          <Route path="service/levelup-o2" element={<LevelUpO2 />} />
          <Route path="service/board-level" element={<BoardLevel />} />
          <Route path="service/internal-audit" element={<InternalAudit />} />
          <Route path="service/compliance" element={<Compliance />} />
          <Route path="service/risk-management" element={<RiskManagement />} />
          <Route path="service/finance" element={<Finance />} />
          <Route path="service/data-lab" element={<DataLab />} />
          <Route path="service/esg-erm-resilience" element={<ESGERMResilience />} />
          
          <Route path="services/esg-program-establishment" element={<ESGProgramEstablishment />} />
          <Route path="services/esg-gap-assessment-&-benchmarking" element={<ESGGAp />} />
          <Route path="services/materiality-assessment-&-strategy" element={<MaterialityAssessmentStrategy />} />
          <Route path="services/sustainability-managed-services" element={<ESGSustainabilityManagedServices />} />
          <Route path="services/esg-governance" element={<ESGGovern />} />
          <Route path="services/esg-data-management" element={<ESGDataManagement />} />  
          <Route path="services/greenwashing-controls" element={<GreenwashingControls />} />
          <Route path="services/esg-disclosures-&-reporting" element={<ESGDisclosuresReporting />} />
          <Route path="services/esg-third-party-assurance" element={<ESGThirdPartyAssurance />} />
          <Route path="services/esg-supply-chain-audits" element={<ESGSupplyChainAudits />} />
          <Route path="services/corporate-sustainability-due-diligence" element={<CorporateSustainabilityDueDiligence />} />
          
          {/* esg-software */}
          <Route path="esg-software" element={<ESGSoftware />} />
          <Route path="esg-software/sustainability-tracker" element={<SustainabilityTracker />} />

          {/* Blog article pages */}
          <Route path="academy/blogs/:id" element={<BlogTemplete />} />
          <Route path="academy/resources" element={<Resources />} />
          
          {/* Dashboards */}
          <Route path='dashboards/blog-dashboard' element={<BlogDashBoard />} />

          {/* Waiting Page */}
          <Route path="waiting-page" element={<WaitingListPage />} />
        </Route>

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Rendering the Application
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<Application />);
} else {
  console.error('Failed to find the root element');
}
