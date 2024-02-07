import React from "react";
import ValuesCards from "./ValuesCards/index";

function Values() {
  
  return (
    <section className='w-full min-h-screen rounded-3xl py-6  flex justify-center bg-[#002E70]  '>
      <div className='relative sm:w-[90%]  mx-auto h-full   max-w-[1400px]'>
        <div className='w-full p-4  xl:p-12 mt-12 relative  bg-[#F9FFF5] h-full rounded-3xl  border-t-8 border-[#03C2AB]'>
          <h2 className='text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center '>
            <mark className=' px-4  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'>
              {" "}
              Our Values{" "} 
            </mark>
          </h2>
       <div className="flex justify-center pt-6">
       <p className='mb-8 text-lg font-normal text-[#002E70]/80 lg:text-xl  '>We believe in</p>

       </div>
<ValuesCards/>
         
        </div>
      </div>
    </section>
  );
}

export default Values;
