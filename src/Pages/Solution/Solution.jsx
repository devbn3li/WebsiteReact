import React from 'react';
import HeroSection from '../../Components/Hero_solutions';
import BenefitsSection from '../../Components/SolCard/CardData';
import SolutionsCard from '../../Components/Solutions/SolutionsCard';

  const benefits = [
    "AI-powered rapid ESG assessment for maximum efficiency and deep insights.",
    "Comprehensive coverage of the most common ESG factors from leading frameworks.",
    "Tailored assessment criteria and tools matched to your business size.",
    "Continuous innovation and updates based on the latest regulations and research.",
    "Actionable insights to target priority areas for improvement.",
    "Expert-led advice and strategic roadmap for effective sustainability implementation.",
    "Automated mapping of the responses against multiple industry standards.",
  ];

  const howWeHelp = [
    "Data Integration - We aggregate dispersed ESG data into a unified view.",
    "Advanced Analytics - Our AI models derive actionable intelligence from the data.",
    "Impactful Visualizations - Interactive dashboards make insights intuitive and accessible.",
    "Strategic Recommendations - We provide expert guidance to drive strategy and goal setting.",
    "With us as your partner, ESG data becomes your roadmap to sustainability leadership. Our analytics translate complex information into focused strategies and measurable progress.",
  ];

const Solution = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection benefits = {benefits} />
      <BenefitsSection benefits = {howWeHelp} />
      <SolutionsCard />
    </div>
  );
};

export default Solution;