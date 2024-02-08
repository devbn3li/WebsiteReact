// Import your external library dependencies and component dependencies
import React from 'react';
import PropTypes from 'prop-types';
import BenefitsCard from './BenefitsCard';

// Benefits component that renders list of benefits in a section
const Benefits = ({ title, description, benefits }) => {

  // Render the section with a title, description and list of BenefitCard components mapped from benefits array
  return (
    <section className='w-full max-w-[1400px] pt-24 px-[5%] gap-3'>
      <div className='max-w-[90.25rem] mb-10'>
        <h1 className="mb-4 text-4xl max-w-[1200px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
          {title}</h1>
        <p className="mb-8 text-lg font-normal text-[#002E70]/80 lg:text-xl  ">
          {description}</p>
      </div>
      <div className="grid grid-cols-3 max-[991px]:flex max-[991px]:flex-col gap-6">
        {benefits.map((benefit, index) => (
          <BenefitsCard key={index} {...benefit} />
        ))}
      </div>
    </section>
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