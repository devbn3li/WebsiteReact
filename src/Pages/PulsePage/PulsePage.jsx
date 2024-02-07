import React from 'react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import CardData from "../../Components/SolCard/CardData";
import hero from "../../../public/assets/images/hero.jpg";
import header_mask from "../../../public/assets/images/Header-Mask.svg";
import DS from "../../../public/assets/images/DS.png";
import Testimonials from '../../Components/Testimonials/Testimonials';
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";


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

      {/* Testimonial ============================================== */}
      <Testimonials />


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
      <div className='w-screen flex justify-center items-center bg-gradient-to-r box-border overflow-hidden from-[#1C4987] to-[#159D9B] my-16 pb-16'>
        <div className='w-full max-w-[1400px] flex flex-col justify-center items-center box-border text-white font-semibold px-[5%]'>
          <h1 className="text-[5rem] text-center w-full my-12 text-white font-bold">Ready to Level Up Your ESG Performance?</h1>
          <p className='text-2xl'>Brief encouragement to start the assessment.</p>
          <PrimaryButton path="/waiting-page" title='Start Your Free Assessment' classes='px-12 py-4 my-5 text-4xl bg-[#002E70] border-[#002E70]' />
        </div>
      </div>
    </div>
  );
}

export default PulsePage;
