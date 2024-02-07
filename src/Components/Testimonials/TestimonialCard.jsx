import React from 'react';
import PropTypes from 'prop-types';

// Defines a functional component "TestimonialCard" that displays a single testimonial.
// It receives the name, message, and an optional title of the testimonial through props.
const TestimonialCard = ({ name, message, title = '' }, index) => {
  return (
    // The main container for the testimonial card with applied styling for appearance and responsiveness.
    <div key={index} className=' hover:scale-95 duration-700 cursor-pointer select-none sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[550px] h-[300px] sm:h-auto  overflow-x-auto sm:overflow-x-hidden  rounded-2xl bg-[#b3ffd6] p-3 sm:p-5 text-base flex flex-col justify-between text-[#121212]  box-border '>
      {/* Displays the message of the testimonial. */}
      <p className='mb-2 sm:mb-8 pr-1 font-medium '>{message}</p>
      {/* Container for the name and title (if present) of the person giving the testimonial. */}
      <span className='flex flex-col'>
        {/* Displays the name of the person. */}
        <h3 className='font-extrabold  '>{name}</h3>
        {/* Conditionally renders the title if it exists. */}
        {title && <span>{title}</span>}
      </span>
    </div>
  );
};

// Specifies the expected types for props passed to TestimonialCard for validation.
TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired, // Indicates that a name must be provided as a string.
  message: PropTypes.string.isRequired, // Indicates that a message must be provided as a string.
  title: PropTypes.string // Specifies that the title is optional.
};

export default TestimonialCard;
