import React from 'react';

const BlogCard = ({ blog }) => {
  // Destructure the blog object
  const { img, title, description, author, date, readingTime, link } = blog;


  return (
    <a href={link} className="block w-full rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300 ease-in-out">
      <div className="relative p-4 overflow-hidden">
        <img src={img} alt={title} className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform object-cover scale-100 hover:scale-110" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-600">
          <p className='font-semibold	text-[#121212]'>{author}</p>
          <p>{date} • {readingTime}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
