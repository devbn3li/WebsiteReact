import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Yammy from '../Components/Hero_Services/Popup/yammy';

function Layout() {
  return (
    <div className="flex justify-center flex-col   bg-[#F9FFF5]">    
      <Navbar />
      <Outlet />
      <Footer />
      <Yammy />
    </div>
  )
}

export default Layout;
