import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrimaryBtn = ({path, title, classes}) => {
  return (
    <Link to={path}  className={`rounded-[2.5rem] bg-[#02c2ab] border border-[#02c2ab] transition-all duration-[.45s] py-2 px-5 hover:shadow-[0_4px_16px_rgba(0,0,0,.2)] hover:-translate-y-1 inline-block text-white ${classes}`}>
      {title}
    </Link>
  );
}

PrimaryBtn.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default PrimaryBtn;
