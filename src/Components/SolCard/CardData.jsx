import React from 'react';
import Card from './Card'; // Make sure to provide the correct path to your Card component

const BenefitsSection = ({benefits}) => {


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
