import React, { useEffect } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Call = ({ imgSrc, title, paragraph, buttonTitle, buttonPath }) => {
  return (
    <section className="hero-section rounded-3xl py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center"
      >
        <div data-aos="fade-up" data-aos-duration="1400" className="lg:w-1/2">
          <img src={imgSrc} alt="Hero Image" className="w-[80%] object-cover" />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 max-sm:text-center">
          <h1 className="mb-4 leading-[1.5] text-4xl max-w-[1000px] font-extrabold tracking-tight  text-[#002e70] ">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal  leading-[2] text-[#002e70] ">
            {paragraph}
          </p>
          <PrimaryButton title={buttonTitle} path={buttonPath} />
        </div>
      </div>
    </section>
  );
};

export default Call;
