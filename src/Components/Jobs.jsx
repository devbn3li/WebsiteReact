import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import JobCard from "./Cards/JobCard";
// import logo from "../../public/assets/images/"

const jobs = [
  {
    "date": "February 24, 2024",
    "jobTitle": "Social worker",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["check", "amount", "support"],
    "salary": "$92308 - $14367",
    "link": "#",
    "location": "Barretthaven"
  },
  {
    "date": "February 04, 2024",
    "jobTitle": "Tree surgeon",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["southern", "camera"],
    "salary": "$9180 - $95099",
    "link": "#",
    "location": "Staceyburgh"
  },
  {
    "date": "February 11, 2024",
    "jobTitle": "Immunologist",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["which"],
    "salary": "$51444 - $68278",
    "link": "#",
    "location": "Anthonyland"
  },
  {
    "date": "February 10, 2024",
    "jobTitle": "Geoscientist",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["foot", "sport", "western"],
    "salary": "$93405 - $11852",
    "link": "#",
    "location": "New Charlesburgh"
  },
  {
    "date": "February 10, 2024",
    "jobTitle": "Chiropractor",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["themselves"],
    "salary": "$72571 - $10386",
    "link": "#",
    "location": "East Rebeccatown"
  },
  {
    "date": "February 14, 2024",
    "jobTitle": "Equities trader",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["us", "full"],
    "salary": "$34909 - $72493",
    "link": "#",
    "location": "South Jay"
  },
  {
    "date": "February 02, 2024",
    "jobTitle": "Fast food restaurant manager",
    "companyName": "LevelUp",
    "companyLogoUrl": "/public/assets/images/logo.png",
    "properties": ["same"],
    "salary": "$60698 - $73136",
    "link": "#",
    "location": "Rachelhaven"
  }
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
