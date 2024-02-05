import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import PrimaryButton from '../Buttons/PrimaryButton'; // Renamed for better readability
import ServicesDropdown from './ServicesDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import LogoImage from '../../../public/assets/images/logo.png'; // Import name made explicit

// Navigation links configuration for cleaner code
const navigationLinks = [
  { path: "/academy", title: "Academy" },
  { path: "/about", title: "About us" },
  { path: "/contact", title: "Contact us" },
];

const Navbar = () => {
  // State hooks for controlling UI elements
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);

  // Toggles for UI elements, making it clear what they do
  const toggleNavigation = () => setNavOpen(!isNavOpen);
  const toggleSolutions = () => setSolutionsOpen(!isSolutionsOpen);

  return (
    <nav className='bg-white fixed top-0 font-inter m-auto -translate-x-1/2 z-50 left-1/2 flex justify-center w-full'>
      <div className='flex justify-between items-center px-[5%] max-[991px]:px-0 max-w-[1400px] box-border w-full bg-white h-[4.5rem]'>
        {/* Logo and Hamburger Menu */}
        <div className='z-50 max-[991px]:w-full max-[991px]:flex max-[991px]:p-[5%] max-[991px]:h-full justify-between items-center'>
          <Link to='/' className='flex gap-[6px]'>
            <img className='aspect-square w-[52px]' src={LogoImage} alt='LevelUp logo' />
            <span className='text-[35px] font-bold inline-block text-[#333]'>LevelUp</span>
          </Link>
          <button className='hidden max-[991px]:flex flex-col aspect-square w-12 justify-center items-center gap-[6px]' onClick={toggleNavigation}>
            {/* Simplified class names for readability */}
            <span className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isNavOpen ? "-rotate-45 translate-y-2 delay-300" : "rotate-0 translate-y-0"}`}></span>
            <span className={`h-[2px] bg-[#121212] transition-all duration-[.45s] ${isNavOpen ? "w-0" : "w-6 delay-300"}`}></span>
            <span className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isNavOpen ? "rotate-45 -translate-y-2 delay-300" : "rotate-0 translate-y-0"}`}></span>
          </button>
        </div>
        {/* Navigation Links, Services, and Solutions */}
        <div className={`flex gap-4 font-bold text-center transition-all duration-[.45s] box-border ${isNavOpen ? "top-full" : "-top-[100vh]"} left-0 z-40 bg-white max-[991px]:flex-col max-[991px]:absolute max-[991px]:w-full max-[991px]:px-[5%] max-w-full max-[991px]:pb-[6.5rem] max-[991px]:h-[calc(100vh-4.5rem)] max-[991px]:text-lg max-[991px]:border-b max-[991px]:border-black`}>
          <div className='flex max-[991px]:flex-col justify-center items-center'>
            {/* Services Dropdown */}
            <ServicesDropdown toggleNavigation={toggleNavigation} />
            {/* Solutions Dropdown */}
            <SolutionsDropdown isSolutionsOpen={isSolutionsOpen} toggleSolutions={toggleSolutions} />
            {/* Static Navigation Links */}
            {navigationLinks.map((link, index) => (
              <NavbarLink key={index} path={link.path} title={link.title} toggleNavigation={toggleNavigation} />
            ))}
          </div>
          {/* Call to Action Button */}
          <PrimaryButton path='/contact' title='Make an Impact' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
