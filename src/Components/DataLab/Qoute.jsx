import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Qoute = () => {
  return (
    <div className=" text-white px-[5%] flex items-center justify-between">
      <div className="flex flex-col max-w-6xl p-8 md:p-20 items-center m-auto bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-3xl">
        <p className="text-xl md:text-4xl text-center font-medium md:font-extrabold mb-4 md:mb-12">
          Let our data science reveal what matters most to your stakeholders and
          growth. Start your sustainability journey on the right path today.{" "}
        </p>
        <PrimaryButton title="Book a consultation" path="/contact" />
      </div>
    </div>
  );
};

export default Qoute;
