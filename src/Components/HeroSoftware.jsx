import React from "react";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

const HeroSection = () => {
  const customBackgroundStyle = {
    background: "linear-gradient(to right, #112b65, #02c2ab)",
  };

  return (
    <div
    style={customBackgroundStyle}
    className="flex justify-center h-[90vh]">
      <div
      className="relative text-white px-[5%] max-w-[1400px] w-full py-28 mt-18 flex items-center justify-center"
     
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl mt-12 font-bold mb-4">
          ESG Software Solutions
        </h1>
        <p className="mb-8 text-lg font-normal text-white/80 lg:text-xl  ">
          Unlock the full potential of your ESG initiatives with our innovative software solutions. From diagnostics to reporting and beyond, LevelUp offers tailored tools such as ESG Pulse, Sustainability Tracker, O2, and Data Lab.
        </p>
        <PrimaryButton path="/contact" title="Request Access" classes="mt-4" />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
