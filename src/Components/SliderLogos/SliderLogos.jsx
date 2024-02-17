import React, { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const logos = [
  "/assets/images/company/1.png",
  "/assets/images/company/2.png",
  "/assets/images/company/3.png",
  "/assets/images/company/4.png",
  "/assets/images/company/5.png",
  "/assets/images/company/6.png",
  "/assets/images/company/7.png",
  "/assets/images/company/8.png",
  "/assets/images/company/9.png",
  "/assets/images/company/10.png",
  "/assets/images/company/11.png",
  "/assets/images/company/12.png",
  "/assets/images/company/13.png",
  "/assets/images/company/14.png",
  "/assets/images/company/15.png",
  "/assets/images/company/16.svg",
];

const sliderLogos = () => (
  <div
    data-aos="fade-up"
    data-aos-duration="1200"
    className="min-h-[250px] overflow-hidden my-14  max-w-[1400px] w-[calc(100vw-5%)]"
  >
    <section className="hero-section rounded-3xl   py-20 mt-[.5rem]">
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:pr-10  mb-10 lg:mb-0">
          <h1 className="mb-4 text-2xl max-w-[1000px] text-center font-extrabold tracking-[1px] leading-[1.5] text-[#002E70] md:text-3xl lg:text-4xl">
            LevelUp&apos;s ESG software and solutions support major sustainability
            and ESG standards and frameworks
          </h1>
        </div>
      </div>
    </section>
    <Slider
      width="250px"
      duration={20}
      pauseOnHover={true}
      blurBorders={true}
      blurBoderColor={"#fff"}
      data-aos="fade-up"
      data-aos-duration="1800"
    >
      {logos.map((url, index) => (
        <Slider.Slide className="mx-12 " key={index}>
          <img src={url} alt="any" className="w-36" />
        </Slider.Slide>
      ))}
    </Slider>
  </div>
);

export default sliderLogos;
