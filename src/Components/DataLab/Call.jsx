import React, { useEffect } from "react";
import img from "/assets/call.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Call = () => {
  return (
    <section
      className="hero-section rounded-3xl py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="Hero Image"
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1200"
          />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h1
            data-aos="fade-up"
            data-aos-duration="1400"
            className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-[1px] leading-[1.5] text-[#002e70] "
          >
            Ready to Shape Your Thriving Future with Data-Driven Sustainability?
          </h1>
          <p
            className="mb-8 text-lg font-normal text-[#002e70] leading-[2]"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Embrace the journey towards sustainability leadership with LevelUp
            Data Lab as your ally. Together, we&apos;ll unlock the
            transformative power of your ESG data, paving the way for a future
            where your business doesn&apos;t just grow—it flourishes.
          </p>
          <PrimaryButton title="Book a consultation" path="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Call;
