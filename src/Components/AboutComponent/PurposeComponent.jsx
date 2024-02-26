import React, { useRef, useState, useEffect } from "react";
import photo from "/assets/Premasset/AI.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function PurposeComponent() {
  const descriptionRef = useRef();
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <>
      <section className=" w-full px-[5%] my-[2rem] relative">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="group relative md:w-[80%]  xl:w-[60%] mx-auto rounded-3xl  bg-gradient-to-r from-[#1C4987] to-[#159D9B] text-white p-[2rem] sm:p-[4rem]  "
        >
          <div className="hidden sm:block w-[50px] h-[50px]  bg-[#F9FFF5] absolute right-[-5px] top-[-5px]"></div>
          <div className="hidden sm:block w-[50px] h-[50px] rounded-tr-3xl bg-[#159c9b] absolute right-[-20px] duration-500 group-hover:right-0 top-[-20px] group-hover:top-0"></div>
          <h2 className="text-3xl md:text-[2.625rem] font-[600] mb-[.5rem]">
            Our Purpose
          </h2>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            <div className="sm:w-[400px]">
              <h2 className="font-bold text-xl mb-4">
                Unlocking sustainability and growth through innovation and
                technology.
              </h2>
              <p className="mb-2">
                At our core, LevelUp is a purpose-driven organisation. Our
                purpose is to make sustainability accessible for every business.
                We empower organisations of all sizes to improve decisions,
                reduce costs, and minimise environmental impact through
                innovative solutions, cutting-edge technology, and human-led
                guidance.
              </p>
              <p className={click ? "block" : "hidden"} ref={descriptionRef}>
                By integrating sustainability into operations and strategies, we
                help unlock new potential for efficiency, resilience and
                positive impact. Our technology clearly links value creation
                with benefits for the planet and society, driving widespread
                adoption of ESG and sustainability leading practices.
                <br />
                <br />
                Fundamentally, we believe in the immense power of data and
                technology to drive positive change when combined with human
                expertise. Our solutions harness this potential, enabling
                businesses to optimise operations, build resilience, and benefit
                their bottom line while caring for the planet. We are catalysing
                a wave of sustainable growth empowered by tech and guided by
                strategic human insight.
              </p>
              <button
                onClick={handelClick}
                className="text-[#159D9B] cursor-pointer mt-5"
              >
                {click ? "Collapse" : "Read More"}
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="opacity-[.2] max-md:hidden w-[70%] mx-auto md:w-[40%]"
            >
              <img src={photo} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PurposeComponent;
