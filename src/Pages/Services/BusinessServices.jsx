import React from 'react';
import Hero from '../../Components/EsgBusiness/Hero';
import Why from '../../Components/EsgBusiness/BusinessServices';
import SliderLogos from '../../Components/SliderLogos/SliderLogos';

const BusinessServices = () => {  
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Why />
      <SliderLogos />
    </div>
  );
}

export default BusinessServices;
