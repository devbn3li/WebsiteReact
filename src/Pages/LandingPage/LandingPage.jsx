import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Benefits from '../../Components/Benefits/Benefits';
import Offer from '../../Components/Offer/Offer';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Why from '../../Components/Why';
import FAQs from '../../Components/FAQs';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
      <Hero />
      <Benefits />
      <Offer />
      <Testimonials />
      <Why />
      <FAQs/>
    </div>
  );
}

export default LandingPage;
