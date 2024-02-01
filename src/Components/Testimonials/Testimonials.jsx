import React from 'react';
import person1 from '../../assets/images/Person_1.jpg';
import person2 from '../../assets/images/Person_2.webp';
import person3 from '../../assets/images/Person_3.jpg';
import TestimonialCard from './TestimonialCard';

const ArrowLeft = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
  </svg>
);

const ArrowRight = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
  </svg>
);

const Testimonials = () => {
  const sectionTitle = 'Customer testimonials';
  const sectionDescription = "Our product has a positive impact on our customers' operations, which they love.";
  const testimonials = [
    {
      message: "Dr. Ahmed is a dedicated advocate for sustainable development and ethical business practices through LevelUp ESG. His expertise and commitment to making a positive impact are inspiring, and his ability to empower individuals and enterprises to embed ethical practices is commendable. We need more leaders like him who are driven by purpose.",
      name: 'Samer Jannoun',
      title: "Head of Regional Ethics & Compliance @Meta",
    },
    {
      message: "I had the pleasure of interacting with the impressive LevelUp team—a combination of experts and rising stars, all passionately committed to ESG. Their competence, expertise, and positive energy are exceptional. They embrace diversity, foster a global mindset, and their passion is truly inspiring!",
      name: 'Deepa Rao',
      title: "Environmental, Social and Governance (ESG) Reporting and Controls Lead @Cognizant",
    },
  ];

  return (
    <section className='max-w-[1400px] mx-auto p-[5%] py-28 text-[#B3FFD6] bg-[#121212] rounded-[20px]'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-5xl font-bold mb-6'>{sectionTitle}</h1>
        <div className='flex justify-center gap-6 mb-6'>
          <div className='hidden md:flex items-start'>
            <img src={person1} alt="Person 1" className="w-14 h-14 rounded-full border-3 border-[#B3FFD6] overflow-hidden z-30" />
            <img src={person2} alt="Person 2" className="w-14 h-14 rounded-full border-3 border-[#B3FFD6] overflow-hidden -ml-4 z-20" />
            <img src={person3} alt="Person 3" className="w-14 h-14 rounded-full border-3 border-[#B3FFD6] overflow-hidden -ml-4 z-10" />
          </div>
          <p className='max-w-2xl'>{sectionDescription}</p>
        </div>
        <div className='flex gap-4 justify-center mb-6'>
          <button aria-label="Previous testimonial" className='aspect-square w-12 hover:scale-110 bg-[#02c2ab] rounded-full text-[#121212] p-2 transition duration-300 ease-in-out'>
            <ArrowLeft />
          </button>
          <button aria-label="Next testimonial" className='aspect-square w-12 hover:scale-110 bg-[#02c2ab] rounded-full text-[#121212] p-2 transition duration-300 ease-in-out'>
            <ArrowRight />
          </button>
        </div>
        <div className='flex overflow-x-auto gap-8 pb-4'>
          {testimonials.map(TestimonialCard)}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
