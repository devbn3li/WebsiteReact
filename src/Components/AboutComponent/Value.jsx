import React from "react";

function Values() {
  const dataValue = [
    {
      title: "Doing the right thing",
      description:
        "At [Your Company Name], we prioritize ethical behavior and integrity. We believe in making decisions that align with our values and have a positive impact on those around us.",
    },
    {
      title: "Innovating for a better tomorrow",
      description:
        "We are committed to innovation as a means of driving positive change. By exploring new ideas and technologies, we aim to create a brighter future for our customers, employees, and communities.",
    },
    {
      title: "Aiming high",
      description:
        "At [Your Company Name], we set ambitious goals and push the boundaries of what’s possible. We believe in continuous improvement and always strive to exceed expectations.",
    },
    {
      title: "Making a positive impact",
      description:
        "Social responsibility is core to our identity. We use our resources and influence to make a meaningful difference in the world, enriching lives and leaving a lasting legacy of positive change.",
    },
    {
      title: "Respecting each other",
      description:
        "We value diversity and foster an inclusive environment where everyone feels respected and valued. By celebrating unique perspectives and talents, we create a culture of collaboration and mutual respect.",
    },
    {
      title: "Growing together",
      description:
        "Collaboration is key to our success. We believe in supporting each other’s growth and development, learning from our experiences, and working together towards shared goals.",
    },
  ];
  return (
    <section className='w-full h-screen  my-[2rem] mb-[6rem] bg-[#002E70]  '>
      <div className='relative sm:w-[90%]  mx-auto h-full  p-[2rem]  md:p-[4rem] '>
        <div className='w-[100%] pt-12 bg-[#F9FFF5] h-full  p-[2rem] rounded-3xl  border-t-8 border-[#03C2AB]'>
          <h2 className='text-3xl  md:text-7xl font-bold  text-[2.625rem] mb-[.5rem] text-center '>
            <mark className=' px-4  rounded-3xl text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'>
              {" "}
              Our Values{" "} 
            </mark>
          </h2>
          <p className='text-center mb-5 break-words'>We believe in:</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-x-5 gap-y-5'>
            {dataValue.map((e, i) => {
              return (
                <div key={i} className='flex items-center  gap-3  '>
                  <div className='w-[5px] h-[5px]  bg-[#02DDB3]  '></div>
                  <p>{e.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
