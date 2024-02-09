import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import CardData from "../../Components/SolCard/CardData";
import challengeImg from "../../../public/assets/images/instingo_challenge_page.svg";
import Solutions from '../../Components/SolutionCompo/Solutions';
import Benefits from '../../Components/Benefits/Benefits';
import CTA2 from '../../Components/CTA/CTA_2';
import CTA1 from '../../Components/CTA/CTA_1';
import { FaSearchDollar, FaProjectDiagram, FaRegLightbulb } from 'react-icons/fa';

const ServiceTempletePage = () => {
  const heroData = {
    title: "Transform Your Finance Function with LevelUp",
    description: "At LevelUp, we specialize in enhancing your finance operations through capability assessments, strategic program management, and the implementation of new technologies and best practices. Our approach ensures your finance functions are primed to drive insights and value.",
    CTATitle: "Explore Transformation Services",
    CTAPath: "/services/finance-transformation"
  }

  const challengeData = {
    title: "Evolving Finance for Future Success",
    description: "In a rapidly changing economic environment, modernizing finance functions is key to staying ahead. LevelUp's services are designed to transform your finance operations, ensuring they're resilient, insightful, and strategically aligned with your business goals.",
    imgSrc: challengeImg,
  }

  const solutionsData = {
    description: "Discover how LevelUp propels your finance function into the future:",
    solutions: [
      {
        title: "Finance Capabilities Assessment",
        description: "We conduct thorough assessments to identify transformation opportunities, preparing your finance function for future challenges and opportunities."
      },
      {
        title: "Program Management",
        description: "Our expert program management ensures your strategic initiatives are executed flawlessly, aligning with and advancing your business goals."
      },
      {
        title: "Optimizing Finance Functions",
        description: "By deploying cutting-edge technologies and adopting best practices, we enhance your finance performance, unlocking valuable insights and value."
      },
    ]
  }

  const benefitsData = {
    title: 'Benefits of Finance Transformation with LevelUp',
    description: 'LevelUp\'s finance transformation services offer critical advantages: ',
    benefits: [
      {
        icon: <FaSearchDollar />,
        title: "Comprehensive Assessments",
        description: "Gain deep insights into your finance capabilities and uncover opportunities for significant improvement and modernization.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Strategic Program Management",
        description: "Benefit from meticulously managed programs that ensure the successful implementation of key initiatives, driving strategic value.",
      },
      {
        icon: <FaRegLightbulb />,
        title: "Function Optimization",
        description: "Leverage the latest technologies and best practices to optimize your finance functions, enhancing overall performance and insight generation.",
      },
    ]
  };


  const howToData = {
    title: "Empowering Your Finance Transformation Journey",
    Sectiondescription: "From capability assessments to the optimization of your finance functions, LevelUp guides you through every step to ensure your finance operations are future-ready.",
    reasons: [
      {
        title: "Assess and Identify",
        description: "Begin with a comprehensive assessment to identify transformation opportunities within your finance functions.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            1
          </div>
        ),
        url: "#",
      },
      {
        title: "Implement with Precision",
        description: "Leverage our program management expertise to implement initiatives that align with your strategic goals.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            2
          </div>
        ),
        url: "#",
      },
      {
        title: "Optimize and Enhance",
        description: "Adopt new technologies and best practices to optimize your finance functions, driving enhanced performance and value.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            3
          </div>
        ),
        url: "#",
      }
    ]
  };
  
  const CTA2Data = {
    title: "Start Your Finance Transformation Journey",
    CTATitle: "Consult Our Experts",
    CTAPath: "/contact"
  }  

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Hero_2 {...heroData} />
      <Challenge {...challengeData} />
      <Solutions {...solutionsData} />
      <CTA1 />
      <Benefits {...benefitsData} />
      <CardData {...howToData} />
      <CTA2 {...CTA2Data} />
    </div>
  );
}

export default ServiceTempletePage;
