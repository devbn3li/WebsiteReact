import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const solutions = [
//   { path: "/service/esg-controllership", title: "Controllership " },
//   { path: "/service/esg-ia-program", title: "IA-program " },
//   { path: "/service/esg-governance", title: "Governance " },
//   { path: "/service/esg-assurance", title: "Assurance " },
//   { path: "/service/strategic-stakeholder", title: "Strategic " },
//   { path: "/service/esg-strategy", title: "Strategy " },
//   { path: "/service/esg-compliance", title: "Compliance " },
//   { path: "/service/erm-program", title: "Program" },
//   { path: "/service/esg-diagnostic", title: "Diagnostic " },
//   { path: "/service/board-level", title: "Board" },
// ];

const SolutionsDropdown = ({ isSolutionsOpen, toggleSolutions }) => {
  return (
    <div className="group cursor-pointer" onClick={toggleSolutions}>
      
<Link to="/solution" className=" duration-500 hover:text-gray-600 py-1">
<div className="px-4 py-2 hover:bg-[#e6e6e5] rounded-lg transition-all duration-[.45s] inline-block max-[991px]:hover:bg-transparent max-[991px]:px-0 max-[991px]:py-3">
        Solutions
      </div>
      </Link>



      {/* <div className={`w-[250px] bg-[#03C2AB] overflow-hidden flex flex-col justify-center px-4 min-[991px]:shadow-lg max-[991px]:w-screen group-hover:h-auto transition-all min-[991px]:rounded-3xl min-[991px]:absolute ${isSolutionsOpen ? "h-auto" : "h-0"}`}>
        {solutions.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block text-[#fff] duration-500 hover:text-gray-600 py-1"
            onClick={() => {
              toggleSolutions(); // Optionally close the dropdown upon clicking a solution
            }}>
            {item.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
};

SolutionsDropdown.propTypes = {
  isSolutionsOpen: PropTypes.bool.isRequired,
  toggleSolutions: PropTypes.func.isRequired,
}

export default SolutionsDropdown;
