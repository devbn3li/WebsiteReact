import React from "react";
import SliderLogos from "../../Components/SliderLogos/SliderLogos";
import Hero_Services from "../../Components/Hero_Services/Hero_Business";
import { MdLeaderboard, MdOutlineAssessment } from "react-icons/md";
import { FaTools, FaHandshake } from "react-icons/fa";

import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Why = () => {
  // Updated reasons array tailored to Finance and Business Transformation services
  const reasons = [
    {
      title: "Finance Capabilities Assessment",
      description:
        "We assess your finance capabilities, systems, and processes to pinpoint transformation opportunities, preparing your finance function for the future.",
      icon: <MdOutlineAssessment />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Program Management",
      description:
        "Our program management ensures initiatives are successfully implemented, aligning projects with strategic business goals for maximum impact.",
      icon: <MdLeaderboard />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Optimizing Finance Functions",
      description:
        "We optimize finance functions by deploying new technologies and best practices, enhancing finance performance to drive insights and value.",
      icon: <FaTools />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Consult Our Experts",
      description:
        "Get in touch with our experts to discuss how our internal audit and integrated GRC services can help future proof your business.",
      icon: <FaHandshake />,
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
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Finance and Business Transformation at LevelUp
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
                We assess your finance capabilities, systems, and processes to
                pinpoint transformation opportunities. Our program management
                gets initiatives successfully implemented. We also optimize
                finance functions by deploying new technologies and best
                practices. The outcome is enhanced finance performance to drive
                insights and value.
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

const Finance = () => {
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

export default Finance;
