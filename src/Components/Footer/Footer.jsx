import Logo from "../../../public/assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-[5%] bg-[#121212] rounded-t-[40px] mt-64 w-full max-w-[1400px]">
        <div className="py-12">
          <div className=" flex gap-8 justify-between mt-4 max-[991px]:flex-col-reverse">
            <div className="max-[479px]:flex max-[479px]:flex-col max-[479px]:items-center">
              <div className="flex items-center mb-6 lg:mb-20">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[52px] h-[52px] cursor-pointer mr-[10px]"
                />
                <p className="text-white font-bold text-4xl	">LevelUp</p>
              </div>
              <div className="flex flex-wrap md:flex-row gap-6 lg:gap-24 text-white max-[991px]:justify-evenly  ">
                <div className="flex flex-col gap-5	duration-[0.45s]">
                  <p className="font-bold pl-2 ">Pages</p>
                  <Link
                    to="/about"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    About us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="font-bold pl-2 ">Resources</div>
                  <Link
                    to="/legal/PrivacyPolicy"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    to="/legal/Cookies"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a]	duration-[0.45s]"
                  >
                    Cookie policy
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="font-bold pl-2 ">Follow Us</div>
                  <a
                    href="https://www.linkedin.com/company/levelupesg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#2a2a2a] duration-[0.45s]"
                  >
                    LinkedIn
                  </a>

                </div>
              </div>
            </div>
            <div className="lg:relative max-[991px]:h-72" id="contact">
              <div className="lg:absolute top-0 right-0 -translate-y-1/2 flex flex-col gap-6 bg-[#02c2ab] p-10 rounded-2xl">
                <div className="text-black text-[32px] font-bold ">
                  Talk to an Impact Maker
                </div>
                <form 
                  action="https://formsubmit.io/send/fae7788e-a910-41c2-a882-d5ba4dd4acf4"
                className="flex gap-6 max-[991px]:flex-col lg:justify-between">
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
                </form>
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
          <div className="flex flex-col gap-3 justify-around items-center md:items-end md:justify-end pt-4 mt-6 lg:mt-20 border-t-[1px]">
            <div className="md:hidden"></div>
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
