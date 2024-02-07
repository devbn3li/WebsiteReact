import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full box-border h-screen min-h-[400px]'>
        <main className="w-full h-full flex flex-col justify-center items-center ">
          <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
          <div className="bg-[#02c2ab] text-white px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
          </div>
          <button className="mt-5">
            <Link to="/" className="relative inline-block text-sm font-medium text-white group active:text-[#02c2ab] focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#02c2ab] group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <span>Go Home</span>
              </span>
            </Link>
          </button>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
