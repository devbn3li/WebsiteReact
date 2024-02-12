import React from 'react';
import PropTypes from 'prop-types';


const CompareCard = ({ challenge, solution }) => {
  return (
    <div className='flex bg-whtie/20 rounded-lg w-full h-full box-border max-[900px]:flex-col group'>
      <div className='relative max-[900px]:w-full max-[900px]:h-1/2 h-full gap-4 flex flex-col min-[900px]:group-hover:border-r-4 max-[900px]:group-hover:border-b-4 transition-all box-border max-[900px]:group-hover:-mt-2 min-[900px]:group-hover:-ml-2 text-[#0e3462] font-semibold bg-white/20 border-r-2 border-[#0e3462] max-[900px]:border-r-0 max-[900px]:border-b-2 rounded-[0%_100%_10%_50%/100%_0%_100%_0%] max-[900px]:rounded-[100%_0%_100%_0%/0%_100%_10%_50%] p-8 w-1/2'>
        <div className="aspect-square absolute bottom-1/2 translate-y-1/2 translate-x-1/2 max-[900px]:right-1/2 max-[900px]:translate-x-1/2 max-[900px]:translate-y-[50%] max-[900px]:bottom-0 hover:shadow-md right-0 rounded-full text-white border-2 bg-[#0e3462] border-[#0e3462] font-bold p-3 text-xl cursor-pointer hover:scale-105 transition-all z-10">VS</div>
        <h1 className='font-bold text-3xl'>{challenge.title}</h1>
        <p>{challenge.description}</p>
      </div>
      <div className='max-[900px]:w-full h-full gap-4 flex flex-col max-[900px]:h-1/2 text-[#0e3462] font-semibold p-8 rounded-r-full w-1/2 max-[900px]:group-hover:-mb-10 transition-all box-border min-[900px]:group-hover:-mr-6'>
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
