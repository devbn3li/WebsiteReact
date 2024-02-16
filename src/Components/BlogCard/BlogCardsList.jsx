import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import SolutionHero from "../Hero_Services/Hero_Services";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function BlogCardsList() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    
    fetch(process.env.BLOG_EXPLORE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(Array.from(data));
      })
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="container text-[#002E70]  mx-auto py-8 mt-20 px-[5%]"
    >
      <SolutionHero
        title={"Learn from our impact makers"}
        subtitle={
          "Our blog is a great resource for learning about the latest trends in sustainability, ESG, and corporate governance."
        }
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogCardsList;
