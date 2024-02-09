import React from "react";

import Ahmed from "../../public/assets/images/Leaders/ahmed.png";
import Prasad from "../../public/assets/images/Leaders/prasad.png";
import Don from "../../public/assets/images/Leaders/don.png";
import Ekta from "../../public/assets/images/Leaders/ekta.png";
import Hamdy from "../../public/assets/images/Leaders/hamdy.png";
import yana from "../../public/assets/images/Leaders/yana.png";


export default function TeamMembers() {
  const dataTeam = [
    { id: 1, photo: Ahmed, userName: "Ahmed Shawky", },

    { id: 2, photo: Don, userName: "Don Liyanage",Class:"" },
    { id: 3, photo: Ekta, userName: "Ekta Soni" },
    { id: 6, photo: yana, userName: "Yana Moldovan" },
     { id: 4, photo: Prasad, userName: "Prasad Bhalerao" },
    { id: 5, photo: Hamdy, userName: "Hamdy Saad" },
   
  ];
  return (
    <div className='flex justify-center w-full '>
      <section className='relative w-full  max-w-[1400px] py-[4rem] sm:px-[3rem] '>
        <div className='w-[100%] xl:w-[80%] mx-auto flex flex-col gap-6'>
          <h2 className='text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center '>
            <mark className=' px-4  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'>
              {" "}
              Our   Team
            </mark>
          </h2>

          <p className="text-[24px] text-center text-[#112b65] max-lg:text-[20px] font-medium leading-[150%] max-lg:px-28 max-md:px-0">
            Our Leadership Team guides our organization with integrity and innovation, driving us towards success through collaboration and visionary leadership.
          </p>


       <div className="flex justify-center   w-full">
          
       <div className='relative mt-[5rem]  justify-center flex flex-wrap justify-items-center gap-y-[6rem] md:gap-x-[6rem]  lg:gap-x-[6rem] '>
            {dataTeam.map(({ id, photo, userName }) => (

              <div
                className='relative rounder-bl-3xl rounder-br-3xl  hover:scale-105 ease-linear duration-500 cursor-pointer  rounded-3xl h-[250px] w-[250px] lg:h-[200px] lg:w-[200px] '
                key={id}>
                <div className='bg-gradient-to-r from-[#1C4987] to-[#159D9B]  w-full h-[78.6%] lg:h-[73.4%] rounded-tl-3xl rounded-tr-3xl'>

                    <div className='absolute top-[-3.3rem] h-full'>

                        <img
                        src={photo}
                        alt={userName}
                        className='h-full w-full object-cover '
                    />
                    </div>
                </div>
                <div className='relative'>
                  <h2 className=' text-center p-3 bg-white text-[#112b65]  text-[1.125rem] font-[700]'>
                    {userName}
                  </h2>
                
                </div>
              </div>
            ))}
          </div>
       </div>
        </div>
      </section>
    </div>
  );
}
