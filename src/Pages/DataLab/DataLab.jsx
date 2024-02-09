import React from "react";
import Hero_2 from "../../Components/Hero/Hero_2";
import Why from "../../Components/DataLab/Why";
import Call from "../../Components/DataLab/Call";
import How from "../../Components/DataLab/How";
import Dash from "../../Components/DataLab/Dash";
import CTA2 from "../../Components/CTA/CTA_2";

function DataLab() {
  const heroData = {
    title: "Empower Your Sustainability Journey with Data Science",
    description:
      "Welcome to LevelUp Data Lab, where innovation meets impact. Our team of expert data scientists and AI professionals harnesses the power of advanced analytics to unlock deep sustainability insights. Dive into a world where every data point guides you closer to ESG excellence, transforming challenges into opportunities for meaningful progress. Let's shape a sustainable future together.",
    CTATitle: "Contact Us",
    CTAPath: "/contact",
  };

  const CTASectionData = {
    title: "Let our data science reveal what matters most to your stakeholders and growth. Start your sustainability journey on the right path today.",
    CTATitle: "Book a consultation", 
    CTAPath: "/contact", 
  }
  return (
    <div>
        <Hero_2 {...heroData} />
        <Dash />
        <Why />
        <Call />
        <How />
        <CTA2 {...CTASectionData} />
    </div>
  );
}

export default DataLab;
