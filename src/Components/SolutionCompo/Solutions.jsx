import React from 'react';
import PropTypes from 'prop-types';
import Card_1 from '../Cards/Card_1';


const Solutions = ({ description, solutions }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center py-20 px-[5%]">
      <h2 className="text-6xl text-[#121212] font-bold mb-12">Solution</h2>
      <p className="max-w-[750px] mb-12">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <Card_1 key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};


Solutions.propTypes = {
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};


export default Solutions;
