import SolutionHero from "../../Components/Solutions/Hero";
import CardData from "../../Components/SolCard/CardData";
import DS from "../../../public/assets/images/DS.png";
import Challenge from "../../Components/LevelUpO2/Challenge";
import Solutions from "../../Components/LevelUpO2/Solutions";
import Benefits from "../../Components/LevelUpO2/Benefits";
import HeroSoftware from "../../Components/HeroSoftware";
import ESGSoftwareSection from "../../Components/ESGSoftwareSection";

function ESGSoftware() {
  const SustainabilityTracker = [
    {
      title: "SusTrack AI® - Automated ESG Data Management Platform",
      discription:
        "SusTrack AI® makes ESG data collection, management and reporting simple through intuitive AI powered software that works the way you do. Our platform saves you time on data handling, so you can focus on impact creation. ",
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

  return (
   <div >
     <div className="">
      <HeroSoftware />
      <ESGSoftwareSection />
      <div className="flex justify-center w-full">
        <div className="max-w-[1400px] mt-20">
          <SolutionHero
            title={"LevelUp O2® - AI-powered GHG Emissions Calculator"}
            discription={
              "An AI-powered SaaS platform for automated, accurate carbon accounting across your entire value chain emissions and offset management."
            }
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
    </div>
   </div>
  );
}

export default ESGSoftware;
