import React from "react";
import ValuesCards from "./ValuesCards/index";

function Values() {
  
  return (
    <section className='w-full min-h-screen rounded-3xl py-6  flex justify-center bg-[#002E70]  '>
      <div className='relative sm:w-[90%]  mx-auto h-full   max-w-[1400px]'>
        <div className='w-full p-12 mt-12 relative  bg-[#F9FFF5] h-full rounded-3xl  border-t-8 border-[#03C2AB]'>
        <p className='text-center break-words mb-12 text-[#112b65]/80 font-bold text-4xl md:text-2xl leading-[1.2]'>We believe in</p>
          <h2 className='text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center '>
            <mark className=' px-4  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'>
              {" "}
              Our Values{" "} 
            </mark>
          </h2>
<ValuesCards/>
         
        </div>
      </div>
    </section>
  );
}

export default Values;
