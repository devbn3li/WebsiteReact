import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// NavbarLink component. Each link element in the navbar
const NavbarLink = ({ path, title ,dropdownItems , toggleMenu ,openDropdown }) => {
  // Tailwind CSS classes for the Link component
  const linkClasses = 'px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3';
  if (dropdownItems) {
    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Prevent parent click event from closing the dropdown
        toggleMenu(); // Toggle the dropdown visibility
      };
    return (
      <div className="relative group" >
        <div onClick={handleDropdownClick} className={linkClasses}>{title}</div>
        <div onclick={openDropdown} className={`absolute hidden w-[250px]  bg-[#03C2AB] mt-5 py-2 px-4 rounded shadow-lg group-hover:block ${dropdownItems ? 'block' : 'hidden'}`}>
          {dropdownItems.map((item, index) => (
            <Link key={index} to={item.path}   onClick={toggleMenu} className="block text-[#fff] hover:text-gray-600 py-1">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
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