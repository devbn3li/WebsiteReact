import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// NavbarLink component. Each link element in the navbar
const NavbarLink = ({ path, title }) => {
  // Tailwind CSS classes for the Link component
  const linkClasses = 'px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3';
  return (
    <Link to={path} className={linkClasses}>
      {title} 
    </Link>
  );
}

// PropTypes for props typechecking
NavbarLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NavbarLink;