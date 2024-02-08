import React from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ title, description, imgSrc }) => {
  return (
    <section
    
      className="hero-section rounded-3xl py-20"
    >
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
            {description}
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={imgSrc}
            alt="Hero Image"
            className="w-full"
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
