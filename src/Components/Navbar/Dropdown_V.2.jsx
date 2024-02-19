import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SubNavbarLink_V2 from "./SubNavbarLink_V.2";
import { MdArrowRight } from "react-icons/md";
import SubNavbarLink from "./SubNavbarLink";

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
        <div className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-[#02c2ab] bg-white h-0 ${isTabOpen && "max-[1130px]:h-auto max-[1130px]:py-5"} overflow-hidden min-[1130px]:group-hover:h-[calc(700px)]`}>
          {/* Start Inner Container */}
          <div className='max-w-[1400px] text-start gap-3 w-full justify-start flex items-start pt-10 transition-all px-4 box-border max-[1130px]:flex-col h-full'>
            <div className="w-4/5 max-[1130px]:w-full">
              {/* Start Tab One */}
              <Link to={data.tab1.path} className="w-full min-h-[240px] group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-[#02c2ab]/40 border border-[#02c2ab] rounded-xl gap-2" onClick={closeTab}>
                <span className='flex flex-col items-start gap-2 pt-4'>
                  <span className='font-bold'>{data.tab1.title}</span>
                  <span className=''>{data.tab1.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%] ">{data.tab1.Icon}</span>
              </Link>
              {/* End Tab One */}
              {/* Start Other Tabs One */}
              <div className="max-w-[1400px] text-start gap-3 w-full justify-start flex items-start pt-10 transition-all px-4 box-border max-[1130px]:flex-col h-full">
                {data.cat.map((cat, catIndex) => (
                  <div className="flex-grow flex flex-col gap-6 max-[1150px]:pl-5" key={catIndex}>
                    <h1 className="font-bold text-[#02c2ab] text-lg">{cat.title}</h1>
                    <div className="flex flex-col justify-start w-full text-start ">
                      {cat.links.map((link, linkIndex) => (
                        <SubNavbarLink_V2 key={linkIndex} title={link.title} path={link.path} Icon={link.Icon} clear={closeTab} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* End Other Tabs One */}
            </div>
            
            <div className="flex flex-col w-1/2 max-[1130px]:w-full">
              {/* Start Tab Two */}
              <Link to={data.tab2.path} className="min-h-[240px] w-full group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-gray-200 hover:border-[#02c2ab] hover:border-2" onClick={closeTab}>
                <span className='flex flex-col items-start gap-2 pt-4 '>
                  <span className='font-bold'>{data.tab2.title}</span>
                  <span className=''>{data.tab2.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-[#02c2ab] transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]">{data.tab2.Icon}</span>
              </Link>
              {/* End Tab Two */}

              {/* Start Other Tabs Two */}
              <div className={`flex flex-col max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4`}>
                <div className={`text-black font-bold text-lg min-[1130px]:hidden ${!data.moreLinks2.title && 'hidden'}`}> - {data.moreLinks2.title}: </div>
                <div className="flex max-[1130px]:flex-col flex-wrap">
                  {data.moreLinks2.links.map((link, index) => (
                    <SubNavbarLink title={link.title} Icon={link.Icon} path={link.path} clear={closeTab} key={index} className='!justify-start'/>
                  ))}
                </div>
              </div>
              {/* End Other Tabs Two */}
            </div>
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
