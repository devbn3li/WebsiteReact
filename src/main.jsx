// Import React and required modules from react-router
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import page components
import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFound from './Pages/NotFound'; // Import the 404 page component
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
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
import Blog from './Pages/Blogs/Blog';
import WaitingList from './Pages/WaitingList/WaitingList';

// Import style sheets
import '/public/assets/css/index.css';
import '/public/assets/css/fonts.css';
import Academy from './Pages/Academy/Academy';
import PrivacyPolicy from './Pages/legal/PrivacyPolicy';
import Cookies from './Pages/legal/Cookies';
import BlogTemplete from './Pages/Blogs/blogTemplete';


export function Application() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/service/esg-controllership" element={<ESG_Controllership />} />
            <Route path="/service/esg-ia-program" element={<ESG_IA_program />} />
            <Route path="/service/esg-governance" element={<ESG_Governance />} />
            <Route path="/service/esg-assurance" element={<ESG_Assurance />} />
            <Route path="/service/strategic-stakeholder" element={<Strategic_Stakeholder />} />
            <Route path="/service/esg-strategy" element={<ESG_Strategy />} />
            <Route path="/service/esg-compliance" element={<ESG_Compliance />} />
            <Route path="/service/erm-program" element={<ERM_Program />} />
            <Route path="/service/esg-diagnostic" element={<ESG_Diagnostic />} />
            <Route path="/service/board-level" element={<Board_Level />} />
            <Route path= "/legal/PrivacyPolicy" element={<PrivacyPolicy/>} />
            <Route path= "/legal/Cookies" element={<Cookies/>} />
            <Route path= "/blogs/blogTemplete" element={<BlogTemplete/>} />
            <Route path= "/blogs/blog" element={<Blog/>} />
            <Route path= "/waiting-list" element={<WaitingList/>} />
          </Route>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);
