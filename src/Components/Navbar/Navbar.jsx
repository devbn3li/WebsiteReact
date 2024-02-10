import { React, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PrimaryButton from "../Buttons/PrimaryButton"; // Renamed for better readability
import LogoImage from "/assets/images/logo.png"; // Import name made explicit
import Dropdown from "./Dropdown";
import NavbarLink from "./NavbarLink";
import levelUp_O2_img from '/assets/Dash/ESGNAV/o2.png';
import sustracker_img from '/assets/Dash/ESGNAV/sustracker.png';
import datalab_img from '/assets/Dash/SolutionNAV/lab.png';
import pulse_img from '/assets/Dash/SolutionNAV/puls.png';
import resources_img from '/assets/Dash/academy/resources.png';
import workshop_img from '/assets/Dash/academy/workshop.png';
import business_img from '/assets/Dash/ESG_services.svg';
import ESG_img from '/assets/Dash/3.png';
import { IoBarChartSharp, IoGlobeOutline, IoAnalyticsSharp, IoPeopleCircleSharp, IoDocumentTextSharp, IoShieldCheckmarkSharp, IoSearchSharp, IoShieldCheckmarkOutline, IoWarningOutline } from 'react-icons/io5';
import {
  FaChalkboardTeacher,
  FaBlog,
  FaBroadcastTower,
} from "react-icons/fa";

const simpleFloatAnimation = {
  y: ["-20px", "22px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 4,
    ease: "easeInOut",
  },
};

const servicesTabData = {
  title: "Services",
  tab1: {
    title: "ESG Services",
    path: "service/esg",
    description:
      "ESG Services assist companies in implementing sustainable and ethical operational practices.",
    Icon: <motion.img src={ESG_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "Business Services",
    path: "service/business",
    description:
      "Business Services offer essential support for enhancing company efficiency and growth.",
    Icon: <motion.img src={business_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  moreLinks1: {
    title: "Some ESG Services",
    links: [
      {
        title: "Diagnostic Assessment",
        Icon: IoAnalyticsSharp,
        path: "service/esg-diagnostic",
      },
      {
        title: "Materiality & Strategy",
        Icon: IoBarChartSharp,
        path: "service/esg-strategy",
      },
      {
        title: "Controllership",
        Icon: IoGlobeOutline,
        path: "service/esg-controllership",
      },
      {
        title: "Strategic Stakeholder & Board Advisory",
        Icon: IoPeopleCircleSharp,
        path: "service/board-level",
      },
      {
        title: "ESG IA program",
        Icon: IoDocumentTextSharp,
        path: "service/esg-ia-program",
      },
      {
        title: "ESG Assurance",
        Icon: IoShieldCheckmarkSharp,
        path: "service/esg-assurance",
      },
    ],
  },
  moreLinks2: {
    title: "Some Business Services",
    links: [
      {
        title: "Internal Audit",
        Icon: IoSearchSharp,
        path: "service/internal-audit",
      },
      {
        title: "Compliance",
        Icon: IoShieldCheckmarkOutline,
        path: "service/compliance",
      },
      {
        title: "Risk management",
        Icon: IoWarningOutline,
        path: "service/risk-management",
      }
    ],
  },
};

const solutionsTabData = {
  title: "Solutions",
  tab1: {
    title: "ESG Pulse",
    path: "service/esg-pulse",
    description:
      "ESG Pulse offers real-time insights and analytics on sustainability performance metrics.",
    Icon: <motion.img src={pulse_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "Data Lab",
    path: "service/data-lab",
    description:
      "Unlock insights with our advanced ESG data analytics and reporting lab.",
    Icon: <motion.img src={datalab_img} alt="icon" animate={simpleFloatAnimation} />,
  },
};

const academyTabData = {
  title: "Academy",
  tab1: {
    title: "Workshops & Training",
    path: "/academy/workshops-training",
    description: "Join our Corporate Workshops for comprehensive ESG training.",
    Icon: <motion.img src={workshop_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "Resources Hub",
    path: "/academy/resources-hub",
    description:
      "Explore our Resources Hub tiers for exclusive content and materials.",
    Icon: <motion.img src={resources_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  subTab1: {
    title: "Blogs",
    Icon: FaBlog,
    path: "/academy/blogs",
  },
  subTab2: {
    title: "News & Podcast",
    Icon: FaBroadcastTower,
    path: "/academy/news-podcast",
  },
  moreLinks1: {
    links: [
      {
        title: "Corporate Workshops & Training",
        Icon: FaChalkboardTeacher,
        path: "/academy/corporate-workshops",
      },
      {
        title: "Board and Leadership Development on ESG",
        Icon: FaChalkboardTeacher,
        path: "/academy/board-leadership",
      },
      {
        title: "Coaching & Mentoring",
        Icon: FaChalkboardTeacher,
        path: "/academy/coaching-mentoring",
      },
    ],
  },
};

const ESGSoftwareTabData = {
  title: "ESG Software",
  tab1: {
    title: "LevelUp O2®",
    path: "service/levelup-o2",
    description: "AI-driven carbon accounting for your entire value chain.",
    Icon: <motion.img src={levelUp_O2_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "SusTracker AI®",
    path: "esg-software/sustainability-tracker",
    description: "Streamline ESG management for enhanced real-time insights.",
    Icon: <motion.img src={sustracker_img} alt="icon" animate={simpleFloatAnimation} />,
  },
};

// Navigation links configuration for cleaner code
const navigationLinks = [
  { path: "/about", title: "About us" },
  // { path: "/contact", title: "Contact us" },
];

const Navbar = () => {
  // State hooks for controlling UI elements
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isAcademyOpen, setAcademyOpen] = useState(false);
  const [isESGSoftwareOpen, setESGSoftwareOpen] = useState(false);

  // Toggles and close for UI elements, making it clear what they do
  // Navbar functions
  const toggleNavigation = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNavigation = () => {
    setNavOpen(false);
    scrollToTop();
  };

  // Solution tab functions
  const toggleSolutions = () => {
    setSolutionsOpen(!isSolutionsOpen);
  };
  const closeSolutions = () => {
    setSolutionsOpen(false);
    closeNavigation();
  };

  // Services tab functions
  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
  };
  const closeServices = () => {
    setServicesOpen(false);
    closeNavigation();
  };

  // Academy tab functions
  const toggleAcademy = () => {
    setAcademyOpen(!isServicesOpen);
  };
  const closeAcademy = () => {
    setAcademyOpen(false);
    closeNavigation();
  };

  // Academy tab functions
  const toggleESGSoftware = () => {
    setESGSoftwareOpen(!isServicesOpen);
  };
  const closeESGSoftware = () => {
    setESGSoftwareOpen(false);
    closeNavigation();
  };

  // Function to bring the user to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white fixed top-0 font-inter m-auto -translate-x-1/2 z-50 left-1/2 flex justify-center w-full border-b border-b-[#02c2ab] shadow-md">
      <div className="flex gap-5 justify-between items-center px-[5%] max-[1130px]:px-0 max-w-[1400px] box-border w-full bg-white h-[4.5rem]">
        <div className="z-50  max-[1130px]:w-full max-[1130px]:flex max-[1130px]:p-[5%] max-[1130px]:h-full justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex gap-[6px] items-center">
            <img
              className="aspect-square w-[48px]"
              src={LogoImage}
              alt="LevelUp logo"
            />
            <span className="text-[25px] font-bold max-[1130px]:inline-block max-[1245px]:hidden inline-block text-black">
              Level<span className="text-black">Up</span>
            </span>
          </Link>

          {/* Logo and Hamburger Menu */}
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

        {/* Navigation Links and CTA Button */}
        <div
          className={`flex items-center min-[1130px]:justify-end max-[1130px]:flex-col text-[20px] font-normal h-full max-[1130px]:w-full gap-5 max-[1130px]:gap-0 max-[1130px]:overflow-y-scroll max-[1130px]:overflow-x-hidden w-screen  flex-grow text-center transition-all box-border duration-[.45s] ${
            isNavOpen
              ? "max-[1130px]:translate-y-0"
              : "max-[1130px]:-translate-y-[120%]"
          } top-full left-0 text-black bg-white max-[1130px]:flex-col max-[1130px]:absolute max-[1130px]:w-full max-[1130px]:pb-[6.5rem] max-[1130px]:h-[calc(100vh-4.5rem)] max-[1130px]:text-lg max-[1130px]:border-b max-[1130px]:border-black`}
        >
          {/* ESG Software Dropdown */}
          <Dropdown
            isTabOpen={isESGSoftwareOpen}
            closeTab={closeESGSoftware}
            toggleTab={toggleESGSoftware}
            data={ESGSoftwareTabData}
          />

          {/* Solutions Dropdown */}
          <Dropdown
            isTabOpen={isSolutionsOpen}
            toggleTab={toggleSolutions}
            closeTab={closeSolutions}
            data={solutionsTabData}
          />

          {/* Services Dropdown */}
          <Dropdown
            isTabOpen={isServicesOpen}
            closeTab={closeServices}
            toggleTab={toggleServices}
            data={servicesTabData}
          />

          {/* Academy Dropdown */}
          <Dropdown
            isTabOpen={isAcademyOpen}
            closeTab={closeAcademy}
            toggleTab={toggleAcademy}
            data={academyTabData}
          />

          {/* Static Navigation Links */}
          {navigationLinks.map((link, index) => (
            <NavbarLink
              key={index}
              path={link.path}
              title={link.title}
              toggleNavigation={toggleNavigation}
              closeNavigation={closeNavigation}
            />
          ))}
          {/* CTA Button */}
          <PrimaryButton
            path="/contact"
            title="Make an Impact"
            classes="max-[1130px]:py-4 max-[1130px]:mt-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
