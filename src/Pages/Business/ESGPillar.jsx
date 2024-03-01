import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaUsers } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";

function ESGPillar() {
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
        <h1 className="text-center mt-24 font-bold text-5xl text-[#002E70] tracking-[.5px]">
          ESG Internal Audit
        </h1>
        <p className="text-center text-xl text-[#002E70] mt-4 px-[5%] leading-[1.6] tracking-[.5px]">
          As sustainability and ESG factors become integral to business strategy
          and operations, internal audit (IA) plays a crucial role in providing
          objective, risk-based assurance, advice, insight, and foresight on ESG
          program effectiveness and integration.
        </p>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-gray-100 text-3xl text-[#002E70] font-bold h-[270px] lg:h-[350px] text-left px-4 flex items-center justify-start -mt-px">
                Data Collection
              </p>
              <p className="text-[#002E70] text-3xl font-bold h-[270px] lg:h-[350px] text-left px-4 flex items-center justify-start">
                Compliance and Reporting
              </p>
              <p className="bg-gray-100 text-3xl font-bold text-[#002E70] h-[270px] lg:h-[350px] text-left px-4 flex items-center justify-start">
                Risk Identification
              </p>
              <p className="text-[#002E70] text-3xl font-bold h-[270px] lg:h-[350px] text-left px-4 flex items-center justify-start">
                ESG IA&apos;s Unique Emphasis
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-left h-48 flex flex-col items-center justify-center">
                <FaLeaf className="text-[#002E70] text-5xl" />
                <h2 className="text-5xl lg:text-4xl text-[#002E70] font-medium leading-none mb-4 mt-2">
                  Environment
                </h2>
              </div>
              <p className="bg-gray-100 h-[270px] lg:h-[350px] text-gray-600 py-4 text-left px-2 flex gap-2 items-center -mt-px justify-center border-t border-gray-300">
                Gather data on environmental impact such as carbon emissions,
                energy usage, waste generation, and resource consumption.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>{" "}
              </p>
              <p className="text-gray-600 h-[270px] lg:h-[350px] text-left py-4 px-2 flex gap-2 items-center justify-center">
                Assess compliance with environmental regulations and industry
                standards. Review and analyse environmental reporting, including
                greenhouse gas emissions disclosures and sustainability reports.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 h-[270px] lg:h-[350px] text-gray-600 text-left py-4 px-2 flex gap-2 items-center justify-center">
                Identifying ESG environmental risks and challenges including
                regulatory compliance, climate change impacts, pollution, supply
                chain vulnerabilities, and reputation risks, requiring proactive
                risk assessments and environmenta management strategies.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="py-4 px-2 h-[270px] lg:h-[350px] text-gray-600 text-left leading-relaxed flex gap-2 items-center justify-center">
                In Internal audit for ESG, a distinct environmental focus
                includes &quot;Carbon Footprint and Emissions Management,&quot;
                addressing the organization&apos;S greenhouse gas emissions and
                environmental impact, a concern not directly mirrored in the
                social and governance aspects.
                <span className="w-5 h-5 inline-flex items-center gap-2 justify-center bg-[#ff0000] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
              </p>
            </div>
            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg  relative">
              <div className="px-2 text-left h-48 flex flex-col items-center justify-center">
                <FaUsers className="text-[#002E70] text-5xl" />
                <h2 className="text-5xl lg:text-4xl text-[#002E70] font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  Social
                </h2>
              </div>

              <p className="bg-gray-100 h-[270px] lg:h-[350px] text-gray-600 py-4 px-2 text-left  flex gap-2 items-center -mt-px justify-center border-t border-gray-300">
                Data includes diversity metrics, employee well-being indicators,
                labor practices compliance, training programs, employee turnover
                rates, and information on employee rights and grievances.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 h-[270px] lg:h-[350px] text-left py-4 px-2 flex gap-2 items-center justify-center">
                Adherence to labor laws, diversity metrics, health and safety
                regulations, human rights assessments, community engagement
                initiatives, product and service impacts, ethical business
                conduct etc.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 h-[270px] lg:h-[350px] text-gray-600 text-left flex py-4 px-2 gap-2 items-center justify-center">
                Identifying social risks in ESG involves recognizing challenges
                like labor practices, diversity, employee health, community
                relations, product impacts, data privacy etc. requiring thorough
                risk assessments for responsible business practices.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className=" text-gray-600 gap-2 h-[270px] lg:h-[350px] py-4 px-2 text-left leading-relaxed flex items-center justify-center">
                In internal audit for ESG, a distinct social focus involves
                &quot;Workforce Development and Employee Well-being,&quot;
                assessing programs related to employee training and engagement,
                a concern not directly mirrored in the environmental or
                governance aspects.
                <span className="w-5 h-5 inline-flex items-center justify-center font-extrabold bg-[#ff0000] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
              </p>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-left h-48 flex flex-col items-center justify-center">
                <RiGovernmentFill className="text-[#002E70] text-5xl" />
                <h2 className="text-5xl lg:text-4xl text-[#002E70] font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  Governance
                </h2>
              </div>
              <p className="bg-gray-100 gap-2 py-4 h-[270px] lg:h-[350px] text-gray-600 text-left px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                Data includes information on board composition and independence,
                executive compensation structures, risk management processes,
                cybersecurity measures, anti-corruption efforts, and stakeholder
                engagement mechanisms.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 gap-2 h-[270px] lg:h-[350px] py-4 px-2 text-left flex items-center justify-center">
                Ensuring adherence to legal and regulatory frameworks,
                transparent reporting on board composition and independence,
                executive compensation structures, robust risk management
                processes etc.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 gap-2 h-[270px] lg:h-[350px] py-4 px-2 text-gray-600 text-left  flex items-center justify-center">
                Identifying governance risks in ESG involves recognizing
                challenges in board composition, executive compensation, risk
                management, cybersecurity, shareholder activism, legal changes
                etc. necessitating thorough risk assessments for effective
                governance.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#02c2ab] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </p>
              <p className=" text-gray-600 h-[270px] lg:h-[350px] gap-2 py-4 px-2 text-left leading-relaxed flex items-center justify-center">
                In internal audit for ESG, a governance-specific focus is
                &quot;Compliance and Ethics Oversight,&quot; evaluating
                structures and practices for adherence to regulations and
                ethical standards, without direct parallels in the environmental
                or social aspects.
                <span className="w-5 h-5 inline-flex items-center justify-center bg-[#ff0000] text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ESGPillar;
