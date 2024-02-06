import SVG from "./SVG"


function index() {
  return (
    <div className='flex justify-center w-full'>
 <div className='w-full max-w-[1400px]'>
       {/* Browser frame mockup */}
       <div className="relative ">
      {/* Toolbars */}
      <div className="w-full">
        <div className="bg-[#02c2ab] border border-black rounded-t-lg flex items-stretch">
          <div className="px-4 pt-4 pb-3 mr-4 text-sm flex-0 text-gray-400 whitespace-no-wrap">
            <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block" />
            <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block" />
            <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block" />
          </div>
          <div className="relative px-4 py-2 mt-2 -mb-px flex-0 border-t border-black bg-gray-100 rounded-t-lg">
            {/* Left side of tab */}
            <div
              className="absolute bottom-0 w-4 h-8 border-b border-r border-black bg-[#02c2ab] rounded-br-lg sh"
              style={{ right: "100%" }}
            />
            {/* Tab text */}
            <div className="text-sm overflow-hidden pt-1 w-56 whitespace-no-wrap ">
              LevelUp Dashoard
            </div>
            {/* Tab text fade near end */}
            <span
              className="absolute h-full rounded-tr-lg top-0 right-0 m-px w-1/2"
              style={{
                background:
                  "linear-gradient(to right, rgba(247, 250, 252, 0.0) 0%,rgb(247, 250, 252) 80%)"
              }}
            />
            {/* Tab close button */}
            <div className="text-gray-500 absolute top-0 right-0 pt-3 pr-2 text-xs">
              {/* <i class="fas fa-times-circle"></i> */}
              <svg
                className="mx-px w-4 h-4 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* Right side of tab */}
            <div
              className="absolute bottom-0 w-4 h-8 border-b border-l border-black bg-[#02c2ab] rounded-bl-lg sh"
              style={{ left: "100%" }}
            />
          </div>
        </div>
        <div className="bg-gray-100 border-l border-r border-b border-black flex flex-row py-2">
          <div className="px-4 py-2 flex-0 text-gray-400 whitespace-no-wrap">
            {/* <i class="mx-1 fas fa-arrow-left"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* <i class="mx-1 fas fa-arrow-right"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* <i class="mx-1 fas fa-sync"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="px-4 py-2 my-auto flex-1 border border-black bg-white rounded-md whitespace-no-wrap overflow-hidden">
            https://dash.levelupesg.co/Solutions/ESGPulse
          </div>
          <div className="px-4 py-2  flex-0 text-gray-400 whitespace-no-wrap">
            {/* <i class="mx-1 fas fa-download"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* <i class="mx-1 fas fa-user-circle"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            {/* <i class="mx-1 fas fa-bars"></i> */}
            <svg
              className="mx-px w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Faux Sides */}
      <div className="absolute  left-0 border-l border-r border-black h-16 w-full" />
    </div>
    {/* Page Content  */}
    <div className="w-full relative">
      <div className="container relative text-center">
  
      <SVG/>
      </div>
    </div>
 </div>















 
  </div>
  
  )
}

export default index