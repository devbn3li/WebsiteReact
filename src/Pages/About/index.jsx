import React from 'react'
import About from '../../Components/About'
import Business from '../../Components/Business'
import Why from '../../Components/Why'
import Jobs from '../../Components/Jobs'
import BlogCardList from "../../Components/BlogCard/BlogDataList";


function index() {
  return (
    <div>
      <About />
      <Business />
      <Why />
      <Jobs />
      <BlogCardList />
    </div>
  )
}

export default index
