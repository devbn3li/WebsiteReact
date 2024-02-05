import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Navbar_V2 from '../Components/Navbar/Navbar_V2';
import Footer from '../Components/Footer/Footer';

function Layout() {
  return (
    <div className="flex justify-center flex-col   bg-[#F9FFF5]">
      {/* <Navbar /> */}
      <Navbar_V2 />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout;
