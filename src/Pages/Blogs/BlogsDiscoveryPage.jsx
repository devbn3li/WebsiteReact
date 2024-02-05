import React from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {
  // Array of blog objects
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

  return (
    <div className="container mx-auto py-8 mt-20 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
