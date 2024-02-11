import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card_1 from '../Cards/Card_1';
import Aos from 'aos';


const Solutions = ({ description, solutions }) => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="w-full max-w-[1400px] flex flex-col text-center items-center justify-center py-20 px-[5%]">
      <h2 className="text-6xl text-[#121212] font-bold mb-12"
      data-aos="fade-down"
      data-aos-duration="1200"
      >Solution</h2>
      <p className="max-w-[750px] mb-12"
      data-aos="fade-down"
      data-aos-duration="1000"
      >{description}</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <Card_1 key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};


Solutions.propTypes = {
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};


export default Solutions;
