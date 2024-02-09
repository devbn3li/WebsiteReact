import React from "react";
import PropTypes from 'prop-types';
import PrimaryButton from "../Buttons/PrimaryButton";

const CTA2 = ({ title, CTATitle, CTAPath }) => {
  return (
    <div className=" text-white px-[5%] flex items-center justify-between bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl w-[90vw] max-w-[1400px]">
      <div className="flex flex-col max-w-6xl p-8 md:p-20 items-center m-auto">
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
}

export default CTA2;
