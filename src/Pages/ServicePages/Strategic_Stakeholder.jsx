import React from 'react';
import { FaAngular } from "react-icons/fa6";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services';
import Footer from '../../Components/Footer'


const services = [
  {
    title: "Stakeholder Engagement Mastery",
    description: "Elevate your organization's stakeholder relationships with our Stakeholder Engagement Mastery service.",
    icon: <FaAngular />,
    data: {
      title: "Stakeholder Engagement Mastery",
      discription: "Elevate your organization's stakeholder relationships with our Stakeholder Engagement Mastery service. We provide strategic guidance on effective communication, relationship-building, and understanding stakeholder expectations. This service ensures that your stakeholders are informed, engaged, and aligned with your organizational objectives.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "COSO Framework Awareness and Training",
    description: "Unlock the power of the COSO framework with our Awareness and Training service. ",
    icon: <FaAngular />,
    data: {
      title: "COSO Framework Awareness and Training",
      discription: "Unlock the power of the COSO framework with our Awareness and Training service. We offer comprehensive sessions to educate your team and stakeholders on the COSO framework, highlighting its significance in risk management, internal controls, and governance. Empower your workforce and stakeholders with the knowledge needed for successful COSO implementation.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Transparent Communication",
    description: "Our Transparent Communication Excellence service is designed to enhance your organization's communication strategies",
    icon: <FaAngular />,
    data: {
      title: "Transparent Communication",
      discription: "Our Transparent Communication Excellence service is designed to enhance your organization's communication strategies. We provide tailored solutions for clear and transparent communication with stakeholders, fostering trust and credibility. From message development to multi-channel communication, this service ensures that your organization's narrative aligns with stakeholder expectations.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Stakeholder-Centric Training Programs",
    description: " Invest in the growth and understanding of your team with our Stakeholder-Centric Training Programs.",
    icon: <FaAngular />,
    data: {
      title: "Stakeholder-Centric Training Programs",
      discription: "Invest in the growth and understanding of your team with our Stakeholder-Centric Training Programs. These programs go beyond conventional training, focusing on equipping your workforce with the skills needed to navigate stakeholder dynamics effectively. From conflict resolution to stakeholder prioritization, empower your team to excel in stakeholder management, ensuring sustained organizational success.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },

]


const Strategic_Stakeholder = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"Strategic Stakeholder Management Program"} subtitle={"Our integrated services prioritize stakeholder engagement, communication, and training. Stakeholder Mastery focuses on strategic communication and relationship-building, COSO Framework Training empowers with vital knowledge, Transparent Communication Excellence refines messaging, and Stakeholder-Centric Training fosters a transparent, collaborative, and successful organizational environment"} buttonText={"Contact Us"}/>
      <SliderLogos />
      <Cursal services={services}/>
    </div>
  );
}

export default Strategic_Stakeholder;
