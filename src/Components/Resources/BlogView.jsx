import React from 'react'
import SearchBar from './SearchBar'
import BlogCardsResource from './BlogCardsResource'

function BlogView() {
  return (
    <div className='my-[2rem]'>
        <div className='py-[2rem]'>
            <div className='w-[80%] md:w-[50%] mx-auto mb-10'>
                <h1 className='text-center font-bold text-4xl mb-5'>Title</h1>
                <p className='leading-[1.5] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='relative  w-[95%] mx-auto'>
                <div className='w-[80%] md:w-[50%] mx-auto'><SearchBar/></div>
                <div className='w-[90%] mx-auto'><BlogCardsResource/></div>
            </div>
            
        </div>
    </div>
  )
}

export default BlogView
