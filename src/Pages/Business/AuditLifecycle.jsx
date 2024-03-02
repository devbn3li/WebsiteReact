import React from "react";
import img from "/assets/Business/InternalAuditLifecycle.png";
import img2 from "/assets/presentation.png";
import img3 from "/assets/risk.png";
import img4 from "/assets/planning.png";
import img5 from "/assets/Premasset/method.png";
import img6 from "/assets/Premasset/communication.png";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const AuditLifecycle = () => {
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#002E70] mb-4">
          Purpose Driven Internal Audit
        </h1>
        <p className="text-xl text-[#002E70] mb-4">
          Organisations today need internal audit functions that look beyond
          narrow compliance to help advance corporate purpose, ethics, and
          long-term strategic objectives.
        </p>
        <img src={img} alt="Internal audit lifecycle" />
      </div>
      <div>
        <div className="flex max-md:flex-col-reverse justify-center items-center mt-10 bg-[#02c1ab22] p-6 md:p-14 rounded-xl">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002E70] mb-4 tracking-[1px] ">
              Mandate & Strategy
            </h1>
            <p className="mb-6 text-lg before:content-[''] before:w-40 before:h-[6px] before:rounded-md before:bg-[#02c1ab] before:block before:my-14">
              We embed corporate purpose and values into our IA charter and
              mandate, collaborating with stakeholders to define expectations
              and measure impact through key metrics.
            </p>
            <PrimaryButton
              path="/contact"
              title="Learn more"
              classes="max-md:w-full text-lg"
            />
          </div>
          <div className="md:w-1/2 max-md:mb-6">
            <img src={img2} alt="audit-lifecycle" className="w-full" />
          </div>
        </div>
        <div className="flex max-md:flex-col justify-center items-center mt-10 bg-[#4e85d33c] p-6 md:p-14 rounded-xl">
          <div className="md:w-1/2 max-md:mb-6">
            <img
              src={img3}
              alt="purpose-driven-internal-audit"
              className="w-full" 
            />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002E70] mb-4 tracking-[1px] ">
              Risk assessment
            </h1>
            <p className="mb-6 text-lg before:content-[''] before:w-40 before:h-[6px] before:rounded-md before:bg-[#02c1ab] before:block before:my-14">
              We identify purpose-aligned risks, incorporating diverse
              stakeholder perspectives, monitoring external trends, leveraging
              data-driven insights, and conducting ethical and sustainability
              assessments.
            </p>
            <PrimaryButton
              path="/contact"
              title="Learn more"
              classes="max-md:w-full"
            />
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse justify-center items-center mt-10 bg-[#02c1ab22] p-6 md:p-14 rounded-xl">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002E70] mb-4 tracking-[1px] ">
              Audit Plan
            </h1>
            <p className="mb-6 text-lg before:content-[''] before:w-40 before:h-[6px] before:rounded-md before:bg-[#02c1ab] before:block before:my-14">
              Align audits with purpose, integrate sustainability, adopt
              innovation. Model impacts for dynamic planning and resource
              allocation.
            </p>
            <PrimaryButton
              path="/contact"
              title="Learn more"
              classes="max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 max-md:mb-6">
            <img src={img4} alt="audit-lifecycle" className="w-full"  />
          </div>
        </div>
        <div className="flex max-md:flex-col justify-center items-center mt-10 bg-[#4e85d33c] p-6 md:p-14 rounded-xl">
          <div className="md:w-1/2 max-md:mb-6">
            <img
              src={img5}
              alt="methodology-and-execution"
              className="w-[80%] m-auto"
            />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002E70] mb-4 tracking-[1px] ">
              Methodology & Execution
            </h1>
            <p className="mb-6 text-lg before:content-[''] before:w-40 before:h-[6px] before:rounded-md before:bg-[#02c1ab] before:block before:my-14">
              Foster collaboration, design audits beyond compliance, and utilize
              data visualization for impact assessment. Identify success factors
              and pursue continuous improvement.
            </p>
            <PrimaryButton
              path="/contact"
              title="Learn more"
              classes="max-md:w-full"
            />
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse justify-center items-center mt-10 bg-[#02c1ab22] p-6 md:p-14 rounded-xl">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002E70] mb-4 tracking-[1px] ">
              Engagement & Communication
            </h1>
            <p className="mb-6 text-lg before:content-[''] before:w-40 before:h-[6px] before:rounded-md before:bg-[#02c1ab] before:block before:my-14">
              Craft purpose-driven narratives for audit findings, engage
              stakeholders through multi-channel communication, and report IA
              impact quantitatively and qualitatively.
            </p>
            <PrimaryButton
              path="/contact"
              title="Learn more"
              classes="max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 max-md:mb-6 ">
            <img
              src={img6}
              alt="methodology-and-execution"
              className="w-full" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLifecycle;
