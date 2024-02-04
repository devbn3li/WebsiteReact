import { SiHiveBlockchain } from 'react-icons/si';
import HeroSection from '../../Components/Hero_solutions';
import CardData from '../../Components/SolCard/CardData';
import { FaLevelUpAlt, FaRegLightbulb } from 'react-icons/fa';
import { MdCelebration, MdOutlineReport } from 'react-icons/md';
import { PiRobotLight, PiStrategy } from 'react-icons/pi';
import SolutionHero from '../../Components/Solutions/Hero';
import backgroundImage from '../../../public/assets/images/bg/1.jpg';



const Solution = () => {
  
const ESGPulse = [
  {
    title: 'LevelUp ESG Pulse',
    discription: "Sustainability management can be complex, and even more challenging for small and medium enterprises (SMEs) with limited resources and time but with LevelUp it doesn’t have to be."
  },
]

const SustainabilityTracker  = [
  {
    title: 'LevelUp Sustainability Tracker',
    discription: "Sustainability Tracker makes ESG data collection and reporting simple through intuitive software that works the way you do. Our platform saves you time on data handling, so you can focus on impact creation. "
  },
]

const DataLab  = [
  {
    title: 'LevelUp Data Lab ',
    discription: "Our team of talented data scientists and AI experts empower companies to accelerate their sustainability journey through data. "
  },
]








const SustainabilityTrackerCards =[
  {
    title: "Start ",
    description:
      "We help you identify and integrate your key ESG data sources or work with manual and various source of data.",
    icon:(<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
      1
    </div>),
    url: "#",
  },
  {
    title: "Connect ",
    description:
      "Our software automatically pulls relevant data on demand or on schedule.  ",
      icon:(<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
      2
    </div>),
    url: "/service/esg-ia-program",
  },
  {
    title: "Track & Report",
    description:
      "Customizable dashboards and reports provide visibility into your ESG performance. ",
      icon:(<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
      3
    </div>),
    url: "/service/esg-strategy",
  },
 
];

const DataLabCards =[
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
    <div

    >
      <HeroSection />
 
   
    
       <SolutionHero
        title={ESGPulse[0].title}
        discription={ESGPulse[0].discription}
      
       />
    
 <CardData
  title="the key benefits for businesses using LevelUp ESG Pulse"
  reasons={ESGPulseCards}
  Sectiondescription ="LevelUp empowers businesses with affordable and innovative
  corporate sustainability solutions, expert-led advice, assurance,
  and a knowledge and resources hub."

  />

<div className='bg-[#121212] text-white'>
<SolutionHero
        title={SustainabilityTracker[0].title}
        discription={SustainabilityTracker[0].discription}
      
       />
 <CardData
  title="automated ESG data management platform for businesses"
  reasons={SustainabilityTrackerCards}
  Sectiondescription ="Sustainability Tracker puts essential insights at your fingertips. Gain clarity on your biggest ESG opportunities and progress towards goals. Focus your time on initiatives that drive real change. "
  />

</div>



<div  className=' text-black'>
<SolutionHero
        title={DataLab[0].title}
        discription={DataLab[0].discription}
      
       />
 <CardData
  title="the key benefits for businesses using LevelUp ESG Pulse"
  reasons={DataLabCards}
  Sectiondescription ="LevelUp empowers businesses with affordable and innovative
  corporate sustainability solutions, expert-led advice, assurance,
  and a knowledge and resources hub."
  />
</div>









    </div>
  );
};

export default Solution;
