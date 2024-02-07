import React from 'react';
import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import Business from '../../Components/Business';
import Why from '../../Components/Why';
// import Founders from '../../Components/Founders/Founders';
import Jobs from '../../Components/Jobs';
import PurposeComponent from '../../Components/AboutComponent/Purpose';

import FounderNote from '../../Components/Qoute'
import ContPeople from '../../Components/AboutComponent/ContPeople';
import Companys from '../../Components/AboutComponent/Companys';

function About() {
  return (
    <div>
      <AboutComponent />
      <Business />
      <PurposeComponent/>
      <Why />
      {/* <Founders /> */}
      <Jobs />
      
      <FounderNote />
      <ContPeople />
      <Companys />
    </div>
  )
}

export default About;
