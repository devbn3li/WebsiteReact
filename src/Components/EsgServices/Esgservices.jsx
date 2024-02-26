import React, { useEffect } from "react";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import backgroundImage from "/assets/images/bg/1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Why = () => {
  const reasons = [
    {
      title: "ESG Diagnostic Assessment",
      description:
        "ESG Diagnostics rapidly assess ESG performance online, highlighting governance, environmental, and social areas for improvement and benchmarking against leading practices.",
      icon: <MdCelebration />,
      url: "/service/esg-diagnostic",
    },
    {
      title: "ESG Strategy",
      description:
        "Our ESG experts assist in crafting robust policies and tools for effective ESG programs, fostering competitive advantage, risk management, and compliance readiness.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-strategy",
    },
    {
      title: "Board-Level ESG Consulting",
      description:
        "Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles, promoting responsible governance and strategic foresight.",
      icon: <MdOutlineReport />,
      url: "/service/board-level",
    },
    {
      title: "Strategic Stakeholder Management Program",
      description:
        "LevelUp offers expert support for ESG reporting, addressing the evolving challenges of ESG disclosures and complying with standards like CSRD, ISSB, IFRS, SASB, and GRI.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-assurance",
    },
    {
      title: "ESG Compliance Program",
      description:
        "Integrated services prioritize stakeholder engagement, communication, and training for organizational success, fostering transparency, collaboration, and strategic excellence.",
      icon: <MdCelebration />,
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
        <div className="px-[5%] w-full pb-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="flex flex-col gap-1"
          >
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900  ">
                Discover Our Comprehensive ESG Services
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500   ">
                Explore our specialized ESG services designed to enhance your
                sustainability journey. From diagnostics to compliance, our
                solutions cover all aspects to guide your business towards ESG
                excellence.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>

            <div           data-aos="fade-up"
          data-aos-duration="1600" className="flex flex-wrap gap-4 justify-center">
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px] ">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      {" "}
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-gray-900  ">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-gray-500  ">
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
