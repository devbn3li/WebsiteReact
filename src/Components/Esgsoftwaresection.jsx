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
   <div className='w-full flex justify-center'>
     <section className=" max-w-[1400px] py-20 px-[5%]">
      <div className="container text-[#002E70] mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-8">Enhance Your ESG Performance with Our Software Solutions</h2>
        <div className='mx-auto pt-12 h-full max-w-[1400px] p-2'>
        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {softwareSolutions.map((solution, index) => (
            <div key={index} className="p-6 bg-[#02c2ab]/30 hover:bg-[#02c2ab] duration-500 cursor-pointer hover:scale-105 rounded-lg shadow-md">
              <h3 className="text-2xl !font-extrabold text-[#112b65]  mb-4">{solution.name}</h3>
              <p className="text-lg text-[#112b65]">{solution.description}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="text-center mt-8">
          <PrimaryButton path="/contact" title="Explore Our Solutions" />
        </div>
      </div>
    </section>
   </div>
  );
};

export default ESGSoftwareSection;
