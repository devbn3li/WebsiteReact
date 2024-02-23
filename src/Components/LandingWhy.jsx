import backgroundImage from "/assets/images/bg/1.jpg";
import { AiFillExperiment } from 'react-icons/ai'; // for innovative platforms
import { GiCaesar } from 'react-icons/gi'; // for GHG emissions related
import { BsGraphUp } from 'react-icons/bs'; // for data management platforms
import { IoAnalyticsSharp } from 'react-icons/io5'; // for data visualization
import { RiRoadMapLine } from 'react-icons/ri'; // for strategy & roadmap
import { FaRegChartBar } from 'react-icons/fa'; // for reporting
import { BiCertification } from 'react-icons/bi'; // for assurance
import { useEffect } from "react";
import Aos from "aos";

const Why = () => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const reasons = [
    {
      title: "ESG Pulse®",
      description:
        "An innovative AI-powered online ESG Diagnostic platform that provides a rapid assessment of your current ESG performance against most common ESG factors",
      icon: <AiFillExperiment />,
      url: "/service/esg-pulse",
    },
    {
      title: "LevelUp O2®",
      description:
        "Accurately calculate your GHG emissions with our AI-powered calculator. Gain insights to reduce your carbon footprint.",
      icon: <GiCaesar />,
      url: "/service/levelup-o2",
    },
    {
      title: "SusTrack AI®",
      description:
        "An AI-powered ESG data management platform that empowers your sustainability journey.",
      icon: <BsGraphUp />,
      url: "/esg-software/sustainability-tracker",
    },
    {
      title: "LevelUp Data Lab",
      description:
        "Our customized dashboards visualize complex ESG data to reveal targeted opportunities for improving your environmental, social and governance performance.",
      icon: <IoAnalyticsSharp />,
      url: "/service/data-lab",
    },
    {
      title: "ESG Readiness",
      description:
        "Our ESG Readiness Assessment can help you to assess how prepared your company is for the future of ESG.",
      icon: <AiFillExperiment />,
      url: "#",
    },
    {
      title: "ESG and Sustainability Strategy & Roadmap",
      description:
        "We provide comprehensive support to enterprise risk management (ERM) functions in building their ESG capabilities.",
      icon: <RiRoadMapLine />,
      url: "/service/esg-strategy",
    },
    {
      title: "ESG Reporting",
      description:
        "Navigating the complex ESG landscape demands expertise. At LevelUp, our experts adeptly handle evolving reporting standards like CSRD, ISSB, TCFD, SASBI, and GRI amid changing expectations.",
      icon: <FaRegChartBar />,
      url: "/service/esg-governance",
    },
    {
      title: "ESG Assurance",
      description:
        "LevelUp assures standardized ESG metrics (ISAE 3000, ISAE 3410), covering emissions, diversity, and pay gaps for consistent non-financial disclosure.",
      icon: <BiCertification />,
      url: "/service/esg-assurance",
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
              <h1 className="mb-4 text-3xl md:text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002E70]  "
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                Why Choosing LevelUp
              </h1>
              <p className="mb-8 text-lg font-normal text-[#002E70]/80   "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                LevelUp empowers businesses with affordable and innovative
                corporate sustainability solutions, expert-led advice,
                assurance, and a knowledge and resources hub.Our AI-powered solutions and scientific approach simplify ESG execution while delivering measurable impact.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center"
              
            >
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px]"
                >
                  <div className="h-full border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6">
                    <div className="flex gap-2">
                      <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] aspect-square w-[40px] h-[40px] ">
                        {reason.icon}
                      </div>
                      <div className="grid place-items-center">
                        {" "}
                        <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70]  ">
                          {reason.title}
                        </h3>
                      </div>
                    </div>
                    <div className="min-h-[100px] grid place-items-center">
                      <p className="mb-8 text-lg font-normal text-[#002E70]  ">
                        {reason.description}
                      </p>
                    </div>
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
