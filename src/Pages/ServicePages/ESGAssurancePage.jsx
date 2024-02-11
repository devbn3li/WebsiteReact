import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Premasset/Dash.png";
import How from "../../Components/How";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `We provide ISAE 3000 and ISAE 3410 assurance over companies' ESG information and metrics. We ensure standardized and consistent measurement and disclosure of non-financial information. Our assurance covers a wide range of ESG metrics, from greenhouse gas emissions to workforce diversity and pay gaps.`;
const dynamicSolutions = [
  {
    name: "Data Verification and Assurance",
    description:
      "Elevate the credibility of your ESG disclosures through our Data Verification and Assurance service. We conduct thorough examinations of your environmental, social, and governance data, ensuring accuracy, reliability, and alignment with industry benchmarks. This service adds an extra layer of assurance to your ESG reporting.",
  },
  {
    name: "ESG Climate Disclosure Assurance",
    description:
      "Many businesses are now compelled or choose to align their disclosures as per the latest IFRS S2 Climate-related Disclosures. Our assurance services cover these demands comprehensively, providing everything from gap analysis and benchmarking to ISAE 3000 assurance over climate-related disclosures.",
  },
];

const dynamicQuote = `We understand that the main differences lie in the focus and scope of the ESG governance and strategy efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const ESGAssurancePage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
            <DynamicLandingHero
        title="ESG Assurance"
        subtitle="The quality of corporate reporting is under increased scrutiny, necessitating a standardized and consistent measurement and disclosure of non-financial information. At LevelUp, we provide ISAE 3000 and ISAE 3410 assurance over companies’ ESG information and metrics included in, or referenced from, the Annual Report."
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

export default ESGAssurancePage;
