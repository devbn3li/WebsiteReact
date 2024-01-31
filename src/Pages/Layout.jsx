import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function Layout() {
  return (
    <div class="bg-[#F9FFF5]">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout;
