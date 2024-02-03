import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

// Import images for testimonials
import person1 from '../../../public/assets/images/Person_1.jpg';
import person2 from '../../../public/assets/images/Person_2.webp';
import person3 from '../../../public/assets/images/Person_3.jpg';

// Import TestimonialCard component
import TestimonialCard from './TestimonialCard';

// ArrowLeft SVG component  
const ArrowLeft = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
  </svg>
);

// ArrowRight SVG component
const ArrowRight = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
  </svg>
);

// Testimonials component
const Testimonials = () => {
  // Testimonials data
  const sectionTitle = 'Customer testimonials';
  const sectionDescription = "Our product has a positive impact on our customers' operations, which they love.";
  const testimonials = [
    {
      message: "Dr. Ahmed is a dedicated advocate for sustainable development and ethical business practices through LevelUp ESG. His expertise and commitment to making a positive impact are inspiring, and his ability to empower individuals and enterprises to embed ethical practices is commendable. We need more leaders like him who are driven by purpose.",
      name: 'Samer Jannoun',
      title: "Head of Regional Ethics & Compliance @Meta"
    },
    {
      message: "I had the pleasure of interacting with the impressive LevelUp team—a combination of experts and rising stars, all passionately committed to ESG. Their competence, expertise, and positive energy are exceptional. They embrace diversity, foster a global mindset, and their passion is truly inspiring!",
      name: 'Deepa Rao',
      title: "Environmental, Social and Governance (ESG) Reporting and Controls Lead @Cognizant"
    },
  ];

  // Render Testimonials component
  return (
    <section className='max-w-[1400px] p-[5%] py-28 text-[#B3FFD6] bg-[#121212] rounded-[20px] w-full'>
      <div className='flex flex-col'>
        {/* Section Title */}
        <h1 className='text-5xl font-bold mb-6 max-[679px]:text-4xl'>{sectionTitle}</h1>
        <span className='flex gap-6 max-w-[39.25rem] max-[679px]:max-w-[360px]'>
          <div className='flex items-start max-[679px]:hidden'>
            {/* Testimonial Images */}
            <div className="aspect-square rounded-full w-14 border-[3px] border-[#B3FFD6] overflow-hidden z-[3]">
              <img src={person1} alt="Person1" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="aspect-square rounded-full w-14 border-[3px] border-[#B3FFD6] overflow-hidden -ml-4 z-[2]">
              <img src={person2} alt="Person2" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="aspect-square rounded-full w-14 border-[3px] border-[#B3FFD6] overflow-hidden -ml-4 z-[1]">
              <img src={person3} alt="Person3" className="min-h-full min-w-full object-cover" />
            </div>
          </div>
          {/* Section Description */}
          <p className='text-[18px] max-[679px]:text-base'>{sectionDescription}</p>
        </span>
        <div className='flex justify-end gap-6 mb-6'>
          {/* Previous Testimonial Button */}
          <button aria-label="Previous testimonial" className='aspect-square w-12 hover:scale-110 bg-[#02c2ab] rounded-full text-[#121212] box-border p-4 transition-all duration-[.45s]'><ArrowLeft /></button>
          {/* Next Testimonial Button */}
          <button aria-label="Next testimonial" className='aspect-square w-12 hover:scale-110 bg-[#02c2ab] rounded-full text-[#121212] box-border p-4 transition-all duration-[.45s]'><ArrowRight /></button>
        </div>
        {/* Testimonial Cards */}
        <div className='flex justify-center gap-8 max-[991px]:overflow-x-scroll pb-4'>
          {testimonials.map(TestimonialCard)}
        </div>
      </div>
    </section>
  );
}

// PropTypes validation for Testimonials component
Testimonials.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
};

export default Testimonials;
