import React from 'react';
import { FaLeaf } from "react-icons/fa";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services/Hero_Services';


const services = [
  {
    title: "ESG Readiness Assessment",
    description: "We evaluate your company's current ESG policies, initiatives, disclosures, and metrics against leading practices",
    icon: <FaLeaf />,
    data: {
      title: "ESG Readiness Assessment",
      discription: "We evaluate your company's current ESG policies, initiatives, disclosures, and metrics against leading practices. This includes understanding and navigating new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Excellence Analysis and Alignment",
    description: "We conduct a comprehensive analysis to pinpoint gaps and opportunities for improvement within the environmental",
    icon: <FaLeaf />,
    data: {
      title: "ESG Excellence Analysis and Alignment",
      discription: "We conduct a comprehensive analysis to pinpoint gaps and opportunities for improvement within the environmental, social, and governance domains. This strategic assessment enables your organization to align its ESG initiatives with industry leaders, enables continuous improvement and staying at the forefront of leading practices",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Optimization & Compliance Preparedness",
    description: "We offer strategic enhancements for your ESG strategy and disclosures",
    icon: <FaLeaf />,
    data: {
      title: "Optimization & Compliance Preparedness",
      discription: "We offer strategic enhancements for your ESG strategy and disclosures, presenting a comprehensive action plan for improvement. This proactive approach ensures your organization is well-prepared for potential audits.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "CSDR Standards Evaluation and Strategic Advancement",
    description: "We conduct a thorough assessment of your preparedness vis-à-vis CSDR standards",
    icon: <FaLeaf />,
    data: {
      title: "CSDR Standards Evaluation and Strategic Advancement",
      discription: "We conduct a thorough assessment of your preparedness vis-à-vis CSDR standards, analyze requirements relative to your current stage, devise strategic roadmaps and enhancements, present actionable plans, meticulously track and monitor progress, and provide guidance for advancing within the specified regulatory timelines",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
]


const ESG_Diagnostic = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG Diagnostic Assessment"} subtitle={"Our innovative ESG Diagnostics provides a rapid assessment of your current ESG performance against leading practices. The online assessment benchmarks your program and identifies priority actions across governance, environment and social impact. It helps identify and prioritize actions for improvement."} buttonText={"Test"}/>
      <SliderLogos />
      <Cursal services={services}/>
    </div>
  );
}

export default ESG_Diagnostic;
