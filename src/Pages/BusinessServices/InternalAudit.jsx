import React from "react";
import SliderLogos from "../../Components/SliderLogos/SliderLogos";
import Hero_Services from "../../Components/Hero_Services/Hero_Business";

// Existing imports for icons - consider adding or changing icons as appropriate
import { MdOutlineReport, MdLeaderboard } from "react-icons/md";
import { FaLevelUpAlt, FaRegLightbulb } from "react-icons/fa";
// Import additional icons if needed

import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Why = () => {
  // New reasons array tailored to Internal Audit services
  const reasons = [
    {
      title: "Risk-based Auditing",
      description:
        "Focus on priority areas with our risk-based auditing approach, ensuring efficient use of resources and targeted assurance.",
      icon: <MdOutlineReport />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Data Analytics",
      description:
        "Leverage data analytics for deeper insights and risk identification, enhancing the precision of our audit processes.",
      icon: <FaRegLightbulb />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Audit Committee Support",
      description:
        "Provide comprehensive support and recommendations to the audit committee, enhancing governance and oversight.",
      icon: <MdLeaderboard />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Internal Audit Training",
      description:
        "Strengthen your team's capabilities with our internal audit training and capability building programs.",
      icon: <FaLevelUpAlt />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Quality Assurance Reviews",
      description:
        "Conduct quality assurance reviews of internal audit functions to ensure high standards and continuous improvement.",
      icon: <FaLevelUpAlt />,
      url: "#", // Update or keep as placeholder
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
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                Why Choosing LevelUp for Internal Audit?
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
                Our internal audit services deliver assurance and advice to
                improve your operations. Our flexible, pragmatic approach
                includes risk-based auditing, data analytics, and more, driving
                measurable impact.
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
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px]">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-gray-900 md:text-2xl lg:text-3xl">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
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

const InternalAudit = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <Hero_Services
        title="Future Proof Your Business with Our Internal Audit and Governance, Risk, and Compliance Services"
        subtitle="In today's fast-changing business landscape, strong governance, risk management, and compliance practices are crucial to future-proofing your organization. Our experienced team provides internal audit and integrated GRC services to help you build resilience, gain insights, and drive performance."
      />

      <SliderLogos />
      <Why />
    </div>
  );
};

export default InternalAudit;
