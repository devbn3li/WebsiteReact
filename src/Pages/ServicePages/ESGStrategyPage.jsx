import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Dashboard.png";
import How from "../../Components/How";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `Our ESG Governance and Strategy program is designed to empower your business with tailored services and essential tools to help establish, structure, streamline, or enhance your Environmental, Social, and Governance initiatives, ensuring sustainable and responsible business practices.`;
const dynamicSolutions = [
  {
    name: "ESG Strategy",
    description:
      "Our ESG strategists' partner with your leadership team to embed sustainability throughout your business. We help set ESG policies, goals, and KPIs aligned to your purpose and material impacts.",
  },
  {
    name: "Competitive Differentiation",
    description:
      "We help craft an ESG strategy integrated with business objectives to create long-term value and define competitive differentiation driven by ESG initiatives.",
  },
  {
    name: "Risk Identification and Mitigation",
    description:
      "We identify and mitigate ESG-related risks, helping your organization to protect its brand and prepare for emerging regulations.",
  },
  {
    name: "Enhanced Disclosures",
    description:
      "We assist in enhancing disclosures to meet stakeholder expectations, ensuring that your organization is transparent and accountable in its ESG efforts.",
  },
];

const dynamicQuote = `We understand that the main differences lie in the focus and scope of the ESG governance and strategy efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const ESGStrategy = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <DynamicLandingHero
        title="Elevate Your ESG Strategy Today!"
        subtitle="Empower your business with tailored services and essential tools to enhance your Environmental, Social, and Governance initiatives. Let us help you set up robust ESG policies and prepare for future requirements."
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
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
    </div>
  );
};

export default ESGStrategy;
