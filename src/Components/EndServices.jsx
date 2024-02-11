import React from 'react'

function EndServices({description}) {
  return (
    <section className='bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-full my-[2rem]'>
        <div className='w-[80%] mx-auto text-white py-[4rem]'>
            <p className='text-[1rem] sm:text-[2rem] font-[500]'>{description}</p>

        </div>
    </section>
  )
}

export default EndServices
