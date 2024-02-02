import React from 'react';
import { FaAngular } from "react-icons/fa6";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services';
import Footer from '../../Components/Footer'


const services = [
  {
    title: "ESG ERM Strategy Development",
    description: "Our service extends beyond ESG risk management planning to a strategic approach",
    icon: <FaAngular />,
    data: {
      title: "ESG ERM Strategy Development",
      discription: "Our service extends beyond ESG risk management planning to a strategic approach that ensures your organization is well-prepared for emerging risks. We assist in planning and scoping your ESG risk management efforts, considering evolving risks related to frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. This proactive strategy positions your organization to navigate the dynamic ESG risk landscape effectively.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG ERM Methodology Manual",
    description: "Navigate the intricacies of ESG risk management with our comprehensive ESG ERM Methodology Manual",
    icon: <FaAngular />,
    data: {
      title: "ESG ERM Methodology Manual",
      discription: " Navigate the intricacies of ESG risk management with our comprehensive ESG ERM Methodology Manual. This guide outlines a robust methodology for managing ESG risks, offering insights to navigate the complex risk landscape. Designed to ensure consistency in risk management practices across your organization, this manual becomes a valuable resource in implementing effective risk mitigation strategies aligned with industry standards.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Qualitative Risks and Controls",
    description: "Our expertise extends to identifying and managing qualitative risks and controls related to ESG.",
    icon: <FaAngular />,
    data: {
      title: "Qualitative Risks and Controls",
      discription: "Our expertise extends to identifying and managing qualitative risks and controls related to ESG. We assist your organization in understanding and addressing nuanced risks associated with Environmental, Social, and Governance factors. This service ensures a holistic approach to risk management that considers qualitative aspects, contributing to a more comprehensive ESG risk strategy.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Title 4",
    description: "Small Description 4",
    icon: <FaAngular />,
    data: {
      title: "Title",
      discription: "Discription",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Risk Management Tracking and Monitoring",
    description: " Proactively manage risks with our detailed Risk Management Tracking and Monitoring service.",
    icon: <FaAngular />,
    data: {
      title: "Risk Management Tracking and Monitoring",
      discription: "Proactively manage risks with our detailed Risk Management Tracking and Monitoring service. We provide a comprehensive risk management checklist, ensuring all relevant areas are effectively covered. This not only prepares your organization for potential audits but also establishes a continuous monitoring system, fostering a proactive approach to risk mitigation and compliance in the evolving ESG landscape.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Title 6",
    description: "Small Description 6",
    icon: <FaAngular />,
    data: {
      title: "Title",
      discription: "Discription",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
]


const ERM_Program = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG in ERM Program"} subtitle={"We provide comprehensive support to enterprise risk management (ERM) functions in building their ESG capabilities. Our services include the development of an ESG ERM strategy and methodology manual, tailored to your organization's needs. We understand that ESG factors are increasingly important in risk management, and we integrate these factors into your ERM program."} buttonText={"Contact Us"}/>
      <SliderLogos />
      <Cursal services={services}/>
      <Footer />
    </div>
  );
}

export default ERM_Program;
