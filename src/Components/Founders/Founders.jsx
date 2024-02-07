import React, { useState } from 'react';
import Lottie from 'lottie-react';
import wave from '../../Lottie/story.json';
import { Link } from "react-router-dom";
import DRAhmedImg from '../../../public/assets/images/DrAhmedShawky.png';


const SlideComponent = (founder) => (
  <div className='py-12 pt-0'>
    <div className='flex flex-col gap-6 text-white text-center px-0 lg:px-16 max-w-[890px] mx-auto'>
      <div className="flex justify-center">
        <svg
          fill='none'
          height='28'
          viewBox='0 0 28 28'
          width='28'
          xmlns='http://www.w3.org/2000/svg'
          slot='icon'
          key='67_0'>
          <path
            d='M9.20898 13.9987H22.7923M6.20898 6.70703H12.7923M4.20898 21.2904H14.4173'
            stroke='#E2E8FF'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'></path>
        </svg>
      </div>
      <h1 className='text-3xl md:text-7xl font-bold'>{founder.classes}</h1>
      <p className={`text-${founder.message.length > 170 ? 'xl' : '2xl'} max-lg:text-[20px] font-medium pb-32 lg:pb-0 box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-100`}>
        {founder.message}
      </p>
    </div>
    <div className='absolute bottom-5 left-12 text-center text-white flex justify-center gap-4'>
      <Link to={founder.link} target='_blank' rel='noopener noreferrer'
        className="w-12 h-12 rounded-full overflow-hidden bg-white opacity-100 ring-2 ring-black scale-110 animate-pulse duration-1000">
        <img src={founder.imgSrc} alt={founder.name} className='w-full h-full object-cover' />
      </Link>
      <div className="ml-2 text-sm grid text-left">
        <p className="text-white font-bold">{founder.name}</p>
        <p className="text-gray-300">{founder.jobTitle}</p>
      </div>
    </div>
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
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div className='w-full bg-[#121212] min-h-[1100px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col lg:flex-row  px-2 flex overflow-hidden'>
            {/* // option lg:w-1/2  for the a size   */}
            <a
              href=''
              target='_blank'
              rel='noopener noreferrer'
              className=' h-full w-full cursor-pointer hover:opacity-80 duration-1000 hover:contrast-150  p-4 px-2  md:col-span-2  relative flex justify-center items-center'>
              {!isImageLoaded && (
                <img
                  src={DRAhmedImg}
                  alt=''
                  className='w-full  overflow-hidden h-full object-cover rounded-3xl object-center'
                />
              )}

              <img
                alt=''
                className={` w-full  overflow-hidden h-full object-cover rounded-3xl object-center  ${
                  !isImageLoaded && "hidden"
                }`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DRAhmedImg;
                }}
                src={DRAhmedImg}
                onLoad={() => setIsImageLoaded(true)}
              />
            </a>

            <div className='w-full h-full    md:col-span-2  relative flex justify-center items-center'>
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
      <div className=' relative bg-red-400'>
        <header
          style={{
            backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
            boxShadow: "0 0 30px 12px white inset",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className='  bg-white  flex flex-col items-center '>
          {/* Hero content wrapper */}
          <div className='w-[90%]  max-md:w-[95%] max-sm:w-full  box-border px-2 lg:px-16 py-28 mt-1 min-h-[482px] flex flex-col justify-center items-center gap-6'>
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
                className='text-3xl md:text-7xl font-bold leading-120%'>
                Our Mission
              </h1>
              <p className='text-[24px] max-lg:text-[20px] font-medium  box-border  max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
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