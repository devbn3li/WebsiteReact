import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import CompareCard from './CompareCard';
import Cursal from '../Cursal/Cursal';
import wave from "../../Lottie/lighting.json";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const Comparison = ({ challenges, solutions }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);


  const services = challenges.map((challenge, index) => {
    return {
      data: <CompareCard challenge={challenge} solution={solutions[index]} />,
      ...challenge,
    }
  }
  )

  return (
    <div className='flex flex-col justify-center py-10 items-center w-[90vw] max-w-[1400px] box-border m-auto'>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-[#0e3462] aspect-square w-[100px] h-[100px] p-2  relative shadow-2xl shadow-[#0e3462] rounded-[2rem] mb-10 cursor-pointer"
      >
        <Lottie
          animationData={wave}
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1
        className='font-bold text-4xl mb-20'
        data-aos="fade-down"
        data-aos-duration="1000"
      > Challenges and Our Solutions</h1>
      <Cursal services={services} />
    </div>
  );
};

Comparison.propTypes = {
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};


export default Comparison;
