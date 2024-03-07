import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import JobCard from "./Cards/JobCard";
// import logo from "../../public/assets/images/"

const jobs = [
  {
    "date": "February 11, 2024",
    "jobTitle": "UI/UX Design Service",
    "companyName": "LevelUp",
    "companyLogoUrl": "/assets/images/logo.png",
    "properties": [""],
    
    "link": "#",
  },
  {
    "date": "February 21, 2024",
    "jobTitle": "Senior ESG Consultant",
    "companyName": "LevelUp",
    "companyLogoUrl": "/assets/images/logo.png",
    "properties": [""],
    
    "link": "#",
  },
  {
    "date": "February 22, 2024",
    "jobTitle": "Sustainable Procurement Subject Matter Resource (SMR)",
    "companyName": "LevelUp",
    "companyLogoUrl": "/assets/images/logo.png",
    "properties": [""],
    
    "link": "#",
  },
  {
    "date": "February 22, 2024",
    "jobTitle": "Carbon Specialist ",
    "companyName": "LevelUp",
    "companyLogoUrl": "/assets/images/logo.png",
    "properties": [""],
    
    "link": "#",
  },
  {
    "date": "February 22, 2024",
    "jobTitle": "Circular Economy Subject Matter Resource (SMR)",
    "companyName": "LevelUp",
    "companyLogoUrl": "/assets/images/logo.png",
    "properties": [""],
    
    "link": "#",
  },

];


const Jobs = () => {
  return (
    <section className="jobs max-w-7xl mx-auto ">
      <div className="w-full py-28 ">
        <div className="w-full mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-center w-full"
          >
            <h2 className="mb-6 text-[#112b65] font-bold text-4xl md:text-5xl leading-[1.2]">
              Job openings
            </h2>
            <p className="text-lg text-[#112b65]">
              Join us on this journey and find your spot to be an Impact
              Maker.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1800" className="mt-8 grid grid-cols-3 max-[1040px]:grid-cols-2 max-[725px]:grid-cols-1 gap-10 px-10 max-[465px]:px-5 w-full">
            {/* Mapping job openings */}
            {jobs.map((job, index) => (
              <JobCard {...job} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
