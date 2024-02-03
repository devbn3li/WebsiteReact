import React from 'react';
import Quote from '../../Components/Blog/Quote'
import H1 from '../../Components/Blog/H1'
import H2 from '../../Components/Blog/H2'
import image from '../../../public/assets/images/blogs/blog_1.jpg';
import { Link } from 'react-router-dom';
import BlogCard from '../../Components/BlogCard/BlogCard';

const blogTitle = 'How to improve Web Design Process';
const writerName = 'John Doe';
const publishDate = 'December 24, 2023';
const publishTime = '5 min';
const imgSrc = image;
const blogs = [
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    date: "February 3, 2024",
    readingTime: "5 min read",
    link: "/blog/sample-blog-1",
  },
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith",
    date: "February 5, 2024",
    readingTime: "8 min read",
    link: "/blog/sample-blog-2",
  },
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Alice Johnson",
    date: "February 7, 2024",
    readingTime: "10 min read",
    link: "/blog/sample-blog-3",
  },
];


const Body = () => (
  <div className='flex flex-col gap-4'>
    <H1 text="Quis earum blanditiis assumenda totam." />
    <p>Molestias reiciendis aliquam vel quis. Eum similique omnis. Voluptatem est atque atque temporibus corporis minus in alias nihil.</p>
    <H2 text='Animi tempora rerum numquam sed dolorum.' />
    <Quote text="Qui nam ut sequi eaque excepturi numquam ea eum consequatur. Accusamus tenetur officiis. Esse dolorem necessitatibus dolores dolorem qui quasi." />
    <p> Quo consequatur ea doloribus cumque dolor unde quibusdam. Veniam quia vitae. Eaque sed eius consequatur aliquam illo assumenda. Vel quia omnis non et aliquid facere magnam fuga. Ipsa et id beatae quo totam quis. Id quaerat accusamus excepturi occaecati ipsam praesentium velit corrupti consequatur.
        Et non ratione. Earum id aliquid possimus. Modi ut sint enim deleniti nobis sint non eligendi. Sit cumque facere et sapiente.
    </p>
    <H1 text="Beatae voluptatem dignissimos" />
    <p>Quidem amet nihil. Neque blanditiis aspernatur. Ipsam neque et fugiat aperiam quae illo. Qui quod illum aperiam dolorem fugiat et est.</p> 
    <H2 text="Aut quos sunt laborum magni sed nemo corporis non."/>
    <Quote text='Voluptate explicabo dolorem. Voluptatibus quasi quis perspiciatis inventore eos vitae sunt quod repellat. Omnis ducimus aliquam quia doloribus. Aut commodi repellat in ea.'/>
    <p> Repellat qui voluptates debitis. Voluptatem possimus ratione ex quod quis et hic vel. Veritatis doloribus quibusdam est. Sit voluptatem dolorem explicabo voluptatum quae ea a. Totam excepturi animi. Ratione quo aut totam.
        Vel tempora eveniet molestiae repellendus veniam quam. Odio vel sunt quaerat eius. Et aliquam doloremque omnis quia voluptatibus. Soluta dolorem laudantium ab quia provident laborum neque. In et autem quas dignissimos nostrum laboriosam in fugit sed. Consequuntur et voluptatem illo sunt voluptatem nesciunt iste est non.
    </p>
  </div>
);

const BlogTemplete = () => {
  return (
    <div className='flex flex-col box-border px-[5%] items-center mt-[4.5rem] text-[#121212] max-w-[1400px]'>
      <div className='flex flex-col max-w-[80rem] mt-24 gap-[40px] pb-[40px]'>
        <H1 text={blogTitle} />
        <div>
          <h4>{writerName}</h4>
          <span>{publishDate} • {publishTime}</span>
        </div>
      </div>
      <div className='overflow-hidden rounded-xl mb-24 aspect-[2/1] '>
        <img src={imgSrc} alt={blogTitle} className="min-h-full min-w-full object-cover" />
      </div>
      <div className='max-w-[80rem]'>
        <Body />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className='font-bold text-[28px] my-7'>You may also like</h1>
          <Link to="/blog" className="text-[#121212] pb-1 border-b border-b-[#121212]">View all</Link>
        </div>
        <div className="flex flex-wrap">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogTemplete;
