import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';


const Card1 = ({ title, description }) => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);


  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="border-l-[2px] hover:border-[2px] border-[#159D9B] bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-all">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
      </div>
    </div>
  );
};


Card1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Card1;
