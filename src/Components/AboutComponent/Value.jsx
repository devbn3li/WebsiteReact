import React from 'react'

function Values() {
    const dataValue =['Doing the right thing','Innovating for a better tomorrow', 'Aiming high', 'Making a positive impact', 'Respecting each other', 'Growing together']
  return (
    <section  className='w-full  my-[2rem] mb-[6rem] bg-[#002E70]  '>
       
        <div className='relative sm:w-[90%]  mx-auto   p-[2rem]  md:p-[4rem] '>
    
           <div className='w-[100%] bg-[#F9FFF5]  p-[2rem] rounded-3xl  border-t-8 border-[#03C2AB]'>
                <h2 className='text-[2.625rem] font-[600] mb-[.5rem] text-center '><mark className='text-white bg-gradient-to-r from-[#1C4987] to-[#159D9B]'> Value</mark></h2>
                <p  className='text-center mb-5 break-words'>We believe in:
                </p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-x-5 gap-y-5'>
                    {
                        dataValue.map((e, i)=>{ 
                            return(
                                <div key={i}  className='flex items-center  gap-3  '>
                                        <div className='w-[5px] h-[5px]  bg-[#02DDB3]  '></div>
                                        <p >{e}</p>
                                </div>
                            )
                        })
                    } 
                </div>
           </div>
        </div>
      
    </section>
  )
}

export default Values
