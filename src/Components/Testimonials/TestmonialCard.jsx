import React from 'react';
import PropTypes from 'prop-types';


const TestmonialCard = ({name, message, title=''}, index) => {
  return (
    <div className='rounded-2xl bg-[#b3ffd6] p-8 text-base flex flex-col justify-between text-[#121212] w-[500px] box-border max-[991px]:flex-shrink-0 max-[991px]:flex-grow-0 max-[550px]:w-[250px]' key={index}>
      <p className='mb-8 pr-1'>{message}</p>
      <span className='flex flex-col'>
        <h3 className='font-bold'>{name}</h3>
        <span className=''>{title}</span>
      </span>
    </div>
  );
};


TestmonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string
};


export default TestmonialCard;
