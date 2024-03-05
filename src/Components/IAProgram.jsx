import React from "react";
import plan from "../../public/assets/plan.png";
import report from "../../public/assets/report.png";
import growth from "../../public/assets/growth.png";

function IAProgram() {
  const GOVERNANCE = [
    {
      id: 1,
      subtitle: "Internal Audit Strategy",
      description:
        "Document outlining the goals, scope, and approach of the Internal Audit (IA) program.",
    },
    {
      id: 2,
      subtitle: "Internal Audit Manual",
      description:
        "Document providing guidance and procedures for conducting ESG audits.",
    },
    {
      id: 3,
      subtitle: "Training and Professional Development Programs",
      description: "Audit team to enhance their knowledge around ESG Topics.",
    },
  ];
  const PLANNING = [
    {
      id: 1,
      subtitle: "Risk Assessment",
      description:
        "Identifying and evaluating ESG risks and prioritize audit activities to cover critical risks.",
    },
    {
      id: 2,
      subtitle: "Planning and Execution",
      description:
        "Document providing guidance and procedures for conducting ESG audits.",
    },
    {
      id: 3,
      subtitle: " Audit Checklist",
      description:
        "Audit checklist for assessing key areas, evaluating ESG criteria, and reviewing pertinent documentation during the audit process.",
    },
  ];
  const EXECUTION = [
    {
      id: 1,
      subtitle: "Audit Testing and Sampling",
      description: "Procedures for conducting audit testing and sampling.",
    },
    {
      id: 2,
      subtitle: "Findings and Recommendations",
      description:
        "Document of audit results and suggesting actions to address identified issues.",
    },
    {
      id: 3,
      subtitle: "Follow-up",
      description:
        "Track and monitor the implementation of corrective actions in response to audit findings.",
    },
  ];

  return (
    <section className="py-[4rem] max-w-[1400px] mx-auto">
      <div className="w-[80%] mx-auto mb-5">
        <h1 className="uppercase text-[#002E70] text-3xl md:text-5xl font-semibold md:font-bold text-center">
          key components of IA Audit program
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 ">
            <div className="">
              <div className="w-[90%] h-[280px] xl:h-[330px]">
                <img src={growth} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[#002E70] uppercase text-2xl font-[600] tracking-[.5px] mb-5 mt-10 lg:mt-0">
                governance
              </h2>
              {GOVERNANCE.map((item, id) => {
                return (
                  <div className="mb-5 h-[130px] xl:w-[300px]" key={id}>
                    <h2 className="font-bold tracking-[.5px] text-lg leading-[1.5]">
                      {item.subtitle}
                    </h2>
                    <div className="w-[200px] h-[2px] bg-[#02BEA9] mt-2"></div>
                    <p className="tracking-[.5px] leading-[1.5] mt-3 text-[#002E70]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="w-[90%] h-[280px] xl:h-[330px]">
                <img src={plan} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[#002E70] uppercase text-2xl font-[600] tracking-[.5px] mb-5 mt-10 lg:mt-0">
                planning
              </h2>
              {PLANNING.map((item, id) => {
                return (
                  <div className="mb-5 h-[130px] xl:w-[300px]" key={id}>
                    <h2 className="font-bold tracking-[.5px] text-lg leading-[1.5]">
                      {item.subtitle}
                    </h2>
                    <div className="w-[200px] h-[2px] bg-[#02BEA9] mt-2"></div>
                    <p className="tracking-[.5px] leading-[1.5] mt-3 text-[#002E70]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="w-[90%] h-[280px] xl:h-[330px]">
                <img src={report} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[#002E70] uppercase text-2xl font-[600] tracking-[.5px] mb-5 mt-10 lg:mt-0">
                Execution & reporting
              </h2>
              {EXECUTION.map((item, id) => {
                return (
                  <div className="mb-5 h-[130px] xl:w-[300px]" key={id}>
                    <h2 className="font-bold tracking-[.5px] text-lg leading-[1.5]">
                      {item.subtitle}
                    </h2>
                    <div className="w-[200px] h-[2px] bg-[#02BEA9] mt-2"></div>
                    <p className="tracking-[.5px] leading-[1.5] mt-3 text-[#002E70]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IAProgram;
