import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarLink = ({path, title}) => {
  return (
    <Link to={path} className='px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block 
                                max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3
                                '>
      {title}
    </Link>
  );
}

NavbarLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NavbarLink;
