import React from 'react'

function WorkShopCards(props) {
  return (
    <div>
        <div className="p-10">
  <div className="relative max-w-7xl mx-auto">
    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
      <div className="flex-1 px-6 py-8 lg:p-12 bg-gray-600">
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
          <ul
            role="list"
            className="mt-8w-full  "
          >
            <ul role="list" className="mt-8 justify-between flex-wrap  w-full flex ">
                {props.topics && props.topics.map((topic, index) => (
                    <li key={index} className="flex items-start lg:col-span-1">
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
      <div className="text-center relative min-h-[300px] min-w-[300px] aspect-square lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center  bg-gray-700">
<div 
style={{backgroundImage: `url(${props.image})`}}

className=' h-full w-full'>
<img 
className="h-full w-full object-cover"
 src={props.image} alt="Course image" />

</div>
        {/* <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
          <span>$19.99</span>
          <span className="ml-3 text-xl font-medium text-gray-50">USD</span>
        </div> */}
        <div className="absolute bottom-4 left-0 grid place-content-center  right-0">
         <div className='w-full'>
         <div className="rounded-md max-w-[200px] shadow">
            <a
              href="#"
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
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
  )
}

export default WorkShopCards