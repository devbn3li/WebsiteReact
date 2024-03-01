import React from "react";

function WorkShopCards(props) {
  return (
    <div>
      <div className="p-10">
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-lg mx-auto rounded-3xl shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div className="flex-1 px-6 py-8 lg:p-12 lg:w-8/12 w-full  bg-gradient-to-r from-[#1C4987] to-[#159D9B]">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                {props.title}
              </h3>
              <p className="mt-6 text-base text-gray-50 sm:text-lg">
                {props.description}
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul role="list" className="mt-8w-full  ">
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {props.topics &&
                      props.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-white">{topic}</p>
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>
            </div>
            <div className="text-center overflow-hidden relative lg:w-4/12 w-full  bg-black   min-h-[300px]  lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center  ">
              <img
                className="h-full w-full scale-[150%] object-cover"
                src={props.image}
                alt="Course image"
              />

              {/* <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
          <span>$19.99</span>
          <span className="ml-3 text-xl font-medium text-gray-50">USD</span>
        </div> */}
              <div className="absolute bottom-4 left-0 grid place-content-center  right-0">
                <div className="w-full">
                  <div className="rounded-md max-w-[200px] shadow">
                    <a
                      href="#"
                      className="w-[200px] h-[50px] flex items-center justify-center text-[1.3rem] font-bold rounded-[2.5rem] select-none cursor-pointer text-center bg-[#03C2AB] border border-none transition-all duration-[.45s] py-2 px-5 hover:shadow-[0_4px_16px_rgba(0,0,0,.2)] hover:-translate-y-1 inline-block text-white "
                    >
                      Buy now
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm mt-3">
                    100% money back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkShopCards;
