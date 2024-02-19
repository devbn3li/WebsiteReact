import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from 'react-router-dom';

const LatestNews = () => {
  useEffect(() => {
    Aos.init({ once: true, mirror: false });
  }, []);

  // Static news items
  const newsItems = [
    { id: 1, title: "News Item 1", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link: "/news/1" },
    { id: 2, title: "News Item 2", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link: "/news/2" },
    { id: 3, title: "News Item 3", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link: "/news/3" },
  ];

  return (
    <section className="my-8 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-[#002E70]">Our Latest News</h2>
      <div className="flex max-md:flex-col gap-10 justify-center  ">
        {newsItems.map((newsItem) => (
          <div key={newsItem.id} className="group block md:w-[25%] max-md:px-[5%]" data-aos="fade-up" data-aos-duration="1600">
            <div className='group block p-4 bg-white border-l-2 hover:border-2 border-[#02c2ab] rounded-lg shadow-lg overflow-hidden text-[#002E70] hover:bg-[#02c2ab]/20 transition duration-500 ease-in-out'>
              <h3 className="text-lg font-bold mb-2">{newsItem.title}</h3>
              <p className="text-[#002E70]">{newsItem.summary}</p>
              {/* Optionally, use a Link or a simple anchor tag for navigation */}
              <a href={newsItem.link} className="text-[#02c2ab] hover:underline group-hover:pl-2 duration-500">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
