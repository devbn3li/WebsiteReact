import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubNavbarLink = ({ Icon, title, path, clear }) => {
  return (
    <Link to={path} className='flex justify-center items-center gap-2 font-semibold p-3 group/subLink hover:text-[#121212] text-[#02c2ab] text-sm' onClick={clear}>
      <span className='rounded-lg bg-[#02c2ab] text-white p-[4px] text-base group-hover/subLink:bg-[#121212] transition-all'><Icon /></span>
      <span className="text-sm">{title}</span>
    </Link>
  );
}

SubNavbarLink.propTypes = {
  Icon: PropTypes.object.isRequired, 
  title: PropTypes.string.isRequired, 
  path: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
}

export default SubNavbarLink;
