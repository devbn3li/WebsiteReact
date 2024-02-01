
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Benefits from '../../Components/Benefits/Benefits';
import Offer from '../../Components/Offer/Offer';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Benefits />
      <Offer />
    </div>
  );
}

export default LandingPage;
