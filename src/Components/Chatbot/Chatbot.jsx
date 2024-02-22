import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [inputText, setInputText] = useState('');
    const [finalData, setFinalData] = useState('');
    const [options, setOptions] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("https://levelup-ml-ia-service.azurewebsites.net/explain", { query: inputText });

            setFinalData(JSON.stringify(response.data));
            setOptions(response.data.options);
        } catch (error) {
            console.error(error);
        }
    };

    const clearInput = () => {
        setInputText('');
    };

    return (
        <>
            <section className='bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-full rounded-2xl py-[4rem]'>
                <div className='relative w-[90%] md:w-[80%] mx-auto flex justify-center items-center flex-col py-[4rem] pt-[6rem] px-2rem text-white'>
                    <h1 className='text-[3rem] max-w-[800px] text-center font-bold tracking-wider mb-10'>Ask any question about the Internal audits</h1>
                    <form onSubmit={handleFormSubmit} className='relative flex items-center mb-10'>
                        <input type='text' placeholder='Ask Me!' className='max-[400px]:w-[250px] w-[300px] sm:w-[400px] md:w-[500px] p-3 rounded-[5rem] outline-none text-black text-xl' value={inputText} onChange={handleInputChange} />
                        <div className='flex justify-center items-center cursor-pointer absolute right-2 bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-[30px] h-[30px] rounded-full text-xl' onClick={clearInput}>x</div>
                    </form>
                    <div>
                        <div className='max-[400px]:w-[250px] w-[350px] sm:w-[500px] md:w-[700px] h-[300px] bg-white p-4 rounded-xl outline-none text-black text-xl'>{finalData}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Chatbot;
