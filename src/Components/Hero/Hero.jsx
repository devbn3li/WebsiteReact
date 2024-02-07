import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryButton';
import hero from "../../../public/assets/images/hero.jpg";
import header_mask from "../../../public/assets/images/Header-Mask.svg";

// Hero component represents hero section of a webpage in the layout
const Hero = () => {
  // Static string variables used in JSX
  
  const headerTitle = 'LevelUp for Better Business & Planet.';
  const headerDescription = 'Welcome to LevelUp, where we combine sustainability technology, science, and human expertise to make a meaningful impact.';
  
  return (
    <header className='mt-[4.5rem] w-full max-w-[1400px] px-[5%] pt-28 pb-8 flex justify-between'>
      <div className="w-[45%] gap-6 flex flex-col justify-center max-[570px]:w-full">
      <h1 className="mb-4 text-4xl text-[#002E70] max-w-[1000px] font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ">
          {headerTitle}
          </h1>
          <p className="mb-8 text-lg font-normal text-[#002E70] lg:text-xl  ">
          
          {headerDescription}</p>
        <div className='font-bold gap-4 flex flex-wrap max-[570px]:flex-col'>
          <PrimaryBtn path='/about' title='About us' classes='px-6 py-3'/>
          <PrimaryBtn path="#contact" title='Make an Impact, Together' classes='bg-[#e6e6e5] !text-[#002E70] border-[#e6e6e5] px-6 py-3'/>
        </div>
      </div>
      <div className="relative rounded-r-3xl w-1/2 overflow-hidden max-[991px]:rounded-none max-[991px]:mr-[-5%] max-[570px]:hidden">
        <img src={hero} alt="A green field with windmill" style={{objectFit: 'cover'}} className='h-full'/>
        <img src={header_mask} className='absolute top-0 left-0 h-full' />
      </div>
    </header>
  );
}

export default Hero;
