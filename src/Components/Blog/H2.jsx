import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ text }) => {
  return (
    <h1 className='text-[40xpx] font-bold'>
      {text}
    </h1>
  );
}

H2.propTypes = {
  text: PropTypes.string.isRequire
}

export default H2;
