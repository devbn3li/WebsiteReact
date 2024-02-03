import React from 'react';
import image from '../../../public/assets/images/blogs/blog_1.jpg';

const blogTitle = 'How to improve Web Design Process';
const writerName = 'John Doe';
const publishDate = 'December 24, 2023';
const publishTime = '5 min';
const imgSrc = image;
const Body = () => (
  <div className='flex flex-col gab-4'>
    <h1 className=''>Quis earum blanditiis assumenda totam.</h1>
    
  </div>
);

const BlogTemplete = () => {
  return (
    <div className='flex flex-col items-center mt-[4.5rem] text-[#121212] text-[44px]'>
      <h1 className='font'>{blogTitle}</h1>
      <div>
        <h4>{writerName}</h4>
        <span>{publishDate} • {publishTime}</span>
      </div>
      <div>
        <img src={imgSrc} alt={blogTitle} />
      </div>
      <Body />
    </div>
  );
}

export default BlogTemplete;
