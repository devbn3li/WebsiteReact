import React from "react";
import Hero_2 from "../../Components/Hero/Hero_2";
import Why from "../../Components/DataLab/Why";
import Call from "../../Components/DataLab/Call";

function DataLab() {
  const heroData = {
    title: "Empower Your Sustainability Journey with Data Science",
    description:
      "Welcome to LevelUp Data Lab, where innovation meets impact. Our team of expert data scientists and AI professionals harnesses the power of advanced analytics to unlock deep sustainability insights. Dive into a world where every data point guides you closer to ESG excellence, transforming challenges into opportunities for meaningful progress. Let's shape a sustainable future together.",
    CTATitle: "Contact Us",
    CTAPath: "/contact",
  };

  return (
    <div>
        <Hero_2 {...heroData} />
        <Why />
        <Call />
    </div>
  );
}

export default DataLab;
