import React, { useState, useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import Benefits from '../../Components/Benefits/Benefits';
import Offer from '../../Components/Offer/Offer';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Why from '../../Components/Why';
import FAQs from '../../Components/FAQs';
import Popup from '../../Components/Popup/Popup';

const LandingPage = () => {  
    const [isModalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
      setModalOpen(false);
    };
  
    useEffect(() => {
      // Open the modal after the component mounts
      setModalOpen(true);
    }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div className='flex flex-col justify-center items-center w-full font-inter text-[#121212]'>
    
     <Popup isOpen={isModalOpen} closeModal={closeModal} />
 
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
