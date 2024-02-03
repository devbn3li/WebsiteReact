import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ text }) => {
  return (
    <h1 className='text-[44px] font-bold'>
      {text}
    </h1>
  );
}

H1.propTypes = {
  text: PropTypes.string.isRequire
}

export default H1;
