import React, { useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Qoute = ({ quoteText, buttonTitle, buttonPath }) => {
  return (
    <div className=" text-white pt-10 px-[5%] flex items-center justify-between">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="flex flex-col max-w-6xl p-6 md:p-20 items-center m-auto bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl"
      >
        <p className="md:text-xl text-center md:font-semibold tracking-[1px] mb-4 md:mb-12">
          {quoteText}
        </p>
        <div
          className="relative z-10 flex flex-wrap gap-6 justify-center max-md:flex-col-reverse"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div data-aos="flip-left" data-aos-delay="150">
            <PrimaryButton
              path="/contact"
              classes="font-bold hover:bg-white hover:!text-[#02c2ab] border-none max-md:w-full"
              title="Contact Us"
            />
          </div>
          <div data-aos="flip-right" data-aos-delay="300">
            <PrimaryButton
              path="/contact"
              classes="bg-[#E6E6E5] border-none !text-[#002e70] font-bold hover:bg-[#002e70] hover:!text-white max-md:w-full"
              title="Make an Impact, Together"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoute;
