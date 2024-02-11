import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import challengeImg from '/assets/Premasset/0da8ef77-4960-4cfa-96fb-65136217e617.png';
import Solutions from '../../Components/SolutionCompo/Solutions';
import CTA1 from '../../Components/CTA/CTA_1';
import CardData from "../../Components/SolCard/CardData";
import Benefits from '../../Components/Benefits/Benefits';
import CTA2 from "../../Components/CTA/CTA_2";
import LandingSection from './landing';
import { FaRegLightbulb, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';

const SustainabilityTracker = () => {

  const challengeData = {
    title: "Facing the Tide of Sustainability Compliance",
    description: "With the advent of the Corporate Sustainability Reporting Directive (CSRD) and the Carbon Border Adjustment Mechanism (CBAM) as key components of the European Green Deal, businesses are navigating through a sea of evolving sustainability regulations. The upcoming International Sustainability Standards Board (ISSB) frameworks only add to the complexity, setting stringent standards for sustainability reporting. Business leaders and CFOs are under increasing pressure to adapt, as the demand for transparent, reliable sustainability information reaches unprecedented levels. The challenge is not only to comply with these new rules but to do so in a way that maintains operational efficiency and competitive advantage.",
    imgSrc: challengeImg,
  };

  const solutionData = {
    description: "Navigate the complexities of sustainability compliance with our Sustainability Tracker. Designed to streamline reporting and ensure accuracy, our platform equips your business with essential tools for data management, automated reporting, and digital twin simulations. Embrace the future of sustainability with solutions that transform compliance into competitive advantage",
    solutions: [
      {
        "title": "Data Centralization",
        "description": "Harness the power of centralized data management with our platform, making it easier to aggregate, analyze, and report sustainability metrics. Streamline your processes and ensure data integrity across your organization."
      },
      {
        "title": "Automated Reporting",
        "description": "Automate your sustainability reporting processes to meet evolving standards without the manual hassle. Our solution simplifies compliance with CSRD, CBAM, and ISSB frameworks, ensuring accuracy and timeliness in reporting."
      },
      {
        "title": "Digital Twin Simulation",
        "description": "Utilize cutting-edge digital twin technology to simulate your operations and perform asset-wide mass and energy balances. Gain unprecedented insights into your sustainability performance and identify areas for improvement."
      },
      {
        "title": "Independent Auditing Support",
        "description": "Prepare for independent auditing with confidence. Our platform facilitates the certification process, ensuring your sustainability reporting is reliable and meets the strict criteria set by global sustainability frameworks."
      },
      {
        "title": "Investor-Grade Data",
        "description": "Provide investors with accessible, comparable, and reliable sustainability data. Our solution elevates your financial and sustainability reporting to equal footing, enhancing transparency and stakeholder trust."
      }
    ]    
  }

  const howToData = {
    title: "How Sustainability Tracker Works",
    Sectiondescription: "Designed for complex industrial processes, ST centralizes and analyzes sustainability data across various indicators, including GHG emissions, water, energy, and more, using advanced machine learning for accuracy and reliability.",
    reasons: [
      {
        title: "Data Integration",
        description: "ST seamlessly integrates with your existing systems, automatically gathering data from multiple sources across operations and supply chains, ensuring comprehensive coverage.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            1
          </div>
        ),
        url: "#",
      },
      {
        title: "Machine Learning Analysis",
        description: "Utilizing machine learning, ST validates, organizes, and corrects the collected data, providing accurate analysis and insights into your sustainability performance.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            2
          </div>
        ),
        url: "#",
      },
      {
        title: "Sustainability Reporting",
        description: "Generate detailed reports and deep analysis across key sustainability indicators, enabling compliance with global frameworks and informed decision-making.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            3
          </div>
        ),
        url: "#",
      }
    ]
  };

  const benefitsData = {
    title: 'Unlock the Benefits of Sustainability Tracking',
    description: 'Leverage ST to enhance your sustainability reporting and performance management, enabling a more sustainable and compliant future.',
    benefits: [
      {
        icon: <FaRegLightbulb />,
        title: "Enhanced Decision Making",
        description: "Gain actionable insights with comprehensive analytics on GHG emissions, energy use, and more for informed sustainability decisions.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Seamless Integration",
        description: "Effortlessly integrate with existing systems, automating data collection and management for a holistic view of your sustainability performance.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Compliance & Reporting",
        description: "Stay ahead of regulatory requirements with detailed, automated reporting that aligns with global sustainability frameworks and standards.",
      },
    ]
  };

  const CTA2Data = {
    "title": "Ready to Elevate Your Sustainability Journey?",
    "CTATitle": "Discover Sustainability Tracker",
    "CTAPath": "#"
  }
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <LandingSection />
      <Challenge  {...challengeData} />
      <Solutions {...solutionData} />
      <CTA1 path="waiting-page" />
      <Benefits {...benefitsData} />   
      <CardData {...howToData} />
      <CTA2 {...CTA2Data} />
    </div>
  );
}

export default SustainabilityTracker;
