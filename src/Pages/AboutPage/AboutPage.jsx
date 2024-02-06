import React from 'react';
import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import Business from '../../Components/Business';
import Why from '../../Components/Why';
import Jobs from '../../Components/Jobs';
import FounderNote from '../../Components/Qoute'

function About() {
  return (
    <div>
      <AboutComponent />
      <Business />
      <Why />
      <Jobs />
      <FounderNote />
    </div>
  )
}

export default About;
