import React, { useState } from "react";

function Yammy() {
  const [cookies, setCookies] = useState(
    localStorage.getItem("cookiesAccepted") === "false" ? false : true
  );

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setCookies(false);
    }
  };

  return (
    <div>
      <div
        className="fixed inset-x-0 bottom-20 max-w-full bg-[#baede7] rounded-t-3xl overflow-hidden shadow-2xl z-40 sm:rounded-3xl sm:max-w-[90vw] md:max-w-[700px] md:left-5 md:right-5 lg:max-w-[30vw] lg:left-10 lg:right-auto"
        onKeyDown={handleKeyDown}
      >
        <div style={{ display: cookies ? "block" : "none" }}>
          {/* Text */}
          <div>
            <div className="relative overflow-hidden px-8 pt-8">
              <div className="absolute top-4 right-4 z-40">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="h-12 w-12 drop-shadow-3xl shadow-[#baede7]"
                />
              </div>
              <div
                className="absolute -top-10 -right-10 text-[#02c2ab]"
              >
                {/* SVG code remains the same */}
              </div>
              <div className="text-2xl text-[#112b65] flex flex-col pb-4">
                <small>Hello there..</small>
                <span className="text-3xl font-bold">We are the Cookies !</span>
              </div>
              <div className="pb-4 text-[#112b65]">
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
          <div className="w-full flex justify-center items-center border-t border-solid border-[#112b65]/20">
            <button
              className="border-r text-[#112b65] border-[#112b65]/20 flex-1 px-4 py-3 hover:text-white hover:bg-red-400 duration-150"
              onClick={() => {
                setCookies(false);
                localStorage.setItem("cookiesAccepted", "false");
              }}
            >
              No thanks!
            </button>
            <button
              className="flex-1 px-4 py-3 text-[#112b65] hover:text-white hover:bg-green-400 duration-150"
              onClick={() => {
                setCookies(true);
                localStorage.setItem("cookiesAccepted", "true");
              }}
            >
              Of course
            </button>
          </div>
        </div>
        {/* Button - This button will be hidden on mobile screens */}
        <button
          className="hidden md:fixed md:flex left-4 bottom-2 uppercase text-sm px-4 py-3 bg-[#002e70] text-white rounded-full"
          onClick={() => setCookies(!cookies)}
        >
          Cookies
        </button>
      </div>
    </div>
  );
}

export default Yammy;
