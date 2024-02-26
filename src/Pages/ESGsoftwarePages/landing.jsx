import React, { useEffect } from "react";
import img3 from "/assets/Dash/ESGNAV/sustracker.png";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
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
      <div className="container pt-32 pb-20 mx-auto px-[5%] md:h-[800px] overflow-hidden bg-gradient-to-b from-[#112b65] to-[#02c2ab] rounded-b-[40px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2
            className="text-4xl  md:w-[70%] font-extrabold text-white leading-[1.5]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Sustainability{" "}
            <span className="text-[#40cdbc] ease-in duration-300 hover:text-white">
              Analytics{" "}
            </span>
            Transform Data into Action
          </h2>
          <p
            className="my-12 md:w-[70%] text-white text-xl leading-[1.5] "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            The Sustainability Tracker (ST) transforms sustainability management
            and reporting by centralizing data, using digital twins for
            simulation, and performing mass and energy balances across assets.
            It offers detailed insights for easy compliance with global
            frameworks.
          </p>
          <div
            className="relative z-10 flex flex-wrap gap-6 justify-center max-md:flex-col-reverse"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div data-aos="flip-left" data-aos-delay="150">
              <PrimaryButton
                path="/contact"
                classes="font-bold hover:bg-white hover:!text-[#02c2ab] border-none max-md:w-full"
                title="About Us"
              />
            </div>
            <div data-aos="flip-right" data-aos-delay="300">
              <PrimaryButton
                path="/contact"
                classes="bg-[#E6E6E5] border-none !text-[#002e70] font-bold hover:bg-[#002e70] hover:!text-white max-md:w-full"
                title="Make an Impact, Together"
              />
            </div>
          </div>
          <div
            className=" w-full flex justify-center p-4 rounded-lg my-6 max-md:hidden"
            data-aos="zoom-in-up"
            data-aos-duration="1600"
          >
            <img
              src={img3}
              className="absolute -z-10 w-[80%] ease-in duration-500 hover:-mt-52"
              alt="Landing section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
