import React from "react";
import Ahmed from "../../public/assets/images/Leaders/Untitled.png";
import Prasad from "../../public/assets/images/Leaders/Untitled (1).png";
import Don from "../../public/assets/images/Leaders/Untitled (4).png";
import Ekta from "../../public/assets/images/Leaders/Untitled (3).png";
import Hamdy from "../../public/assets/images/Leaders/Untitled (2).png";

export default function TeamMembers() {
  const dataTeam = [
    { id: 1, photo: Ahmed, userName: "Ahmed Shawky" },
    { id: 2, photo: Don, userName: "Don Liyanage" },
    { id: 3, photo: Ekta, userName: "Ekta Soni" },
    { id: 4, photo: Prasad, userName: "Prasad Bhalerao" },
    { id: 5, photo: Hamdy, userName: "Hamdy Saad" },
  ];
  return (
    <div className='flex justify-center '>
      <section className='relative w-full max-w-[1400px] py-[4rem] sm:px-[3rem] '>
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

         
          <div className='relative mt-[5rem]   grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-4 md:gap-x-[4rem]  xl:gap-x-0 '>
            {dataTeam.map(({ id, photo, userName }) => (
              <div
                className='relative overflow-hidden  bg-gradient-to-r from-[#1C4987] to-[#159D9B] hover:scale-105 ease-linear duration-500 cursor-pointer hover:shadow-2xl rounded-3xl h-[350px]  sm:h-[300px] w-[230px] lg:w-[280px]  2xl:w-[330px]'
                key={id}>
                <div className='  w-full h-[100%] rounded-md '>
                  <img
                    src={photo}
                    alt={userName}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='absolute bottom-0 left-0 right-0   rounded-bl-3xl rounded-br-3xl'>
                  <h2 className='text-center  bg-gradient-to-r from-[#1C4987] to-[#159D9B] overflow-hidden  text-white p-1 text-[1.125rem] font-[700]'>
                    {userName}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
