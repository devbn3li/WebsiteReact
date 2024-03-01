import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

function PrincipelCompo() {
  return (
    <section className="py-12 mb-28 bg-gradient-to-r from-[#1C4987] to-[#159D9B]">
      <div className="max-w-[1000px] px-3 mx-auto ">
        <div className="text-center   ">
          <h2 className="font-semibold md:font-bold text-3xl md:text-5xl px-6 py-3 w-fit mx-auto mb-8 rounded-3xl text-white ">LevelUp Principles</h2>
          <p className="text-white mb-8 text-xl md:text-3xl">
            Discover the core principles that guide everything we do at LevelUp.
            From fostering innovation to prioritizing human well-being, our
            values shape our approach and drive our commitment to excellence.
          </p>
          <div className="flex gap-4 justify-center">
          <PrimaryButton path="/principles" title="Read More" classes="text-2xl px-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipelCompo;
