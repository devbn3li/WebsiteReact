import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoEarthSharp, IoLeafOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import SubNavbarLink from "./SubNavbarLink";

const ESGSmallCards = [
  {
    title: "Diagnostic Assessment",
    icon: IoEarthSharp,
    path: "service/esg-diagnostic",
  },
  {
    title: "Strategy",
    icon: IoEarthSharp,
    path: "service/esg-strategy",
  },
  {
    title: "Board Advisory",
    icon: IoEarthSharp,
    path: "service/board-level",
  },
  {
    title: "Strategic Stakeholder",
    icon: IoEarthSharp,
    path: "service/strategic-stakeholder",
  },
  {
    title: "Compliance",
    icon: IoEarthSharp,
    path: "service/esg-compliance",
  },
  {
    title: "ERM",
    icon: IoEarthSharp,
    path: "service/esg-compliance",
  },

  {
    title: "Assurance",
    icon: IoEarthSharp,
    path: "service/esg-assurance",
  },
  {
    title: "Controllership",
    icon: IoEarthSharp,
    path: "service/esg-controllership",
  },
  {
    title: "Internal Audit program",
    icon: IoEarthSharp,
    path: "service/esg-ia-program",
  },
  {
    title: "Strategy",
    icon: IoEarthSharp,
    path: "service/esg-strategy",
  },
];

const BusinessSmallCards = [
  {
    title: "Internal Audit",
    icon: IoEarthSharp,
    path: "service/internal-audit",
  },
  {
    title: "Compliance",
    icon: IoEarthSharp,
    path: "service/compliance",
  },
  {
    title: "Risk management",
    icon: IoEarthSharp,
    path: "service/risk-management",
  },

  {
    title: "business transformation",
    icon: IoEarthSharp,
    path: 'service/board-level'
  },

  {
    title: 'business transformation',
    icon: IoEarthSharp,
    path: "service/finance",
  },
];

const ServicesDropdown_V2 = ({ isServicesOpen, toggleServices, toggleNavigation }) => (
  <div
    className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full"
  >
    <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full" onClick={toggleServices}>
      <span className="px-4 hover:font-bold max-[1130px]:py-8 flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative 
                      after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0">
        Services
      </span>
      <div className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-[#02c2ab] bg-white min-[1130px]:group-hover:h-[320px] ${isServicesOpen ? 'min-[1130px]:h-[320px] h-auto max-[1130px]:pt-5' : 'h-0'} overflow-hidden`}>
        <div className='max-w-[1400px] flex-col w-full text-start flex items-center bg-red transition-all px-4 box-border max-[1130px]:flex-col'>

          <div className='flex w-full gap-2 h-[200px] max-[1130px]:flex-col max-[1130px]:h-auto '>
            <Link to="/service/esg" className="w-1/2 group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-[#02c2ab]/40 border border-[#02c2ab] rounded-xl gap-2" onClick={() => { toggleNavigation(); toggleServices(); }}>
              <span className='flex flex-col items-start gap-2 pt-4'>
                <span className='font-bold'>ESG Services</span>
                <span className=''>ESG Services assist companies in implementing sustainable and ethical operational practices.</span>
                <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
              </span>
              <span className="text-[5rem] max-[1130px]:hidden"><IoLeafOutline /></span>
            </Link>
            <Link to="/service/business" className="group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 w-1/2 flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-gray-200 hover:border-[#02c2ab] hover:border-2" onClick={() => { toggleNavigation(); toggleServices(); }}>
              <span className='flex flex-col items-start gap-2 pt-4 '>
                <span className='font-bold'>Business Services</span>
                <span className=''>Business Services offer essential support for enhancing company efficiency and growth.</span>
                <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
              </span>
              <span className="text-[5rem] max-[1130px]:hidden"><IoEarthSharp /></span>
            </Link>
          </div>

          <div className='w-full justify-between flex max-[1130px]:flex-col'>

            <div className='flex flex-col w-1/2 max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4'>
              <div className="text-black font-bold text-lg min-[1130px]:hidden">- Some ESG Services: </div>
              <div className="flex flex-wrap">
                {ESGSmallCards.slice(0, 5).map((service, index) => (
                  <Link to={service.path} key={index}>
                    <SubNavbarLink title={service.title} Icon={service.icon} path={service.path} clear={() => { toggleNavigation(); toggleServices(); }} />
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap w-1/2 max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4'>
              <div className="text-black font-bold text-lg min-[1130px]:hidden">- Some Business Services: </div>
              <div className="flex flex-wrap">
                {BusinessSmallCards.slice(0, 5).map((service, index) => (
                  <Link to={service.path} key={index}>
                    <SubNavbarLink title={service.title} Icon={service.icon} path={service.path} clear={() => { toggleNavigation(); toggleServices(); }} />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

ServicesDropdown_V2.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
  toggleServices: PropTypes.func.isRequired,
  isServicesOpen: PropTypes.bool.isRequired,
};

export default ServicesDropdown_V2;
