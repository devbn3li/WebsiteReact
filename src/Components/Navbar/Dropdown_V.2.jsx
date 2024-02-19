import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SubNavbarLink_V2 from "./SubNavbarLink_V.2";

const Dropdown_V2 = ({ isTabOpen, toggleTab, closeTab, data }) => {

  return (
    <div
      className={"group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full text-[#121212] "}>
      <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full">
        {/* Start Button */}
        <span className="px-4  max-[1130px]:py-8 flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative 
                      after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0" onClick={toggleTab}>
          {data.title}
        </span>
        {/* End Button */}

        {/* Start Dropdown */}
        <div className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-[#02c2ab] bg-white h-0 ${isTabOpen && "max-[1130px]:h-auto max-[1130px]:py-5"} overflow-hidden min-[1130px]:group-hover:h-[20rem]`}>
          {/* Start Inner Container */}
          <div className='max-w-[1400px] text-start gap-3 w-full justify-start flex items-start pt-10 transition-all px-4 box-border divide-x-2 max-[1130px]:flex-col h-full'>
            {data.cat.map((cat, catIndex) => (
              <div className="flex-grow flex flex-col min-[1130px]:border-r-2 border-[#02c2ab] last:border-r-0 gap-6 max-[1150px]:pl-5" key={catIndex}>
                <h1 className="font-bold text-[#02c2ab] text-lg">{cat.title}</h1>
                <div className="flex flex-col justify-start w-full text-start ">
                  {cat.links.map((link, linkIndex) => (
                    <SubNavbarLink_V2 key={linkIndex} title={link.title} path={link.path} Icon={link.Icon} clear={closeTab}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* End Inner Container */}
        </div>
        {/* End Dropdown */}
      </div>
    </div>
  );
}

Dropdown_V2.propTypes = {
  toggleTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired,
  isTabOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cat: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            Icon: PropTypes.element.isRequired,
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    ).isRequired,
  })
};

export default Dropdown_V2;
