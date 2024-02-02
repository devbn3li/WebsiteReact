// Import React and required modules from react-router
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import page components
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound'; // Import the 404 page component
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/index';
import ESG_Controllership from './Pages/ServicePages/ESG_Controllership';
import ESG_IA_program from './Pages/ServicePages/ESG_IA_program';
import ESG_Governance from './Pages/ServicePages/ESG_Governance';
import ESG_Assurance from './Pages/ServicePages/ESG_Assurance';
import Strategic_Stakeholder from './Pages/ServicePages/Strategic_Stakeholder';
import ESG_Strategy from './Pages/ServicePages/ESG_Strategy';

// Import style sheets
import './assets/css/index.css';
import './assets/css/fonts.css';

export function Application() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/ESG_Controllership" element={<ESG_Controllership />} />
            <Route path="/service/ESG_IA_program" element={<ESG_IA_program />} />
            <Route path="/service/ESG_Governance" element={<ESG_Governance />} />
            <Route path="/service/ESG_Assurance" element={<ESG_Assurance />} />
            <Route path="/service/Strategic_Stakeholder" element={<Strategic_Stakeholder />} />
            <Route path="/service/ESG_Strategy" element={<ESG_Strategy />} />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);