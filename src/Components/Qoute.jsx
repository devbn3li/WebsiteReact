import React, { useEffect } from "react";
import personImagePath from "/assets/images/DrAhmedShawky.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FounderNote = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative flex justify-center items-center my-12 px-4 md:px-[5%]"
    >
      <div className="relative  p-6 rounded-lg max-w-6xl w-full ">
        {/* Text content container with custom borders */}
        <div className="relative before:content-['“'] before:absolute before:text-6xl before:text-[#4dcfb7] before:-top-8 md:before:-top-6 before:left-0 md:before:left-0 md:border-r-[6px] md:border-b-[6px] md:border-[#4dcfb7]">
          <blockquote className="text-xl lg:text-3xl md:max-w-[60%] font-bold text-[#002E70]">
            <p className="mb-6 ">
              At LevelUp, we aim to make sustainability achievable for
              organisations of all sizes. Our impact makers and AI-powered
              solutions provide the tools and knowledge to pave your unique
              sustainability journey.
            </p>
            <p className="mb-6">
              Join us in shaping a future where sustainability is accessible,
              cost-effective, and impactful.
            </p>
            {/* <p className="mb-8">
              Let&apos;s build a future where sustainability is
              simple, affordable and impactful.
            </p> */}
            <div className="md:mb-8">
              <cite className="not-italic text-2xl font-extrabold text-gray-600 ">
                Dr. Ahmed Shawky
                <br />
                <span className="opacity-60 text-gray-600 text-xl">
                  Founder and Managing Director, LevelUp Ltd.
                </span>
              </cite>
            </div>
          </blockquote>
        </div>
        {/* Hide image on small screens, show on medium screens and up */}
        <img
          src={personImagePath}
          alt="Dr. Ahmed Shawky"
          data-aos="fade-down"
          data-aos-duration="1400"
          className="hidden md:block absolute right-[30px] bottom-[29px] object-cover grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
};

export default FounderNote;
