import React from 'react';
import PrimaryButton from '../Components/Buttons/PrimaryButton';

// Data for software solutions
const softwareSolutions = [
  {
    name: 'LevelUp ESG Pulse',
    description: 'An AI-powered, cloud-based tool for rapid assessment of your ESG performance against prominent frameworks, providing actionable insights.'
  },
  {
    name: 'Sustainability Tracker',
    description: 'Simplify your ESG data management and reporting with our intuitive software, enabling real-time insights and performance tracking.'
  },
  {
    name: 'LevelUp O2',
    description: 'Automate your carbon accounting and manage your entire value chain emissions efficiently with our AI-powered GHG emissions calculator.'
  },
  {
    name: 'LevelUp Data Lab',
    description: 'Leverage advanced analytics and data science to uncover deep insights, driving strategic decisions for your sustainability goals.'
  }
];

const ESGSoftwareSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-[5%]">
      <div className="container text-[#002E70] mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-8">Enhance Your ESG Performance with Our Software Solutions</h2>
        <div className="flex flex-col items-center lg:flex-row flex-wrap justify-center gap-8">
          {softwareSolutions.map((solution, index) => (
            <div key={index} className="flex-1 text-center mb-8 max-w-md">
              <h3 className="text-xl font-semibold mb-4">{solution.name}</h3>
              <p className="mb-4">{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <PrimaryButton path="/contact" title="Explore Our Solutions" />
        </div>
      </div>
    </section>
  );
};

export default ESGSoftwareSection;
