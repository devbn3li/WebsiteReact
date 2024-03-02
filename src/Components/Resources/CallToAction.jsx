import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className=" px-[5%] max-w-[1400px] mx-auto">
      <div className="bg-[#02c2ab] text-white p-6 md:p-12 text-center rounded-lg shadow-lg my-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Take Your Experience to the Next Level?
        </h2>
        <p className="mb-6 text-xl">
          Join our premium community today and unlock exclusive benefits,
          features, and content to boost your productivity and enjoyment.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#02c2ab] font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
