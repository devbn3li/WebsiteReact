import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import wave from "../../Lottie/story.json";
import vision from "/assets/Premasset/5f8b4f8c-9db1-4429-920f-a7cdf3a9a9d8.png";
import { motion } from "framer-motion";
import "aos/dist/aos.css"; // Import AOS styles

const SlideComponent = (founder) => (
  <div className="py-2 lg:py-12">
    <div className="flex flex-col items-center gap-6 text-white text-center px-0 lg:px-6 max-w-[890px] mx-auto">
      <div className="flex justify-center">
        <div className="bg-[#02c2ab] aspect-square  w-[100px] h-[100px] p-2  relative shadow-2xl shadow-[#02c2ab] rounded-[2rem] ">
          <Lottie
            animationData={wave}
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>{" "}
      </div>
      <h1 className="text-3xl md:text-7xl font-bold ">{founder.classes}</h1>
      <h2 className="font-bold text-2xl max-md:text-xl max-md:w-full w-[80%] text-center">Driving the shift to affordable data-driven sustainability.</h2>
      <p
        className={`text-${
          founder.message.length > 170 ? "xl" : "2xl"
        } max-lg:text-[20px]  font-medium max-md:pb-6 box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-100`}
      >
        {founder.message}
      </p>
    </div>
    {/* <div className='absolute bottom-5 left-12 text-center text-white flex justify-center gap-4'>
      <Link to={founder.link} target='_blank' rel='noopener noreferrer'
        className="w-12 h-12 rounded-full overflow-hidden bg-white opacity-100 ring-2 ring-black scale-110 animate-pulse duration-1000">
        <img src={founder.imgSrc} alt={founder.name} className='w-full h-full object-cover' />
      </Link>
      <div className="ml-2 text-sm grid text-left">
        <p className="text-white font-bold">{founder.name}</p>
        <p className="text-gray-300">{founder.jobTitle}</p>
      </div>
    </div> */}
  </div>
);

function TeamTestimonial() {
  const founder = {
    imgSrc: "/assets/images/DrAhmedShawky.png",
    name: "Dr. Ahmed Shawky",
    jobTitle: "Founder and Manging Dictor, LevelUp Ltd.",
    message:
      "We envision a future where businesses of all sizes embrace insights and automation to drive prosperity while protecting the planet. As an emerging leader in eco-conscious technology, we act as a catalyst for this transformation - spearheading the shift to data-driven, sustainable business practices. Together with our clients, we are building a brighter, greener tomorrow.",
    classes: "Our Vision",
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const simpleFloatAnimation = {
    y: ["-20px", "22px"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 4,
      ease: "easeInOut",
    },
  };
  return (
    <div className="w-full   h-full  flex flex-col justify-between items-center gap-6">
      <div className="w-full px-[5%] h-full  flex justify-center mb-0 p-2">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="w-full  h-full bg-[#1c4987] bg-gradient-to-l from-[#1C4987] to-[#159D9B]   rounded-3xl overflow-hidden max-w-[1500px] "
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1700"
            className="w-full  relative h-full  flex-col justify-center items-center lg:flex-row gap-2 px-2 flex overflow-hidden"
          >
            {/* // option lg:w-1/2  for the a size   */}
            <div className="cursor-pointer w-[40%] hover:opacity-80 duration-1000 hover:contrast-150  p-4    relative flex justify-center items-center">
              <div
                data-aos="fade-down"
                data-aos-duration="1600"
                className="rounded-xl max-md:hidden w-full h-full aspect-square flex justify-center items-center"
              >
                <motion.img
                  alt=""
                  className={` w-4/5 overflow-hidden object-center `}
                  src={vision}
                  onLoad={() => setIsImageLoaded(true)}
                  animate={simpleFloatAnimation}
                />
              </div>
            </div>
            <div className="w-[80%] lg:w-[45%] h-full text-end  relative flex  items-center">
              <SlideComponent {...founder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Founders() {
  return (
    <>
      <div className=" relative m-auto flex justify-center max-w-[1400px] px-[5%]">
        <header
          style={{
            backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex flex-col items-center py-20"
        >
          {/* Hero content wrapper */}
          <div className="box-border px-2 lg:px-16 py-20 mt-1 flex flex-col justify-center items-center gap-6">
            {/* Hero Texts */}
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="bg-[#02c2ab] aspect-square  w-[100px] h-[100px] p-2  relative shadow-2xl shadow-[#02c2ab] rounded-[2rem] "
            >
              <Lottie
                animationData={wave}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>{" "}
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[1290px]"
            >
              <h1
                style={{
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;, Arial, &apos;Noto Sans&apos;, sans-serif",
                  fontWeight: "bold",
                  lineHeight: "120%",
                }}
                className="text-3xl text-[#112b65] md:text-7xl font-bold leading-120%"
              >
                Our Mission
              </h1>
              <h2 className="font-bold text-3xl text-[#112b65]">
                Empowering SMEs to thrive sustainably.
              </h2>
              <p className="text-[24px] text-[#112b65] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] ">
                We provide affordable, AI-powered solutions and strategic
                guidance, enabling small and medium enterprises (SMEs ) to
                optimize operations, reduce costs, and build resilience - all
                while minimizing environmental impact. Our expertise guides
                businesses to leverage data and technology for sustainable
                growth.
              </p>{" "}
            </div>
          </div>
        </header>
      </div>
      <TeamTestimonial />
    </>
  );
}

export default Founders;
