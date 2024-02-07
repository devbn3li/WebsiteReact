import React from "react";

// Import your logos here
import logo1 from "../../../public/assets/images/company/8.png";
import logo2 from "../../../public/assets/images/company/8.png";
import logo3 from "../../../public/assets/images/company/8.png";
import logo4 from "../../../public/assets/images/company/8.png";
import logo5 from "../../../public/assets/images/company/8.png";
import logo6 from "../../../public/assets/images/company/8.png";
import logo7 from "../../../public/assets/images/company/8.png";
import logo8 from "../../../public/assets/images/company/8.png";
import logo9 from "../../../public/assets/images/company/8.png";
import logo10 from "../../../public/assets/images/company/8.png";
import logo11 from "../../../public/assets/images/company/8.png";
import logo12 from "../../../public/assets/images/company/8.png";
import logo13 from "../../../public/assets/images/company/8.png";
import logo14 from "../../../public/assets/images/company/8.png";
import logo15 from "../../../public/assets/images/company/8.png";
import logo16 from "../../../public/assets/images/company/8.png";
import logo17 from "../../../public/assets/images/company/8.png";
import logo18 from "../../../public/assets/images/company/8.png";
import logo19 from "../../../public/assets/images/company/8.png";
import logo20 from "../../../public/assets/images/company/8.png";
import logo21 from "../../../public/assets/images/company/8.png";
import logo22 from "../../../public/assets/images/company/8.png";
import logo23 from "../../../public/assets/images/company/8.png";
import logo24 from "../../../public/assets/images/company/8.png";
import logo25 from "../../../public/assets/images/company/8.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25,
];

const Companys = () => {
  return (
    <div className="container mx-auto mt-20 px-[5%]">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-12 text-[#112b65]">
        Our ESG experts have worked with the best companies in every category
      </h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 justify-items-center gap-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-26 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Companys;
