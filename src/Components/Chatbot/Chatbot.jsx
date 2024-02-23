import React, { useState, useRef } from "react";
import axios from "axios";
import { FiSearch, FiX } from "react-icons/fi";

function Chatbot() {
  const [inputText, setInputText] = useState("");
  const [finalData, setFinalData] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const [iconType, setIconType] = useState("search"); // Manage icon state

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://levelup-ml-ia-service.azurewebsites.net/explain",
        { query: inputText }
      );
      setFinalData(JSON.stringify(response.data, null, 2));
      setOptions(response.data.options || []);
      setIconType("x"); // Change to x icon after search
    } catch (error) {
      console.error(error);
      setError("Failed to fetch response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearInput = () => {
    setInputText("");
    setError("");
    inputRef.current.focus();
    setIconType("search"); // Change back to search icon after clearing
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#1C4987] to-[#159D9B] w-full rounded-2xl py-[4rem]">
        <div className="relative w-[90%] md:w-[80%] mx-auto flex justify-center items-center flex-col py-[4rem] pt-[6rem] px-2rem text-white">
          <h1 className="text-[3rem] max-w-[800px] text-center font-bold tracking-wider mb-10">
            Ask any question about Internal audits
          </h1>
          <form onSubmit={handleFormSubmit} className="relative flex items-center mb-10">
            <input
              ref={inputRef} // Attach the ref to the input field
              type="text"
              placeholder="Ask Me about Internal Audit!"
              className="max-[400px]:w-[250px] w-[300px] sm:w-[400px] md:w-[500px] p-3 rounded-[5rem] outline-none text-black text-xl"
              value={inputText}
              onChange={handleInputChange}
            />
            <div
              className="flex justify-center items-center cursor-pointer absolute right-2 bg-gray-400 w-[30px] h-[30px] rounded-full text-xl"
              onClick={iconType === "search" ? handleFormSubmit : clearInput}
            >
              {iconType === "search" ? <FiSearch className="text-white" /> : <FiX className="text-white" />}
            </div>
          </form>
          <div className="relative max-[400px]:w-[250px] w-[350px] sm:w-[500px] md:w-[700px] h-[300px] bg-white p-4 rounded-xl outline-none text-black text-xl overflow-auto">
            {isLoading ? (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-75 backdrop-blur-sm">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <>
                <div>{finalData}</div>
                <div className="flex flex-wrap justify-center">
                  {options.map((option, index) => (
                    <button key={index} className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="mt-4 text-sm text-center text-white w-[60%]">
            Please note: The information provided by the chatbot may not always be accurate. Use it as a guide and verify details independently.
          </div>
        </div>
      </section>
    </>
  );
}

export default Chatbot;
