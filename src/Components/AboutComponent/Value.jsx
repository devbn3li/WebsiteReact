import React, { useEffect } from "react";
import ValuesCards from "./ValuesCards/index";
import "aos/dist/aos.css"; // Import AOS styles

function Values() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1200"
      className="w-full h-full rounded-3xl py-2  flex justify-center bg-[#002E70]  "
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="relative w-[90%]  mx-auto h-full   max-w-[1400px]"
      >
        <div className="w-full p-4  xl:p-8 mt-8 relative  bg-[#F9FFF5] h-full rounded-3xl  border-t-8 border-[#03C2AB]">
          <div className="flex justify-center pt-2">
            <p className="mb-5 text-lg font-normal text-[#002E70]/80 lg:text-xl  ">
              We believe in
            </p>
          </div>
          <h2 className="text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center ">
            <mark className=" px-6  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]">
              {" "}
              Our Values{" "}
            </mark>
          </h2>
          <ValuesCards />
        </div>
      </div>
    </section>
  );
}

export default Values;
