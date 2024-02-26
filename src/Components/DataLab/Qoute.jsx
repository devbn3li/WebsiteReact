import React, { useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Qoute = ({ quoteText, buttonTitle, buttonPath }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className=" text-white pt-12 px-[5%] flex items-center justify-between"
    >
      <div className="flex flex-col max-w-6xl p-8 md:p-20 items-center m-auto bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl">
        <p className="text-xl leading-[2] tracking-[1px] text-center font-medium md:font-extrabold mb-4 md:mb-12">
          {quoteText}
        </p>
        <PrimaryButton title={buttonTitle} path={buttonPath} />
      </div>
    </div>
  );
};

export default Qoute;
