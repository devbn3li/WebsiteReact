import React from 'react'
import About from '../../Components/About'
import Business from '../../Components/Business'
import Why from '../../Components/why'
import Jobs from '../../Components/Jobs'
import LinkedIn from '../../Components/Linked_In'
import Footer from '../../Components/Footer'

function index() {
  return (
    <div>
      <About />
      <Business />
      <Why />
      <Jobs />
      <LinkedIn />
      <Footer />
    </div>
  )
}

export default index