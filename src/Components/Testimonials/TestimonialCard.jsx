import React from 'react';
import PropTypes from 'prop-types';

// Defines a functional component "TestimonialCard" that displays a single testimonial.
// It receives the name, message, and an optional title of the testimonial through props.
const TestimonialCard = ({ name, message, title = '' }, index) => {
  return (
    // The main container for the testimonial card with applied styling for appearance and responsiveness.
    <div key={index} className='rounded-2xl bg-[#b3ffd6] p-8 text-base flex flex-col justify-between text-[#121212] w-[500px] box-border max-[991px]:flex-shrink-0 max-[991px]:flex-grow-0 max-[550px]:w-[250px]'>
      {/* Displays the message of the testimonial. */}
      <p className='mb-8 pr-1'>{message}</p>
      {/* Container for the name and title (if present) of the person giving the testimonial. */}
      <span className='flex flex-col'>
        {/* Displays the name of the person. */}
        <h3 className='font-bold'>{name}</h3>
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
