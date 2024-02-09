import React from 'react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import CardData from "../../Components/SolCard/CardData";
import Futures from '../../Components/PulsePageCompontent/Futures';
import hero from "../../../public/assets/images/hero.jpg";
import header_mask from "../../../public/assets/images/Header-Mask.svg";
import DS from "../../../public/assets/images/DS.png";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";

// Replace with your actual image paths or URLs
const demoImageUrl = "https://via.placeholder.com/300x350";


const PulsePage = () => {
  const headerTitle = "Empower Your Sustainability Journey with LevelUp ESG Pulse";
  const headerDescription = "Accelerate your business growth and sustainability impact with AI-powered ESG assessments";

  const keyBenifits = [
    "AI-powered Assessments",
    "Industry Agnostic",
    "Benchmarking & Insights",
    "Visual icons or small graphics representing each feature",
  ]

  const reasons = [
    {
      "title": "Quick and Efficient ESG Assessment",
      "description": "AI-powered rapid ESG assessment for maximum efficiency and deep insights.",
      "icon": <MdCelebration />,
      "url": "#"
    },
    {
      "title": "Comprehensive ESG Coverage",
      "description": "Comprehensive coverage of the most common ESG factors from leading frameworks.",
      "icon": <MdOutlineReport />,
      "url": "#"
    },
    {
      "title": "Customized for Your Business",
      "description": "Tailored assessment criteria and tools matched to your business size.",
      "icon": <FaLevelUpAlt />,
      "url": "#"
    },
    {
      "title": "Continuous Innovation",
      "description": "Continuous innovation and updates based on the latest regulations and research.",
      "icon": <PiStrategy />,
      "url": "#"
    },
    {
      "title": "Actionable Insights",
      "description": "Actionable insights to target priority areas for improvement.",
      "icon": <MdCelebration />,
      "url": "#"
    },
    {
      "title": "Expert-led Advice",
      "description": "Expert-led advice and strategic roadmap for effective sustainability implementation.",
      "icon": <MdCelebration />,
      "url": "#"
    },
    {
      "title": "Automated Mapping",
      "description": "Automated mapping of the responses against multiple industry standards.",
      "icon": <MdCelebration />,
      "url": "#"
    }
  ];

  const howToUse = [
    {
      "title": "Complete the Online Questionnaire",
      "description": "Start by filling out our comprehensive online questionnaire to assess your current ESG performance.",
      "icon": (<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">1</div>),
      "url": "#"
    },
    {
      "title": "Receive AI-powered Insights",
      "description": "Our AI analyzes your responses to provide a detailed appraisal of your ESG program against global standards.",
      "icon": (<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">2</div>),
      "url": "#"
    },
    {
      "title": "Develop Your Sustainability Roadmap",
      "description": "Based on the analysis, receive a tailored roadmap with priority actions to enhance your sustainability initiatives.",
      "icon": (<div className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">3</div>),
      "url": "#"
    }
  ];

  return (
    <div className='flex justify-center items-center flex-col'>
      {/* Start header ============================================= */}
      <header className='mt-[4.5rem] w-full max-w-[1400px] px-[5%] pt-28 pb-8 flex justify-between'>
        <div className="w-[45%] gap-6 flex flex-col justify-center max-[570px]:w-full">
          <h1 className="mb-4 text-4xl text-[#002E70] max-w-[1000px] font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ">
            {headerTitle}
          </h1>
          <p className="mb-8 text-lg font-normal text-[#002E70] lg:text-xl  ">

            {headerDescription}</p>
          <div className='font-bold gap-4 flex flex-wrap max-[570px]:flex-col'>
            <PrimaryButton path="/waiting-page" title='Start Your Free Assessment' classes='px-6 py-3' />
          </div>
        </div>
        <div className="relative rounded-r-3xl w-1/2 overflow-hidden max-[991px]:rounded-none max-[991px]:mr-[-5%] max-[570px]:hidden">
          <img src={hero} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='h-full' />
          <img src={header_mask} className='absolute top-0 left-0 h-full' />
        </div>
      </header>
      {/* End header ============================================= */}

      {/* Start Futures ============================================ */}
      <Futures />
      {/* End Futures ============================================ */}


      {/* Start why section ======================================== */}
      <div
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}
        className="w-full bg-[#F9FFF5] shadow-none"
      >
        <section

          className='why max-w-7xl mx-auto pt-28'>
          <div className='px-[5%] w-full pb-20'>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col max-w-[90.25rem] gap-3'>
                <h1 className='mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl '>
                  Why Choose LevelUp ESG Pulse?
                </h1>
                <p className='mb-8 text-lg font-normal text-[#002E70]/80 lg:text-xl  '>

                  LevelUp empowers businesses with affordable and innovative
                  corporate sustainability solutions, expert-led advice, assurance,
                  and a knowledge and resources hub.Our AI engines, service offerings, and data science simplify ESG execution, driving measurable impact.
                </p>
                <div className=''>
                  {" "}
                  <div className='w-full border-[#02c2ab]  border-b-2     mb-10'></div>
                </div>
              </div>

              <div className='flex flex-wrap gap-4 justify-center'>
                {reasons.map((reason, index) => (
                  <a
                    href={reason.url}
                    key={index}

                    className='reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6'>
                    <div className="flex gap-2">
                      <div className='reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] aspect-square w-[40px] h-[40px] '>
                        {reason.icon}
                      </div>
                      <div className="grid place-items-center">
                        {" "}
                        <h3 className='mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70] md:text-2xl lg:text-3xl '>{reason.title}</h3>
                      </div>
                    </div>
                    <div className="min-h-[100px] grid place-items-center">
                      <p className="mb-8 text-lg font-normal text-[#002E70] lg:text-xl ">{reason.description}</p>

                    </div>

                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End why section ======================================== */}

      {/* Start about section ====================================== */}
      <div className="bg-[#121212] py-12 md:py-20 text-white w-full">
        <div className='flex flex-col justify-center items-center'>
          <div className="flex -mt-5 justify-center items-center px-[5%]">
            <img src={DS} alt="Hero Image" className="w-full   max-w-96" />
          </div>
          <div className='flex flex-col w-[60%]'>
            <h1 className="text-[5rem] font-bold text-center w-full my-12">Key Features</h1>
            <div className='flex flex-wrap items-center justify-center w-full gap-4'>
              {keyBenifits.map((text, index) => (
                <span className='text-[2rem] h-16 font-bold p-4 py-2 text-nowrap box-border hover:bg-[#02c2ab]/50 transition-all hover:scale-95 duration-500 cursor-pointer border-2 hover:border-4 border-dashed hover:border-solid hover:border-[#02c2ab] rounded-lg ' key={index} >{text}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full mt-28'>
          <div className="w-full flex -mt-5 justify-center ">
            <img src={DS} alt="Hero Image" className="w-full max-w-96" />
          </div>

          <CardData
            title="How to use"
            reasons={howToUse}
            Sectiondescription='Discover how our streamlined process equips you with the insights and actions needed to elevate your environmental, social, and governance (ESG) performance in just three simple steps.'
          />
        </div>
      </div>
      {/* End about section ====================================== */}


      {/* CTA Card */}
      <div className='w-[90%] max-w-[1400px] rounded-3xl flex max-[1000px]:flex-col justify-center gap-28 p-24 max-[500px]:px-6 py-6 items-center bg-[#02c2ab] box-border overflow-hidden my-16'>
        <div className='max-w-[300px] max-[340px]:hidden max-h-[350px] rounded-t-full overflow-hidden'><img src={demoImageUrl} alt="demo" className='min-w-full min-h-full object-cover' /></div>
        <div className='max-[1000px]:w-full w-1/2 max-[600px]:px-0 flex flex-col justify-center items-start box-border text-[#121212] font-semibold px-[5%]'>
          <h1 className="text-4xl w-full my-12 font-bold max-[500px]:text-2xl">Join the growing list of companies commited to
            <span className='relative inline-block w-[250px] mx-2 max-[500px]:w-[160px] max-[500px]:mx-0'>
              <span className="absolute left-0 w-full text-center top-1/2 -translate-y-[80%] text-white z-30">going green</span>
              <svg className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[75%] w-full h-12 max-[500px]:h-9 z-10' preserveAspectRatio="none" viewBox="0 0 272 53" fill="#121212" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M262.166 49.9975C240.295 47.3283 218.189 49.3302 196.112 49.5193C166.204 49.7695 136.248 48.4304 106.397 50.9518C86.0238 52.6679 65.6711 52.6623 45.3073 52.9937C38.5203 53.1049 31.6975 51.7136 24.9317 50.6092C19.8161 49.7728 14.6392 51.1152 9.57635 49.5193C5.32327 48.1846 1.77705 10.7115 0.260402 4.80465C-0.480485 1.92298 0.389696 0.504943 2.48731 0.0756401C3.2265 -0.0700561 4.00822 0.02448 4.75931 0.11123C27.0055 2.66926 49.3222 2.21771 71.6084 2.43681C90.6622 2.62254 109.724 2.24774 128.778 1.71166C152.026 1.05992 175.278 0.527187 198.529 0.821916C212.045 0.989856 225.562 2.04866 239.068 1.89073C248.018 1.77951 256.895 3.76365 265.838 2.85833C266.409 2.8087 266.983 2.8558 267.545 2.99846C270.049 3.60127 272.618 41.7106 271.867 43.8938C271.054 46.245 270.294 49.5315 267.508 49.695C265.794 49.794 264.082 49.893 262.166 50.0008"></path></svg>
            </span>
          </h1>
          <PrimaryButton path="/waiting-page" title='Start Your Free Assessment' classes='py-2 my-5 max-[500px]:text-lg text-xl bg-[#121212] border-[#121212] max-[1000px]:w-full max-[1000px]:py-3' />
        </div>
      </div>
    </div>
  );
}

export default PulsePage;
