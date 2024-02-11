import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PrimaryButton from "../Buttons/PrimaryButton";
import CTA from "/assets/Premasset/CTA.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CTA1 = ({ path }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="w-[90%] bg-gradient-to-r from-[#112b65] to-[#02c2ab]  max-w-[1400px] rounded-3xl flex max-[1000px]:flex-col justify-center gap-28 p-24 max-[500px]:px-6 py-6 items-center   box-border overflow-hidden my-16"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="max-w-[300px] max-[340px]:hidden max-h-[350px] rounded-t-full overflow-hidden"
      >
        <img
          src={CTA}
          alt="demo"
          className="min-w-full min-h-full object-cover"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-[1000px]:w-full w-1/2 max-[600px]:px-0 flex flex-col justify-center items-start box-border text-[#121212] font-semibold px-[5%]"
      >
        <h1 className="text-4xl w-full my-12 text-white leading-[120%] font-bold max-[500px]:text-2xl">
          Join the growing list of companies commited to
          <span className="relative inline-block w-[250px] mx-2 max-[500px]:w-[160px] max-[500px]:mx-0">
            <span className="absolute   left-0 w-full text-center top-1/2 -translate-y-[80%] text-white z-30">
              going green
            </span>
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[75%] w-full h-12 max-[500px]:h-9 z-10"
              preserveAspectRatio="none"
              viewBox="0 0 272 53"
              fill="#121212"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M262.166 49.9975C240.295 47.3283 218.189 49.3302 196.112 49.5193C166.204 49.7695 136.248 48.4304 106.397 50.9518C86.0238 52.6679 65.6711 52.6623 45.3073 52.9937C38.5203 53.1049 31.6975 51.7136 24.9317 50.6092C19.8161 49.7728 14.6392 51.1152 9.57635 49.5193C5.32327 48.1846 1.77705 10.7115 0.260402 4.80465C-0.480485 1.92298 0.389696 0.504943 2.48731 0.0756401C3.2265 -0.0700561 4.00822 0.02448 4.75931 0.11123C27.0055 2.66926 49.3222 2.21771 71.6084 2.43681C90.6622 2.62254 109.724 2.24774 128.778 1.71166C152.026 1.05992 175.278 0.527187 198.529 0.821916C212.045 0.989856 225.562 2.04866 239.068 1.89073C248.018 1.77951 256.895 3.76365 265.838 2.85833C266.409 2.8087 266.983 2.8558 267.545 2.99846C270.049 3.60127 272.618 41.7106 271.867 43.8938C271.054 46.245 270.294 49.5315 267.508 49.695C265.794 49.794 264.082 49.893 262.166 50.0008"
              ></path>
            </svg>
          </span>
        </h1>
        <PrimaryButton
          path={path}
          title="Start Your Free Assessment"
          classes="py-2 my-5 max-[500px]:text-lg text-xl bg-[#121212] border-[#121212] max-[1000px]:w-full max-[1000px]:py-3"
        />
      </div>
    </div>
  );
};

CTA1.propTypes = {
  path: PropTypes.string.isRequired,
};

export default CTA1;
