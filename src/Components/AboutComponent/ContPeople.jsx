import React from "react";
import Slider from "react-infinite-logo-slider";

const logos = [
  "/assets/FLORENCE.png",
  "/assets/Harsh.png",
  "/assets/Josly.png",
  "/assets/Jun.png",
  "/assets/Marko.png",
];

const ContPeople = () => (
<div className="w-full flex justify-center">
<div className="min-h-[450px] overflow-hidden my-14 mt-0  max-w-[1400px] w-[calc(100vw-5%)]">
    <section className="hero-section rounded-3xl   py-20 mt-[.5rem]">
      <div className="container mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:pr-10  mb-10 lg:mb-0">
          <h1 className="mb-4 capitalize text-2xl max-w-[1000px] text-center font-extrabold tracking-tight leading-none text-[#112b65] md:text-3xl lg:text-4xl">
          Our impact makers
          </h1>
        </div>
      </div>
    </section>
    <Slider
      width="450px"
      duration={20}
      pauseOnHover={true}
      blurBorders={true}
      blurBoderColor={"#fff"}
    >
      {logos.map((url, index) => (
        <Slider.Slide className="mx-12 " key={index}>
          <img src={url} alt="any" className="w-48" />
        </Slider.Slide>
      ))}
    </Slider>
  </div>
</div>
);

export default ContPeople;
