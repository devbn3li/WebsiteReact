import React from 'react';
import PropTypes from 'prop-types';


const Card1 = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
    </div>
  );
};


Card1.propTypes = {
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
};


export default Card1;
