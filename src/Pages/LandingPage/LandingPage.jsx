
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Benefits from '../../Components/Benefits/Benefits';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Benefits />
    </div>
  );
}

export default LandingPage;
