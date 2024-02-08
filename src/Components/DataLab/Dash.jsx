import React from "react";
import img from "../../../public/assets/Dashboard.png";
import PrimaryButton from "../Buttons/PrimaryButton";

const Dash = () => {
  return (
    <section className="hero-section rounded-3xl   py-20">
      <div className="container gap-4 mx-auto px-[5%] flex flex-col lg:flex-row items-center justify-center">
        <div className="md:w-1/2.5 pl-16">
          <img src={img} alt="Hero Image" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 max-md:flex max-md:flex-col mx-auto">
          <p className="mb-8 max-md:text-center text-xl md:text-3xl font-medium text-[#002e70] lg:text-xl">
            We deliver cutting-edge analytics and insights leveraging advanced
            statistical modelling, machine learning algorithms, and natural
            language processing. Our customized dashboards visualize complex ESG
            data to reveal targeted opportunities for improving your
            environmental, social and governance performance.
          </p>
          <PrimaryButton title="Book a consultation" path="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Dash;
