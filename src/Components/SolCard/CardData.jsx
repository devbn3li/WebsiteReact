import React from 'react';
import Card from './Card'; // Make sure to provide the correct path to your Card component

const BenefitsSection = () => {
  const benefits = [
    "AI-powered rapid ESG assessment for maximum efficiency and deep insights.",
    "Comprehensive coverage of the most common ESG factors from leading frameworks.",
    "Tailored assessment criteria and tools matched to your business size.",
    "Continuous innovation and updates based on the latest regulations and research.",
    "Actionable insights to target priority areas for improvement.",
    "Expert-led advice and strategic roadmap for effective sustainability implementation.",
    "Automated mapping of the responses against multiple industry standards.",
  ];

  return (
    <section className="max-w-7xl mx-auto pt-28">
      <div className="px-[5%] w-full pb-20">
        <h2 className="text-4xl text-center font-bold mb-12">Key Benefits of LevelUp ESG Pulse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              title={benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
