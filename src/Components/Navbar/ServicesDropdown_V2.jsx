import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { IoEarthSharp, IoLeafOutline } from 'react-icons/io5';
import { MdArrowRight } from 'react-icons/md';
import SubNavbarLink from './SubNavbarLink';

const services = [
  {
    title: 'ESG Strategy',
    icon: IoEarthSharp,
    path: 'service/esg-strategy'
  },
  {
    title: 'ESG Strategy',
    icon: IoEarthSharp,
    path: 'service/esg-strategy'
  },
  {
    title: 'ESG Strategy',
    icon: IoEarthSharp,
    path: 'service/esg-strategy'
  },
  {
    title: 'ESG Strategy',
    icon: IoEarthSharp,
    path: 'service/esg-strategy'
  },
  {
    title: 'ESG Strategy',
    icon: IoEarthSharp,
    path: 'service/esg-strategy'
  },
]

const ServicesDropdown_V2 = ({ isServicesOpen, toggleServices, toggleNavigation }) => {
  return (
    <div className="group h-full cursor-pointer max-[1130px]:w-full" onClick={toggleServices}>
      <div className="px-4 py-2 hover:font-bold flex items-center justify-center h-full transition-all duration-[.45s] max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3 relative 
                      after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0">
        Services
      </div>
      <div className={`w-screen flex shadow-md justify-center group-hover:border-b border-b-[#02c2ab] items-center left-1/2 min-[1130px]:-translate-x-1/2 top-[calc(100%+2px)] bg-white transition-all group-hover:h-[290px] ${isServicesOpen?'h-[290px]':'h-0'} h-0 overflow-hidden max-[1130px]:hover:h-auto min-[1130px]:absolute`}>
        <div className='max-w-[1400px] flex-col w-full text-start flex items-center transition-all px-4 box-border max-[1130px]:flex-col'>
          <div className='flex w-full gap-2 h-[200px] max-[1130px]:flex-col max-[1130px]:h-auto '>
            <Link to="/service/esg" className="w-1/2 group/learn box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-[#02c2ab]/40 border border-[#02c2ab] rounded-xl gap-2 max-[991px]:w-full" onClick={()=>{toggleNavigation();toggleServices();}}>
            <span className='flex flex-col items-start gap-2 pt-4'>
                <span className='font-bold'>ESG Services</span>
                <span className=''>ESG Services assist companies in implementing sustainable and ethical operational practices.</span>
                <span className='flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
              </span>
              <span className="text-[5rem]"><IoLeafOutline /></span>
            </Link>
            <Link to="/service/business" className="group/learn box-border hover:shadow-md px-12 w-1/2 flex group/learn justify-center items-center rounded-xl gap-2 max-[991px]:w-full transition-all border border-gray-200 hover:border-[#02c2ab] hover:border-2" onClick={()=>{toggleNavigation();toggleServices();}}>
              <span className='flex flex-col items-start gap-2 pt-4'>
                <span className='font-bold'>Business Services</span>
                <span className=''>Business Services offer essential support for enhancing company efficiency and growth.</span>
                <span className='flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
              </span>
              <span className="text-[5rem]"><IoEarthSharp /></span>
            </Link>
          </div>
          <div className='flex flex-wrap w-full'>
            {services.map((service, index) => (
              <SubNavbarLink title={service.title} Icon={service.icon} path={service.icon} key={index} clear={()=>{toggleNavigation();toggleServices();}}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesDropdown_V2.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
  toggleServices: PropTypes.func.isRequired,
  isServicesOpen: PropTypes.bool.isRequired
}

export default ServicesDropdown_V2;
