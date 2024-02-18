import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function PopularResources() {
  return (
    <div className=' bg-gradient-to-r from-[#1C4987] to-[#159D9B]  my-[2rem]'>
        <div className='flex justify-between w-[70%] mx-auto text-white py-[2rem]'>
            <div className='flex justify-center items-center'>
                <h2 className='text-[1.5rem] font-bold'>Popular <br/> Topics</h2>
            </div>
            <div className='flex justify-center gap-5 text-black '>
                <div className='bg-white w-[130px] h-[100px] flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[130px] h-[100px] flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[130px] h-[100px] flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[130px] h-[100px] flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[130px] h-[100px] flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <IoIosArrowForward className='text-[2rem] cursor-pointer font-bold' />
            </div>

        </div>
    </div>
  )
}

export default PopularResources
