import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Qoute = ({ quoteText, buttonTitle, buttonPath }) => {
  return (
    <div className=" text-white pt-10 px-[5%] flex items-center justify-between">
      <div className="flex flex-col max-w-6xl p-6 md:p-20 items-center m-auto bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl">
        <p className="md:text-xl text-center md:font-semibold mb-4 md:mb-12">
          {quoteText}
        </p>
        <PrimaryButton title={buttonTitle} path={buttonPath} />
      </div>
    </div>
  );
};

export default Qoute;