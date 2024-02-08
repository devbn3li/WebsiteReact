import React, { useState, useEffect } from 'react';
import Hero from '../../Components/EsgServices/Hero';
import Why from '../../Components/EsgServices/Esgservices';

const EsgServices = () => {  
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Why />
    </div>
  );
}

export default EsgServices;
