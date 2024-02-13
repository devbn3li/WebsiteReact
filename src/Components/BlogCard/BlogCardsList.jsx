import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import SolutionHero from "../Hero_Services/Hero_Services";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function BlogCardsList() {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

 // Array of blog objects
 const blogs = [
  {
    "_id": 0,
    "title": "Exploring the Future of Technology",
    "image": "/assets/images/business-people-shaking-hands-together.avif",
    "keywords": ["Technology", "Innovation"],
    "summary": "A deep dive into how emerging technologies are shaping our future."
  },
  {
    "_id": 1,
    "title": "The Impact of Globalization on Local Cultures",
    "image": "/assets/images/business-people-shaking-hands-together.avif",
    "keywords": ["Globalization", "Culture"],
    "summary": "An analysis of globalization's effects on the preservation of local cultural identities."
  },
  {
    "_id": 2,
    "title": "Sustainable Living: Practices for a Healthier Planet",
    "image": "/assets/images/business-people-shaking-hands-together.avif",
    "keywords": ["Sustainability", "Environment"],
    "summary": "Practical tips for living in a way that supports environmental sustainability."
  }
];

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
