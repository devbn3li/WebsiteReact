import React from "react";

function SearchBar() {
  return (
    <div className=" bg-gradient-to-r from-[#1C4987] to-[#159D9B] rounded-3xl py-8 md:mt-20 px-[5%] md:h-[1000px] ">
      <div className="relative flex items-center md:mb-10">
        <input
          type="search"
          placeholder="Search"
          className="w-[95%] mx-auto py-2 px-4 rounded-[5rem] outline-none text-black text-xl"
        />
        <div className="text-white flex justify-center items-center cursor-pointer absolute right-5 bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-[30px] h-[30px] rounded-full text-xl ">
          x
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
