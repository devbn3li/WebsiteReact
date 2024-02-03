import React from 'react';
import { FaAngular } from "react-icons/fa6";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services';
import Footer from '../../Components/Footer'


const services = [
  {
    title: "Our board-level advisory suite navigates the ESG landscape",
    description: "Strategic Governance aligns goals with resilience",
    icon: <FaAngular />,
    data: {
      title: "Our board-level advisory suite navigates the ESG landscape",
      discription: "Strategic Governance aligns goals with resilience, Risk Management ensures proactive risk mitigation, Stakeholder-Centric Advisory prioritizes meaningful engagements, and Regulatory Compliance keeps boards informed and compliant, demonstrating leadership in responsible governance.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Strategic Sustainability Governance Advisory",
    description: "Elevate your board's strategic decision-making by providing expert guidance",
    icon: <FaAngular />,
    data: {
      title: "Strategic Sustainability Governance Advisory",
      discription: "Elevate your board's strategic decision-making by providing expert guidance on integrating sustainability into corporate governance. Our advisory service ensures alignment between ESG principles and your organization's long-term strategic goals, fostering responsible and resilient business practices.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Risk Management Consultation for Boards",
    description: "Safeguard your board's interests with our ESG risk management consultation. ",
    icon: <FaAngular />,
    data: {
      title: "ESG Risk Management Consultation for Boards",
      discription: "Safeguard your board's interests with our ESG risk management consultation. We assess, identify, and mitigate potential risks associated with environmental, social, and governance factors. Our comprehensive approach empowers boards to proactively address challenges, ensuring sustainable growth and resilience.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Stakeholder-Centric ESG Advisory for Boards",
    description: "Enhance board effectiveness by prioritizing stakeholder engagement in ESG strategies",
    icon: <FaAngular />,
    data: {
      title: "Stakeholder-Centric ESG Advisory for Boards",
      discription: "Enhance board effectiveness by prioritizing stakeholder engagement in ESG strategies. Our advisory service assists boards in developing stakeholder-centric approaches, fostering meaningful dialogues with investors, customers, employees, and communities. Elevate your board's understanding and responsiveness to diverse stakeholder expectations.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Regulatory Compliance and Reporting Advisory",
    description: "Stay ahead of evolving ESG regulations with our specialized advisory service for boards",
    icon: <FaAngular />,
    data: {
      title: "ESG Regulatory Compliance and Reporting Advisory",
      discription: "Stay ahead of evolving ESG regulations with our specialized advisory service for boards. We provide in-depth insights into regulatory landscapes, ensuring your board remains well-informed and compliant. From guiding on reporting requirements to navigating complex regulatory frameworks, we empower boards to demonstrate leadership in responsible governance.",
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


const Board_Level = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"Board-Level ESG Consulting"} subtitle={"Our Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles showcasing leadership in responsible governance. Together, these services equip boards to navigate the complexities of ESG, promoting strategic foresight and responsible decision-making."} buttonText={"Contact Us"}/>
      <SliderLogos />
      <Cursal services={services}/>
     
    </div>
  );
}

export default Board_Level;
