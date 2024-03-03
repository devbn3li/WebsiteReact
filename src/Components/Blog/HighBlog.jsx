import React from "react";
import img from "/assets/wmn.png";
import PrimaryButton from "../Buttons/PrimaryButton";

const HighBlog = () => {
  return (
    <div className="container mx-auto mt-28 px-4 sm:px-[5%]">
      <div className="relative">
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-[40%] bg-[#002E70] max-md:px-[5%] pt-4 md:pt-10 md:pl-10">
            <span className="text-white mb-2 block">Newest Blog • 5 min</span>
            <h1 className="text-3xl sm:text-5xl text-white font-bold mb-4">
              How to be a successful
            </h1>
            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus magnam ab aliquam
            </p>
            <PrimaryButton title="Read more" classes="max-md:mb-6" />
          </div>
          <div className="w-full sm:w-[60%]">
            <img src={img} alt="women" />
          </div>
        </div>
        <div className="px-4 sm:px-[5%]">
          <div className="relative bg-[#02c2ac] mt-[-100px] z-10 rounded-3xl p-4 md:p-8">
            <div className="flex flex-wrap justify-between mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#002E70] max-md:text-center">
                Blog Stufsus
              </h2>
              <div className="flex  max-md:flex-col gap-6">
                <input
                  type="search"
                  name="search"
                  id="1"
                  placeholder="Search"
                  className="rounded-full p-2 px-3 mt-4 sm:mt-0 max-md:w-full"
                />
                <input
                  type="submit"
                  value="Search"
                  className="bg-[#004dbc] cursor-pointer hover:bg-[#004ebcde] text-white rounded-full p-2 px-3"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#002E70] mb-8">
                Top Blogs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  {/* Blog 1 */}
                  <div className="mb-4">
                    <img src={img} alt="" className="rounded-md" />
                  </div>
                  <h3 className="font-bold text-lg">Blog Title 1</h3>
                  <p>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </p>
                </div>
                <div className="space-y-4 sm:col-span-1 sm:grid sm:grid-rows-1 gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
                    {/* Blog 2 */}
                    <div className="sm:w-1/2">
                      <img src={img} alt="" className="w-full h-auto sm:w-[235px] sm:h-[235px] object-cover rounded-2xl" />
                    </div>
                    <div className="sm:w-1/2">
                      <h3 className="font-bold text-lg">Blog Title 2</h3>
                      <p>
                        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
                    {/* Blog 3 */}
                    <div className="sm:w-1/2">
                      <img src={img} alt="" className="w-full h-auto sm:w-[235px] sm:h-[235px] object-cover rounded-2xl" />
                    </div>
                    <div className="sm:w-1/2">
                      <h3 className="font-bold text-lg">Blog Title 3</h3>
                      <p>
                        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighBlog;
