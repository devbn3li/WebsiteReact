import React from "react";

const ImgCompo = ({ img, title, description }) => {
  return (
    <div className="px-[5%] py-20">
      <h2 className="text-5xl text-center font-extrabold text-[#112b65] mb-8">{title}</h2>
      <p className="text-2xl text-center text-[#112b65] mb-6">{description}</p>
      <img src={img} alt={title} className="w-full" />
    </div>
  );
};

export default ImgCompo;
