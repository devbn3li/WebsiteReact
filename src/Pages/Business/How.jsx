import React, { useEffect } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { HoverEffect } from "../../Components/Ui/card-hover-effect";

// Data for purpose-driven internal audit solutions
const purposeDrivenAuditSolutions = [
  {
    title: "Purpose Integration",
    description:
      "Integrating your purpose statement and ethics into the IA charter, strategy, and mission.",
  },
  {
    title: "Risk Identification",
    description:
      "Identifying risks that could undermine the achievement of your purpose through stakeholder engagement and impact analysis.",
  },
  {
    title: "Assurance Activity Prioritization",
    description:
      "Prioritizing assurance activities that help fulfil purpose-critical objectives.",
  },
  {
    title: "Actionable Insights",
    description:
      "Using techniques like root cause analysis and success cause analysis to provide actionable insights.",
  },
  {
    title: "Impact-focused Reporting",
    description:
      "Framing findings and recommendations around impacts on purpose and stakeholders.",
  },
  {
    title: "Persuasive Communication",
    description:
      "Leveraging data visualization and storytelling techniques for persuasive communication.",
  },
  {
    title: "Purpose-related KPIs Reporting",
    description:
      "Reporting regularly on IA contributions and impact on purpose-related KPIs.",
  },
];

const How = () => {
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-[1400px] py-20 px-[5%]">
        <div className="container text-[#002E70] mx-auto">
          <h2 className="mb-4 text-3xl md:text-4xl text-center font-bold md:font-extrabold md:tracking-tight md:leading-none text-[#002E70]">
            Aligning Internal Audit with Corporate Purpose
          </h2>
          <div className="mx-auto pt-12 h-full p-2">
            <HoverEffect items={purposeDrivenAuditSolutions} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
