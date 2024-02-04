import React from 'react';
import backgroundImage from '../../public/assets/images/bg/1.jpg';


const HeroSection = () => {
  return (
    <section
    style={ {backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',} }

    
    className="hero-section rounded-3xl  bg-gray-100 py-20 mt-[4.5rem]">
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
        <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Our Solutions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  ">
            We make sustainability success achievable for SMEs. Let us empower you with the knowledge, technology, and expertise to level up your ESG initiatives, accelerate positive impact, and unlock business growth.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="../../public/assets/images/Hero-s.png" alt="Hero Image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
