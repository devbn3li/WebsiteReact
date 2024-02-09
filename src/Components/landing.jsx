import React from "react";
import img from "../../public/assets/Premasset/488f3192-902f-46cd-bcb7-6a50c298d1f5.png";
import PrimaryButton from "./Buttons/PrimaryButton";

const LandingSection = () => {
  return (
    <section className="my-28 max-md:mt-40">
      <div className="container mx-auto px-[5%]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-6xl font-extrabold text-[#002e70] max-md:text-center">
              LevelUp for Better Business & Planet.
            </h2>
            <p className="my-12 text-[#002e70] max-md:text-center text-2xl">
              Welcome to LevelUp, where we combine sustainability technology,
              science, and human expertise to make a meaningful impact.
            </p>
            <div className="flex gap-6 max-md:flex-col">
              <PrimaryButton path="/contact" title="About Us" />
              <PrimaryButton
                path="/contact"
                classes="bg-[#E6E6E5] border-none !text-[#002e70] font-bold"
                title="Make an Impact, Together"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 max-md:hidden">
            <div className="flex justify-center bg-gray-100 p-4 rounded-lg my-6">
              <img src={img} className="w-32" alt="Landing section" />
            </div>
            <div className="flex justify-center bg-gray-100 p-4 rounded-lg my-6">
              <img src={img} className="w-20" alt="Landing section" />
            </div>
            <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
              <img src={img} className="w-64" alt="Landing section" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
