import React from "react";
import Prasad from "../../public/assets/Prasad.jpeg";
import Don from "../../public/assets/Don.jpeg";
import Ekta from "../../public/assets/Ekta-Soni (1).jpeg";
import Hamdy from "../../public/assets/Hamdy.jpeg";

export default function TeamMembers() {
  const dataTeam = [
    { id: 1, photo: Don, userName: "Don Liyanage" },
    { id: 2, photo: Prasad, userName: "Prasad Bhalerao" },
    { id: 3, photo: Ekta, userName: "Ekta Soni" },
    { id: 4, photo: Hamdy, userName: "Hamdy Saad" },
  ];
  return (
    <div className='flex justify-center'>
      <section className='relative w-full max-w-[1400px] py-[4rem] sm:px-[3rem]'>
        <div className='w-[80%] mx-auto'>
          <h2 className='text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center '>
            <mark className=' px-4  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'>
              {" "}
              Our Leaders
            </mark>
          </h2>

         
          <div className=' mt-[5rem]  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center gap-y-5 sm:gap-x-32 lg:gap-x-52  xl:gap-32'>
            {dataTeam.map(({ id, photo, userName }) => (
              <div
                className='relative duration-1000 rounded-3xl overflow-hidden h-[300px] w-[230px] xl:w-[280px]'
                key={id}>
                <div className='w-full h-[100%] scale-75 rounded-md overflow-hidden'>
                  <img
                    src={photo}
                    alt={userName}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='absolute bottom-4 left-0 right-0  px-5 rounded-bl-3xl rounded-br-3xl'>
                  <h2 className='text-center bg-gradient-to-r from-[#1C4987] to-[#159D9B] text-white p-1 text-[1.125rem] font-[700]'>
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
