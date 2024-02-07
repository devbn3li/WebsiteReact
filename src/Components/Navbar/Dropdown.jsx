import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import SubNavbarLink from "./SubNavbarLink";

const Dropdown = ({ isTabOpen, toggleTab, closeTab, data }) => {

  return (
    <div
      className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full text-[#121212]"
    >
      <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full">
        {/* Start Button */}
        <span className="px-4  max-[1130px]:py-8 flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative 
                      after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0" onClick={toggleTab}>
          {data.title}
        </span>
        {/* End Button */}
        
        {/* Start Dropdown */}
        <div className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-[#02c2ab] bg-white min-[1130px]:group-hover:h-[320px] ${isTabOpen ? 'min-[1130px]:h-[320px] h-auto max-[1130px]:pt-5' : 'h-0'} overflow-hidden`}>
          {/* Start Inner Container */}
          <div className='max-w-[1400px] flex-col w-full text-start flex items-center bg-red transition-all px-4 box-border max-[1130px]:flex-col'>

            {/* Start Highlighted Tabs */}
            <div className='flex w-full gap-2 h-[200px] max-[1130px]:flex-col max-[1130px]:h-auto '>
              {/* Start Tab One */}
              <Link to="/service/esg" className="w-1/2 group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-[#02c2ab]/40 border border-[#02c2ab] rounded-xl gap-2" onClick={closeTab}>
                <span className='flex flex-col items-start gap-2 pt-4'>
                  <span className='font-bold'>{data.tab1.title}</span>
                  <span className=''>{data.tab1.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden "><data.tab1.Icon /></span>
              </Link>
              {/* End Tab One */}

              {/* Start Tab Two */}
              <Link to="/service/business" className="group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 w-1/2 flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-gray-200 hover:border-[#02c2ab] hover:border-2" onClick={closeTab}>
                <span className='flex flex-col items-start gap-2 pt-4 '>
                  <span className='font-bold'>{data.tab2.title}</span>
                  <span className=''>{data.tab2.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden"><data.tab2.Icon /></span>
              </Link>
              {/* End Tab Two */}
            </div>
            {/* End Highlighted Tabs */}

            {/* Start Other Links */}
            <div className='w-full justify-between flex max-[1130px]:flex-col'>

              {/* Other Links 1 */}
              <div className='flex flex-col w-1/2 max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4'>
                <div className="text-black font-bold text-lg min-[1130px]:hidden">- {data.moreLinks1.title}: </div>
                <div className="flex flex-wrap">
                  {data.moreLinks1.links.slice(0, 7).map((link, index) => (
                    <SubNavbarLink key={index} title={link.title} Icon={link.Icon} path={link.path} clear={closeTab} />
                  ))}
                </div>
              </div>
              {/* End Other Links 1 */}

              {/* Start Other Links 2 */}
              <div className='flex flex-wrap w-1/2 max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4'>
                <div className="text-black font-bold text-lg min-[1130px]:hidden"> - {data.moreLinks2.title}: </div>
                <div className="flex flex-wrap">
                  {data.moreLinks2.links.slice(0, 7).map((link, index) => (
                      <SubNavbarLink title={link.title} Icon={link.Icon} path={link.path} clear={closeTab} key={index} />
                  ))}
                </div>
              </div>
              {/* End Other Links 2 */}
            </div>
            {/* End Other Links */}

          </div>
          {/* End Inner Container */}
        </div>
        {/* End Dropdown */}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  toggleTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired,
  isTabOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tab1: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Icon: PropTypes.object.isRequired
    }),
    tab2: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Icon: PropTypes.object.isRequired,
    }),
    moreLinks1: PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        Icon: PropTypes.object.isRequired,
        path: PropTypes.string.isRequired,
      })),
    }).isRequired,
    moreLinks2: PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        Icon: PropTypes.object.isRequired,
        path: PropTypes.string.isRequired,
      })).isRequired,
    }),
  }).isRequired
};

export default Dropdown;
