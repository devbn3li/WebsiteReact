import React from 'react';
import PrimaryButton from '../Components/Buttons/PrimaryButton';

const HeroSection = () => {
  const customBackgroundStyle = {
    background: 'linear-gradient(to right, #112b65, #02c2ab)',
  };

  return (
    <div className="relative text-white px-[5%] py-28 mt-18 flex items-center justify-center" style={customBackgroundStyle}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl mt-12 font-bold mb-4">ESG Software Solutions</h1>
        <p className="mb-8 text-xl">
        Unlock the full potential of your Environmental, Social, and Governance (ESG) initiatives with our suite of innovative ESG software solutions. Designed to empower businesses of all sizes, our software enables you to seamlessly navigate the complexities of ESG management, from diagnostics to reporting and beyond. Our offerings include LevelUp ESG Pulse, Sustainability Tracker, LevelUp O2, and LevelUp Data Lab, each tailored to meet your specific ESG needs.
        </p>
        <PrimaryButton path="/contact" title="Request Access" classes="mt-4" />
      </div>

    </div>
  );
};

export default HeroSection;
