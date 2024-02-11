import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const jobs = [
  {
    title: "GHG Specialist (Full or Part-time)",
    link: "https://www.linkedin.com/company/levelupesg/jobs/",
  },
  {
    title: "Corporate Sustainability Subject Matter Expert (SME) - Contract",
    link: "https://www.linkedin.com/company/levelupesg/jobs/",
  },
];

const Jobs = () => {


  return (
    <>
      <section className="jobs max-w-7xl mx-auto">
        <div className="w-full py-28 px-4 md:px-8 lg:px-0">
          <div className="max-w-3xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1200" className="text-center">
              <h2 className="mb-6 text-[#112b65] font-bold text-4xl md:text-5xl leading-[1.2]">
                Job openings
              </h2>
              <p className="text-lg text-[#112b65]">
                Join us on this journey and find your spot to be an Impact
                Maker.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1800" className="mt-8">
              {/* Mapping job openings */}
              {jobs.map((job, index) => (
                <a href={job.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <div className="mb-6 p-4 border border-[#e6e6e5] rounded-3xl transition duration-300 hover:bg-[#02c2ab] flex justify-between items-center">
                    <h3 className="w-full max-w-[500px] text-lg md:text-xl font-bold text-[#112b65]">{job.title}</h3>
                   
                    <div className="flex justify-end items-center w-[200px] gap-4">
                      <span className="text-[#112b65]">Apply</span>
                      <div className="p-2 text-[20px] rounded-md bg-[#02c2ab]">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;