import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from 'react-router-dom';

const TopBlogCard = ({ blog }) => {
  useEffect(() => {
    Aos.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // Destructure the blog objec
  const { _id, title, image, summary, keywords } = blog;

  return (
    <Link
      to={`/academy/blogs/${_id}`}
      className="block"
      data-aos="zoom-in-out"
      data-aos-duration="1600"
    >
      <div className='group block p-4 w-full  rounded-lg overflow-hidden text-[#002E70]'>
        <div className="rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-80 object-cover rounded-2xl" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title.slice(0, 100) + (title.length > 100 && '...')}</h2>
          <p className="text-[#002E70]/80 mb-4 ">{summary.slice(0, 100) + (summary.length > 100 && '...')}</p>
          {/* <div className="text-sm text-[#002E70]">
            <p>reading time {readingTime}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default TopBlogCard;
