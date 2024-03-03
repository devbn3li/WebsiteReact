import React from "react";
import img from "/assets/earth.png";

const Call = () => {
  return (
    <div>
      <section className="container px-[5%] mt-28 mx-auto">
        <div className="flex gap-20 bg-[#002E70] py-12 mx-auto px-32 rounded-[14px]">
          <div className="w-[470px]">
            <img src={img} alt="" className="w-full h-[300px] object-cover" />
          </div>
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-3xl font-bold text-white mb-2">
              Green-Tok, a newsletter dedicated to climate green news
            </h2>
            <p className="text-white text-lg mb-4">
              We share green news once a month (or more if we find interesting
              things to tell you)
            </p>
            <form className="w-full flex gap-10 content-start">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white w-[300px] rounded-lg p-4 outline-none"
              />
              <input
                type="submit"
                value="Sign Up"
                className="bg-[#02c2acd4] hover:bg-[#02c2ac] duration-300 cursor-pointer rounded-lg p-4 text-white"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Call;
