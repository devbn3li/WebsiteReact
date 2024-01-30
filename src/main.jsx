// Import React and required modules from react-router
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import page components
import App from './App';
import LandingPage from './pages/LandingPage';
// import NotFound from './Pages/NotFound'; // Import the 404 page component

// Import style sheets
import './index.css';


export function Application() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            {/* <Route path="*" element={<NotFound />} />  */}
          </Route>
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);