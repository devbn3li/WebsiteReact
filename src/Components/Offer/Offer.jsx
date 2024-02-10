import React from 'react';
import PropTypes from 'prop-types';
import PrimaryBtn from '../Buttons/PrimaryButton';
import sectionImage from '../../../public/assets/Premasset/photo13.png';
import sectionImage2 from '../../../public/assets/Premasset/photo14.png';
import sectionImage3 from '../../../public/assets/Premasset/photo16.png';
import sectionImage4 from '../../../public/assets/Premasset/photo4.png';
import sectionImage5 from '../../../public/assets/Premasset/photo17.png';
import sectionImage6 from '../../../public/assets/Premasset/photo18.png';
import sectionImage7 from '../../../public/assets/Premasset/photo11.png';

//A component that expands or creates our Increase and Money Icons
const IncreaseIcon = () => (
  <svg width=" 100%" height=" 100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99997 10.914L14 14.914L19.707 9.207L22 11.5V5.5H16L18.293 7.793L14 12.086L9.99997 8.086L2.29297 15.793L3.70697 17.207L9.99997 10.914Z" fill="currentColor"></path>
  </svg>
)

const MoneyIcon = () => (
  <svg width=" 100%" height=" 100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.5C10.16 15.5 10 14.64 10 14.5H8C8 15.42 8.66 17.05 11 17.42V18.5H13V17.42C15 17.08 16 15.79 16 14.5C16 13.38 15.48 11.5 12 11.5C10 11.5 10 10.87 10 10.5C10 10.13 10.7 9.5 12 9.5C13.3 9.5 13.39 10.14 13.4 10.5H15.4C15.3865 9.81875 15.1415 9.16241 14.7053 8.63896C14.269 8.11551 13.6676 7.75614 13 7.62V6.5H11V7.59C9 7.92 8 9.21 8 10.5C8 11.62 8.52 13.5 12 13.5C14 13.5 14 14.18 14 14.5C14 14.82 13.38 15.5 12 15.5Z" fill="currentColor"></path>
    <path d="M2 2.5V4.5H4V21.5C4 21.7652 4.10536 22.0196 4.29289 22.2071C4.48043 22.3946 4.73478 22.5 5 22.5H19C19.2652 22.5 19.5196 22.3946 19.7071 22.2071C19.8946 22.0196 20 21.7652 20 21.5V4.5H22V2.5H2ZM18 20.5H6V4.5H18V20.5Z" fill="currentColor"></path>
  </svg>
)

//Generates each item for rendering
const OfferItem = ({icon, title, description}, index) => {
  return (
    <div className="hover:bg-[#02c2ab]/20 border-2 border-gray-200/80 cursor-pointer hover:scale-105 duration-500 p-4 rounded-3xl" key={index}>
      <div className="mb-3  flex items-center justify-center rounded-md bg-[#02c2ab] aspect-square w-10 p-2">
        {icon}
      </div>
      <h1 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-[#002E70] md:text-2xl lg:text-3xl ">
        {title}</h1>
        <p className="mb-8 text-lg font-normal text-[#002E70] lg:text-xl ">
        {description}</p>
    </div>
  );
};

// Is it really important? 🤔 { Faisal }
// OfferItem.prototype = {
//   icon: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// }

//Main Component
const Offer = () => {
  /* Static data properties */
  const sectionTitle = 'ESG Impact Made Simple & Affordable';
  const sectionDescription = 'Drive real ESG impact without the hefty price tag. Our AI-powered solutions, data science, and human expertise simplify sustainability execution. We provide actionable insights to advance your goals affordably.';

  /* Inner data structure */
  const items = [
    {
      icon: <IncreaseIcon />,
      title: 'Innovation and Expertise',
      description: 'We support our clients in tackling the world’s greatest sustainability challenges by combining cutting-edge technology, data-driven science, and an unparalleled expert network.'
    },
    {
      icon: <MoneyIcon />,
      title: 'Purpose and Profit',
      description: 'Enhance your financial performance while concurrently fostering positive Environmental and societal impact by assembling a dedicated and purpose-driven team focused on sustainable business practices .'
    },
  ];
  /* Return JSX component */
  return (
  <div className='max-w-[1400px]  py-28 mt-[4.5rem] flex justify-center flex-col'>
   <div className=' w-full px-[5%]   mb-10'>
      <h1 className="mb-4 text-4xl  max-w-[1200px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
          {sectionTitle}</h1>
          <p className=" text-lg font-normal text-[#002E70] lg:text-xl  ">
          
          {sectionDescription}</p>  
      </div>
      <div className='px-[5%]'>  <div className='w-full border-[#02c2ab]  border-b-2     mb-10'></div>
</div>
  <section className=' w-full  gap-12 px-[5%]  pb-8 flex justify-between'>
     
      <div className="w-[55%] gap-5 flex flex-col justify-center max-[996px]:w-full">
      
          {items.map(OfferItem)}
      
        <div className='font-bold pt-6 animate-bounce'>
          <PrimaryBtn path='/contact' title='Make Impact with us' classes='bg-[#e6e6e5] !text-[#002E70] border-[#e6e6e5] px-6 py-3 max-[479px]:w-full' />
        </div>
      </div>
      <div className="relative animate-pulse  rounded-r-3xl w-[45%] h-[550px] overflow-hidden max-[996px]:hidden">
        <img src={sectionImage} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='w-[200px] absolute top-10 right-5' />
        <img src={sectionImage2} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute bottom-10 right-0 w-[200px]' />
        <img src={sectionImage3} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute top-10 right-50 w-[200px]' />
        <img src={sectionImage4} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute left-10 top-10 w-[200px]' />
        <img src={sectionImage5} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute top-32 right-10 w-[300px]' />
        <img src={sectionImage6} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute top-52 left-10 w-[300px]' />
        <img src={sectionImage7} alt="A green field with windmill" style={{ objectFit: 'cover' }} className='absolute top-0 right-10 w-[300px]' />
      </div>
    </section>
    </div>
  );
};

export default Offer;