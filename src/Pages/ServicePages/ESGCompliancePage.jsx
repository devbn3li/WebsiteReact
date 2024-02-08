import React from "react";
import { FaLeaf } from "react-icons/fa";

import Cursal from "../../Components/Cursal/Cursal";
import Hero_Services from "../../Components/Hero_Services/Hero_Services";
import EndServices from "../../Components/EndServices";

const services = [
  {
    title: "ESG Regulatory Landscape Analysis",
    description:
      " Stay ahead of the ever-evolving ESG regulatory environment with our Regulatory Landscape Analysis service",
    icon: <FaLeaf />,
    data: {
      title: "ESG Regulatory Landscape Analysis",
      discription:
        "Stay ahead of the ever-evolving ESG regulatory environment with our Regulatory Landscape Analysis service. We conduct thorough assessments of applicable regulations, helping you understand and navigate the complex requirements specific to your industry. This service ensures that your ESG compliance program remains robust and up-to-date.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Customized ESG Policy Development",
    description: "Tailor your ESG compliance program with our Customized ESG Policy Development service.",
    icon: <FaLeaf />,
    data: {
      title: "Customized ESG Policy Development",
      discription: "Tailor your ESG compliance program with our Customized ESG Policy Development service. We work closely with your organization to create bespoke policies aligned with your values, industry standards, and regulatory expectations. These policies serve as a foundation for implementing effective ESG practices and demonstrating commitment to sustainability.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "ESG Training and Awareness Programs",
    description: "Foster a culture of ESG awareness and compliance within your organization through our ESG Training and Awareness Programs",
    icon: <FaLeaf />,
    data: {
      title: "ESG Training and Awareness Programs",
      discription: "Foster a culture of ESG awareness and compliance within your organization through our ESG Training and Awareness Programs. We provide targeted training sessions to educate employees at all levels about ESG principles, regulations, and best practices. This empowers your workforce to actively contribute to your ESG compliance efforts.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Continuous Monitoring and Reporting",
    description: "Ensure ongoing compliance with our Continuous Monitoring and Reporting service.",
    icon: <FaLeaf />,
    data: {
      title: "Continuous Monitoring and Reporting",
      discription: "Ensure ongoing compliance with our Continuous Monitoring and Reporting service. We establish systematic processes for monitoring changes in ESG regulations, track your performance against compliance objectives, and provide regular reports. This service allows your organization to adapt proactively to regulatory shifts and highlight a commitment to sustained ESG compliance.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },

];

const ESGCompliancePage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <Hero_Services
        title={"ESG Compliance program"}
        subtitle={
          "We provide comprehensive support to compliance functions in building their ESG capabilities. Our services include the creation of an ESG compliance strategy and methodology manual, tailored to your organization's needs. We understand that ESG compliance is a dynamic field with evolving regulations and standards, and we adapt our services based on the maturity of your compliance environment."
        }
        
      />

      <Cursal services={services} />
        <EndServices description={"We understand that the main differences lie in the focus and scope of the compliance efforts, and we are committed to providing a service that is tailored to your organization's specific needs."}/>
    </div>
  );
};

export default ESGCompliancePage;
