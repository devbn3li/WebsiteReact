import React from "react";
import Qoute from "../../Components/DataLab/Qoute";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Premasset/Dash.png";
import How from "../../Components/How";
import Call from "../../Components/Call";
import DynamicLandingHero from "../../Components/DynamicLandingHero";

const dynamicContent = `Our suite of services specializes in guiding companies through the establishment of the ESG Controller role. From crafting the initial job description to providing the essential documents and tools, we offer comprehensive support for the entire ESG governance work process. Our program empowers the role to embody industry-leading practices in ESG controllership, fostering a comprehensive and effective approach to environmental, social, and governance initiatives.`;
const dynamicSolutions = [
  {
    name: "ESG Controller Role Establishment",
    description:
      "Our service guides you through the meticulous process of establishing the ESG Controller role. Beginning with crafting the initial job description, we ensure alignment with leading practices and tailor it to your organization's specific needs. By carefully defining the responsibilities and expectations, we lay the foundation for a strategic and impactful ESG leadership position.",
  },
  {
    name: "ESG Governance Work",
    description:
      "Navigate the intricacies of ESG governance seamlessly with our comprehensive support. From the inception of the ESG Controller role to the implementation of effective governance practices, we provide end-to-end assistance. This includes equipping the role with essential documents and tools, such as an ESG compliance strategy and methodology manual. Our service ensures a well-rounded governance approach that aligns with industry standards and regulatory expectations.",
  },
  {
    name: "Leading Practices in ESG Controllership",
    description:
      "Empower your ESG Controller to embody industry-leading practices with our specialized service. We go beyond establishing the role, guiding them in understanding and navigating new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. This comprehensive approach ensures your ESG Controller stays at the forefront of evolving industry standards.",
  },
  {
    name: "ESG Initiative Management",
    description:
      "Our service guarantees a holistic and effective approach to managing environmental, social, and governance initiatives. From identifying and managing qualitative risks and controls associated with ESG to providing a detailed compliance checklist, we ensure that your organization's initiatives align with best practices. This service is designed to enhance the overall effectiveness and impact of your ESG endeavors.",
  },
];

const dynamicQuote = `We understand that the main differences lie in the focus and scope of the ESG controllership efforts, and we are committed to providing a service that is tailored to your organization's specific needs.`;

const ESGControllershipPage = () => {
  return (
    <div className="pt-[4.5rem] flex flex-col items-center">
      <DynamicLandingHero
        title="ESG Controllership"
        subtitle="Our ESG Controllership program is designed to help companies establish a robust ESG governance structure. We offer a strategic approach to ESG controllership, ensuring that your organization is prepared for the evolving ESG landscape."
        button1={{ path: "/about", label: "About Us" }}
        button2={{ path: "/contact", label: "Make an Impact, Together" }}
      />
      <Dashboard
        imgSrc={img}
        content={dynamicContent}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <How
        solutions={dynamicSolutions}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Call
        imgSrc={img}
        title={dynamicTitle}
        paragraph={dynamicSubtitle}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Contact Us"
        buttonPath="/contact"
      />
    </div>
  );
};

export default ESGControllershipPage;
