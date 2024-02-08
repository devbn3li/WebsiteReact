import React from 'react';
import HeroSection from '../../Components/LevelUpO2/Hero';
import Challenge from '../../Components/Challenge/Challenge';
import Solutions from '../../Components/SolutionCompo/Solutions';
import Benefits from '../../Components/LevelUpO2/Benefits.jsx';
import Call from '../../Components/LevelUpO2/Call.jsx';
import challengeImg from "../../../public/assets/images/instingo_challenge_page.svg";


function LevelUpO2() {
  const challengeData = {
    title: "The Challenge of GHG Emissions",
    description: "Calculating greenhouse gas (GHG) emissions can be complex and time-consuming, but it is essential for understanding and mitigating environmental impact.",
    imgSrc: challengeImg,
  }

  const solutionsData = {
    description: "Introducing LevelUp O2, your one-stop solution for streamlined and efficient carbon accounting. Our powerful platform, powered by expert guidance and robust AI, empowers you to",
    solutions: [
      {
        title: "Measure",
        description: "Quickly and confidently calculate your Scope 1, 2, and 3 emissions, gaining a comprehensive understanding of your carbon footprint across all operations."
      },
      {
        title: "Reduce",
        description: "Visualize your footprint by scope to identify high-impact areas and set data-driven ESG targets for effective emissions reduction."
      },
      {
        title: "Report",
        description: "Generate audit-ready emissions data tailored to leading investor, supply chain, and regulatory frameworks (GRI, CDP, SASB, TCFB, ISSB)."
      },
    ]
  }

  return (
    <div>
      <HeroSection />
      <Challenge {...challengeData} />
      <Solutions {...solutionsData} />
      <Benefits />
      <Call />
    </div>
  );
}

export default LevelUpO2;