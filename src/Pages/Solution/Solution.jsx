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

const sections = [
  {
    title: 'LevelUp ESG Pulse',
    discription: "Sustainability management can be complex, and even more challenging for small and medium enterprises (SMEs) with limited resources and time but with LevelUp it doesn’t have to be."
  },

  {
    title: 'LevelUp Sustainability Tracker',
    discription: "Introducing LevelUp Sustainability Tracker - the automated ESG data management platform that empowers your sustainability journey."
  },

  {
    title: 'LevelUp Data Lab',
    discription: "Uncover Sustainability Deep Insights with Data Science Our team of talented data scientists and AI experts empower companies to accelerate their sustainability journey through data."
  }
]

const Solution = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection benefits={benefits} />
      <BenefitsSection benefits={howWeHelp} />
      <SolutionsCard />
      {sections.map((ele, index) => (
        <section className="bg-white rounded-b-3xl " key={index}>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" className="inline-flex justify-between cursor-not-allowed items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-200 bg-[#02c2ab] rounded-full hover:bg-[#02c2ab]/40 duration-500 " role="alert">
              <span className="text-xs bg-[#02c2ab]/20 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Flowbite is out! See what's new</span>
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </a>
            <div className='w-full flex justify-center'>
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                {ele.title}
              </h1>
            </div>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">{ele.discription}</p>
          </div>
        </section>
      ))}

    </div>
  );
};

export default Solution;
