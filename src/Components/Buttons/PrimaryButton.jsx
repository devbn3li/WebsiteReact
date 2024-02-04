import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PrimaryButton = ({ path, title, classes = '' }) => {  // provided a default value for classes to avoid undefined errors
  // Tailwind CSS classes for the button
  const btnClasses = `rounded-[2.5rem] select-none cursor-pointer text-center bg-[#02c2ab] border border-[#02c2ab] transition-all duration-[.45s] py-2 px-5 hover:shadow-[0_4px_16px_rgba(0,0,0,.2)] hover:-translate-y-1 inline-block text-white ${classes}`;

  return (
    <Link to={path} className={btnClasses}>
      {title}
    </Link>
  );
}

// PropTypes for props typechecking. Classes prop is optional, hence it is not listed as isRequired
PrimaryButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default PrimaryButton;