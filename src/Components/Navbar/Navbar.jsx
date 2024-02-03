import Logo from "../../../public/assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavbarLink";
import PrimaryBtn from "../Buttons/PrimaryBtn";


// Define navigation links
const NAV_LINKS = [
  {
    title: "Services",
    dropdownItems: [
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
    ],
  },  
  { path: "/about", title: "About us" },

  { path: "/contact", title: "Contact us" },
];

const Navbar = () => {
  // State for mobile navigation drawer
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle state of mobile navigation drawer
  const toggleMenu = () => setIsOpen(!isOpen);

  // const openDropdown = () => setIsOpen(true);
  // const closeDropdown = () => setIsOpen(false);

  return (
  <nav className="bg-white fixed top-0   font-inter m-auto  -translate-x-1/2 z-50 left-1/2 flex justify-center   w-full">
      <div
      // onClick={closeDropdown}
      className="flex justify-between items-center  px-[5%] max-[991px]:px-0 max-w-[1400px]  box-border w-full bg-white h-[4.5rem]"
    >
      <div className="bg-white z-50 max-[991px]:w-full max-[991px]:flex  max-[991px]:p-[5%] max-[991px]:h-full justify-between items-center">
        <Link to="/" className="flex gap-[6px]">
          <img
            className="aspect-square w-[52px]"
            src={Logo}
            alt="LevelUp logo"
          />
          <span className="text-[35px] font-bold inline-block text-[#333]">
            LevelUp
          </span>
        </Link>
        <button
          className="hidden flex-col aspect-square w-12 justify-center items-center gap-[6px] max-[991px]:flex"
          onClick={ () => toggleMenu()}
        >
          <span
            className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${
              isOpen
                ? "-rotate-45 translate-y-2 delay-[.35s]"
                : "rotate-0 translate-y-0"
            } `}
          ></span>
          <span
            className={`h-[2px] bg-[#121212] transition-all duration-[.45s] ${
              isOpen ? "w-0" : "w-6 delay-[.35s]"
            } `}
          ></span>
          <span
            className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${
              isOpen
                ? "rotate-45 -translate-y-2 delay-[.35s]"
                : "rotate-0 translate-y-0"
            } `}
          ></span>
        </button>
      </div>
      <div
        className={`flex gap-4 font-bold text-center transition-all duration-[.45s] box-border ${
          isOpen ? "top-full" : "-top-[100vh]"
        } left-0 z-40 bg-white
                      max-[991px]:flex-col max-[991px]:absolute max-[991px]:w-full max-[991px]:px-[5%] max-w-full max-[991px]:pb-[6.5rem] max-[991px]:h-[calc(100vh-4.5rem)] max-[991px]:text-lg max-[991px]:border-b max-[991px]:border-black
                      `}
      >
        <div className="flex max-[991px]:flex-col">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={index}
              path={link.path}
              title={link.title}
              dropdownItems={link.dropdownItems}
              toggleMenu={toggleMenu}
              // openDropdown={openDropdown}
            />
          ))}
        </div>
        <PrimaryBtn path="#" title="Make an Impact" />
      </div>
    </div>

  </nav>
  
    );
};

export default Navbar;
