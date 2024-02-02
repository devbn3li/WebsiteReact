import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Why = () => {
  // Define an array of objects representing each item
  const reasons = [
    {
      title: "ESG Readiness",
      description:
        "Our ESG Readiness Assessment can help you to assess how prepared your company is for the future of ESG and where you stand relative to peers.",
    },
    {
      title: "ESG and Sustainability Strategy & Roadmap",
      description:
        "ESG strategies are crucial for businesses due to regulations, stakeholder pressure, and competitiveness. All businesses can create effective sustainability plans.",
    },
    {
      title: "Business Sustainability Strategists",
      description:
        "Strategists design a purpose-driven ESG program for long-term value and competitive advantage. Identifying risks, they safeguard brands for compliance and future needs.",
    },
    {
      title: "Execution Support: ESG Policies & Practices",
      description:
        "Establish policies for employees, customers, and suppliers. Infuse responsible practices into product design and features, integrating ESG principles into your business model.",
    },
    {
      title: "ESG Reporting",
      description:
        "Navigating the complex ESG landscape demands expertise. At LevelUp, our experts adeptly handle evolving reporting standards like CSRD, ISSB, TCFD, SASBI, and GRI amid changing expectations.",
    },
    {
      title: "ESG Assurance",
      description:
        "LevelUp assures standardized ESG metrics (ISAE 3000, ISAE 3410), covering emissions, diversity, and pay gaps for consistent non-financial disclosure. We adjust assurance scope with evolving reporting.",
    },
    {
      title: "Fractional Chief Sustainability Officers",
      description:
        "Former CSOs and Sustainability Directors, seasoned in industry best practices, bring strategic vision. They align leadership and execute ESG strategies, enhancing overall sustainability.",
    },
    {
      title: "Sustainable Supply Chain Consultants",
      description:
        "Implementing tools for supply chain and data collection, our consultants identify opportunities and climate risks. They deploy ESG strategy throughout your supply chain, engaging all tiers in sustainable practices.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Mapping reasons */}
            {reasons.map((reason, index) => (
              <div className="" key={index}>
                <div className="mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px]">
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                <p className="">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;