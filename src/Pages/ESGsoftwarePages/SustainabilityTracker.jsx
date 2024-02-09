import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import challengeImg from '../../../public/assets/Premasset/0da8ef77-4960-4cfa-96fb-65136217e617.png';
import Solutions from '../../Components/SolutionCompo/Solutions';
import CTA1 from '../../Components/CTA/CTA_1';

const SustainabilityTracker = () => {
  const heroData = {
    title: "Sustainability Analytics: Transform Data into Action",
    description: "Empower your sustainability journey with the Sustainability Tracker (ST). Our platform revolutionizes how you manage and report sustainability by centralizing industrial data, simulating operations with a digital twin, and conducting an asset-wide mass and energy balance. Get detailed, actionable insights and comply with global sustainability frameworks effortlessly.",
    CTATitle: "Start Your Sustainability Transformation",
    CTAPath: "#",
  }

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

  return (
    <div className='flex flex-col justify-center items-center'>
      <Hero_2 {...heroData} />
      <Challenge  {...challengeData} />
      <Solutions {...solutionData} />
      <CTA1 path="waiting-page" />
    </div>
  );
}

export default SustainabilityTracker;
