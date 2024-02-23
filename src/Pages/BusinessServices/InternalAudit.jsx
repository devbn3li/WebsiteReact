import React from "react";
import Challenge from "../../Components/Challenge/Challenge";
import CardData from "../../Components/SolCard/CardData";
import challengeImg from "/assets/images/instingo_challenge_page.svg";
import Solutions from "../../Components/SolutionCompo/Solutions";
import Benefits from "../../Components/Benefits/Benefits";
import CTA2 from "../../Components/CTA/CTA_2";
import CTA1 from "../../Components/CTA/CTA_1";
import { FaTools, FaChartLine, FaUserTie } from "react-icons/fa";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const ServiceTempletePage = () => {
  const challengeData = {
    title: "Navigating Business Challenges",
    description:
      "In the rapidly evolving business environment, ensuring robust governance, risk management, and compliance (GRC) is more critical than ever. Our services are designed to help you stay ahead, ensuring resilience and driving growth.",
    imgSrc: challengeImg,
  };

  const solutionsData = {
    description:
      "Our tailored internal audit solutions empower your organization to address key areas effectively:",
    solutions: [
      {
        title: "Risk-based Auditing",
        description:
          "Prioritize critical areas with our risk-based approach, optimizing resource allocation and providing targeted assurance.",
      },
      {
        title: "Data Analytics",
        description:
          "Enhance audit precision and risk identification through advanced data analytics, offering deeper insights into operations.",
      },
      {
        title: "Audit Committee Support",
        description:
          "Strengthen governance with comprehensive support and actionable recommendations for the audit committee.",
      },
    ],
  };

  const benefitsData = {
    title: "Key Benefits of Choosing LevelUp",
    description: "Our internal audit services offer unparalleled advantages:",
    benefits: [
      {
        icon: <FaTools />,
        title: "Pragmatic Approach",
        description:
          "Benefit from a flexible, pragmatic auditing approach that drives measurable improvements in your operations.",
      },
      {
        icon: <FaChartLine />,
        title: "Enhanced Insights",
        description:
          "Leverage cutting-edge data analytics for deeper operational insights and more effective risk management.",
      },
      {
        icon: <FaUserTie />,
        title: "Expertise and Support",
        description:
          "Gain expert advice and comprehensive support for your audit committee, enhancing governance and oversight.",
      },
    ],
  };

  const howToData = {
    title: "Empowering Your Internal Audit Capabilities",
    Sectiondescription:
      "From risk-based auditing to enhancing your team's expertise, discover how LevelUp transforms your internal audit function for greater impact.",
    reasons: [
      {
        title: "Comprehensive Auditing",
        description:
          "Experience our holistic audit approach, focusing on your most critical risk areas for efficient and effective assurance.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            1
          </div>
        ),
        url: "#",
      },
      {
        title: "Insightful Analytics",
        description:
          "Utilize our data analytics capabilities for a deeper understanding and identification of risks across your operations.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            2
          </div>
        ),
        url: "#",
      },
      {
        title: "Enhanced Governance",
        description:
          "Strengthen your governance framework with our expert support to the audit committee, ensuring oversight and strategic guidance.",
        icon: (
          <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            3
          </div>
        ),
        url: "#",
      },
    ],
  };

  const CTA2Data = {
    title: "Take Your Governance and Compliance to the Next Level",
    CTATitle: "Get Started Today",
    CTAPath: "/contact",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <DynamicLandingHero
        title="Future Proof Your Business with Our Audit Services"
        subtitle="Strengthen your governance, risk management, and compliance practices with our comprehensive internal audit and GRC services. Build resilience, gain insights, and drive performance with LevelUp."
        button1={{ path: "/about", label: "About Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <Challenge {...challengeData} />
      <Solutions {...solutionsData} />
      <CTA1 />
      <Benefits {...benefitsData} />
      <CardData {...howToData} />
      <CTA2 {...CTA2Data} />
    </div>
  );
};

export default ServiceTempletePage;
