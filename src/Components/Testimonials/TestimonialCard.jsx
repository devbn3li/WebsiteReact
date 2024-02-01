import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ name, message, title }, index) => {
  return (
    <div className='rounded-2xl bg-[#b3ffd6] p-8 text-base flex flex-col justify-between text-[#121212] w-[500px] max-w-full box-border max-[991px]:flex-shrink-0 max-[550px]:w-[250px]' key={index}>
      <p className='mb-8'>{message}</p>
      <div className='flex flex-col'>
        <h3 className='font-bold'>{name}</h3>
        {title && <span>{title}</span>}
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default TestimonialCard;
