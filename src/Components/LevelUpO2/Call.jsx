import React, { useEffect } from "react";
import img from "/assets/call.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Call = () => {
  return (
    <section className="hero-section rounded-3xl   py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center"
      >
        <div data-aos="fade-up" data-aos-duration="1400" className="lg:w-1/2">
          <img src={img} alt="Hero Image" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1
            data-aos="fade-up"
            data-aos-duration="1600"
            className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002e70] "
          >
            Ready to calculate your carbon emissions?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1900"
            className="mb-8 text-lg font-normal text-[#002e70] "
          >
            Reach out to learn how your business can measure and reduce
            greenhouse gas emissions with the software developed by LevelUp.
          </p>
          <PrimaryButton title="Contact Us" path="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Call;
