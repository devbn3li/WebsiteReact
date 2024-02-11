import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import CardData from "../../Components/SolCard/CardData";
import challengeImg from "/assets/images/instingo_challenge_page.svg";
import Solutions from '../../Components/SolutionCompo/Solutions';
import Benefits from '../../Components/Benefits/Benefits';
import CTA2 from '../../Components/CTA/CTA_2';
import CTA1 from '../../Components/CTA/CTA_1';
import { FaMapMarkedAlt, FaShieldAlt, FaBusinessTime } from 'react-icons/fa';

const ServiceTempletePage = () => {
  const heroData = {
    title: "Elevate Your Risk Management Strategy",
    description: "In an unpredictable business world, LevelUp offers unparalleled governance, risk management, and compliance (GRC) services to safeguard your organization. Our team empowers you with strategic insights and robust risk mitigation, ensuring business continuity and performance.",
    CTATitle: "Discover Our Solutions",
    CTAPath: "/services/risk-management"
  }

  const challengeData = {
    title: "Confronting Uncertainty Head-On",
    description: "As businesses navigate through volatile environments, the importance of proactive risk management and business continuity planning becomes paramount. LevelUp's dedicated approach offers the clarity and strategy needed to turn risk into opportunity.",
    imgSrc: challengeImg,
  }

  const solutionsData = {
    description: "LevelUp's risk management solutions are designed to fortify your business:",
    solutions: [
      {
        title: "Risk Landscape Mapping",
        description: "Identify and evaluate risks with our comprehensive mapping, laying the groundwork for effective mitigation strategies."
      },
      {
        title: "Risk Mitigation Strategies",
        description: "Implement tailored risk mitigation strategies that safeguard your business, ensuring resilience against potential threats."
      },
      {
        title: "Business Continuity Planning",
        description: "Develop and test business continuity plans with our guidance, minimizing disruptions and maintaining operational integrity during crises."
      },
    ]
  }

  const benefitsData = {
    title: 'Advantages of Risk Management with LevelUp',
    description: 'Embrace comprehensive risk management with LevelUp to safeguard and strategically advance your business:',
    benefits: [
      {
        icon: <FaMapMarkedAlt />,
        title: "Comprehensive Risk Mapping",
        description: "Gain a clear understanding of your risk landscape, enabling proactive risk identification and assessment.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Effective Risk Mitigation",
        description: "Benefit from strategic advice on risk mitigation, enhancing your organization's resilience and stability.",
      },
      {
        icon: <FaBusinessTime />,
        title: "Robust Business Continuity",
        description: "Ensure your business remains operational through unforeseen events with our thorough continuity planning.",
      },
    ]
  };



  const howToData = {
    title: "Mastering Risk Management with LevelUp",
    Sectiondescription: "From risk identification to continuity planning, LevelUp guides your business through each step to ensure comprehensive resilience and strategic foresight.",
    reasons: [
      {
        title: "Identify Risks",
        description: "Start with a detailed risk landscape mapping to understand potential vulnerabilities within your business.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            1
          </div>
        ),
        url: "#",
      },
      {
        title: "Mitigate Strategically",
        description: "Implement targeted risk mitigation strategies to protect and future-proof your operations.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            2
          </div>
        ),
        url: "#",
      },
      {
        title: "Ensure Continuity",
        description: "Develop and rigorously test business continuity plans to maintain operational integrity, no matter what.",
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
    title: "Strengthen Your Business Against Risks",
    CTATitle: "Start Your Risk Management Journey",
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
