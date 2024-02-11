import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PrimaryButton from "../Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CTA2 = ({ title, CTATitle, CTAPath }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className=" text-white px-[5%] flex items-center justify-between bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl w-[90vw] max-w-[1400px]"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1600"
        className="flex flex-col max-w-6xl p-8 md:p-20 items-center m-auto"
      >
        <p className="text-xl md:text-4xl text-center font-medium md:font-extrabold mb-4 md:mb-12">
          {title}
        </p>
        <PrimaryButton title={CTATitle} path={CTAPath} />
      </div>
    </div>
  );
};

CTA2.propTypes = {
  title: PropTypes.string.isRequired,
  CTATitle: PropTypes.string.isRequired,
  CTAPath: PropTypes.string.isRequired,
};

export default CTA2;
