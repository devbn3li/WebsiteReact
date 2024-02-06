import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// NavbarLink component. Each link element in the navbar
const NavbarLink_V2 = ({ path, title, toggleNavigation }) => {
  // Tailwind CSS classes for the Link component
  const linkClasses = 'px-4 min-[1130px]:h-full max-[1130px]:py-8 hover:font-bold transition-all max-[1130px]:w-full flex items-center justify-center duration-[.45s] max-[991px]:hover:bg-transparent max-[991px]:px-0 relative after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0';
  return (
    <Link to={path} className={linkClasses} onClick={toggleNavigation}>
      {title} 
    </Link>
  );
}

// PropTypes for props typechecking
NavbarLink_V2.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleNavigation: PropTypes.func.isRequired
}

export default NavbarLink_V2;