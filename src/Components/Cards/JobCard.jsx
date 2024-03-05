import React from 'react';
import PropTypes from 'prop-types';
import { IoShareSocialSharp } from "react-icons/io5";

const Property = ({ text }) => (
    <span className='rounded-full px-2 py-1 border capitalize border-slate-700 select-none'>{text}</span>
);

export default function JobCard({ date, jobTitle, companyName, companyLogoUrl, properties, salary, location, link }) {

    return (
        <div className='rounded-xl p-1  bg-gradient-to-r from-[#1C4987] to-[#159D9B] shadow-lg min-w-64 w-full pb-6'>
            {/* Start Header ====================================== */}
            <div className="rounded-xl bg-[#62e7d7] p-4 flex flex-col justify-between h-[300px]">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <span className="rounded-full px-3 py-2 bg-white select-none shadow-lg hover:scale-105 hover:rounded-2xl transition-all cursor-pointer">{date}</span>
                        {/* Share BTN */}
                        <span className="aspect-square rounded-full hover:rounded-xl bg-white box-border w-8 justify-center items-center shadow-lg hover:shadow-xl flex  hover:scale-105 active:scale-95 hover:bg-opacity-80 active:bg-opacity-100 bg-opacity-90 transition-all cursor-pointer"><IoShareSocialSharp /></span>
                    </div>

                    {/* Job Title & Company (name\logo) */}
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold ">{companyName}</span>
                        <div className="flex justify-between gap-3 items-center">
                            <span className="text-2xl font-bold whitespace-break-spaces break-all capitalize  break-keep">{jobTitle}</span>
                            {companyLogoUrl &&
                                <div className="rounded-full aspect-square bg-gray-200 w-10 flex-shrink-0 shadow-lg cursor-pointer hover:scale-105 transition-all">
                                    <img src={companyLogoUrl} alt={companyName} className="w-full object-cover" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {/* Properties */}
                <div className="flex flex-wrap gap-2">{properties.map((text, index) => (<Property key={index} text={text} />))}</div>
            </div>
            {/* End Header ====================================== */}

            {/* Start Details ======================================= */}
            <div className="pt-6 flex justify-between  items-center px-4">
                <div className='flex flex-col'>
                    <span className="font-semibold text-xl">{salary}</span>
                    <span className='text-gray-800'>{location}</span>
                </div>
                <a href={link} className='font-semibold text-white p-2 px-5 bg-[#002E70] rounded-full hover:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:bg-opacity-80 active:bg-opacity-100 bg-opacity-90 transition-all'>Details</a>
            </div>
            {/* End Details ======================================= */}
        </div>
    )
}
// export default function JobCard({time, jobTitle, companyName, companyLogoUrl, properties}) {

JobCard.propTypes = {
    date: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogoUrl: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.string),
    salary: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}
