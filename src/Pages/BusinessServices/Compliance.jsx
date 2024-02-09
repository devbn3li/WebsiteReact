import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import CardData from "../../Components/SolCard/CardData";
import challengeImg from "../../../public/assets/images/instingo_challenge_page.svg";
import Solutions from '../../Components/SolutionCompo/Solutions';
import Benefits from '../../Components/Benefits/Benefits';
import CTA2 from '../../Components/CTA/CTA_2';
import CTA1 from '../../Components/CTA/CTA_1';
import { FaRegCheckCircle, FaRegBuilding, FaBookOpen } from 'react-icons/fa';

const ServiceTempletePage = () => {
  const heroData = {
    title: "Secure Your Future with Our Compliance Services",
    description: "Navigate the complexities of governance, risk management, and compliance (GRC) with LevelUp. Our team ensures your business remains resilient, insightful, and performance-driven amidst the rapidly changing regulatory landscape.",
    CTATitle: "Learn More",
    CTAPath: "/contact"
  }

  const challengeData = {
    title: "The Compliance Challenge",
    description: "In a landscape of ever-evolving regulations, maintaining compliance is a formidable challenge. LevelUp provides the expertise to not only navigate these waters but to transform compliance into a competitive advantage.",
    imgSrc: challengeImg,
  }

  const solutionsData = {
    description: "LevelUp's compliance solutions empower your business through:",
    solutions: [
      {
        title: "Regulation Monitoring",
        description: "Proactively monitor regulations to ensure your operations consistently align with current legal frameworks, avoiding potential penalties."
      },
      {
        title: "Compliance Program Development",
        description: "Develop and implement bespoke compliance programs, designed to effectively manage and mitigate your specific business risks."
      },
      {
        title: "Compliance Reviews and Audits",
        description: "Conduct thorough compliance reviews and audits to evaluate your adherence to regulations, offering assurance to both leadership and regulators."
      },
    ]
  }

  const benefitsData = {
    title: 'Benefits of Partnering with LevelUp for Compliance',
    description: 'LevelUp\'s compliance services provide significant advantages:',
    benefits: [
      {
        icon: <FaRegCheckCircle />,
        title: "Regulatory Compliance",
        description: "Stay ahead of regulations and avoid penalties with our proactive monitoring and risk assessment strategies.",
      },
      {
        icon: <FaRegBuilding />,
        title: "Custom Compliance Programs",
        description: "Benefit from custom-tailored compliance programs that fit your organization's needs and enhance risk management.",
      },
      {
        icon: <FaBookOpen />,
        title: "Expert Reviews and Audits",
        description: "Gain confidence with comprehensive reviews and audits that ensure your operations meet all regulatory requirements.",
      },
    ]
  };


  const howToData = {
    title: "Navigating Compliance with LevelUp",
    Sectiondescription: "Discover the steps to achieving and maintaining compliance with LevelUp's comprehensive services, designed for today's dynamic regulatory environment.",
    reasons: [
      {
        title: "Stay Informed",
        description: "Leverage our expertise in regulation monitoring to keep your operations compliant and penalty-free.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            1
          </div>
        ),
        url: "#",
      },
      {
        title: "Build Resilience",
        description: "Create robust compliance programs that are as dynamic as the regulatory landscape, tailored to your business needs.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            2
          </div>
        ),
        url: "#",
      },
      {
        title: "Ensure Accountability",
        description: "With our comprehensive audits and reviews, provide assurance to stakeholders that your business adheres to the highest compliance standards.",
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
    title: "Elevate Your Compliance Strategy with LevelUp",
    CTATitle: "Get Started",
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
