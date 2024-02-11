import React, { useState, useEffect } from 'react';
import Why from '../../Components/EsgServices/Esgservices';
import LandingSection from '../../Components/EsgServices/landing';

const EsgServices = () => {  
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <LandingSection />
      <Why />
    </div>
  );
}

export default EsgServices;
