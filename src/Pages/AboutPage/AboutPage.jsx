import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
import Why from "../../Components/Why";
import Founders from "../../Components/Founders/Founders";
import Jobs from "../../Components/Jobs";
import PurposeComponent from "../../Components/AboutComponent/PurposeComponent";
import Benefits from "../../Components/Benefits/Benefits";
import FounderNote from "../../Components/Qoute";
import ContPeople from "../../Components/AboutComponent/ContPeople";
import Companys from "../../Components/AboutComponent/Companys";
import Values from "../../Components/AboutComponent/Value";
import Leaders from "../../Components/Leaders";
import Qoute from "../../Components/AboutComponent/Call";
import { FaTools } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import Teams from "../../Components/Teams";
import PrincipelCompo from "../../Components/AboutComponent/PrincipelCompo";

function About() {
  const benefitsData = {
    title: 'From data-driven insights to practical implementation, we can support you with',
    description: 'We provide expert ESG consulting and innovative technology solutions to enhance your sustainability efforts, from diagnostic tools to comprehensive program development and efficient data management.',
    benefits: [
      {
        icon: <FaTools />,
        title: "ESG Diagnostic Tools",
        description: "Gain a clear understanding of your current sustainability performance and identify areas for improvement.",
      },
      {
        icon: <MdOutlineMiscellaneousServices />,
        title: "Tailored  Advice",
        description: "Our experts will guide you through developing a comprehensive ESG programme, from policy creation to stakeholder engagement.",
      },
      {
        icon: <GrTechnology />,
        title: "Accessible Solutions",
        description: "Leverage our innovative tools to streamline data collection, track progress, and communicate your sustainability efforts effectively.",
      },
    ]
  };

  const dynamicQuote = `Whether you're a small or medium-sized enterprise (SME) just starting your sustainability journey or an established company looking to refine your existing programme, we're here to help. Our team of global specialists will work closely with you to provide the right solution and advice that align with your business needs and goals.`;
  return (
    <div>
      <DynamicLandingHero
        title="About Us"
        subtitle="At LevelUp, we&apos;re a passionate team of sustainability experts and scientists with a mission to make corporate sustainability and  ESG practices achievable for businesses of all sizes. We achieve this by offering innovative and affordable ESG solutions alongside expert advice."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Benefits {...benefitsData} />
      <PurposeComponent />
      <Why />
      <Founders />
      <Jobs />
      <PrincipelCompo />
      <Values />
      <FounderNote />
      <Leaders />
      <Teams/>
      <Companys />
    </div>
  );
}

export default About;
