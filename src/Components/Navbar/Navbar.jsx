import React, { useState } from 'react';
import NavLink from './NavbarLink';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { Link } from 'react-router-dom';

const links = [
  { path: '/about', title: 'About us' },
  { path: '/contact', title: 'Contact us' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {setIsOpen(!isOpen)};

  return (
    <nav className='flex justify-between items-center px-[5%] max-w-[1400px] box-border w-screen bg-white h-[4.5rem] font-inter m-auto fixed top-0 left-1/2 -translate-x-1/2 z-50'>
      <div className='bg-white z-50 max-[991px]:w-full max-[991px]:flex max-[991px]:h-full justify-between items-center'>
        <Link to='/' className="flex gap-[6px]">
          <img className='aspect-square w-[52px]' src="/src/assets/images/logo.png" alt="LevelUp logo" />
          <span className="text-[35px] font-bold inline-block text-[#333]">LevelUp</span>
        </Link>
        <button className="hidden flex-col aspect-square w-12 justify-center items-center gap-[6px] max-[991px]:flex" onClick={toggleMenu}>
          <span className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen?'-rotate-45 translate-y-2 delay-[.35s]':'rotate-0 translate-y-0'} `}></span>
          <span className={`h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen?'w-0':'w-6 delay-[.35s]'} `}></span>
          <span className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen?'rotate-45 -translate-y-2 delay-[.35s]':'rotate-0 translate-y-0'} `}></span>
        </button>
      </div>

      <div className={`flex gap-4 font-bold text-center transition-all duration-[.45s] box-border ${isOpen ? 'top-full' : '-top-[100vh]'} left-0 z-40 
                      max-[991px]:flex-col max-[991px]:absolute max-[991px]:w-full max-[991px]:px-[5%] max-w-full max-[991px]:pb-[6.5rem] max-[991px]:h-[calc(100vh-4.5rem)] max-[991px]:text-lg
                      `}>
        <div className='flex max-[991px]:flex-col'>
          {links.map((page, index) => (
            <NavLink key={index} path={page.path} title={page.title} />
          ))}
        </div>
        <PrimaryBtn path='#' title='Make an impact' />
      </div>
    </nav>
  );
}

export default Navbar;
