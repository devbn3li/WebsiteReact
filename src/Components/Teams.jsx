import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Slider from "react-infinite-logo-slider";

import deepa from "/assets/images/deepa-.png";
import Josly from "/assets/Josly.png";
import Marko from "/assets/Marko.png";
import Harsh from "/assets/Harsh.png";
import FLORENCE from "/assets/FLORENCE.png";
import Jun from "/assets/Jun.png";


export default function Teams() {
  const dataTeam = [
    { id: 1, photo: deepa, userName: "Deepa Rao", Class: "overflow-hidden" },
    { id: 2, photo: Josly, userName: "Josly jose", Class: "" },
    { id: 3, photo: Marko, userName: "Marko Peric" },
    { id: 6, photo: Harsh, userName: "Harsh Parmar" },
    { id: 4, photo: FLORENCE, userName: "Florence Adedigba" },
    { id: 5, photo: Jun, userName: "Jun Jie Choo" },   
  ];
  return (
    <div className="flex justify-center w-full ">
      <section
        data-aos="fade-up"
        data-aos-duration="1200"
        className="relative w-full  max-w-[1400px] py-[4rem] sm:px-[3rem] "
      >
        <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-6">
          <h2 className="text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center ">
            <mark className=" px-6  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]">
              {" "}
              Team Members
            </mark>
          </h2>
          <div className="flex justify-center  w-full">
            <Slider
                width="180px"
                duration={20}
                pauseOnHover={true}
                data-aos="fade-up"
                data-aos-duration="1800"
                className="relative mt-[5rem] w-[90%] justify-center flex flex-wrap justify-items-center gap-2 "
            >
              {dataTeam.map(({ id, photo, userName }) => (
                <Slider.Slide
                  className="relative mt-[7rem] flex flex-col rounded-xl hover:scale-105 ease-linear duration-500 cursor-pointer    h-[180px] w-[180px] "
                  key={id}
                >
                  <div className="flex justify-center ">
                    <div className="bg-gradient-to-r from-[#1C4987] to-[#159D9B] border-[4px] border-[#77f2f0] rounded-full  w-[100px] h-[100px]  ">
                      <img
                        src={photo}
                        alt={userName}
                        className="h-full w-full rounded-full object-cover "
                      />
                    </div>
                  </div>
                  <div className="relative mt-5">
                    <h2 className=" text-center  text-[#112b65]  text-[1.125rem] font-[700]">
                      {userName}
                    </h2>
                  </div>
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}