import React, { useEffect } from "react";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import backgroundImage from "/assets/images/bg/1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Why = () => {
  const reasons = [
    {
      title: "Affordability",
      description:
        "We understand that cost can be a barrier for SMEs. That's why we offer flexible solutions to fit your budget.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Expertise",
      description:
        "Our team boasts a wealth of experience across various industries, ensuring tailored advice and insights.",
      icon: <FaLevelUpAlt />,
      url: "#",
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge technology to make sustainability management easier and more efficient.",
      icon: <MdOutlineReport />,
      url: "#",
    },
    {
      title: "Partnership",
      description:
        "We're committed to collaborating closely with you, becoming an extension of your team on your sustainability journey.",
      icon: <FaLevelUpAlt />,
      url: "#",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-[#F9FFF5] shadow-none"
    >
      <section className="why max-w-7xl mx-auto pt-28">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="px-[5%] w-full pb-20"
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
                Why Choosing LevelUp
              </h1>
              <p className="mb-8 text-lg font-normal text-[#002E70]/80 lg:text-xl  ">
                LevelUp empowers businesses with affordable and innovative
                corporate sustainability solutions, expert-led advice,
                assurance, and a knowledge and resources hub.Our AI engines,
                service offerings, and data science simplify ESG execution,
                driving measurable impact.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>

            <div           data-aos="fade-up"
          data-aos-duration="1800" className="flex flex-wrap gap-4 justify-center">
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] aspect-square w-[40px] h-[40px] ">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      {" "}
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70] md:text-2xl lg:text-3xl ">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-[#002E70] lg:text-xl ">
                      {reason.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
