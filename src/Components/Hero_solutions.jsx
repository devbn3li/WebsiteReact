import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gray-100 py-20">
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left text-gray-800">
            Our Solutions
          </h1>
          <p className="text-lg lg:text-xl text-center lg:text-left text-gray-700 leading-relaxed">
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
