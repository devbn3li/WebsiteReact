import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import Aos from 'aos';

const Challenge = ({ title, description, imgSrc }) => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const simpleFloatAnimation = {
    y: ["-20px", "22px"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 4,
      ease: "easeInOut",
    },
  };

  return (
    <section className="w-full max-w-[1400px] rounded-3xl py-20">
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[60%] lg:pr-10 mb-10 lg:mb-0">
          <h1
            className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl "
            data-aos="fade-down"
            data-aos-duration="1600"
          >
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {description}
          </p>
        </div>
        <div className="lg:w-[40%]"
          data-aos="zoom-in-out"
          data-aos-duration="1000"
        >
          <motion.img
            src={imgSrc}
            alt="Hero Image"
            className="w-full "
            animate={simpleFloatAnimation}
          />
        </div>
      </div>
    </section>
  );
};


Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};


export default Challenge;
