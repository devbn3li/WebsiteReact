import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";
import image from "/assets/images/blogs/blog_2.png";

const TopRecommendedBlog = () => {
  useEffect(() => {
    Aos.init({ once: true, mirror: false });
  }, []);

  // Directly using fixed blog details
  const title =
    "Empowering business leaders for Sustainable Success: Navigating Complexities and Driving Unified Action"; // Replace with your actual blog title
  const summary = "In today's business landscape, the responsibility of driving sustainability initiatives often falls on the CEO. However, the success of these endeavors heavily relies on the collective efforts of the leadership team. it's crucial for the business leaders to actively participate in monitoring and tracking sustainability goals within their respective teams...."; // Replace with your actual summary
  const hashtag = "Sustainablity"; // Replace with your actual hashtag

  return (
    <section className="my-20 px-[5%] max-w-[1400px] mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-[#112b65]">
        Top Recommended Blog
      </h2>
      <p className="text-center mb-10 text-[#002E70]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquam reprehenderit rerum id, quod eius, laudantium distinctio, voluptatum et corporis impedit. Ipsam maxime ullam suscipit obcaecati sequi aliquam maiores natus.
      </p>
      <div className="group mx-auto p-6 bg-white rounded-xl shadow-lg overflow-hidden text-[#002E70] hover:bg-[#02c2ab]/20 transition duration-500 ease-in-out">
        <Link
          to={`/academy/blogs/1`}
          className="flex max-md:flex-col max-md:overflow-hidden gap-10"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div className="relative">
            {/* Badge for Top Recommended */}
            <div className="absolute group-hover:pr-6 duration-300 z-10 top-0 right-0 bg-[#02c2ab] text-white py-1 px-3 rounded-bl-lg">
              Top Recommended
            </div>
            <img
              src={image}
              alt={title}
              className="object-cover"
            />
          </div>
          <div className="">
            <div className="text-sm font-medium py-1 px-3 mb-4 inline-block rounded-full bg-[#02c2ab]/20 text-[#02c2ab]">
              #{hashtag}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-[#002E70]/80 mb-2">{summary}</p>
            <a
              href={`/academy/blogs/1`}
              className="text-[#02c2ab] hover:underline group-hover:pl-2 duration-300"
            >Read more</a>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopRecommendedBlog;
