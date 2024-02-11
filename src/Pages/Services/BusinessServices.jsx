import React from 'react';
import LandingSection from '../../Components/EsgBusiness/landing';
import Why from '../../Components/EsgBusiness/BusinessServices';

const BusinessServices = () => {  
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <LandingSection />
      <Why />
    </div>
  );
}

export default BusinessServices;
