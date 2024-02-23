import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Slider from "react-infinite-logo-slider";

import Elvis from "/assets/Teams/Elvis.png";
import Josly from "/assets/Teams/josly.png";
import Marko from "/assets/Marko.png";
import Harsh from "/assets/Harsh.png";
import FLORENCE from "/assets/FLORENCE.png";
import Jun from "/assets/Jun.png";
import seyit from "/assets/Teams/Seyit-copy.png";
import Luana from "/assets/Teams/luana.png";
import Kavya from "/assets/Teams/Kavya.png";
import Maribel from "/assets/Teams/marible.png";
import nonie from "/assets/Teams/nonie.png";
import faysal from "/assets/Teams/Faysal.png";
import sondos from "/assets/Teams/sondos.png";
import salah from "/assets/Teams/Salah.png";
import muhamed from "/assets/Teams/Muhamed.png";
import maria from "/assets/Teams/Maria.png";
import eleonora from "/assets/Teams/eleonora.png";
import Fabio from "/assets/Teams/Fabio.png";
import charlene from "/assets/Teams/charlene.png";

export default function Teams() {
  const dataTeam = [
    // { id: 1, photo: Elvis, userName: "Elvis Shoko" },
    { id: 2, photo: Josly, userName: "Josly jose", Class: "pt-1" },
    { id: 3, photo: seyit, userName: "seyit A. Colak" },
    { id: 4, photo: Marko, userName: "Marko Peric" },
    { id: 5, photo: Harsh, userName: "Harsh Parmar" },
    { id: 6, photo: Luana, userName: "Luana Izzicupo", Class: "" },
    { id: 7, photo: FLORENCE, userName: "Florence Adedigba" },
    // { id: 8, photo: Kavya, userName: "Kavya Gowda" },
    // { id: 9, photo: Maribel, userName: "Maribel Esparcia" },
    { id: 10, photo: Jun, userName: "Jun Jie Choo" },
    // { id: 11, photo: nonie, userName: "Nonie Mohd" },
    { id: 12, photo: faysal, userName: "Faysal Ebrahim" },
    { id: 13, photo: sondos, userName: "Sondos Mohamed" },
    { id: 14, photo: salah, userName: "Salaheldin Mohamed" },
    { id: 15, photo: muhamed, userName: "Muhammed Ali" },
    { id: 16, photo: maria, userName: "Maria Siddiqui" },
    { id: 17, photo: eleonora, userName: "Eleonora Tossini" },
    { id: 18, photo: Fabio, userName: "Dr. Fabio Puntillo" },
    { id: 19, photo: charlene, userName: "Charlene Gabrielle" },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex justify-center max-w-[1400px] overflow-hidden w-full ">
        <section
          data-aos="fade-up"
          data-aos-duration="1200"
          className="relative w-full  max-w-[1400px] py-[4rem] sm:px-[3rem] "
        >
          <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-6">
            <h2 className="text-4xl  font-bold  text-[2.625rem] max-sm:text-4xl mb-[.5rem] text-center ">
              <mark className="px-6 py-3 max-sm:px-4 rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]">
                {" "}
                Our Impact Makers
              </mark>
            </h2>
            <div className="flex justify-center  w-full">
              <Slider
                width="230px"
                duration={20}
                pauseOnHover={true}
                blurBorders={true}
                blurBoderColor={"#fff"}
                data-aos="fade-up"
                data-aos-duration="1600"
                className="relative mt-[5rem]  w-[90%] justify-center flex flex-wrap justify-items-center gap-2 "
              >
                {dataTeam.map(({ id, photo, userName, Class }) => (
                  <Slider.Slide
                    className="relative mt-[4rem] max-md:mt-4 flex flex-col rounded-xl hover:scale-105 ease-linear duration-500 cursor-pointer  h-auto  w-[180px] "
                    key={id}
                  >
                    <div className="hover:bg-sky-200/40 duration-500 p-4 aspect-square rounded-3xl">
                      <div className="flex justify-center  ">
                        <div className="bg-gradient-to-r  from-[#1C4987] to-[#159D9B] border-[4px] border-[#77f2f0] rounded-full  w-[150px] h-[150px]  ">
                          <img
                            src={photo}
                            alt={userName}
                            className={`${Class} h-full w-full rounded-full object-cover `}
                          />
                        </div>
                      </div>
                      <div className="relative mt-5">
                        <h2
                          className={`text-center text-[#112b65] text-${
                            userName.length > 10 ? "sm" : "base"
                          } font-[700]`}
                        >
                          {userName}
                        </h2>
                      </div>
                    </div>
                  </Slider.Slide>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
