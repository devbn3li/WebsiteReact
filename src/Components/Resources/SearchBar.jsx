import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className='  '>
        <div className=' relative flex items-center mb-10'>
            <input type='text' placeholder='Search' className='bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-[100%] mx-auto px-5 py-3 rounded-[5rem] outline-none text-white text-xl'/>
            <div className='flex justify-center items-center cursor-pointer absolute right-2  w-[30px] h-[30px] rounded-full text-xl text-white '><FaSearch /></div>
        </div>
    </div>
  )
}

export default SearchBar
