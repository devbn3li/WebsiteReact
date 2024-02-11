import React from "react";

// Import your logos here
import logo1 from "/assets/images/company/logo-blab.svg";
import logo2 from "/assets/images/company/EY_logo_2019.svg";
import logo3 from "/assets/images/company/tuck-school-of-business.svg";
import logo4 from "/assets/images/company/general-electric.svg";
import logo5 from "/assets/images/company/London_Business_School_logo.svg";
import logo6 from "/assets/images/company/stanford-university.svg";
import logo7 from "/assets/images/company/pwc.svg";
import logo8 from "/assets/images/company/hbs.png";
import logo9 from "/assets/images/company/University_of_Cambridge-Logo.wine.svg";
import logo10 from "/assets/images/company/UK_Export_Finance_logo.svg";
import logo11 from "/assets/images/company/network-rail-vector-logo.svg";
import logo12 from "/assets/images/company/mckinsey.svg";
import logo13 from "/assets/images/company/hp.svg";
import logo14 from "/assets/images/company/HM-Treasury.svg";
import logo15 from "/assets/images/company/mit.svg";
import logo16 from "/assets/images/company/iema-1.svg";
import logo17 from "/assets/images/company/KPMG_logo.svg";
import logo18 from "/assets/images/company/sustainalytics.svg";
import logo19 from "/assets/images/company/deloitte.svg";
import logo20 from "/assets/images/company/Salesforce.com_logo.svg";
import logo21 from "/assets/images/company/pvh.svg";
import logo22 from "/assets/images/company/qatar-foundation-logo-vector.svg";
import logo23 from "/assets/images/company/Cognizant_logo_2022.svg";
import logo24 from "/assets/images/company/Protiviti_logo.svg";
import logod3 from "/assets/images/company/3.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logod3,
];

const Companys = () => {
  return (
    <div className="container mx-auto mt-20 px-[5%]">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-16 text-[#112b65]">
        Our ESG experts have worked with the best companies in every category
      </h1>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 justify-items-center gap-2">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="hover:bg-[#112b65]/20 duration-500 ease-linear group cursor-pointer hover:scale-95 p-4 h-full w-full grid place-items-center rounded-3xl "
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-auto sm:w-20 grayscale duration-500 group-hover:grayscale-0 md:w-24 lg:w-28 xl:w-32 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companys;
