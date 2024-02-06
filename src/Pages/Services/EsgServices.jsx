import React, { useState, useEffect } from 'react';
import Hero from '../../Components/EsgServices/Hero';
import Why from '../../Components/EsgServices/Esgservices';
import SliderLogos from '../../Components/SliderLogos/SliderLogos';

const EsgServices = () => {  
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Why />
      <SliderLogos />
    </div>
  );
}

export default EsgServices;
