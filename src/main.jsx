// Import React and required modules from react-router
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
Pages
// Import page components
import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFound from './Pages/NotFound'; // Import the 404 page component
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/index';
import ESG_Controllership from './Pages/ServicePages/ESG_Controllership';
import ESG_IA_program from './Pages/ServicePages/ESG_IA_program';
import ESG_Governance from './Pages/ServicePages/ESG_Governance';
import ESG_Assurance from './Pages/ServicePages/ESG_Assurance';
import Strategic_Stakeholder from './Pages/ServicePages/Strategic_Stakeholder';
import ESG_Strategy from './Pages/ServicePages/ESG_Strategy';
import ESG_Compliance from './Pages/ServicePages/ESG_Compliance';
import ERM_Program from './Pages/ServicePages/ERM_Program';
import ESG_Diagnostic from './Pages/ServicePages/ESG_Diagnostic';
import Board_Level from './Pages/ServicePages/Board_Level';

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
            <Route path="/service/ESG_Compliance" element={<ESG_Compliance />} />
            <Route path="/service/ERM_Program" element={<ERM_Program />} />
            <Route path="/service/ESG_Diagnostic" element={<ESG_Diagnostic />} />
            <Route path="/service/Board_Level" element={<Board_Level />} />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);
