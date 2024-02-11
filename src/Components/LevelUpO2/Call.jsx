import React from "react";
import img from "/assets/call.png";
import PrimaryButton from "../Buttons/PrimaryButton";

const Call = () => {
  return (
    <section
    
      className="hero-section rounded-3xl   py-20"
    >
      <div className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2">
          <img
            src={img}
            alt="Hero Image"
            className="w-full"
          />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002e70] md:text-5xl lg:text-6xl ">
          Ready to calculate your carbon emissions?
          </h1>
          <p className="mb-8 text-lg font-normal text-[#002e70] lg:text-xl">
          Reach out to learn how your business can measure and reduce greenhouse gas emissions with the software developed by LevelUp.
          </p>
          <PrimaryButton title="Contact Us" path="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Call;
