// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout and Page Component Imports
import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AcademyPage from './Pages/AcademyPage/AcademyPage';
import PrivacyPolicyPage from './Pages/LegelPages/PrivacyPolicyPage';
import CookiesPolicyPage from './Pages/LegelPages/CookiesPolicyPage';
import SolutionPage from './Pages/SolutionPage/SolutionPage';
import WaitingListPage from './Pages/WaitingListPage/WaitingListPage';
// import BlogPage from './Pages/BlogPage';

// Service Pages Imports
import ESGControllershipPage from './Pages/ServicePages/ESGControllershipPage';
import ESGIAProgramPage from './Pages/ServicePages/ESGIAProgramPage';
import ESGGovernance from './Pages/ServicePages/ESGGovernancePage';
import ESGAssurance from './Pages/ServicePages/ESGAssurancePage';
import StrategicStakeholder from './Pages/ServicePages/StrategicStakeholderPage';
import ESGStrategy from './Pages/ServicePages/ESGStrategyPage';
import ESGCompliance from './Pages/ServicePages/ESGCompliancePage';
import ERMProgram from './Pages/ServicePages/ERMProgramPage';
import ESGDiagnostic from './Pages/ServicePages/ESGDiagnosticPage';
import BoardLevel from './Pages/ServicePages/BoardLevelPage';

// Blog Pages Imports
import BlogsDiscoveryPage from './Pages/Blogs/BlogsDiscoveryPage';
import EmpoweringCSuiteBlog from './Pages/Blogs/ALL/EmpoweringCSuiteBlog';
import EmpoweringForSuccessBlog from './Pages/Blogs/ALL/EmpoweringForSuccessBlog';
import UnderstandingGreenwashingBlog from './Pages/Blogs/ALL/UnderstandingGreenwashingBlog';

// Style Sheets Imports
import '/public/assets/css/index.css';
import '/public/assets/css/fonts.css';

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
          <Route path="solution" element={<SolutionPage />} />
          <Route path="waiting-list" element={<WaitingListPage />} />
          <Route path="blogs-discovery" element={<BlogsDiscoveryPage />} />
          
          {/* Legal pages */}
          <Route path="legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="legal/cookies" element={<CookiesPolicyPage />} />

          {/* Service pages */}
          <Route path="service/esg-controllership" element={<ESGControllershipPage />} />
          <Route path="service/esg-ia-program" element={<ESGIAProgramPage />} />
          <Route path="service/esg-governance" element={<ESGGovernance />} />
          <Route path="service/esg-assurance" element={<ESGAssurance />} />
          <Route path="service/strategic-stakeholder" element={<StrategicStakeholder />} />
          <Route path="service/esg-strategy" element={<ESGStrategy />} />
          <Route path="service/esg-compliance" element={<ESGCompliance />} />
          <Route path="service/erm-program" element={<ERMProgram />} />
          <Route path="service/esg-diagnostic" element={<ESGDiagnostic />} />
          <Route path="service/board-level" element={<BoardLevel />} />

          {/* Blog article pages */}
          <Route path="blog/all/Empowering-the-C-Suite-for-Sustainable-Success" element={<EmpoweringCSuiteBlog />} />
          <Route path="blog/all/Empowering-for-Sustainable-Success" element={<EmpoweringForSuccessBlog />} />
          <Route path="blog/all/Understanding-Greenwashing-and-Its-Consequences" element={<UnderstandingGreenwashingBlog />} />.
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
