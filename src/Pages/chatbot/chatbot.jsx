import React from 'react';

function Chatbot() {
    return (
        <>
            <section className='bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-full  my-[4rem]'>
                <div className='relative  w-[90%] md:w-[80%] mx-auto flex justify-center items-center flex-col py-[4rem] pt-[6rem] px-2rem text-white'>
                    <h1 className='text-[4rem] font-bold tracking-wider mb-10'>Chatbot</h1>
                    <div className=' relative flex items-center mb-10'>
                        <input type='text' placeholder='Ask Me!' className='max-[400px]:w-[250px] w-[300px] sm:w-[400px] md:w-[500px] p-3 rounded-[5rem] outline-none text-black text-xl' />
                        <div className='flex justify-center items-center cursor-pointer absolute right-2 bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-[30px] h-[30px] rounded-full text-xl '>x</div>
                    </div>
                    <div >
                        <div className='max-[400px]:w-[250px] w-[350px] sm:w-[500px] md:w-[700px] h-[300px] bg-white p-4 rounded-xl outline-none text-black text-xl'></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Chatbot;