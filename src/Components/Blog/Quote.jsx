import React from 'react';
import PropTypes from 'prop-types';


const Quote = ({ text }) => {
  return (
    <blockquote className='my-6 border-l-[0.1875rem] border-l-[#02c2ab] text-[1.25rem] px-3 py-5'>
      {text}
    </blockquote>
  );
};


Quote.propTypes = {
  text: PropTypes.string.isRequired
};


export default Quote;
