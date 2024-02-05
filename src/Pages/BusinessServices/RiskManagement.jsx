import React from "react";
import SliderLogos from "../../Components/SliderLogos/SliderLogos";
import Hero_Services from "../../Components/Hero_Services/Hero_Business";

import { MdOutlineReport } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai"; // Added for business continuity
import { RiShieldCheckLine } from "react-icons/ri"; // Added for risk management

import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Why = () => {
  // Updated reasons array tailored to Risk Management and Business Continuity services
  const reasons = [
    {
      title: "Risk Landscape Mapping",
      description:
        "Mapping your risk landscape to identify and evaluate the magnitude of risks, providing a solid foundation for mitigation strategies.",
      icon: <RiShieldCheckLine />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Risk Mitigation Strategies",
      description:
        "Advising on robust mitigation strategies to manage and minimize risks, ensuring your business remains resilient in the face of challenges.",
      icon: <MdOutlineReport />,
      url: "#", // Update or keep as placeholder
    },
    {
      title: "Business Continuity Planning",
      description:
        "Helping create and test business continuity plans to minimize disruptions and ensure operational resilience during unforeseen events.",
      icon: <AiOutlineSafety />,
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
                Why Choose LevelUp for Risk Management and Business Continuity?
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
                Our risk management services involve mapping your risk
                landscape, evaluating the magnitude of risks, and advising on
                mitigation strategies. We also help create and test business
                continuity plans to minimize disruptions. With rigorous risk
                management, you are ready to tackle uncertainty.
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

const RiskManagement = () => {
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

export default RiskManagement;
