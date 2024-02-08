import React from 'react';
import Hero_2 from '../../Components/Hero/Hero_2';
import Challenge from '../../Components/Challenge/Challenge';
import challengeImg from "../../../public/assets/images/instingo_challenge_page.svg";
import Solutions from '../../Components/SolutionCompo/Solutions';

const ServiceTempletePage = () => {
  const heroData = {
    title: "Templete page",
    description: "Some description to introduce the service",
    CTATitle: "Get Started with Your Assessment",
    CTAPath: "/contact"
  }

  const challengeData = {
    title: "Challenge",
    description: "Descripe it here...",
    imgSrc: challengeImg,
  }

  const solutionsData = {
    description: "Small descrioption here",
    solutions: [
      {
        title: "first step",
        description: "Descrip the step..."
      },
      {
        title: "first step",
        description: "Descrip the step..."
      },
      {
        title: "first step",
        description: "Descrip the step..."
      },
    ]
  }

  return (
    <div>
      <Hero_2 {...heroData} />
      <Challenge {...challengeData} />
      <Solutions {...solutionsData} />
    </div>
  );
}

export default ServiceTempletePage;
