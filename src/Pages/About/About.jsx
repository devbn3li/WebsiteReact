import React from 'react';
import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import Business from '../../Components/Business';
import Why from '../../Components/Why';
import Jobs from '../../Components/Jobs';
import HeroSection from '../../Components/Hero_solutions';

function About() {
  return (
    <div>
      <AboutComponent />
      <Business />
      <Why />
      <Jobs />
      <HeroSection />
    </div>
  )
}

export default About;
