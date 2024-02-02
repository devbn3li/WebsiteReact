import React from 'react';

const Hero_servise = ({ title, subtitle, buttonText }) => {
  return (
    <section className="relative h-96 w-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585854467604-cf2080ccef31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80')"}}>
      <div className="absolute inset-0 bg-[#a2c2ab] opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center h-full max-w-lg mx-auto px-6 z-10">
        <div className="text-center text-gray-700">
          <h1 className="text-3xl font-semibold mb-4">{title}</h1>
          <p className="text-base">
            {subtitle}
          </p>
        </div>
        <button className="mt-4 py-2 px-4 bg-white rounded-full shadow-md hover:bg-blue-100 focus:outline-none">{buttonText}</button>
      </div>
    </section>
  );
};

export default Hero_servise;
