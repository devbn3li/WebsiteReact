import React from "react";
import Hero_Services from "../../Components/Hero_Services/Hero_Services";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Premasset/Dash.png";
import How from "../../Components/How";
import Call from "../../Components/Call";

// Updated dynamic content for the ESG IA program
const dynamicTitle = "ESG IA Program";
const dynamicSubtitle =
  "Our ESG IA program is designed to help internal audit functions build their ESG capabilities. We offer two main approaches: establishing an ESG IA program as a separate audit or integrating it within the existing IA function.";
const dynamicContent = `We provide comprehensive assistance to internal audit (IA) functions in building their ESG capabilities. Our services include the development of an ESG IA strategy and methodology manual, tailored to your organisation's needs. We understand that there is no one-size-fits-all approach, and we adapt our services based on the maturity of your assurance and overall controls environment.`;
const dynamicSolutions = [
  {
    name: "ESG Internal Audit (IA) Strategy Development",
    description:
      "Our service guides you in meticulously planning and scoping your ESG audits, whether conducted separately or integrated. Our strategies aim for consistent usage and standards, encompassing quantitative metrics, industry standards, and other compliance areas. We ensure that your audits align with the latest sustainability practices, providing a robust foundation for comprehensive ESG evaluation.",
  },
  {
    name: "ESG IA Methodology Manual",
    description:
      "Navigate the evolving ESG landscape confidently with our comprehensive ESG IA Methodology Manual. This detailed guide will outline the methodology for conducting ESG audits, addressing the nuances of new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. It serves as a valuable resource for understanding and implementing best practices in ESG auditing.",
  },
  {
    name: "Qualitative Risks and Controls",
    description:
      "Identifying and managing qualitative risks and controls related to ESG is critical for a thorough audit. We provide expertise in this area, assisting you in navigating the complex landscape of qualitative considerations associated with Environmental, Social, and Governance factors. This ensures a comprehensive approach to risk management within the ESG context.",
  },
  {
    name: "Requirements Tracking Program",
    description:
      "Our detailed ESG Internal Audit Checklist ensures comprehensive scope coverage. Tailored to address the unique aspects of ESG audits, this checklist guarantees that all relevant areas are thoroughly audited, promoting effective evaluation and risk management in line with industry standards and regulatory requirements.",
  },
];
const dynamicQuote = `We understand that the main differences lie in the focus and scope of the audits, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const ESGIAProgramPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <Hero_Services title={dynamicTitle} subtitle={dynamicSubtitle} />
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

export default ESGIAProgramPage;
