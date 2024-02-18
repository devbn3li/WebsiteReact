import React from "react";
import SearchBar from "./SearchBar";
import BlogCardsResource from "./BlogCardsResource";

function BlogView() {
  return (
    <div className="my-[2rem]">
      <div className="py-[2rem]">
        <div className="md:w-[50%] max-md:px-[5%] text-center mx-auto mb-10">
          <h1 className="text-center font-bold text-4xl mb-5">Title</h1>
          <p className="leading-[1.5] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row  gap-5 w-[95%] mx-auto">
          <div className="w-[80%] mx-auto md:w-[30%]">
            <SearchBar />
          </div>
          <div className="w-full mx-auto md:w-[70%]">
            <BlogCardsResource />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
