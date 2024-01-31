import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';

// Hero component represents hero section of a webpage in the layout
const Hero = () => {
  // Static string variables used in JSX
  const headerTitle = 'LevelUp for Better Business & Planet.';
  const headerDescription = 'Welcome to LevelUp, where we combine sustainability technology, science, and human expertise to make a meaningful impact.';
  
  return (
    <header className='mt-[4.5rem] w-full max-w-[1400px] px-[5%] pt-28 pb-8 flex justify-between'>
      <div className="w-[45%] gap-6 flex flex-col justify-center max-[570px]:w-full">
        <h1 className='text-[56px] font-bold leading-[1.2]'>{headerTitle}</h1>
        <p>{headerDescription}</p>
        <div className='font-bold gap-4 flex flex-wrap max-[570px]:flex-col'>
          <PrimaryBtn path='/about' title='About us' classes='px-6 py-3'/>
          <PrimaryBtn path='/contact' title='Make an Impact, Together' classes='bg-[#e6e6e5] text-[#121212] border-[#e6e6e5] px-6 py-3'/>
        </div>
      </div>
      <div className="relative rounded-r-3xl w-1/2 overflow-hidden max-[991px]:rounded-none max-[991px]:mr-[-5%] max-[570px]:hidden">
        <img src="/src/assets/images/hero.jpg" alt="A green field with windmill" style={{objectFit: 'cover'}} className='h-full'/>
        <img src="/src/assets/images/Header-Mask.svg" className='absolute top-0 left-0 h-full' />
      </div>
    </header>
  );
}

export default Hero;
