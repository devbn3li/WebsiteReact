import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubNavbarLink_V2 = ({ Icon, title, path, clear }) => {
  return (
    <Link to={path} className='flex justify-start items-center gap-2 font-semibold p-3 pl-0 group/subLink text-[#121212] hover:text-[#112b65] text-sm' onClick={clear}>
      <span className='rounded-lg p-[4px] text-base transition-all'><Icon /></span>
      <span className="text-sm">{title}</span>
    </Link>
  );
}

SubNavbarLink_V2.propTypes = {
  Icon: PropTypes.elementType.isRequired, 
  title: PropTypes.string.isRequired, 
  path: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
}

export default SubNavbarLink_V2;
