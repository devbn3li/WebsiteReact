import React, { useRef, useState } from 'react'
import photo from '../../../public/assets/images/company/3.png'



function  PurposeComponent() { 
    const descriptionRef = useRef();
    const [click, setClick]=useState(false);
    const handelClick =()=>{
        setClick(!click)
    }
  return (
    <>
    <section className='w-full my-[2rem] relative' >
        <div className='relative w-[80%] xl:w-[60%] mx-auto rounded-3xl  bg-gradient-to-r from-[#1C4987] to-[#159D9B] text-white p-[2rem] sm:p-[4rem]  '>
            <div className='hidden sm:block w-[50px] h-[50px]  bg-[#F9FFF5] absolute right-[-5px] top-[-5px]'></div>
            <div className='hidden sm:block w-[50px] h-[50px] rounded-tr-3xl bg-[#159D9B] absolute right-[-20px] top-[-20px]'></div>
            <h2 className='text-[2.625rem] font-[600] mb-[.5rem]'> Our Purpose</h2>
            <div className='flex justify-between flex-wrap md:flex-nowrap'>
                <div className='sm:w-[400px]'>
                    <p className='mb-2'>At our core, LevelUp is a purpose-driven organisation. Our purpose is to make sustainability accessible for every business through AI-powered 
                    solutions and expert guidance.</p>
                    <p className='mb-2'>We exist to empower businesses to improve decisions, make an impact, and contribute to the sustainability of the economy, environment and society.</p>
                    <p className={click ? 'block' : 'hidden'} ref={descriptionRef} >We believe technology catalyses the integration of ESG into business models and strategies. By facilitating a clear link between value creation and sustainability, 
                    we impact the adoption of ESG and corporate sustainability best practices.</p>
                    <button onClick={handelClick} className='text-[#159D9B] cursor-pointer mt-5'>{click ? 'Collapse' : 'Read More'}</button>
                </div>
                <div className='opacity-[.2]'>
                    <img src={photo} alt='img' />
                </div>
            </div>
        </div>
      
    </section>
    </>
  )
}

export default  PurposeComponent
