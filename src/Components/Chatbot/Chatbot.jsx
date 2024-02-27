import React, { useState, useRef } from "react";
import axios from "axios";
import { FiSearch, FiX } from "react-icons/fi"; // Import icons
import { TextGenerateEffect } from "../Ui/text-generate-effect"; // Adjust the import path as needed
import { Sparkels } from "./Sparkels";

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
      <section className=" w-full rounded-2xl py-[5rem] max-sm:py-8">
        <div className="relative w-[90%] md:w-[80%] mx-auto flex justify-center items-center flex-col py-[4rem] pt-[6rem] px-2rem text-[#002E70]">
          <h1 className="text-2xl md:text-5xl max-w-[700px] text-center md:font-bold tracking-wider mb-3">
            The 2024 Global Internal Audit Standards
          </h1>
          <Sparkels />
          <p className="my-6 mt-4 md:w-[70%] text-center text-[#002E70] text-xl leading-[1.7] aos-init aos-animate">
            👋 I am LevelUp IA, an AI assistant created by LevelUp to be
            helpful, harmless, and honest. Feel free to ask me any questions you
            may have about the 2024 Global Internal Audit Standards. I&apos;ll
            do my best to provide accurate and useful information to support
            your understanding of these standards.
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="relative flex items-center mb-10"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask Me!"
              className={`input-placeholder shadow-2xl duration-500 ${
                inputText ? "!border-[#002E70]" : ""
              } hover:border-[#002E70] border-[#002E70]/30  max-[400px]:w-[300px] w-[300px] sm:w-[400px] md:w-[500px] py-3 px-4 rounded-[5rem] outline-none text-[#002E70] text-xl bg-white/30 backdrop-blur-lg border-2`}
              value={inputText}
              onChange={handleInputChange}
            />
            <div
              className="flex justify-center items-center cursor-pointer absolute right-2 font-bold w-[30px] h-[30px] rounded-full text-xl"
              onClick={iconType === "search" ? handleFormSubmit : clearInput}
            >
              {iconType === "search" ? (
                <FiSearch className="text-[#002E70]" />
              ) : (
                <FiX className="text-[#002E70]" />
              )}
            </div>
          </form>
          <div
            className={`relative border-[#002E70]/30 max-[400px]:w-[330px] w-[350px] sm:w-[500px] md:w-[700px] h-[350px] bg-white/30 p-4 rounded-xl outline-none text-[#002E70] text-xl overflow-auto backdrop-blur-lg border-2 ${
              isLoading ? "border-[#002E70]" : ""
            }`}
          >
            {isLoading ? (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 backdrop-blur-sm">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <>
                {finalData && (
                  <TextGenerateEffect
                    words={finalData}
                    className="text-animation"
                  />
                )}
                <div className="flex flex-wrap justify-center">
                  {options.length > 0 &&
                    options.map((option, index) => (
                      <TextGenerateEffect
                        key={index}
                        words={option}
                        className="options-animation"
                      />
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="mt-4 px-2 opacity-90 font-bold text-center text-xs text-[#002E70]  md:w-[60%]">
            The information provided by the chatbot may not always be accurate.
            Use it as a guide and verify details independently. The context of
            the responses are based in 2024 Global Internal Audit Standards.
          </div>
        </div>
      </section>
    </>
  );
}

export default Chatbot;
