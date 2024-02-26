import React from "react";
import { MdOutlineReport, MdAssessment, MdNaturePeople } from "react-icons/md";
import { FaHandshake, FaRegLightbulb } from "react-icons/fa";
import backgroundImage from "/assets/images/bg/1.jpg";

const Why = () => {
  const reasons = [
    {
      title: "Audit Strategy",
      description:
        "Developing an ESG-focused audit strategy and methodology aligned to global standards and relevant frameworks.",
      icon: <MdOutlineReport />,
      url: "#",
    },
    {
      title: "Risk Assessments",
      description:
        "Incorporating ESG factors into the audit universe to prioritize assurance activities.",
      icon: <MdAssessment />,
      url: "#",
    },
    {
      title: "Data Systems Maturity",
      description:
        "Assessing the maturity of ESG data systems, reporting processes, and internal controls.",
      icon: <FaRegLightbulb />,
      url: "#",
    },
    {
      title: "Regulatory Adherence",
      description:
        "Evaluating adherence to ESG regulations, standards, and leading sustainability practices.",
      icon: <MdNaturePeople />,
      url: "#",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Engaging stakeholders to gather insights and report on ESG program effectiveness.",
      icon: <FaHandshake />,
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
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-3xl md:text-4xl max-w-[1000px] font-bold md:font-extrabold tracking-tight leading-none text-[#002E70]">
                Why Choosing LevelUp
              </h1>
              <p className="mb-8 text-lg font-normal text-[#002E70]/80 leading-[1.5]">
                Discover how our ESG Internal Audit services can empower your
                team to systematically assess sustainability strategies and
                ensure alignment with organisational goals.
              </p>
              <div className="w-full border-[#02c2ab] border-b-2 mb-10"></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] aspect-square w-[40px] h-[40px]">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      <h3 className="mb-4 text-xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70]">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-[#002E70]">
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
