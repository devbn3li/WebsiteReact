import React from 'react';
import PropTypes from 'prop-types';

/**
 * BenefitsCard component
 * It provides UI for a single Benefit Card 
 * It accepts props icon, title, description, imageUrl
 */

const BenefitsCard = ({ icon, title, description, imageUrl }) => (
  <div className='flex flex-col border-t border-[#02c2ab] pt-6 gap-6 max-[996px]:flex-row max-[479px]:flex-col'>
    <div className='flex flex-col max-[991px]:w-11/12'>
      <span className='bg-[#02c2ab] mb-3 text-[#002E70] aspect-square max-w-10 box-border p-2 rounded-lg'>
        {icon}
      </span>
      <h1 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70] md:text-2xl lg:text-3xl ">
        {title}</h1>
      <p className="mb-8 text-lg font-normal text-gray-500 text-[#002E70]/80 lg:text-xl  ">
        
        {description}</p>
    </div>
    <div className='aspect-[1/1.2] w-full rounded-2xl overflow-hidden'>
      <img src={imageUrl} alt={`Benefit: ${title}`} className='object-cover min-h-full min-w-full' />
    </div>
  </div>
);

// Defining propTypes for the component to ensure the data passed is valid
BenefitsCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};


export default BenefitsCard;
