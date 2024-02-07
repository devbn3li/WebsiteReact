import React from 'react';
import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import Business from '../../Components/Business';
import Why from '../../Components/Why';
import Jobs from '../../Components/Jobs';
import PurposeComponent from '../../Components/AboutComponent/ Purpose';

function About() {
  return (
    <div>
      <AboutComponent />
      <Business />
      <PurposeComponent/>
      <Why />
      <Jobs />
      
    </div>
  )
}

export default About;
