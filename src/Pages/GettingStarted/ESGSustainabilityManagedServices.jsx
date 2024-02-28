import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
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

function ESGSustainabilityManagedServices() {
  const benefitsData = {
    title: "ESG and Sustainability Managed Services",
    description:
      "Building an effective ESG program requires specialized expertise alongside day-to-day execution. Our ESG Managed Services provide dedicated support to advance your sustainability initiatives on an ongoing basis.",
    benefits: [
      {
        icon: <LeafIcon />,
        title: "Outsourced Expertise",
        description:
          "Assigning an ESG expert as your outsourced Chief Sustainability Officer or a virtual member of your team.",
      },
      {
        icon: <LeafIcon />,
        title: "Strategy Refinement",
        description:
          "Working closely with your leaders to refine ESG strategy, set goals, and track performance.",
      },
      {
        icon: <LeafIcon />,
        title: "End-to-End Program Management",
        description:
          "Managing key programs end-to-end, like supplier audits, lifecycle analyses, or renewable energy procurement.",
      },
      {
        icon: <LeafIcon />,
        title: "Data and Reporting Oversight",
        description:
          "Overseeing data management, ESG reporting, and disclosure processes in line with regulations and frameworks.",
      },
      {
        icon: <LeafIcon />,
        title: "Performance Validation",
        description:
          "Coordinating assurance, ratings, and benchmarking activities to validate and improve performance.",
      },
      {
        icon: <LeafIcon />,
        title: "ESG Landscape Monitoring",
        description:
          "Monitoring the evolving ESG landscape and emerging stakeholder expectations.",
      },
      {
        icon: <LeafIcon />,
        title: "Capability Building",
        description:
          "Building internal ESG capabilities through training and knowledge transfer.",
      },
      {
        icon: <LeafIcon />,
        title: "Cross-functional Support",
        description:
          "Providing ongoing counsel and support to your cross-functional sustainability team.",
      },
      {
        icon: <LeafIcon />,
        title: "Executive Updates",
        description:
          "Updating executives and the board on ESG priorities, risks, and progress.",
      },
    ],
  };

  return (
    <div>
      <DynamicLandingHero
        title="ESG and Sustainability Managed Services"
        subtitle="Dedicated support to advance your sustainability initiatives with specialized expertise and execution."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Learn More" }}
      />
      <Benefits {...benefitsData} />
      <Call
        imgSrc="/assets/Premasset/arrow.png"
        title="Advance Your ESG Initiatives"
        paragraph="Our managed services deliver targeted, flexible ESG support scaled to your needs, enabling you to advance key initiatives without significant internal resource investment. Contact us to discuss outsourcing your sustainability and ESG programs to our experts."
        buttonTitle="Get Started"
        buttonPath="/contact"
      />
    </div>
  );
}

export default ESGSustainabilityManagedServices;
