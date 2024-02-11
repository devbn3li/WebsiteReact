import React, { useEffect } from "react";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Dashboard = ({ imgSrc, content, buttonTitle, buttonPath }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className="hero-section rounded-3xl py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1800"
          className="md:w-1/2.5 pl-16"
        >
          <img src={imgSrc} alt="Hero Image" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 max-md:flex max-md:flex-col mx-auto">
          <p className="mb-8 max-md:text-center text-xl md:text-3xl font-medium text-[#002e70] lg:text-xl">
            {content}
          </p>
          <PrimaryButton
            title={buttonTitle}
            path={buttonPath}
            data-aos="fade-up"
            data-aos-duration="1200"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
