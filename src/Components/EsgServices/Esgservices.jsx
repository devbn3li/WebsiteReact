import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Why = () => {
  const reasons = [
    {
      title: "ESG Diagnostic Assessment",
      description:
        "Our innovative ESG Diagnostics provides a rapid assessment of your current ESG performance against leading practices. The online assessment benchmarks your program and identifies priority actions across governance, environment and social impact. It helps identify and prioritize actions for improvement.",
      icon: <MdCelebration />,
      url: "esg-diagnostic",
    },
    {
      title: "ESG Strategy",
      description:
        "Our team of ESG thought leaders, strategists and practioneers are committed to helping you setup robust ESG policies and provide essential tools to establish or elevate your ESG program, ensuring a comprehensive and effective approach. We specialize in defining purpose-driven strategies for competitive advantage driven by ESG initiatives and uncover areas of risk to protect and prepare your brand for regulations and future requirements.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-assurance",
    },
    {
      title: "Board-Level ESG Consulting",
      description:
        "Our Strategic Sustainability Governance Advisory empowers boards to align long-term goals with ESG principles showcasing leadership in responsible governance. Together, these services equip boards to navigate the complexities of ESG, promoting strategic foresight and responsible decision-making.",
      icon: <MdOutlineReport />,
      url: "/service/esg-governance",
    },
    {
      title: "Strategic Stakeholder Management Program",
      description:
        "At LevelUp, we understand the dynamic landscape of Environmental, Social, and Governance (ESG) can be challenging for many businesses. With the increasing volume of mandatory ESG disclosures, expanding the scope of companies required to report, and changing stakeholder expectations, navigating this landscape requires expertise and precision. We provide comprehensive support for ESG reporting, well-versed in various reporting standards including CSRD, ISSB, IFRS, SASBI, and GRI.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-assurance",
    },
    {
      title: "ESG Compliance Program",
      description:
        "Our integrated services prioritize stakeholder engagement, communication, and training. Stakeholder Mastery focuses on strategic communication and relationship-building, COSO Framework Training empowers with vital knowledge, Transparent Communication Excellence refines messaging, and Stakeholder-Centric Training fosters a transparent, collaborative, and successful organizational environment",
      icon: <MdCelebration />,
      url: "#",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-[#F9FFF5] shadow-none"
    >
      <section className="why max-w-7xl mx-auto pt-28">
        <div className="px-[5%] w-full pb-20">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
              Discover Our Comprehensive ESG Services
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  ">
                Explore our specialized ESG services designed to enhance your
                sustainability journey. From diagnostics to compliance, our
                solutions cover all aspects to guide your business towards ESG
                excellence.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px] ">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      {" "}
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-gray-900 md:text-2xl lg:text-3xl ">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
                      {reason.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
