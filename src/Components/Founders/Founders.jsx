import React, { useState } from 'react';
import Lottie from 'lottie-react';
import wave from '../../Lottie/story.json';
import { Link } from "react-router-dom";
import vision from '../../../public/assets/images/logo.png';

const SlideComponent = (founder) => (
  <div className='py-12 pt-0'>
    <div className='flex flex-col gap-6 text-white text-center px-0 lg:px-16 max-w-[890px] mx-auto'>
      <div className="flex justify-center">
      {/* <div className='bg-[#02c2ab] aspect-square  w-[116px] h-[116px] p-2  relative shadow-2xl shadow-[#02c2ab] rounded-[2rem] '>
              <Lottie
                animationData={wave}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>{" "} */}
      </div>
      <h1 className='text-3xl md:text-7xl font-bold '>{founder.classes}</h1>
      <p className={`text-${founder.message.length > 170 ? 'xl' : '2xl'} max-lg:text-[20px] font-medium pb-32 lg:pb-0 box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-100`}>
        {founder.message}
      </p>
    </div>
    {/* <div className='absolute bottom-5 left-12 text-center text-white flex justify-center gap-4'>
      <Link to={founder.link} target='_blank' rel='noopener noreferrer'
        className="w-12 h-12 rounded-full overflow-hidden bg-white opacity-100 ring-2 ring-black scale-110 animate-pulse duration-1000">
        <img src={founder.imgSrc} alt={founder.name} className='w-full h-full object-cover' />
      </Link>
      <div className="ml-2 text-sm grid text-left">
        <p className="text-white font-bold">{founder.name}</p>
        <p className="text-gray-300">{founder.jobTitle}</p>
      </div>
    </div> */}
  </div>
);

function TeamTestimonial() {
  const founder = {
    imgSrc: '../../../public/assets/images/DrAhmedShawky.png',
    name: "Dr. Ahmed Shawky",
    jobTitle: "Founder and Manging Dictor, LevelUp Ltd.",
    message: "To lead the global shift toward affordable, data-driven sustainability envision a world where our AI-powered solutions provide insights to businesses of all sizes guiding them to thrive sustainably and drive positive change",
    classes: 'Our Vision'
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className='w-full flex flex-col justify-between items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div className='w-full bg-[#1c4987] bg-gradient-to-l from-[#1C4987] to-[#159D9B]  min-h-[1100px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col justify-center items-center lg:flex-row  px-2 flex overflow-hidden'>
            {/* // option lg:w-1/2  for the a size   */}
            <div
              className='cursor-pointer w-1/2 hover:opacity-80 duration-1000 hover:contrast-150  p-4 px-2  md:col-span-2  relative flex justify-center items-center'>
                <div className='rounded-xl w-full h-full bg-white/80 aspect-square flex justify-center items-center'>
                  <img
                    alt=''
                    className={` w-4/5 overflow-hidden  object-center `}
                    src={vision}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </div>
            </div>

            <div className='w-1/2 h-full text-end md:col-span-2 relative flex justify-end items-center'>
            <SlideComponent {...founder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Founders() {
  return (
    <>
      <div className=' relative m-auto flex justify-center max-w-[1400px] px-[5%]'>
        <header
          style={{
            backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
            boxShadow: "0 0 30px 12px white inset",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className='  bg-white  flex flex-col items-center '>
          {/* Hero content wrapper */}
          <div className='box-border px-2 lg:px-16 py-28 mt-1 flex flex-col justify-center items-center gap-6'>
            {/* Hero Texts */}
            <div className='bg-[#02c2ab] aspect-square  w-[116px] h-[116px] p-2  relative shadow-2xl shadow-[#02c2ab] rounded-[2rem] '>
              <Lottie
                animationData={wave}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>{" "}
            <div className='flex flex-col gap-6 text-black text-center box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[1290px]'>
              <h1
                style={{
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;, Arial, &apos;Noto Sans&apos;, sans-serif",
                  fontWeight: "bold",
                  lineHeight: "120%",
                }}
                className='text-3xl text-[#112b65] md:text-7xl font-bold leading-120%'>
                Our Mission
              </h1>
              <p className='text-[24px] text-[#112b65] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] '>
                To empower SMEs to advance sutainability through AI-powered solutions and strategic guidance
              </p>{" "}
            </div>
          </div>
        </header>
      </div>
      <TeamTestimonial />
    </>
  );
}

export default Founders;