import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from "../Buttons/PrimaryButton";

const Hero_2 = ({ title, description, CTATitle, CTAPath }) => {
  const customBackgroundStyle = {
    background: "linear-gradient(to right, #112b65, #02c2ab)",
  };

  return (
    <div
      style={customBackgroundStyle}
      className="flex justify-center w-full items-center h-[90vh] rounded-3xl">
      <div className="relative text-white px-[5%] max-w-[1400px] w-full py-28 mt-18 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl max-w-[1200px] font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-white/80 lg:text-xl  ">
            {description}
          </p>
          <PrimaryButton path={CTAPath} title={CTATitle} classes="mt-4" />
        </div>
      </div>
    </div>
  );
};



Hero_2.propTypes = {
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  CTATitle: PropTypes.string.isRequired, 
  CTAPath: PropTypes.string.isRequired,
};


export default Hero_2;
