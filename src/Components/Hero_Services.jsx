import React from 'react';
import {Link} from 'react-router-dom'

const Hero_servise = ({ title, subtitle, buttonText }) => {
  return (
    <section className="relative h-[600px] sm:h-[530px] w-full bg-cover bg-center bg-cover " style={{backgroundImage: "url('https://images.unsplash.com/photo-1489981424607-45c58daf0581?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} >
      <div className="absolute inset-0 bg-[#F9FFF5] opacity-85"></div>
      <div className="relative flex flex-col justify-center items-center h-full w-[90%] sm:w-[70%] mx-auto px-6 z-10">
        <div className="text-center text-gray-700">
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-semibold mb-4">{title}</h1>
          <p className=" sm:text-lg">
            {subtitle}
          </p>
        </div>
        <button className="mt-4 py-3 px-6 bg-[#03C2AB] font-bold text-white rounded-full shadow-md translate-y-2 hover:translate-y-0 hover:shadow-2xl hover:shadow-slate-400 duration-1000  focus:outline-none">
            <Link to="/contact">{buttonText}</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero_servise;
