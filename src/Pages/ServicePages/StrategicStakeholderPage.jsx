import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Premasset/Dash.png";
import How from "../../Components/How";
import Call from "../../Components/Call";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `Our integrated services prioritize stakeholder engagement, communication, and training. Stakeholder Mastery focuses on strategic communication and relationship-building, COSO Framework Training empowers with vital knowledge, Transparent Communication Excellence refines messaging, and Stakeholder-Centric Training fosters a transparent, collaborative, and successful organizational environment.`;
const dynamicSolutions = [
  {
    name: "Stakeholder Engagement Mastery",
    description:
      "Elevate your organization's stakeholder relationships with our Stakeholder Engagement Mastery service. We provide strategic guidance on effective communication, relationship-building, and understanding stakeholder expectations. This service ensures that your stakeholders are informed, engaged, and aligned with your organizational objectives.",
  },
  {
    name: "COSO Framework Awareness and Training",
    description:
      "Unlock the power of the COSO framework with our Awareness and Training service. We offer comprehensive sessions to educate your team and stakeholders on the COSO framework, highlighting its significance in risk management, internal controls, and governance. Empower your workforce and stakeholders with the knowledge needed for successful COSO implementation.",
  },
  {
    name: "Transparent Communication",
    description:
      "Our Transparent Communication Excellence service is designed to enhance your organization's communication strategies. We provide tailored solutions for clear and transparent communication with stakeholders, fostering trust and credibility. From message development to multi-channel communication, this service ensures that your organization's narrative aligns with stakeholder expectations.",
  },
  {
    name: "Stakeholder-Centric Training Programs",
    description:
      "Invest in the growth and understanding of your team with our Stakeholder-Centric Training Programs. These programs go beyond conventional training, focusing on equipping your workforce with the skills needed to navigate stakeholder dynamics effectively. From conflict resolution to stakeholder prioritization, empower your team to excel in stakeholder management, ensuring sustained organizational success.",
  },
];
const dynamicQuote = `We understand that the main differences lie in the focus and scope of the strategic stakeholder management efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const StrategicStakeholderPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <DynamicLandingHero
        title="Strategic Stakeholder Management Program"
        subtitle="Our integrated services prioritize stakeholder engagement, communication, and training. Stakeholder Mastery focuses on strategic communication and relationship-building, COSO Framework Training empowers with vital knowledge, Transparent Communication Excellence refines messaging, and Stakeholder-Centric Training fosters a transparent, collaborative, and successful organizational environment."
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

export default StrategicStakeholderPage;
