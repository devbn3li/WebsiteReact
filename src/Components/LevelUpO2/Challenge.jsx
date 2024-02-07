import React from "react";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Challenge = () => {
  return (
    <section
    
      className="hero-section rounded-3xl   py-20"
    >
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            The Challenge of GHG Emissions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
            Calculating greenhouse gas (GHG) emissions can be complex and time-consuming, but it is essential for understanding and mitigating environmental impact.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="../../../public/assets/images/instingo_challenge_page.svg"
            alt="Hero Image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Challenge;
