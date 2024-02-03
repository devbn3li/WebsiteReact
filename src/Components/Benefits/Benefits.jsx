// Import your external library dependencies and component dependencies
import React from 'react';
import img1 from '/public/assets/images/person-using-ai-tool-job.avif';
import img2 from '/public/assets/images/discussing-business-documents.avif';
import img3 from '/public/assets/images/young-man-working-office.avif';
import BenefitsCard from './BenefitsCard';

// Icons
const TerminalIcon = () => (
  <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14H18V16H12V14ZM6.29303 9.70697L8.58603 12L6.29303 14.293L7.70703 15.707L11.414 12L7.70703 8.29297L6.29303 9.70697Z" fill="currentColor"></path>
    <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM4 18V6H20L20.002 18H4Z" fill="currentColor"></path>
  </svg>
);

const RocketIcon = () => (
  <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.9201 2.38C19.7974 2.12857 18.6506 2.00114 17.5001 2C16.4136 1.93101 15.3241 2.0775 14.2944 2.43103C13.2647 2.78456 12.3151 3.33816 11.5001 4.06C10.4267 5.13333 9.36341 6.20333 8.31008 7.27C7.10008 7.14 4.23008 7.07 2.31008 9.01C2.12383 9.19736 2.01929 9.45081 2.01929 9.715C2.01929 9.97918 2.12383 10.2326 2.31008 10.42L13.6101 21.74C13.7974 21.9262 14.0509 22.0308 14.3151 22.0308C14.5793 22.0308 14.8327 21.9262 15.0201 21.74C16.9701 19.74 16.9101 16.92 16.7901 15.74L20.0001 12.54C23.1901 9.35 21.7401 3.36 21.6801 3.11C21.6339 2.92963 21.5383 2.76574 21.404 2.63677C21.2698 2.50779 21.1022 2.41887 20.9201 2.38ZM18.5601 11.13L15.0001 14.67C14.8848 14.7864 14.7999 14.9294 14.7528 15.0863C14.7057 15.2432 14.6979 15.4093 14.7301 15.57C14.9461 16.9078 14.7581 18.2796 14.1901 19.51L4.52008 9.82C5.76993 9.24477 7.16709 9.07012 8.52008 9.32C8.68016 9.34084 8.8429 9.32262 8.9944 9.2669C9.1459 9.21117 9.28166 9.1196 9.39008 9C9.39008 9 10.7901 7.55 12.9001 5.44C14.1975 4.39811 15.8402 3.88389 17.5001 4C18.2809 4.00387 19.0601 4.07075 19.8301 4.2C20.0701 5.63 20.4501 9.24 18.5601 11.13Z" fill="currentColor"></path>
    <path d="M15.73 10.3C16.8346 10.3 17.73 9.40462 17.73 8.30005C17.73 7.19548 16.8346 6.30005 15.73 6.30005C14.6255 6.30005 13.73 7.19548 13.73 8.30005C13.73 9.40462 14.6255 10.3 15.73 10.3Z" fill="currentColor"></path>
    <path d="M5.00006 16C3.00006 17 3.00006 21 3.00006 21C4.85113 20.9472 6.62321 20.2384 8.00006 19L5.00006 16Z" fill="currentColor"></path>
  </svg>
)

const LeafIcon = () => (
  <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.88 2.15002L20.68 2.55002C18.6234 3.26457 16.4273 3.48384 14.27 3.19002C12.0031 2.83824 9.68292 3.15084 7.59 4.09002C6.48048 4.56247 5.50675 5.30494 4.75747 6.24983C4.00819 7.19473 3.50716 8.31203 3.3 9.50002C3.08926 10.6425 3.11082 11.8157 3.36338 12.9496C3.61594 14.0836 4.09433 15.155 4.77 16.1C4.71 16.31 4.65 16.52 4.6 16.73C4.19384 18.4571 3.99245 20.2259 4 22H6C6.094 20.5479 6.29116 19.1042 6.59 17.68C7.97743 18.4292 9.53335 18.8113 11.11 18.79C12.5805 18.789 14.0358 18.4932 15.39 17.92C23 14.67 22 3.86002 22 3.41002L21.88 2.15002ZM14.61 16.08C12 17.19 8.88 17 7.13 15.63C7.42576 14.6411 7.83164 13.6884 8.34 12.79C8.73519 12.1434 9.20142 11.543 9.73 11C10.2701 10.4512 10.8784 9.97398 11.54 9.58002C12.9071 8.76258 14.4232 8.22547 16 8.00002V7.00002C14.1858 6.93722 12.3827 7.30744 10.74 8.08002C9.06042 8.89957 7.63602 10.1615 6.62 11.73C6.24317 12.3291 5.90901 12.954 5.62 13.6C5.15652 12.4144 5.02514 11.1248 5.24 9.87002C5.38077 8.99156 5.7429 8.1634 6.29225 7.46359C6.8416 6.76378 7.56008 6.21536 8.38 5.87002C9.57561 5.31118 10.8802 5.0243 12.2 5.03002C12.82 5.03002 13.43 5.09002 14.07 5.14002C16.0743 5.39863 18.1093 5.27992 20.07 4.79002C20 7.55002 19.5 14 14.61 16.08Z" fill="currentColor"></path>
  </svg>
)

// Benefits component that renders list of benefits in a section
const Benefits = () => {

  // Define the static text used in the component
  const sectionTitle = 'Driving Impact with Human Expertise, Science and Data Insights';
  const sectionDescription = 'Welcome to LevelUp, where we combine sustainability technology, science, and human expertise to make a meaningful impact.';

  // Define the benefits fetched from a source or defined statically
  const benefits = [
    {
      icon: <TerminalIcon />,
      title: 'Solutions, Data Science and Innovation',
      description: 'Sustainable Data Solutions: Empowering companies with control, informed decisions, and purpose-driven impact through modern, innovative tools and actionable insights.',
      imageUrl: img1
    },
    {
      icon: <RocketIcon />,
      title: 'Ongoing Consulting and Assurance',
      description: "Elevate your business with LevelUp's sustainable consulting, ensuring control, informed decisions, and purpose-driven impact through innovative tools and insights.",
      imageUrl: img2
    },
    {
      icon: <LeafIcon />,
      title: "LevelUp Academy and Resources Hub",
      description: "At LevelUp, we empower with knowledge and resources to navigate emerging topics. Our Academy and Resources Hub strengthen governance for impactful decision-making and growth.",
      imageUrl: img3
    },
  ];

  // Render the section with a title, description and list of BenefitCard components mapped from benefits array
  return (
    <section className='pt-24 px-[5%] gap-3 max-w-[1440px]'>
      <div className='max-w-[39.25rem] mb-10'>
        <h1 className='text-[44px] font-bold leading-[1.2]'>{sectionTitle}</h1>
        <p>{sectionDescription}</p>
      </div>
      <div className="grid grid-cols-3 max-[991px]:flex max-[991px]:flex-col gap-6">
        {benefits.map((benefit, index) => (
          <BenefitsCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
}

export default Benefits;