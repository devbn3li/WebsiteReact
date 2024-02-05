import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton"; // Renamed for better readability
import SolutionsDropdown from "./SolutionsDropdown";
import LogoImage from "../../../public/assets/images/logo.png"; // Import name made explicit
import ServicesDropdown_V2 from "./ServicesDropdown_V2";
import NavbarLink_V2 from "./NavbarLink_V2";

// Navigation links configuration for cleaner code
const navigationLinks = [
  { path: "/academy", title: "Academy" },
  { path: "/about", title: "About us" },
  { path: "/contact", title: "Contact us" },
];

const Navbar_V2 = () => {
  // State hooks for controlling UI elements
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  // Toggles for UI elements, making it clear what they do
  const toggleNavigation = () => setNavOpen(!isNavOpen);
  const toggleSolutions = () => setSolutionsOpen(!isSolutionsOpen);
  const toggleServices = () => setServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-white fixed top-0 font-inter m-auto -translate-x-1/2 z-50 left-1/2 flex justify-center w-full border-b border-b-[#02c2ab] shadow-md">
      <div className="flex gap-5 justify-between items-center px-[5%] max-[1130px]:px-0 max-w-[1400px] box-border w-full bg-white h-[4.5rem]">
        {/* Logo and Hamburger Menu */}
        <div className="z-50  max-[1130px]:w-full max-[1130px]:flex max-[1130px]:p-[5%] max-[1130px]:h-full justify-between items-center">
          <Link to="/" className="flex gap-[6px] items-center">
            <img
              className="aspect-square w-[48px]"
              src={LogoImage}
              alt="LevelUp logo"
            />
            <span className="text-[25px] font-bold max-[1130px]:inline-block max-[1245px]:hidden inline-block text-[#333]">
              Level<span className="text-black">Up</span>
            </span>
          </Link>
          <button
            className="hidden max-[1130px]:flex flex-col aspect-square w-12 justify-center items-center gap-[6px]"
            onClick={toggleNavigation}
          >
            {/* Simplified class names for readability */}
            <span
              className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${
                isNavOpen
                  ? "-rotate-45 translate-y-2 delay-300"
                  : "rotate-0 translate-y-0"
              }`}
            ></span>
            <span
              className={`h-[2px] bg-[#121212] transition-all duration-[.45s] ${
                isNavOpen ? "w-0" : "w-6 delay-300"
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-[#121212] transition-all duration-[.45s] ${
                isNavOpen
                  ? "rotate-45 -translate-y-2 delay-300"
                  : "rotate-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
        {/* Navigation Links, Services, and Solutions */}
        <div
          className={`flex gap-5 max-[1130px]:gap-0 justify-end flex-grow h-full items-center font-bold text-center transition-all duration-[.45s] box-border ${
            isNavOpen ? "top-full" : "-top-[100vh]"
          } left-0 z-40 bg-white max-[1130px]:flex-col max-[1130px]:absolute max-[1130px]:w-full max-w-full max-[1130px]:pb-[6.5rem] max-[1130px]:h-[calc(100vh-4.5rem)] max-[1130px]:text-lg max-[1130px]:border-b max-[1130px]:border-black`}
        >
          <div
            className={`flex h-full text-[20px] font-normal max-[1130px]:flex-col justify-center items-center max-[1130px]:w-full`}
          >
            {/* Solutions Dropdown */}
            <SolutionsDropdown
              isSolutionsOpen={isSolutionsOpen}
              toggleSolutions={toggleSolutions}
            />

            {/* Services Dropdown */}
            <ServicesDropdown_V2
              toggleNavigation={toggleNavigation}
              isServicesOpen={isServicesOpen}
              toggleServices={toggleServices}
            />
            {/* Static Navigation Links */}
            {navigationLinks.map((link, index) => (
              <NavbarLink_V2
                key={index}
                path={link.path}
                title={link.title}
                toggleNavigation={toggleNavigation}
              />
            ))}
            <PrimaryButton
              path="/contact"
              title="Make an Impact"
              classes="max-[1130px]:py-4 "
            />
          </div>
          {/* Call to Action Button */}
          {/* <div className="flex gap-5 max-[1130px]:flex-col justify-end w-full px-2 mt-2">
            <PrimaryButton path='/contact' title='Make an Impact' classes='max-[1130px]:py-4 ' />
            <PrimaryButton path='/contact' title='Start free' classes='max-[1130px]:py-4 bg-transparent border-2 !text-[#02c2ab]  hover:drop-shadow-md hover:shadow-[0_0_20px_-10px_rgba(0,0,0,.2),inset_0_0_20px_-10px_rgba(0,0,0,.2)]' />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar_V2;
