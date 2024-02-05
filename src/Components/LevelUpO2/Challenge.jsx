import React from "react";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Challenge = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero-section rounded-3xl  bg-gray-100 py-20"
    >
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Challenge
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  ">
            Calculating your company&apos;s greenhouse gas (GHG) emissions can be a
            daunting task, especially when navigating complex Scopes 1, 2, and
            3. Manually gathering data, crunching numbers, and ensuring accuracy
            can be time-consuming and resource-intensive.
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
