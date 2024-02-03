import { FaLeaf } from "react-icons/fa";
import SliderLogos from "../../Components/SliderLogos/SliderLogos";
import Cursal from "../../Components/Cursal/Cursal";
import Hero_Services from "../../Components/Hero_Services";

const services = [
  {
    title: "ESG Governance Program",
    description:
      "We provide tailored services and essential tools to help establish, structure, streamline, or enhance your ESG initiatives.",
    icon: <FaLeaf />,
    data: {
      title: "ESG Governance Program",
      discription:
        "We provide tailored services and essential tools to help establish, structure, streamline, or enhance your ESG initiatives. This includes understanding and navigating new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Gap Analysis",
    description:
      "Our comprehensive Gap Analysis service involves a meticulous examination of your current reporting practices in comparison to both regulatory requirements and industry-leading practices.",
    icon: <FaLeaf />,
    data: {
      title: "Gap Analysis",
      discription:
        "Our comprehensive Gap Analysis service involves a meticulous examination of your current reporting practices in comparison to both regulatory requirements and industry-leading practices. By pinpointing areas of misalignment or improvement, we ensure that your reporting aligns seamlessly with the latest standards. This strategic evaluation serves as a foundation for enhancing the transparency and efficacy of your reporting framework.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Data Collection, Measurement, and Analysis",
    description:
      " Navigating the intricacies of ESG reporting requires a robust approach to data.",
    icon: <FaLeaf />,
    data: {
      title: "Data Collection, Measurement, and Analysis",
      discription:
        "Navigating the intricacies of ESG reporting requires a robust approach to data. Our service facilitates data collection, measurement, and analysis for both quantitative and qualitative disclosures. We go beyond numerical metrics, identifying and managing qualitative risks and controls associated with Environmental, Social, and Governance factors. This ensures that your reporting not only meets quantitative benchmarks but also provides a nuanced understanding of your organization's ESG performance.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Governance around Reporting",
    description:
      "Establishing effective governance around ESG reporting is pivotal for sustained excellence.",
    icon: <FaAngular />,
    data: {
      title: "Governance around Reporting",
      discription:
        "Establishing effective governance around ESG reporting is pivotal for sustained excellence. We guide you in setting up robust governance structures, ensuring that reporting processes are not only compliant but also streamlined for efficiency. By instilling leading practices and clear accountability mechanisms, we empower your organization to uphold the highest standards in ESG reporting, fostering transparency and credibility with stakeholders.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
  {
    title: "Internal Control for ESG Reporting",
    description: "We will assist in establishing robust internal controls, fortifying the reliability of your ESG disclosures.",
    icon: <FaAngular />,
    data: {
      title: "Internal Control for ESG Reporting",
      discription: "We will assist in establishing robust internal controls, fortifying the reliability of your ESG disclosures. From risk management to process optimization, we guide your organization in preparing a resilient internal control framework, instilling confidence in the accuracy and integrity of your ESG reporting practices in line with the COSO Framework.",
      LOTTIEanimationData:
        "http://dotlottieio.s3-website-us-east-1.amazonaws.com/sample_files/animation-external-image.lottie",
    },
  },
];

const ESG_Governance = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <Hero_Services
        title={"ESG Governance & Reporting Excellence"}
        subtitle={
          "At LevelUp, we understand the dynamic landscape of Environmental, Social, and Governance (ESG) can be challenging for many businesses. With the increasing volume of mandatory ESG disclosures, expanding the scope of companies required to report, and changing stakeholder expectations, navigating this landscape requires expertise and precision. We provide comprehensive support for ESG reporting, well-versed in various reporting standards including CSRD, ISSB, IFRS, SASBI, and GRI."
        }
        buttonText={"Contact Us"}
      />
      <SliderLogos />
      <Cursal services={services} />
    </div>
  );
};

export default ESG_Governance;
