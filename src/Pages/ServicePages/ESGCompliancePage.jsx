import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Premasset/Dash.png";
import How from "../../Components/How";
import Call from "../../Components/Call";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
const dynamicContent = `We provide comprehensive support to compliance functions in building their ESG capabilities. Our services include the creation of an ESG compliance strategy and methodology manual, tailored to your organization's needs. We understand that ESG compliance is a dynamic field with evolving regulations and standards, and we adapt our services based on the maturity of your compliance environment.`;
const dynamicSolutions = [
  {
    name: "ESG Regulatory Landscape Analysis",
    description:
      "Stay ahead of the ever-evolving ESG regulatory environment with our Regulatory Landscape Analysis service. We conduct thorough assessments of applicable regulations, helping you understand and navigate the complex requirements specific to your industry. This service ensures that your ESG compliance program remains robust and up-to-date.",
  },
  {
    name: "Customized ESG Policy Development",
    description:
      "Tailor your ESG compliance program with our Customized ESG Policy Development service. We work closely with your organization to create bespoke policies aligned with your values, industry standards, and regulatory expectations. These policies serve as a foundation for implementing effective ESG practices and demonstrating commitment to sustainability.",
  },
  {
    name: "ESG Training and Awareness Programs",
    description:
      "Foster a culture of ESG awareness and compliance within your organization through our ESG Training and Awareness Programs. We provide targeted training sessions to educate employees at all levels about ESG principles, regulations, and best practices. This empowers your workforce to actively contribute to your ESG compliance efforts.",
  },
  {
    name: "Continuous Monitoring and Reporting",
    description:
      "Ensure ongoing compliance with our Continuous Monitoring and Reporting service. We establish systematic processes for monitoring changes in ESG regulations, track your performance against compliance objectives, and provide regular reports. This service allows your organization to adapt proactively to regulatory shifts and highlight a commitment to sustained ESG compliance.",
  },
];
const dynamicQuote = `We understand that the main differences lie in the focus and scope of the compliance efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const ESGCompliancePage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <DynamicLandingHero
        title="ESG Compliance program"
        subtitle="Our ESG Compliance program is designed to help compliance functions build their ESG capabilities. We offer a strategic approach to ESG compliance, ensuring that your organization is prepared for the evolving regulatory landscape."
        button1={{ path: "/about", label: "About Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <Dashboard
        imgSrc={img}
        content={dynamicContent}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <How
        solutions={dynamicSolutions}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Call
        imgSrc={img}
        title={dynamicTitle}
        paragraph={dynamicSubtitle}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
    </div>
  );
};

export default ESGCompliancePage;
