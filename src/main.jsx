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

// Import style sheets
import './assets/css/index.css';
import './assets/css/fonts.css';

export function Application() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<NotFound />} /> 
            <Route path="/Contact" element={<Contact />} />

          </Route>
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);