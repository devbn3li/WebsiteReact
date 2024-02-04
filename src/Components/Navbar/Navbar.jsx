import Logo from "../../../public/assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavbarLink";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { FaLeaf } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
// import Business from './../Business';

// Define navigation links
const NAV_LINKS = [
  { path: "/academy", title: "Academy" },
  { path: "/about", title: "About us" },
  { path: "/contact", title: "Contact us" },
];

const solutions = [
  { path: "/service/esg-controllership", title: "Controllership " },
  { path: "/service/esg-ia-program", title: "IA-program " },
  { path: "/service/esg-governance", title: "Governance " },
  { path: "/service/esg-assurance", title: "Assurance " },
  { path: "/service/strategic-stakeholder", title: "Strategic " },
  { path: "/service/esg-strategy", title: "Strategy " },
  { path: "/service/esg-compliance", title: "Compliance " },
  { path: "/service/erm-program", title: "Program" },
  { path: "/service/esg-diagnostic", title: "Diagnostic " },
  { path: "/service/board-level", title: "Board" },
];

const Navbar = () => {
  // State for mobile navigation drawer
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setServicesActive] = useState(false);
  // const [solution, setSolution] = useState(false);

  // Function to toggle state of mobile navigation drawer
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle menu handling functions
  const toggleServicesActive = () => setServicesActive(!isServicesOpen);
  // const toggleSolution = () => setSolution(!solution);

  return (
    <nav className='bg-white fixed top-0   font-inter m-auto  -translate-x-1/2 z-50 left-1/2 flex justify-center   w-full'>
      <div className='flex justify-between items-center  px-[5%] max-[991px]:px-0 max-w-[1400px]  box-border w-full bg-white h-[4.5rem]'>
        <div className=' z-50 max-[991px]:w-full max-[991px]:flex  max-[991px]:p-[5%] max-[991px]:h-full justify-between items-center'>
          <Link to='/' className='flex gap-[6px]'>
            <img
              className='aspect-square w-[52px]'
              src={Logo}
              alt='LevelUp logo'
            />
            <span className='text-[35px] font-bold inline-block text-[#333]'>
              LevelUp
            </span>
          </Link>
          <button
            className='hidden flex-col aspect-square w-12 justify-center items-center gap-[6px] max-[991px]:flex'
            onClick={() => toggleMenu()}>
            <span
              className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen
                  ? "-rotate-45 translate-y-2 delay-[.35s]"
                  : "rotate-0 translate-y-0"
                } `}></span>
            <span
              className={`h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen ? "w-0" : "w-6 delay-[.35s]"
                } `}></span>
            <span
              className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${isOpen
                  ? "rotate-45 -translate-y-2 delay-[.35s]"
                  : "rotate-0 translate-y-0"
                } `}></span>
          </button>
        </div>
        <div
          className={`flex gap-4 font-bold text-center transition-all duration-[.45s] box-border ${isOpen ? "top-full" : "-top-[100vh]"
            } left-0 z-40 bg-white
                      max-[991px]:flex-col max-[991px]:absolute max-[991px]:w-full max-[991px]:px-[5%] max-w-full max-[991px]:pb-[6.5rem] max-[991px]:h-[calc(100vh-4.5rem)] max-[991px]:text-lg max-[991px]:border-b max-[991px]:border-black
                      `}>
          <div className='flex max-[991px]:flex-col justify-center items-center'>

            {/* Services links */}
            <div className='group cursor-pointer'>
              <div
                className='px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3'>
                Services
              </div>
              <div
                className={`text-white w-screen flex justify-center items-center group-hover:translate-y-0 hover:delay-0 delay-100 translate-y-20 left-1/2 -translate-x-1/2 top-full bg-[#02C2AB] transition-all px-4 box-border border-b-[#3e857d] hover:border-b-4 group-hover:h-[250px] h-0 overflow-hidden max-[991px]:flex-col max-[991px]:hover:h-auto max-[991px]:translate-x-0 min-[991px]:absolute gap-1`}>
                <Link
                  to='/solution'
                  className='h-[130px] max-[991px]:h-[200px] w-1/2 flex justify-center items-center hover:bg-white/10 rounded-xl flex-col gap-2 max-[991px]:w-full'>
                  <span className='text-2xl'>
                    <FaLeaf />
                  </span>
                  <span>ESG services</span>
                </Link>
                <Link
                  to='/solution'
                  className='h-[130px] w-1/2 flex justify-center items-center hover:bg-white/10 rounded-xl flex-col gap-2 max-[991px]:w-full'>
                  <span className='text-2xl'>
                    <IoEarthSharp />
                  </span>
                  <span>Business Services</span>
                </Link>
              </div>
            </div>


            {/* Solutions links */}
            <div
              className='group cursor-pointer'
              onClick={toggleServicesActive}
            >
              <div className='px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3'>
                Solutions
              </div>
              <div
                className={`w-[250px]  bg-[#03C2AB] overflow-hidden flex flex-col justify-center px-4 min-[991px]:shadow-lg max-[991px]:w-screen group-hover:h-[360px] transition-all min-[991px]:rounded-3xl min-[991px]:absolute ${isServicesOpen ? "h-[360px]" : "h-0"
                  }`}>
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => {
                      setServicesActive(false);
                    }}
                    className='block text-[#fff] duration-500 hover:text-gray-600 py-1'>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>


            {/* Other links */}
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={index}
                path={link.path}
                title={link.title}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
          {/* CTA Button */}
          <PrimaryBtn path='/contact' title='Make an Impact' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
