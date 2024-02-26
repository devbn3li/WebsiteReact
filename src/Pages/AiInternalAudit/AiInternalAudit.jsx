import React from 'react';
import Chatbot from '../../Components/Chatbot/Chatbot';
import backgroundImage from "/assets/images/bg/1.jpg"

function AiChatbot() {
  return (
    <>
  <div
   style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
  
  className='w-full flex justify-center'>
  <div className='max-w-[1400px]'>
      <Chatbot />

      </div>
  </div>
    </>
  )
}

export default AiChatbot;