import React from "react";
import personImagePath from "../../public/assets/images/DrAhmedShawky.png";

const FounderNote = () => {
  return (
    <div className="relative flex justify-center items-center my-8 px-4 md:px-[5%]">
      <div className="relative  p-6 rounded-lg  max-w-6xl w-full ">
        {/* Text content container with custom borders */}
        <div className="relative before:content-['“'] before:absolute before:text-6xl before:text-[#4dcfb7] before:-top-8 md:before:-top-6 before:left-0 md:before:left-0 md:border-r-[6px] md:border-b-[6px] md:border-[#4dcfb7]">
          <blockquote className="text-2xl md:max-w-[65%] font-bold text-[#002E70]">
            <p className="mb-2">
              At LevelUp, we aim to make sustainability achievable for
              organisations of all sizes. Our AI-powered solutions provide
              data-driven insights to empower your ESG goals.
            </p>
            <p className="mb-2">
              We are changing how companies leverage ESG data to drive progress.
              Our spirit of innovation pushes us to improve so you can enhance
              your impact continuously.
            </p>
            <p className="mb-8">
              Guided by purpose, transparency and collaboration, we succeed when
              you succeed. Let&apos;s build a future where sustainability is
              simple, affordable and impactful.
            </p>
            <div className="md:mb-8">
              <cite className="not-italic">
                Dr. Ahmed Shawky
                <br />
                Founder and Managing Director, LevelUp Ltd.
              </cite>
            </div>
          </blockquote>
        </div>
        {/* Hide image on small screens, show on medium screens and up */}
        <img
          src={personImagePath}
          alt="Dr. Ahmed Shawky"
          className="hidden md:block absolute right-[30px] bottom-[29px]  object-cover grayscale"
        />
      </div>
    </div>
  );
};

export default FounderNote;
