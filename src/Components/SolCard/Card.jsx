import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="reason-link transition duration-500 hover:bg-[#02c2ab] transform hover:scale-95 rounded-md p-4 text-center">
      <h3 className=" text-base text-[#121212] font-semibold">{title}</h3>
    </div>
  );
};

export default Card;
