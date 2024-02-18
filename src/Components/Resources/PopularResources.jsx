import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function PopularResources() {
  return (
    <div className=' bg-gradient-to-r from-[#1C4987] to-[#159D9B]  my-[2rem]'>
        <div className='flex justify-between flex-col md:flex-row gap-5 w-[90%] lg:w-[70%] mx-auto text-white py-[2rem]'>
            <div className='flex justify-center items-center flex-row md:flex-col'>
                <div className='text-[1.5rem] font-bold'>Popular</div>
                <div className='text-[1.5rem] font-bold'>Topics</div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-5 text-black '>
                <div className='bg-white w-[200px] sm:w-[130px] h-[130px] sm:h-[100px] rounded-xl flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[200px] sm:w-[130px] h-[130px] sm:h-[100px] rounded-xl flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[200px] sm:w-[130px] h-[130px] sm:h-[100px] rounded-xl flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[200px] sm:w-[130px] h-[130px] sm:h-[100px] rounded-xl flex justify-center items-center flex-col'>
                    <FaHome  className='text-[2rem] text-[#159D9B] '/>
                    <h3 className='font-bold mt-3'>checking</h3>
                </div>
                <div className='bg-white w-[200px] sm:w-[130px] h-[130px] sm:h-[100px] rounded-xl flex justify-center items-center flex-col'>
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
