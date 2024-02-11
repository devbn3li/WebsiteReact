import React from "react";
import LandingSection from "../../Components/DataLab/landing"
import Why from "../../Components/DataLab/Why";
import Call from "../../Components/DataLab/Call";
import How from "../../Components/DataLab/How";
import Dashboard from "../../Components/Dashboard";
import img from "/assets/Dashboard.png";
import Qoute from "../../Components/DataLab/Qoute";

function DataLab() {
  const dynamicContent = `We deliver cutting-edge analytics and insights leveraging advanced
  statistical modelling, machine learning algorithms, and natural
  language processing. Our customized dashboards visualize complex ESG
  data to reveal targeted opportunities for improving your
  environmental, social and governance performance.`;


  const dynamicQuote = `Let our data science reveal what matters most to your stakeholders and
  growth. Start your sustainability journey on the right path today.`;

  return (
    <div>
      <LandingSection />
      <Dashboard
        imgSrc={img}
        content={dynamicContent}
        buttonTitle="Book a consultation"
        buttonPath="/contact"
      />
      <Why />
      <Qoute
        quoteText={dynamicQuote}
        buttonTitle="Book a consultation"
        buttonPath="/contact"
      />
      <Call />
      <How />
    </div>
  );
}

export default DataLab;
