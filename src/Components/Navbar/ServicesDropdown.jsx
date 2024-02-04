import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { IoEarthSharp } from 'react-icons/io5';

const ServicesDropdown = ({ toggleNavigation }) => {
  return (
    <div className="group cursor-pointer">
      <div className="px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3">
        Services
      </div>
      <div className="text-white w-screen flex justify-center items-center group-hover:translate-y-0 hover:delay-0 delay-100 translate-y-20 left-1/2 -translate-x-1/2 top-full bg-[#02C2AB] transition-all px-4 box-border border-b-[#3e857d] hover:border-b-4 group-hover:h-[250px] h-0 overflow-hidden max-[991px]:flex-col max-[991px]:hover:h-auto max-[991px]:translate-x-0 min-[991px]:absolute gap-1">
        <Link to="/service/esg" className="h-[130px] max-[991px]:h-[200px] w-1/2 flex justify-center items-center hover:bg-white/10 rounded-xl flex-col gap-2 max-[991px]:w-full" onClick={toggleNavigation}>
          <span className="text-2xl"><FaLeaf /></span>
          <span>ESG Services</span>
        </Link>
        <Link to="/service/business" className="h-[130px] w-1/2 flex justify-center items-center hover:bg-white/10 rounded-xl flex-col gap-2 max-[991px]:w-full" onClick={toggleNavigation}>
          <span className="text-2xl"><IoEarthSharp /></span>
          <span>Business Services</span>
        </Link>
      </div>
    </div>
  );
};

ServicesDropdown.propTypes = {
  toggleNavigation: PropTypes.func.isRequired
}

export default ServicesDropdown;
