import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Dashboard.png";
import How from "../../Components/How";
import StrategicStakeholderPage from "./StrategicStakeholderPage";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `Our Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles showcasing leadership in responsible governance. Together, these services equip boards to navigate the complexities of ESG, promoting strategic foresight and responsible decision-making.`;
const dynamicSolutions = [
  {
    name: "Strategic Sustainability Governance Advisory",
    description:
      "Elevate your board's strategic decision-making by providing expert guidance on integrating sustainability into corporate governance. Our advisory service ensures alignment between ESG principles and your organization's long-term strategic goals, fostering responsible and resilient business practices.",
  },
  {
    name: "ESG Risk Management Consultation for Boards",
    description:
      "Safeguard your board's interests with our ESG risk management consultation. We assess, identify, and mitigate potential risks associated with environmental, social, and governance factors. Our comprehensive approach empowers boards to proactively address challenges, ensuring sustainable growth and resilience.",
  },
  {
    name: "Stakeholder-Centric ESG Advisory for Boards",
    description:
      "Enhance board effectiveness by prioritizing stakeholder engagement in ESG strategies. Our advisory service assists boards in developing stakeholder-centric approaches, fostering meaningful dialogues with investors, customers, employees, and communities. Elevate your board's understanding and responsiveness to diverse stakeholder expectations.",
  },
  {
    name: "ESG Regulatory Compliance and Reporting Advisory",
    description:
      "Stay ahead of evolving ESG regulations with our specialized advisory service for boards. We provide in-depth insights into regulatory landscapes, ensuring your board remains well-informed and compliant. From guiding on reporting requirements to navigating complex regulatory frameworks, we empower boards to demonstrate leadership in responsible governance.",
  },
  {
    name: "Strategic Planning for ESG Integration",
    description:
      "Develop strategic plans to integrate ESG principles into your organization's overall strategy. Our consultancy services help boards identify key areas for ESG integration, set actionable goals, and measure progress, ensuring alignment with long-term sustainability objectives.",
  },
];

const dynamicQuote = `We understand that the main differences lie in the focus and scope of the ESG governance and strategy efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const BoardLevelPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
            <DynamicLandingHero
        title="Board-Level ESG Consulting"
        subtitle="Our Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles showcasing leadership in responsible governance. Together, these services equip boards to navigate the complexities of ESG, promoting strategic foresight and responsible decision-making."
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

<StrategicStakeholderPage />

    </div>
  );
};

export default BoardLevelPage;
