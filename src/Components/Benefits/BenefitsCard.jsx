import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

/**
 * BenefitsCard component
 * It provides UI for a single Benefit Card 
 * It accepts props icon, title, description, imageUrl
 */

const BenefitsCard = ({ icon, title, description, imageUrl, Class }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1600"
      className='group flex flex-col  border-t justify-between border-[#02c2ab] pt-6 gap-6 max-[996px]:flex-row max-[479px]:flex-col'>
      <div className='group-hover:pl-2 duration-500 flex flex-col max-[991px]:w-11/12'>
        <span className='flex justify-center items-center bg-[#02c2ab] hover:rotate-6 duration-700 cursor-pointer hover:scale-110 mb-3 text-[#002E70] aspect-square max-w-10 box-border p-2 rounded-lg'>
          {icon}
        </span>
        <h1 className="mb-4 text-xl max-w-[1000px] font-extrabold tracking-tight leading-[1.5] text-[#002E70]   ">
          {title}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 text-[#002E70]/80  ">{description}</p>
      </div>
      <div className={`${!imageUrl && 'hidden'} min-[479px]:mt-[7rem] md:mt-0 hover:scale-105 flex justify-center duration-700 cursor-pointer object-cover  h-[250px] rounded-2xl overflow-hidden`}>
        <img src={imageUrl} class={Class} alt={`Benefit: ${title}`} className='object-cover h-full w-full' />
      </div>
    </div>
  );
}

// Defining propTypes for the component to ensure the data passed is valid
BenefitsCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};


export default BenefitsCard;
