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
    <div className="group cursor-pointer min-[1130px]:h-full max-[1130px]:w-full" onClick={toggleSolutions}>

      <Link to="/solution" className="px-4 max-[1130px]:py-8 min-[1130px]:h-full  box-border transition-all max-[1130px]:w-full flex items-center justify-center duration-[.45s] max-[991px]:hover:bg-transparent relative after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0">
          Solutions
      </Link>



      {/* <div className={`w-[250px] bg-[#03C2AB] overflow-hidden flex flex-col justify-center px-4 ${isSolutionsOpen ? "h-auto" : "h-0"}`}>
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
