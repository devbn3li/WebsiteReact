import React from "react";
import Hero_Services from "../../Components/Hero_Services/Hero_Services";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "../../../public/assets/Dashboard.png";
import How from "../../Components/How";
import Call from "../../Components/Call";

const dynamicContent = `Our ESG Diagnostic Assessment is designed to evaluate your company's current ESG policies, initiatives, disclosures, and metrics against leading practices. We offer a strategic approach to ESG diagnostics, ensuring that your organization is prepared for the evolving ESG landscape.`;
const dynamicQuote = `We understand the looming landscape and resonate with the prevailing needs and that the main differences lie in the focus and scope of the ESG diagnostic efforts, our dedication lies in delivering a customized service aligned with the specific needs of your business.`;
const dynamicSolutions = [
  {
    name: "ESG Readiness Assessment",
    description:
      "We evaluate your company's current ESG policies, initiatives, disclosures, and metrics against leading practices. This includes understanding and navigating new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations.",
  },
  {
    name: "ESG Excellence Analysis and Alignment",
    description:
      "We conduct a comprehensive analysis to pinpoint gaps and opportunities for improvement within the environmental, social, and governance domains. This strategic assessment enables your organization to align its ESG initiatives with industry leaders, enables continuous improvement and staying at the forefront of leading practices",
  },
  {
    name: "Optimization & Compliance Preparedness",
    description:
      "We offer strategic enhancements for your ESG strategy and disclosures, presenting a comprehensive action plan for improvement. This proactive approach ensures your organization is well-prepared for potential audits.",
  },
  {
    name: "CSDR Standards Evaluation and Strategic Advancement",
    description:
      "We conduct a thorough assessment of your preparedness vis-à-vis CSDR standards, analyze requirements relative to your current stage, devise strategic roadmaps and enhancements, present actionable plans, meticulously track and monitor progress, and provide guidance for advancing within the specified regulatory timelines",
  },
];
const dynamicTitle =
  "Ready to Shape Your Thriving Future with Data-Driven Sustainability?";
const dynamicParagraph =
  "Embrace the journey towards sustainability leadership with LevelUp Data Lab as your ally. Together, we'll unlock the transformative power of your ESG data, paving the way for a future where your business doesn't just grow—it flourishes.";

const ESGDiagnosticPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <Hero_Services
        title={"ESG Diagnostic Assessment"}
        subtitle={
          "Our innovative ESG Diagnostics provides a rapid assessment of your current ESG performance against leading practices. The online assessment benchmarks your program and identifies priority actions across governance, environment and social impact. It helps identify and prioritize actions for improvement."
        }
        buttonText={"Test"}
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
        paragraph={dynamicParagraph}
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

export default ESGDiagnosticPage;
