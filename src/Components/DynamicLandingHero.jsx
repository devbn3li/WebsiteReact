import React, { useEffect, useState } from "react";
import img3 from "/assets/Dash/Solutions/ESG.png";
import PrimaryButton from "./Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const DynamicLandingHero = ({ title, subtitle, button1, button2 }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="my-18 w-full">
      <div className="container pt-32 pb-20 mx-auto px-[5%] md:h-[800px] overflow-hidden bg-gradient-to-b from-[#112b65] to-[#02c2ab] rounded-b-[40px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2
            className="text-4xl max-md:text-4xl md:w-[70%] font-extrabold text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {title}
          </h2>
          <p
            className="my-12 md:w-[80%] text-white text-xl leading-[1.5]"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {subtitle}
          </p>
          <div
            className="relative z-10 flex flex-wrap gap-6 justify-center max-md:flex-col-reverse"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div data-aos="flip-left" data-aos-delay="150">
              <PrimaryButton
                path={button1.path}
                classes="font-bold hover:bg-white hover:!text-[#02c2ab] border-none max-md:w-full"
                title={button1.label}
              />
            </div>
            <div data-aos="flip-right" data-aos-delay="300">
              <PrimaryButton
                path={button2.path}
                classes="bg-[#E6E6E5] border-none !text-[#002e70] font-bold hover:bg-[#002e70] hover:!text-white max-md:w-full"
                title={button2.label}
              />
            </div>
          </div>
          <div
            className="w-full flex justify-center p-4 rounded-lg my-6 max-md:hidden"
            data-aos="zoom-in-up"
            data-aos-duration="1600"
          >
            <img
              src={img3}
              className="absolute -z-10 w-[80%] ease-in duration-500 hover:-mt-52"
              alt="Landing section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicLandingHero;
