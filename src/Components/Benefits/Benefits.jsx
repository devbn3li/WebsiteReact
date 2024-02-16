// Import your external library dependencies and component dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BenefitsCard from './BenefitsCard';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


// Benefits component that renders list of benefits in a section
const Benefits = ({ title, description, benefits }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // Render the section with a title, description and list of BenefitCard components mapped from benefits array
  return (
   <div className='w-full justify-center flex'>
     <section className='w-full max-w-[1400px] pt-24 px-[5%] gap-3'>
      <div className='max-w-[90.25rem] mb-10'
      data-aos="fade-down"
      data-aos-duration="1600"
      >
        <h1 className="mb-4 text-4xl max-w-[1200px] leading-[1.2] font-extrabold tracking-[.5px]  text-[#002E70]  ">
          {title}</h1>
        <p className="mb-8 text-lg font-normal text-[#002E70]/80  leading-[1.5] ">
          {description}</p>
      </div>
      <div className="grid grid-cols-3 max-[991px]:flex max-[991px]:flex-col gap-6">
        {benefits.map((benefit, index) => (
          <BenefitsCard key={index} {...benefit} />
        ))}
      </div>
    </section>
   </div>
  );
}

Benefits.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.objectOf({
      icon: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string
    }).isRequired
  ).isRequired
};

export default Benefits;