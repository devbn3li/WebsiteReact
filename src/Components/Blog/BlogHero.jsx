import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BlogCard from "../BlogCard/BlogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const BlogHero = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(process.env.BLOG_EXPLORE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(Array.from(data));
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!blogs) return <div>Loading...</div>;
  return (
    <div className="container pt-28 pb-20 mx-auto px-[5%] md:h-[700px]  bg-gradient-to-b from-[#112b65] to-[#02c2ab] rounded-b-[40px]">
      <h1 className="text-center font-bold text-4xl mb-4 text-white">
        Top Selected Blogs for You
      </h1>
      {/* Blog Slider */}
      {blogs && blogs.length > 0 && (
        <div className="mb-8">
          <Slider {...sliderSettings}>
            {blogs.map((blog, index) => (
              <div key={index} className="p-4">
                <BlogCard blog={blog} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default BlogHero;
