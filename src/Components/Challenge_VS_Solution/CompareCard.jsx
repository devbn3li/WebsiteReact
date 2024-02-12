import React from 'react';
import PropTypes from 'prop-types';


const CompareCard = ({ challenge, solution }) => {
  return (
    <div className='relative flex bg-[#0e3462] rounded-lg overflow-hidden w-full h-full box-border'>
      <div className="aspect-square absolute top-1/2 -translate-y-1/2 -translate-x-[55%] hover:shadow-md left-1/2 rounded-full text-white border-2 bg-slate-500 font-bold p-3 text-xl cursor-pointer hover:scale-105 transition-all z-10">VS</div>
      <div className='gap-4 flex flex-col text-white font-semibold bg-white/20 border-r border-[#02c2ab] rounded-[0%_100%_10%_50%/100%_0%_100%_0%] p-8 w-1/2'>
        <h1 className='font-bold text-3xl'>{challenge.title}</h1>
        <p>{challenge.description}</p>
      </div>
      <div className='gap-4 flex flex-col text-white font-semibold p-8 rounded-r-full w-1/2'>
        <h1 className='font-bold text-3xl '>{solution.title}</h1>
        <p>{solution.description}</p>
      </div>
    </div>
  );
};


CompareCard.propTypes = {
  challenge: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired, 
  solution: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};


export default CompareCard;
