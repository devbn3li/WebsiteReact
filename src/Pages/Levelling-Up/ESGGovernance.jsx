import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
import Qoute from "./Call";
import Benefits from "../../Components/Benefits/Benefits";
import Call from "../../Components/Call";

// Icons
const LeafIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.88 2.15002L20.68 2.55002C18.6234 3.26457 16.4273 3.48384 14.27 3.19002C12.0031 2.83824 9.68292 3.15084 7.59 4.09002C6.48048 4.56247 5.50675 5.30494 4.75747 6.24983C4.00819 7.19473 3.50716 8.31203 3.3 9.50002C3.08926 10.6425 3.11082 11.8157 3.36338 12.9496C3.61594 14.0836 4.09433 15.155 4.77 16.1C4.71 16.31 4.65 16.52 4.6 16.73C4.19384 18.4571 3.99245 20.2259 4 22H6C6.094 20.5479 6.29116 19.1042 6.59 17.68C7.97743 18.4292 9.53335 18.8113 11.11 18.79C12.5805 18.789 14.0358 18.4932 15.39 17.92C23 14.67 22 3.86002 22 3.41002L21.88 2.15002ZM14.61 16.08C12 17.19 8.88 17 7.13 15.63C7.42576 14.6411 7.83164 13.6884 8.34 12.79C8.73519 12.1434 9.20142 11.543 9.73 11C10.2701 10.4512 10.8784 9.97398 11.54 9.58002C12.9071 8.76258 14.4232 8.22547 16 8.00002V7.00002C14.1858 6.93722 12.3827 7.30744 10.74 8.08002C9.06042 8.89957 7.63602 10.1615 6.62 11.73C6.24317 12.3291 5.90901 12.954 5.62 13.6C5.15652 12.4144 5.02514 11.1248 5.24 9.87002C5.38077 8.99156 5.7429 8.1634 6.29225 7.46359C6.8416 6.76378 7.56008 6.21536 8.38 5.87002C9.57561 5.31118 10.8802 5.0243 12.2 5.03002C12.82 5.03002 13.43 5.09002 14.07 5.14002C16.0743 5.39863 18.1093 5.27992 20.07 4.79002C20 7.55002 19.5 14 14.61 16.08Z"
      fill="currentColor"
    ></path>
  </svg>
);

function ESGGovern() {
  const benefitsData = {
    title: "ESG Governance",
    description:
      "Strong governance and oversight are essential for effective management of environmental, social, and governance (ESG) programs. Our ESG Governance Services help boards and leadership teams establish robust structures to support sustainability strategies.",
    benefits: [
      {
        icon: <LeafIcon />,
        title: "Board Oversight Advising",
        description:
          "Advising on appropriate board oversight for ESG, such as dedicated committees or assigning responsibility.",
      },
      {
        icon: <LeafIcon />,
        title: "ESG Charters and Policies",
        description:
          "Developing board and executive level ESG charters, policies, and procedures.",
      },
      {
        icon: <LeafIcon />,
        title: "Management Roles Definition",
        description:
          "Creating clearly defined senior management roles and responsibilities for sustainability.",
      },
      {
        icon: <LeafIcon />,
        title: "Cross-functional Committees",
        description:
          "Establishing cross-functional ESG committees with representation across business units.",
      },
      {
        icon: <LeafIcon />,
        title: "Incentive Integration",
        description:
          "Integrating ESG metrics into executive compensation frameworks and incentive plans.",
      },
      {
        icon: <LeafIcon />,
        title: "Governance Integration",
        description:
          "Incorporating ESG factors into governance guidelines, risk assessments, and audits.",
      },
      {
        icon: <LeafIcon />,
        title: "ESG Education",
        description:
          "Providing ESG education for boards on disclosure requirements, liability risks, and oversight best practices.",
      },
      {
        icon: <LeafIcon />,
        title: "Strategy Alignment Workshops",
        description:
          "Facilitating workshops to align boards and leadership teams on ESG priorities and strategies.",
      },
      {
        icon: <LeafIcon />,
        title: "Board Competency Assessments",
        description:
          "Assessing board competencies related to ESG and recommending training or recruitment strategies.",
      },
    ],
  };
  const dynamicQuote = `Strengthen your sustainability strategy with our ESG Governance Services, designed to support boards and leadership teams in developing robust governance frameworks for effective ESG management. Our comprehensive approach includes advising on board oversight structures, developing ESG charters and policies, creating cross-functional committees, integrating ESG metrics into executive compensation, and more. We also focus on ESG education for boards, aligning leadership on ESG priorities, and assessing board competencies to ensure your efforts are built on a solid foundation. Empower your organization's leadership to effectively guide and oversee sustainability initiatives.`;
  return (
    <div>
      <DynamicLandingHero
        title="ESG Governance"
        subtitle="Empower your leadership with robust structures for effective ESG management and oversight."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Learn More" }}
      />
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Benefits {...benefitsData} />
      <Call
        imgSrc="/assets/Premasset/photo12.png"
        title="Solidify Your ESG Governance"
        paragraph="With robust ESG governance, empower organizational leadership to effectively guide, support, oversee, and enable your sustainability programs. Contact us to ensure your ESG efforts have solid foundations."
        buttonTitle="Get in Touch"
        buttonPath="/contact"
      />
    </div>
  );
}

export default ESGGovern;
