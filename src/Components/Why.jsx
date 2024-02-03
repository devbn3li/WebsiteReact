import { FaRegLightbulb } from "react-icons/fa";
import { MdCelebration, MdOutlineReport, MdLeaderboard } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { PiRobotLight, PiStrategy } from "react-icons/pi";
import { SiHiveBlockchain } from "react-icons/si";

const Why = () => {
  const reasons = [
    {
      title: "ESG Readiness",
      description:
        "Our ESG Readiness Assessment can help you to assess how prepared your company is for the future of ESG.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "ESG IA program",
      description:
        "Our ESG IA program is designed to help internal audit functions build their ESG capabilities.",
      icon: <PiRobotLight />,
      url: "/service/esg-ia-program",
    },
    {
      title: "ESG and Sustainability Strategy & Roadmap",
      description:
        "We provide comprehensive support to enterprise risk management (ERM) functions in building their ESG capabilities. ",
      icon: <PiStrategy />,
      url: "/service/esg-strategy",
    },
    {
      title: "ESG in ERM Program",
      description:
        "ESG strategies are crucial for businesses due to regulations, stakeholder pressure, and competitiveness.",
      icon: <FaRegLightbulb />,
      url: "/service/erm-program",
    },
    {
      title: "ESG Reporting",
      description:
        "Navigating the complex ESG landscape demands expertise. At LevelUp, our experts adeptly handle evolving reporting standards like CSRD, ISSB, TCFD, SASBI, and GRI amid changing expectations.",
      icon: <MdOutlineReport />,
      url: "/service/esg-governance",
    },
    {
      title: "ESG Assurance",
      description:
        "LevelUp assures standardized ESG metrics (ISAE 3000, ISAE 3410), covering emissions, diversity, and pay gaps for consistent non-financial disclosure.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-assurance",
    },
    {
      title: "Sustainable Supply Chain Consultants",
      description:
        "Implementing tools for supply chain and data collection, our consultants identify opportunities and climate risks.",
      icon: <SiHiveBlockchain />,
      url: "#",
    },
    {
      title: "Board-Level ESG Consulting",
      description:
        "Our Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles showcasing leadership in responsible governance.",
      icon: <MdLeaderboard />,
      url: "/service/board-level",
    },
  ];

  return (
    <section className="why max-w-7xl mx-auto pt-28">
      <div className="px-[5%] w-full pb-20">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col max-w-[628px] gap-3">
            <h2 className="text-5xl font-bold">Why Choosing LevelUp</h2>
            <p>
              LevelUp empowers businesses to address the complexity and costly
              sustainable transformation by providing affordable yet innovative
              corporate sustainability solutions, expert-led advice, assurance,
              knowledge and resources hub.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {reasons.map((reason, index) => (
              <a href={reason.url} key={index} className="reason-link transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-md	p-4">
                <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px] ">
                  {reason.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                <p>{reason.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
