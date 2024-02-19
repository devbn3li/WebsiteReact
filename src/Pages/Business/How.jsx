import React, { useEffect } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Data for purpose-driven internal audit solutions
const purposeDrivenAuditSolutions = [
  {
    name: "Purpose Integration",
    description: "Integrating your purpose statement and ethics into the IA charter, strategy, and mission.",
  },
  {
    name: "Risk Identification",
    description: "Identifying risks that could undermine the achievement of your purpose through stakeholder engagement and impact analysis.",
  },
  {
    name: "Assurance Activity Prioritization",
    description: "Prioritizing assurance activities that help fulfil purpose-critical objectives.",
  },
  {
    name: "Actionable Insights",
    description: "Using techniques like root cause analysis and success cause analysis to provide actionable insights.",
  },
  {
    name: "Impact-focused Reporting",
    description: "Framing findings and recommendations around impacts on purpose and stakeholders.",
  },
  {
    name: "Persuasive Communication",
    description: "Leveraging data visualization and storytelling techniques for persuasive communication.",
  },
  {
    name: "Purpose-related KPIs Reporting",
    description: "Reporting regularly on IA contributions and impact on purpose-related KPIs.",
  },
];


const How = () => {
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-[1400px] py-20 px-[5%]">
        <div className="container text-[#002E70] mx-auto">
          <h2 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-[#002E70]">
            Aligning Internal Audit with Corporate Purpose
          </h2>
          <div className="mx-auto pt-12 h-full p-2">
            <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 ">
              {purposeDrivenAuditSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#02c2ab]/30 hover:bg-[#02c2ab] duration-500 cursor-pointer hover:scale-105 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-extrabold text-[#112b65] mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-lg text-[#112b65]">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <PrimaryButton path="/contact" title="Learn More" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
