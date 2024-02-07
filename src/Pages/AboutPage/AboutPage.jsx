import React from 'react';
import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import Business from '../../Components/Business';
import Why from '../../Components/Why';
import Founders from '../../Components/Founders/Founders';
import Jobs from '../../Components/Jobs';
import PurposeComponent from '../../Components/AboutComponent/PurposeComponent';

import FounderNote from '../../Components/Qoute'
import ContPeople from '../../Components/AboutComponent/ContPeople';
import Companys from '../../Components/AboutComponent/Companys';
import Values from '../../Components/AboutComponent/Value';

function About() {
  return (
    <div>
      <AboutComponent />
      <Business />
      <PurposeComponent/>
      <Why />
      <Founders />
      <Jobs />
      <Values/>
      <FounderNote />
      <ContPeople />
      <Companys />
    </div>
  )
}

export default About;
