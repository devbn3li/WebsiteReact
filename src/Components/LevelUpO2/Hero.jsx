import React from "react";

const HeroSection = () => {
  return (
    <section className="my-32">
      <div className=" px-[5%] text-center ">
        <a
          href="#"
          className="inline-flex justify-between cursor-not-allowed items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-200 bg-[#02c2ab] rounded-full hover:bg-[#02c2ab]/40 duration-500 "
          role="alert"
        >
          <span className="text-xs bg-[#02c2ab]/20 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">LevelUp O2</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <h1 className="text-4xl text-[#002e70] font-bold mb-8">
          Breathe New Life into Your Sustainability Journey
        </h1>
        <p className="text-lg text-[#002e70]">
          An AI-powered SaaS platform for automated, accurate carbon accounting
          across your entire value chain emissions and offset management.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
