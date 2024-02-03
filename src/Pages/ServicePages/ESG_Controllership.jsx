import React from 'react';
import { FaAngular } from "react-icons/fa6";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services';
import Footer from '../../Components/Footer'


const services = [
  {
    title: "ESG Controller Role Establishment",
    description: "Our service guides you through the meticulous process of establishing the ESG Controller role.",
    icon: <FaAngular />,
    data: {
      title: "ESG Controller Role Establishment",
      discription: "Our service guides you through the meticulous process of establishing the ESG Controller role. Beginning with crafting the initial job description, we ensure alignment with leading practices and tailor it to your organization's specific needs. By carefully defining the responsibilities and expectations, we lay the foundation for a strategic and impactful ESG leadership position.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Governance Work",
    description: "Navigate the intricacies of ESG governance seamlessly with our comprehensive support.",
    icon: <FaAngular />,
    data: {
      title: "ESG Governance Work",
      discription: "Navigate the intricacies of ESG governance seamlessly with our comprehensive support. From the inception of the ESG Controller role to the implementation of effective governance practices, we provide end-to-end assistance. This includes equipping the role with essential documents and tools, such as an ESG compliance strategy and methodology manual. Our service ensures a well-rounded governance approach that aligns with industry standards and regulatory expectations.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "Leading Practices in ESG Controllership",
    description: "Empower your ESG Controller to embody industry-leading practices with our specialized service. ",
    icon: <FaAngular />,
    data: {
      title: "Leading Practices in ESG Controllership",
      discription: "Empower your ESG Controller to embody industry-leading practices with our specialized service. We go beyond establishing the role, guiding them in understanding and navigating new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. This comprehensive approach ensures your ESG Controller stays at the forefront of evolving industry standards.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
  {
    title: "ESG Initiative Management",
    description: "Our service guarantees a holistic and effective approach to managing environmental, social, and governance initiatives.",
    icon: <FaAngular />,
    data: {
      title: "ESG Initiative Management",
      discription: "Our service guarantees a holistic and effective approach to managing environmental, social, and governance initiatives. From identifying and managing qualitative risks and controls associated with ESG to providing a detailed compliance checklist, we ensure that your organization's initiatives align with best practices. This service is designed to enhance the overall effectiveness and impact of your ESG endeavors.+main differences lie in the focus and scope of the ESG controllership efforts, and we are committed to providing a service that is tailored to your organization's specific needs.",
      LOTTIEanimationData: "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie"
    },
  },
]


const ESG_Controllership = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG Controllership"} subtitle={"Our suite of services specializes in guiding companies through the establishment of the ESG Controller role. From crafting the initial job description to providing the essential documents and tools, we offer comprehensive support for the entire ESG governance work process. Our program empowers the role to embody industry-leading practices in ESG controllership, fostering a comprehensive and effective approach to environmental, social, and governance initiatives."} buttonText={"Contact US"}/>
      <SliderLogos />
      <Cursal services={services}/>
      
    </div>
  );
}

export default ESG_Controllership;
