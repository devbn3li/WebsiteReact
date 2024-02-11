import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const dataValue = [
  {
    num:1,
    title: 'Doing the right thing',
    description: 'At LevelUp, we prioritize ethical behavior and integrity. ',
    Class:"h-[180px] w-[250px] mt-[3rem] "
  },
  {
    num:2,
    title: 'Innovating for a better tomorrow',
    description: 'We are committed to innovation as a means of driving positive change.',
    Class:"h-[200px] w-[250px] "
    },
  {
    num:3,
    title: 'Aiming high',
    description: 'At LevelUp, we set ambitious goals and push the boundaries of what’s possible.',
    Class:"h-[150px] w-[250px] lg:mt-[3rem]"
  },
  {
    num:4,
    title: 'Making a positive impact',
    description: 'Social responsibility is core to our identity. ',
    Class:"h-[180px] w-[250px] mt-[1rem]"
  },
  {
    num:5,
    title: 'Respecting each other',
    description: 'We value diversity and foster an inclusive environment where everyone feels respected and valued.',
    Class:" h-[210px] w-[250px] sm:mt-[-2rem]"
  },
  {
    num:6,
    title: 'Growing together',
    description: 'Collaboration is key to our success. ',
    Class:"h-[170px] w-[250px] mt-[1rem]"
  }
];

const Card = ({num, title, description,Class }) => (
  <div className={`${Class} relative border-[1px] border-l-[#1C4987] hover:border-[#1C4987]  p-6 bg-[#02c2ab]/30 hover:bg-[#02c2ab] duration-500 cursor-pointer hover:scale-105 rounded-lg shadow-md`}>
    <div className='flex justify-center w-[30px] h-[30px] bg-gradient-to-r from-[#1C4987] to-[#159D9B] text-white absolute top-[-.5rem] rounded-full left-[-.5rem] text-2xl font-bold '>{num}</div>
    <h3 className="text-2xl !font-extrabold text-[#112b65]  mb-2"> {title}</h3>
    <p className="text-sm text-[#112b65]">{description}</p>
  </div>
);

const index = () => {
  return (
    <div           data-aos="fade-up"
    data-aos-duration="1800" className="relative flex h-full flex-col justify-center  w-full">
      <div className="mx-auto pt-12 h-full max-w-[1400px] p-2">
        <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3">
          {dataValue.map((item, index) => (
            <Card key={index} num={item.num} title={item.title} description={item.description} Class={item.Class} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
