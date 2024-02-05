import { SiHiveBlockchain } from "react-icons/si";
import HeroSection from "../../Components/Hero_solutions";
import CardData from "../../Components/SolCard/CardData";
import { FaLevelUpAlt, FaRegLightbulb } from "react-icons/fa";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { PiRobotLight, PiStrategy } from "react-icons/pi";
import SolutionHero from "../../Components/Solutions/Hero";
import ESG from "../../../public/assets/images/esg.png";
import DS from "../../../public/assets/images/DS.png";
import AI from "../../../public/assets/images/AI.webp";
import Challenge from "../../Components/LevelUpO2/Challenge";
import Solutions from "../../Components/LevelUpO2/Solutions";
import Benefits from "../../Components/LevelUpO2/Benefits";

const SolutionPage = () => {
  const ESGPulse = [
    {
      title: " ESG Pulse® - the future of ESG performance",
      discription:
        "LevelUp ESG Pulse is an innovative AI-powered cloud-based ESG diagnostic tool that provides a rapid assessment of your current ESG performance against most common ESG factors.",
    },
  ];

  const SustainabilityTracker = [
    {
      title: "SusTrack AI® - Automated ESG Data Management Platform",
      discription:
        "SusTrack AI® makes ESG data collection, management and reporting simple through intuitive AI powered software that works the way you do. Our platform saves you time on data handling, so you can focus on impact creation. ",
    },
  ];

  const DataLab = [
    {
      title: "LevelUp Data Lab ",
      discription:
        "Our team of talented data scientists and AI experts empower companies to accelerate their sustainability journey through data. ",
    },
  ];

  const SustainabilityTrackerCards = [
    {
      title: "Start ",
      description:
        "We help you identify and integrate your key ESG data sources or work with manual and various source of data.",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          1
        </div>
      ),
      url: "#",
    },
    {
      title: "Connect ",
      description:
        "Our software automatically pulls relevant data on demand or on schedule.  ",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          2
        </div>
      ),
      url: "/service/esg-ia-program",
    },
    {
      title: "Track & Report",
      description:
        "Customizable dashboards and reports provide visibility into your ESG performance. ",
      icon: (
        <div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          3
        </div>
      ),
      url: "/service/esg-strategy",
    },
  ];

  const DataLabCards = [
    {
      title: "Data Integration",
      description:
        "We aggregate dispersed ESG data into a unified view for analysis and insights.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Advanced Analytics ",
      description:
        " Our AI models derive actionable intelligence from the data.",
      icon: <PiRobotLight />,
      url: "/service/esg-ia-program",
    },
    {
      title: "Impactful Visualizations",
      description:
        "Interactive dashboards make insights intuitive and accessible. ",
      icon: <PiStrategy />,
      url: "/service/esg-strategy",
    },
    {
      title: "Strategic Recommendations ",
      description:
        "We provide expert guidance to drive strategy and goal setting.",
      icon: <FaRegLightbulb />,
      url: "/service/erm-program",
    },
  ];

  const ESGPulseCards = [
    {
      title: "AI-powered Rapid ESG Assessment",
      description:
        "AI-powered Rapid ESG assessment powered by innovative AI for maximum efficiency and deep insights.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Comprehensive Coverage",
      description:
        "Comprehensive coverage of the most common ESG factors from leading frameworks.",
      icon: <PiRobotLight />,
      url: "/service/esg-ia-program",
    },
    {
      title: "Tailored Assessment Criteria",
      description:
        "Tailored assessment criteria and tools matched to your business size.",
      icon: <PiStrategy />,
      url: "/service/esg-strategy",
    },
    {
      title: "Continuous Innovation",
      description:
        "Continuous innovation and updates based on the latest regulations and research.",
      icon: <FaRegLightbulb />,
      url: "/service/erm-program",
    },
    {
      title: "Actionable Insights",
      description:
        "Actionable insights to target priority areas for improvement.",
      icon: <MdOutlineReport />,
      url: "/service/esg-governance",
    },
    {
      title: "Expert-led Advice",
      description:
        "Expert-led advice and strategic roadmap for effective sustainability implementation.",
      icon: <FaLevelUpAlt />,
      url: "/service/esg-assurance",
    },
    {
      title: "Automated Mapping",
      description:
        "Automated mapping of the responses against multiple industry standards.",
      icon: <SiHiveBlockchain />,
      url: "#",
    },
  ];

  return (
    <div>
      <HeroSection />

      <SolutionHero
        title={ESGPulse[0].title}
        discription={ESGPulse[0].discription}
      />
      <div className="w-full flex -mt-5 justify-center ">
        <img src={ESG} alt="Hero Image" className="w-full h-60  max-w-60" />
      </div>

      <CardData
        title="the key benefits for businesses using LevelUp ESG Pulse"
        reasons={ESGPulseCards}
        Sectiondescription="LevelUp empowers businesses with affordable and innovative
  corporate sustainability solutions, expert-led advice, assurance,
  and a knowledge and resources hub."
      />

<div className="flex justify-center w-full">
<div className="max-w-[1400px]">

<SolutionHero
          title={"LevelUp O2® - AI-powered GHG Emissions Calculator"}
          discription={"An AI-powered SaaS platform for automated, accurate carbon accounting across your entire value chain emissions and offset management."}
        />
<Challenge />
   <Solutions />
   <Benefits />

</div>
</div>


      <div className="bg-[#121212] py-12 md:py-20 text-white">
        <SolutionHero
          title={SustainabilityTracker[0].title}
          discription={SustainabilityTracker[0].discription}
        />

        <div className="w-full flex -mt-5 justify-center ">
          <img src={DS} alt="Hero Image" className="w-full   max-w-96" />
        </div>

        <CardData
          title="Empowering ESG data collection and management for impact"
          reasons={SustainabilityTrackerCards}
          Sectiondescription="SusTrack AI® puts essential insights at your fingertips. Gain clarity on your biggest ESG opportunities and progress towards goals. Focus your time on initiatives that drive real change. "
        />
      </div>

      <div className=" text-black">
        <SolutionHero
          title={DataLab[0].title}
          discription={DataLab[0].discription}
        />
        <div className="w-full flex -mt-5 justify-center ">
          <img src={AI} alt="Hero Image" className="w-full  max-w-96" />
        </div>
        <CardData
          title="Uncover Sustainability Deep Insights with Data Science "
          reasons={DataLabCards}
          Sectiondescription="We deliver cutting-edge analytics and insights leveraging advanced statistical modelling, machine learning algorithms, and natural language processing. Our customized dashboards visualize complex ESG data to reveal targeted opportunities for improving your environmental, social and governance performance. "
        />
      </div>






{/* permenant Fro Production services */}












    </div>
  );
};

export default SolutionPage;
