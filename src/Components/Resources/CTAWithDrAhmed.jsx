import React from "react";
import { Link } from "react-router-dom";

const CTAWithDrAhmed = () => {
  const title = "Unlock Exclusive Insights from Dr. Ahmed";
  const message =
    "Join our premium community to access personalized content, in-depth analysis, and unique resources curated by Dr. Ahmed.";
  const buttonLink = "/contact";
  const buttonText = "Subscribe Now";

  return (
    <div className="max-md:px-[5%]">
      <div className="mx-auto max-w-4xl bg-gradient-to-r from-[#1C4987] to-[#159D9B] text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <Link
          to={buttonLink}
          className="inline-block bg-white text-[#159D9B] font-bold py-2 px-6 rounded hover:bg-[#02c1aa] hover:text-white transition-colors duration-200 ease-in-out"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTAWithDrAhmed;
