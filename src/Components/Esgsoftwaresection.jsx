import React from 'react';
import PrimaryButton from '../Components/Buttons/PrimaryButton';

// Data for software solutions
const softwareSolutions = [
  {
    name: 'LevelUp O2',
    description: 'Automate your carbon accounting and manage your entire value chain emissions efficiently with our AI-powered GHG emissions calculator.'
  },
  {
    name: 'Sustainability Tracker',
    description: 'Simplify your ESG data management and reporting with our intuitive software, enabling real-time insights and performance tracking.'
  },
];

const ESGSoftwareSection = () => {
  return (
   <div className='w-full flex justify-center'>
     <section className=" max-w-[1400px] py-20 px-[5%]">
      <div className="container text-[#002E70] mx-auto">
        <h2 className="mb-4 text-4xl text-center max-w-[1200px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">Enhance Your ESG Performance with Our Software Solutions</h2>
        <div className='mx-auto pt-12 h-full max-w-[1400px] p-2'>
        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 ">
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
