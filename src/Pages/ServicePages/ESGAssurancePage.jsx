import React from 'react';
import { FaLeaf } from "react-icons/fa";

import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services/Hero_Services';


const services = [
  {
    title: "Detailed Page Content",
    description: "The quality of corporate reporting is under increased scrutiny",
    icon: <FaLeaf />,
    data: {
      title: "Detailed Page Content",
      discription: "The quality of corporate reporting is under increased scrutiny, necessitating a standardized and consistent measurement and disclosure of non-financial information. At LevelUp, we provide ISAE 3000 and ISAE 3410 assurance over companies’ ESG information and metrics included in, or referenced from, the Annual Report.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Data Verification and Assurance",
    description: "Elevate the credibility of your ESG disclosures through our Data Verification and Assurance service.",
    icon: <FaLeaf />,
    data: {
      title: "Data Verification and Assurance",
      discription: "Elevate the credibility of your ESG disclosures through our Data Verification and Assurance service. We conduct thorough examinations of your environmental, social, and governance data, ensuring accuracy, reliability, and alignment with industry benchmarks. This service adds an extra layer of assurance to your ESG reporting.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Climate Disclosure Assurance",
    description: "Many businesses are now compelled or choose to align their disclosures as per the latest IFRS S2 Climate-related Disclosures.",
    icon: <FaLeaf />,
    data: {
      title: "ESG Climate Disclosure Assurance",
      discription: "Many businesses are now compelled or choose to align their disclosures as per the latest IFRS S2 Climate-related Disclosures. Our assurance services cover these demands comprehensively, providing everything from gap analysis and benchmarking to ISAE 3000 assurance over climate-related disclosures.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },

]


const ESGAssurancePage = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG Assurance"} subtitle={"We provide ISAE 3000 and ISAE 3410 assurance over companies' ESG information and metrics. We ensure standardized and consistent measurement and disclosure of non-financial information. Our assurance covers a wide range of ESG metrics, from greenhouse gas emissions to workforce diversity and pay gaps."} />
      <Cursal services={services}/>
    
    </div>
  );
}

export default ESGAssurancePage;
