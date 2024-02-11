import React from "react";
import Dashboard from "../../Components/Dashboard";
import How from "../../Components/How";
import Call from "../../Components/Call";
import img from "/assets/Dashboard.png";
import Qoute from "../../Components/DataLab/Qoute";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `Our ESG in ERM program is designed to help ERM functions build their ESG capabilities. We offer a strategic approach to integrating ESG factors into your ERM program, ensuring that your organization is prepared for the evolving risk landscape.`;
const dynamicSolutions = [
  {
    name: "ESG ERM Strategy Development",
    description:
      "Our service extends beyond ESG risk management planning to a strategic approach that ensures your organization is well-prepared for emerging risks. We assist in planning and scoping your ESG risk management efforts, considering evolving risks related to frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. This proactive strategy positions your organization to navigate the dynamic ESG risk landscape effectively.",
  },
  {
    name: "ESG ERM Methodology Manual",
    description:
      "Navigate the intricacies of ESG risk management with our comprehensive ESG ERM Methodology Manual. This guide outlines a robust methodology for managing ESG risks, offering insights to navigate the complex risk landscape. Designed to ensure consistency in risk management practices across your organization, this manual becomes a valuable resource in implementing effective risk mitigation strategies aligned with industry standards.",
  },
  {
    name: "Qualitative Risks and Controls",
    description:
      "Our expertise extends to identifying and managing qualitative risks and controls related to ESG. We assist your organization in understanding and addressing nuanced risks associated with Environmental, Social, and Governance factors. This service ensures a holistic approach to risk management that considers qualitative aspects, contributing to a more comprehensive ESG risk strategy.",
  },
  {
    name: "Risk Management Tracking and Monitoring",
    description:
      "Proactively manage risks with our detailed Risk Management Tracking and Monitoring service. We provide a comprehensive risk management checklist, ensuring all relevant areas are effectively covered. This not only prepares your organization for potential audits but also establishes a continuous monitoring system, fostering a proactive approach to risk mitigation and compliance in the evolving ESG landscape.",
  },
  {
    name: "Strategic Planning for ESG Integration",
    description:
      "Develop strategic plans to integrate ESG principles into your organization's overall strategy. Our consultancy services help boards identify key areas for ESG integration, set actionable goals, and measure progress, ensuring alignment with long-term sustainability objectives.",
  },
];

const dynamicQuote = `Recognizing that distinctions in risk management efforts stem from varying focuses and scopes, our commitment lies in delivering a tailored service designed precisely to address the unique needs of your organization.`;

const ERMProgramPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <DynamicLandingHero
        title="ESG in ERM Program"
        subtitle="We provide comprehensive support to enterprise risk management (ERM) functions in building their ESG capabilities. Our services include the development of an ESG ERM strategy and methodology manual, tailored to your organization's needs. We understand that ESG factors are increasingly important in risk management, and we integrate these factors into your ERM program."
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
        imgSrc={img} // Pass the image to the Call component
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

export default ERMProgramPage;
