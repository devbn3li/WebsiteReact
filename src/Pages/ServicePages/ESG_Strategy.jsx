import React from 'react';
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services/Hero_Services';
import { FaLeaf } from "react-icons/fa";


const services = [
  {
    title: "ESG Strategy",
    description: "Our ESG strategists' partner with your leadership team to embed sustainability throughout your business.",
    icon: <FaLeaf />,
    data: {
      title: "ESG Strategy",
      discription: "Our ESG strategists' partner with your leadership team to embed sustainability throughout your business. We help set ESG policies, goals, and KPIs aligned to your purpose and material impacts.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Competitive Differentiation",
    description: "We help craft an ESG strategy integrated with business",
    icon: <FaLeaf />,
    data: {
      title: "Competitive Differentiation",
      discription: "We help craft an ESG strategy integrated with business objectives to create long-term value and define competitive differentiation driven by ESG initiatives.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Risk Identification and Mitigation",
    description: "We identify and mitigate ESG-related risks",
    icon: <FaLeaf />,
    data: {
      title: "Risk Identification and Mitigation",
      discription: "We identify and mitigate ESG-related risks, helping your organization to protect its brand and prepare for emerging regulations.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Enhanced Disclosures",
    description: "We assist in enhancing disclosures to meet stakeholder expectations",
    icon: <FaLeaf />,
    data: {
      title: "Enhanced Disclosures",
      discription: "We assist in enhancing disclosures to meet stakeholder expectations, ensuring that your organization is transparent and accountable in its ESG efforts.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
]


const ESG_Strategy = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG Strategy"} subtitle={"Our team of ESG thought leaders, strategists and practioneers are committed to helping you setup robust ESG policies and provide essential tools to establish or elevate your ESG program, ensuring a comprehensive and effective approach. We specialize in defining purpose-driven strategies for competitive advantage driven by ESG initiatives and uncover areas of risk to protect and prepare your brand for regulations and future requirements."}/>
      <SliderLogos />
      <Cursal services={services}/>
    </div>
  );
}

export default ESG_Strategy;
