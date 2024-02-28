import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
import Benefits from "../../Components/Benefits/Benefits";
import Call from "../../Components/Call";

// Icons

const LeafIcon = () => (
  <svg
    width=" 100%"
    height=" 100%"
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

function ESGProgramEstablishment() {
  const benefitsData = {
    title: "ESG Program Establishment",
    description:
      "Our ESG Program Establishment services provide end-to-end guidance on designing, launching, and managing a high-impact corporate sustainability program tailored to your organization's needs. Our methodology includes:",
    benefits: [
      {
        icon: <LeafIcon />,
        title: "Conducting a thorough assessment",
        description:
          "Conducting a thorough assessment of your current ESG policies, initiatives, gaps and opportunities.",
      },
      {
        icon: <LeafIcon />,
        title: "Leading your leadership team",
        description:
          "Leading your leadership team and key stakeholders through an ESG materiality assessment and strategy workshop.",
      },
      {
        icon: <LeafIcon />,
        title: "Advising on governance structures",
        description:
          "Advising on governance structures to embed sustainability through roles, teams, executive oversight, and board integration.",
      },
      {
        icon: <LeafIcon />,
        title: "Establishing a data strategy",
        description:
          "Establishing a data strategy, systems, and processes for consistent, reliable ESG measurement and disclosure.",
      },
      {
        icon: <LeafIcon />,
        title: "Developing a multi-year roadmap",
        description:
          "Developing a multi-year roadmap with specific initiatives across priority ESG domains and business functions.",
      },
      {
        icon: <LeafIcon />,
        title: "Providing training and guidance",
        description:
          "Providing training and guidance to equip your staff with fluency in sustainability concepts and practices.",
      },
      {
        icon: <LeafIcon />,
        title: "Recommending high-impact sustainability goals",
        description:
          "Recommending high-impact sustainability goals and targets aligned to your strategy.",
      },
      {
        icon: <LeafIcon />,
        title: "Creating a communications plan",
        description:
          "Creating a communications plan to effectively convey your ESG commitment to investors and other stakeholders.",
      },
      {
        icon: <LeafIcon />,
        title: "Offering ongoing counsel",
        description:
          "Offering ongoing counsel as you execute key initiatives, refine strategies, and report progress.",
      },
    ],
  };

  return (
    <div>
      <DynamicLandingHero
        title="ESG Program Establishment"
        subtitle="ESG factors are now integral to business strategy and enterprise risk management. However, developing a strategic, robust ESG program can be a daunting task."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <Benefits {...benefitsData} />
      <Call
        imgSrc="/assets/ESG.webp"
        title="Build Your ESG Program Today"
        paragraph="With our step-by-step approach, we empower you to build an ESG program that drives long-term value, meets stakeholder expectations, and positions your organization for success."
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
    </div>
  );
}

export default ESGProgramEstablishment;
