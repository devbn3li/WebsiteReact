import React, { useState } from "react";

function Yammy() {
const [cookies, setCookies] = useState(localStorage.getItem("cookiesAccepted") === "false" ? false : true);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setCookies(false);
    }
  };

  return (
    <div className=' '>
    <div
  className='fixed left-5 max-w-[700px] bg-[#baede7] rounded-3xl overflow-hidden shadow-2xl bottom-20 z-40 sm:left-auto sm:right-5 sm:max-w-[90vw] lg:left-10 lg:right-auto lg:max-w-[30vw]'
  data-x-data='{cookies: true}'
  data-x-init='$watch("cookies", o => !o &amp;&amp; window.setTimeout(() => (cookies = true), 1000)); setTimeout(() => cookies = true, 1500)'
  onKeyDown={handleKeyDown}>
  <div style={{ display: cookies ? "block" : "none" }}>
    {/* Text */}
    <div className=''>
      <div className='relative  overflow-hidden px-8 pt-8'>
        <div className="absolute top-4 right-4 z-40">
          <img src='/assets/images/logo.png' className="h12 w-12 drop-shadow-3xl shadow-[#baede7]" />
        </div>
        <div
          width={80}
          height={77}
          className='absolute -top-10 -right-10 text-[#02c2ab]'>
          <svg
            width={120}
            height={119}
            viewBox='0 0 120 119'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              opacity='0.3'
              d='M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z'
              fill='currentColor'
            />
          </svg>
        </div>
        <div className='text-2xl text-[#112b65]  flex flex-col pb-4'>
          <small>Hello there..</small>
          <span className='text-3xl font-bold'>We are the Cookies !</span>
        </div>
        <div className='pb-4 text-[#112b65] '>
          <p>
            We use cookies to enhance your browsing experience and collect
            analytics data to improve our website. By using our site, you
            consent to our use of cookies. To learn more, please read our
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
    {/* Buttons */}
    <div className='w-full flex justify-center items-center border-t border-solid border-[#112b65]/20 '>
      <button
        className='border-r text-[#112b65]  border-[#112b65]/20 flex-1 px-4 py-3  hover:text-white hover:bg-red-400 duration-150'
        onClick={() => {
          setCookies(false);
          localStorage.setItem("cookiesAccepted", false);
        }}>
        No thanks!
      </button>
      <button
        className='flex-1 px-4 py-3 text-[#112b65]  hover:text-white hover:bg-green-400 duration-150'
        onClick={() => {
          setCookies(false);
          localStorage.setItem("cookiesAccepted", true);
        }}>
        Of course
      </button>
    </div>
  </div>
  {/* Button */}
  <button
    className='fixed left-4 bottom-2 uppercase text-sm px-4 py-3 bg-gray-900 text-white rounded-full'
    onClick={() => setCookies(!cookies)}>
    Cookies
  </button>
</div>
    </div>
  );
}

export default Yammy;
