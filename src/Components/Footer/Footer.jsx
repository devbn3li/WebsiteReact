import Logo from "../../../public/assets/images/logo.png";
import { Link } from "react-router-dom";
import reward from "../../../public/assets/images/pngwing.com.png"
import reward2 from "../../../public/assets/images/innovator-international-white.png"
import reward3 from "../../../public/assets/images/home-office-logo-0F594C8106-seeklogo.com.png"
import reward4 from "../../../public/assets/images/reward.svg"

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="w-full flex justify-center">
      <div className="px-[5%] bg-gradient-to-r from-[#112b65] to-[#02c2ab] rounded-t-[40px] mt-64 w-full max-w-[1400px]">
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
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#238f99]/60 hover:backdrop-blur-md	duration-[0.45s]"
                  >
                    About us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#238f99]/60 hover:backdrop-blur-md	duration-[0.45s]"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="font-bold pl-2 ">Resources</div>
                  <Link
                    to="legal/privacy-policy"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#238f99]/60 hover:backdrop-blur-md	duration-[0.45s]"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    to="/legal/Cookies"
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#238f99]/60 hover:backdrop-blur-md	duration-[0.45s]"
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
                    className="text-sm w-fit rounded-md py-1 px-2 hover:bg-[#238f99]/60 hover:backdrop-blur-md duration-[0.45s]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:relative max-[991px]:h-72" id="contact">
              <div className="lg:absolute top-0 right-0 -translate-y-1/2 flex flex-col gap-6 bg-[#238f99]/60 backdrop-blur-md p-10 rounded-2xl">
                <div className="text-white text-[32px] font-bold ">
                  Talk to an Impact Maker
                </div>
                <form
                  action="https://formsubmit.io/send/fae7788e-a910-41c2-a882-d5ba4dd4acf4"
                  className="flex gap-6 flex-col max-[991px]:flex-col lg:justify-between"
                >
                  <div className="flex gap-5 max-[991px]:flex-col">
                    <input
                      type="text"
                      name="first name"
                      placeholder="First name"
                      className="py-2 px-3 rounded-md outline-none "
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      className="py-2 px-3 rounded-md outline-none "
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Work email"
                    className="py-2 px-3 rounded-md outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="py-2 px-3 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    name="company name"
                    placeholder="Company name"
                    className="py-2 px-3 rounded-md outline-none"
                  />
                  <button
                    type="submit"
                    name="submit"
                    className="text-white bg-[#3bc9b9] py-3 px-6 rounded-3xl hover:transform translate-y-[-4px] hover:shadow-md"
                  >
                    Book a Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col max-w-2xl:flex-col md:justify-between items-center gap-3 pt-4 mt-6 lg:mt-20 border-t-[1px]">
            <div className="flex gap-4 place-content-center justify-center  ">
              <div className="grid place-items-center ">
                <img
                  className="w-[50px] scale-75"
                  src={reward}
                  alt="Reward logo"
                />
              </div>
              <div className="grid place-items-center  ">
                <img
                  className="w-[100px]"
                  src={reward2}
                  alt=""
                />
              </div>
              <div className="grid place-items-center scale-90">
                <img
                  className="w-[100px]"
                  src={reward3}
                  alt=""
                />
              </div>
              <div className="grid place-items-center ">
                <img
                  className="w-[100px]"
                  src={reward4}
                  alt=""
                />
              </div>
            </div>
            <div>
              <p className="text-white text-sm">
                © {year} LevelUp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
