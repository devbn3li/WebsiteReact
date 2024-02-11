import React from "react";
import CardData from "../../Components/SolCard/CardData";
import Futures from "../../Components/PulsePageCompontent/Futures";
import DS from "/assets/images/DS.png";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { FaBrain, FaUniversalAccess, FaChartLine } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import backgroundImage from "/assets/images/bg/1.jpg";
import LandingSection from "./landing"
import Benefits from "../../Components/Benefits/Benefits";
import CTA1 from "../../Components/CTA/CTA_1";
import CTA2 from "../../Components/CTA/CTA_2";

const PulsePage = () => {

  const benefitsData = {
    title: "Core Advantages of LevelUp ESG Pulse",
    description:
      "Harness the power of AI for a strategic, comprehensive approach to sustainability that's tailored to your industry and needs:",
    benefits: [
      {
        icon: <FaBrain />,
        title: "AI-Driven Insights",
        description:
          "Unlock precise, AI-powered ESG assessments for rapid and accurate insights, enabling smarter sustainability decisions.",
      },
      {
        icon: <FaUniversalAccess />,
        title: "Versatile and Tailored",
        description:
          "Whether you're in manufacturing, tech, or services, our platform adapts to your sector, delivering customized, actionable guidance.",
      },
      {
        icon: <FaChartLine />,
        title: "Strategic Benchmarking",
        description:
          "Empower your strategy with benchmarking against global standards and competitors, identifying clear paths for improvement and growth.",
      },
    ],
  };

  const reasons = [
    {
      title: "Quick and Efficient ESG Assessment",
      description:
        "AI-powered rapid ESG assessment for maximum efficiency and deep insights.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Comprehensive ESG Coverage",
      description:
        "Comprehensive coverage of the most common ESG factors from leading frameworks.",
      icon: <MdOutlineReport />,
      url: "#",
    },
    {
      title: "Customized for Your Business",
      description:
        "Tailored assessment criteria and tools matched to your business size.",
      icon: <FaLevelUpAlt />,
      url: "#",
    },
    {
      title: "Continuous Innovation",
      description:
        "Continuous innovation and updates based on the latest regulations and research.",
      icon: <PiStrategy />,
      url: "#",
    },
    {
      title: "Actionable Insights",
      description:
        "Actionable insights to target priority areas for improvement.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Expert-led Advice",
      description:
        "Expert-led advice and strategic roadmap for effective sustainability implementation.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Automated Mapping",
      description:
        "Automated mapping of the responses against multiple industry standards.",
      icon: <MdCelebration />,
      url: "#",
    },
  ];

  const howToUse = [
    {
      title: "Complete the Online Questionnaire",
      description:
        "Start by filling out our comprehensive online questionnaire to assess your current ESG performance.",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          1
        </div>
      ),
      url: "#",
    },
    {
      title: "Receive AI-powered Insights",
      description:
        "Our AI analyzes your responses to provide a detailed appraisal of your ESG program against global standards.",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          2
        </div>
      ),
      url: "#",
    },
    {
      title: "Develop Your Sustainability Roadmap",
      description:
        "Based on the analysis, receive a tailored roadmap with priority actions to enhance your sustainability initiatives.",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          3
        </div>
      ),
      url: "#",
    },
  ];

  const CTA2Data = {
    title: "Start Your Sustainability Transformation Today",
    CTATitle: "Engage with LevelUp ESG Pulse",
    CTAPath: "/contact-us",
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {/* Start header ============================================= */}
      <LandingSection />
      {/* End header ============================================= */}

      {/* Start Futures ============================================ */}
      <Futures />
      {/* End Futures ============================================ */}

      {/* Start why section ======================================== */}
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
            <div className="flex flex-col gap-1">
              <div className="flex flex-col max-w-[90.25rem] gap-3">
                <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
                  Why Choose LevelUp ESG Pulse?
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

              <div className="flex flex-wrap gap-4 justify-center">
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
      {/* End why section ======================================== */}

      {/* Start CTA_2 section ====================================== */}
      <CTA2 {...CTA2Data} />
      {/* End CTA_2 section ====================================== */}

      {/* Start benifit section ==================================== */}
      <Benefits {...benefitsData} />
      {/* End benifit section ==================================== */}

      {/* Start about section ====================================== */}
      <div className=" py-12 md:py-20 text-[#002e70] w-full flex flex-col justify-center items-center">
        <div className="w-full flex -mt-5 justify-center ">
          <img src={DS} alt="Hero Image" className="w-full max-w-96" />
        </div>

        <CardData
          title="How to use"
          reasons={howToUse}
          Sectiondescription="Discover how our streamlined process equips you with the insights and actions needed to elevate your environmental, social, and governance (ESG) performance in just three simple steps."
        />
      </div>
      {/* End about section ====================================== */}

      {/* CTA Card */}
      <CTA1 />
    </div>
  );
};

export default PulsePage;
