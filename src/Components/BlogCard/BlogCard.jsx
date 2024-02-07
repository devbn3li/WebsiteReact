import React from 'react';

const BlogCard = ({ blog }) => {
  // Destructure the blog object
  const { img, title, description, author, date, readingTime, link } = blog;


  return (
    <a href={link} className="block p-4 w-full rounded-lg overflow-hidden text-[#002E70] hover:bg-[#02c2ab]/20 transition duration-500 ease-in-out">
      <div className="rounded-lg  overflow-hidden ">
        <img src={img} alt={title} className="w-full h-auto transition-transform duration-300 ease-in-out transform object-cover scale-100 hover:scale-110" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-[#002E70]/80 mb-4">{description.slice(0, 90)}...</p>
        <div className="text-sm text-[#002E70]">
          {/* <p className='font-semibold	text-[#121212]'>{author}</p> */}
          <p>{date} • {readingTime}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
