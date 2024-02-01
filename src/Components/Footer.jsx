import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-[5%] max-w-[1400px] w-full  bg-[#121212] rounded-t-[40px] mt-28">
        <div className="py-12">
          <div className=" flex gap-8 justify-between mt-4">
            <div>
              <div className="flex items-center mb-20">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[52px] h-[52px] cursor-pointer mr-[10px]"
                />
                <p className="text-white font-bold text-4xl	">LevelUp</p>
              </div>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-24 text-white  ">
                <div className="flex  flex-col gap-5	duration-[0.45s]">
                  <p className="font-bold pl-2 ">Pages</p>
                  <a
                    href="/about"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Contact us
                  </a>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="font-bold pl-2 ">Resources</div>
                  <a
                    href="#"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Contact us
                  </a>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="font-bold pl-2 ">Follow Us</div>
                  <a
                    href="#"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a] duration-[0.45s]"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="relative ">
              <div className="absolute top-0 right-0 -translate-y-1/2 flex flex-col gap-6 bg-[#02c2ab] p-10 rounded-2xl">
                <div className="text-black text-[32px] font-bold ">
                  Talk to an Impact Maker
                </div>
                <div className="flex gap-6 justify-between">
                  <input
                    type="text"
                    name="first name"
                    placeholder="First name"
                    className="py-2 px-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="py-2 px-3 rounded-md"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work email"
                  className="py-2 px-3 rounded-md"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="py-2 px-3 rounded-md"
                />
                <input
                  type="text"
                  name="company name"
                  placeholder="Company name"
                  className="py-2 px-3 rounded-md"
                />
                <button
                  type="submit"
                  name="submit"
                  className="text-white bg-black py-3 px-6 rounded-3xl hover:transform translate-y-[-4px] hover:shadow-md"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4 mt-20 border-t-[1px]">
            <p className="text-white text-sm">
              © 2024 LevelUp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
