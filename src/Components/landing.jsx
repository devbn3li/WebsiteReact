import React, { useEffect } from "react";
import img3 from "../../public/assets/Dash/2.png";
import PrimaryButton from "./Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LandingSection = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className="my-18">
      <div className="container pt-32 mx-auto px-[5%] h-[800px] overflow-hidden bg-gradient-to-b from-[#112b65] to-[#02c2ab] rounded-b-[40px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2
            className="text-6xl md:w-[50%] font-extrabold text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            LevelUp for <span className="text-[#40cdbc]">Better</span> Business
            & Planet.
          </h2>
          <p
            className="my-12 md:w-[70%] text-white text-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Welcome to LevelUp, where we combine sustainability technology,
            science, and human expertise to make a meaningful impact.
          </p>
          <div
            className="flex flex-wrap gap-6 justify-center max-md:w-full"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div data-aos="flip-left" data-aos-delay="150">
              <PrimaryButton path="/contact" classes="font-bold max-md:w-full" title="About Us" />
            </div>
            <div data-aos="flip-right" data-aos-delay="300">
              <PrimaryButton
                path="/contact"
                classes="bg-[#E6E6E5] border-none !text-[#002e70] font-bold"
                title="Make an Impact, Together"
              />
            </div>
          </div>
          <div
            className="w-full flex justify-center p-4 rounded-lg my-6 max-md:hidden"
            data-aos="zoom-in-up"
            data-aos-duration="1600"
          >
            <img src={img3} className="w-[80%]" alt="Landing section" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
