import React, { useEffect } from "react";
import largeImg from "/assets/images/AI.webp";
import image1 from "/assets/Premasset/image7.png";
import image2 from "/assets/images/image2.webp";
import image3 from "/assets/Premasset/photo1.png";
import image4 from "/assets/Dash/ESG_services.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutComponent = () => {
  const imageSources = [image1, image2, image3, image4];

  useEffect(() => {
    AOS.init({
      once: true, // Animation happens only once
      mirror: false, // Do not animate out while scrolling past
    });
  }, []);

  return (
    <div className="w-full flex justify-center" data-aos="fade-up" data-aos-duration="1000">
      <section className="about-us max-w-7xl ">
        <div className="px-[5%] w-full py-28">
          <div className="text-center mb-20" data-aos="fade-down" data-aos-duration="1200">
            <div className="mx-auto max-w-3xl font-sans">
              <h2 className="text-[#112b65] mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                About us
              </h2>
              <p className="text-lg text-[#112b65] mb-8 font-normal lg:text-xl">
                At LevelUp, we&apos;re a passionate team of sustainability experts and scientists with a mission to make corporate sustainability and  ESG practices achievable for businesses of all sizes. We achieve this by offering innovative and affordable ESG solutions alongside expert advice.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1" data-aos="zoom-in" data-aos-duration="1400">
              <img
                src={largeImg}
                alt="Large img"
                className="w-full object-cover rounded-2xl cursor-pointer"
              />
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {imageSources.slice(0).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`image ${index}`}
                  className="w-full object-cover h-full rounded-2xl cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
