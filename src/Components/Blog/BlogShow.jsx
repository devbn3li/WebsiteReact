import React, { useState } from "react";
import BlogCard from "../BlogCard/BlogCard"; 
import PrimaryButton from "../Buttons/PrimaryButton";

// Assuming you have a blogs array already available. If not, you'll need to fetch or import this data.
const blogs = [
  {
    _id: "1",
    title: "Blog Title 1",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 1",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "2",
    title: "Blog Title 2",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 2",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "3",
    title: "Blog Title 3",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 3",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "4",
    title: "Blog Title 4",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 4",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "5",
    title: "Blog Title 5",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 5",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "6",
    title: "Blog Title 6",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 6",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "7",
    title: "Blog Title 7",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 7",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "8",
    title: "Blog Title 8",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 8",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "9",
    title: "Blog Title 9",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 9",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "10",
    title: "Blog Title 10",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 10",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "11",
    title: "Blog Title 11",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 11",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "12",
    title: "Blog Title 12",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 12",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "13",
    title: "Blog Title 13",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 13",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "14",
    title: "Blog Title 14",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 14",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "15",
    title: "Blog Title 15",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 15",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "16",
    title: "Blog Title 16",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 16",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "17",
    title: "Blog Title 17",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 17",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "18",
    title: "Blog Title 18",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 18",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "19",
    title: "Blog Title 19",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 19",
    keywords: ["keyword1", "keyword2"],
  },
  {
    _id: "20",
    title: "Blog Title 20",
    image: "https://via.placeholder.com/300",
    summary: "Blog Summary 20",
    keywords: ["keyword1", "keyword2"],
  },
];

const BlogShow = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const handleShowMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 9);
  };

  return (
    <div className="container px-[5%] mt-20 mx-auto">
      <h2 className="text-center text-5xl font-bold text-[#002E70] mb-4">
        Learn from our impact makers
      </h2>
      <p className="text-center text-2xl  text-[#002E70] mb-4">
        Our blog is a great resource for learning about the latest trends in
        sustainability, ESG, and corporate governance.
      </p>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, visibleBlogs).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      {visibleBlogs < blogs.length && (
        <div className="text-center mt-4">
          <PrimaryButton onCLick={handleShowMoreBlogs} title={"More Blogs"}/>
        </div>
      )}
    </div>
  );
};

export default BlogShow;
