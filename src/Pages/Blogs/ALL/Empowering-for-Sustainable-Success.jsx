import React from 'react';
import Quote from '../../../Components/Blog/Quote'
import H1 from '../../../Components/Blog/H1'
import image from '../../../../public/assets/images/blogs/blog_1.jpg';
import { Link } from 'react-router-dom';
import BlogCard from '../../../Components/BlogCard/BlogCard';

const blogTitle = 'How to improve Web Design Process';
const writerName = 'Deepa';
const publishDate = 'December 24, 2023';
const publishTime = '5 min';
const imgSrc = image;
const blogs = [
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Deepa",
    date: "February 3, 2024",
    readingTime: "5 min read",
    link: "/blog/sample-blog-1",
  },
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Deepa",
    date: "February 5, 2024",
    readingTime: "8 min read",
    link: "/blog/sample-blog-2",
  },
  {
    img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
    title: "Sample Blog Title 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Deepa",
    date: "February 7, 2024",
    readingTime: "10 min read",
    link: "/blog/sample-blog-3",
  },
];


const Body = () => (
  <div className='flex flex-col gap-4'>
  <H1 text="Empowering for Sustainable Success: Navigating Complexities and Driving Unified Action" />
  <p>
    In today's business landscape, the responsibility of driving sustainability initiatives often falls on the CEO. However, the success of these endeavors heavily relies on the collective efforts of the leadership team. To avoid any accusations of Greenwashing, it's crucial for the business leaders to actively participate in monitoring and tracking sustainability goals within their respective teams.
  </p>

  <p>
    However, achieving a truly sustainable future requires more than just good intentions. The realm of sustainability is vast, encompassing various regulatory requirements and influenced by the ever-changing political landscape. It is clear that the business leaders need to enhance their skills and knowledge to effectively navigate this terrain.
  </p>

  <p>
    Leading sustainability initiatives calls for leaders to develop a deep understanding of the strategies that align with their organization's goals. They must actively support these initiatives and be accountable for their outcomes. Additionally, it is essential for all leaders to communicate in a unified language and align their thinking to ensure a cohesive and impactful approach.
  </p>

  <p>
    By empowering the business leaders with the necessary knowledge, skills, and alignment, businesses can forge a path towards sustainable success. Together, they can overcome challenges, seize opportunities, and drive positive change for a better future.
  </p>

  <Quote text="At LevelUp, we are committed to supporting business leaders in their sustainability endeavors. Our program will provide them with the necessary knowledge, skills, and alignment to navigate the complexities of sustainability and drive sustainable success. Together, we can create a better future for our businesses, communities, and the planet." />
</div>
);

const BlogTemplete = () => {
  return (
    <div className='w-full flex justify-center'>
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
      {/* <div>
        <div className="flex justify-between">
          <h1 className='font-bold text-[28px] my-7'>You may also like</h1>
          <Link to="/blog" className="text-[#121212] pb-1 border-b border-b-[#121212]">View all</Link>
        </div>
        <div className="flex flex-wrap mb-10">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div> */}
    </div></div>
  );
}

export default BlogTemplete;
