import React from 'react';

/**
 * WaitingListPage component displays a form allowing users to join a waiting list.
 * It's designed for users to express their interest in upcoming services or products.
 */
function WaitingListPage() {
  return (
    <div className="w-full flex justify-center pt-[7rem]">
      <section className="max-w-[1400px] w-full relative px-[1rem] py-[2rem] sm:p-[3rem]">
        {/* Text content section */}
        <div className="text-center sm:w-[80%] mx-auto">
          <h1 className="text-[2.5rem] font-bold text-[#121212]">Waiting List</h1>
          <p className="mt-5 mb-8 text-[18px] sm:px-32 text-[#3F403E]">
            We are currently in private beta. Join the waiting list to be the first to know when we launch.
          </p>
          {/* Form for waiting list sign-up */}
          <form
            action="https://formsubmit.io/send/fae7788e-a910-41c2-a882-d5ba4dd4acf4"
            className="grid grid-cols-1 gap-y-6 sm:w-[80%] mx-auto">
            {/* Name input fields */}
            <div className="flex gap-[1.5rem] justify-center flex-col md:flex-row">
              <div className={`${fieldContainer} md:w-[50%]`}>
                <label htmlFor="first-name" className={fieldLabel}>First name</label>
                <input id="first-name" type="text" name="first name" maxLength="50" pattern="[A-Za-z]+" placeholder="First name" required className={inputField} />
              </div>
              <div className={`${fieldContainer} md:w-[50%]`}>
                <label htmlFor="surname" className={fieldLabel}>Surname</label>
                <input id="surname" type="text" name="surname" placeholder="Surname" pattern="[A-Za-z]+" maxLength="50" required className={inputField} />
              </div>
            </div>
            {/* Company and email input fields */}
            <div className="flex gap-[1.5rem] justify-center flex-col md:flex-row">
              <div className={`${fieldContainer} md:w-[50%]`}>
                <label htmlFor="company-name" className={fieldLabel}>Company name</label>
                <input id="company-name" type="text" name="company name" placeholder="Company name" maxLength="50" required className={inputField} />
              </div>
              <div className={`${fieldContainer} md:w-[50%]`}>
                <label htmlFor="email" className={fieldLabel}>Email</label>
                <input id="email" type="email" name="email" placeholder="Work email" maxLength="100" required className={inputField} />
              </div>
            </div>
            {/* Message textarea */}
            <div className={`${fieldContainer} md:w-full`}>
              <label htmlFor="message" className={fieldLabel}>Your message</label>
              <textarea id="message" name="message" placeholder="Your message" rows="4" className={inputField}></textarea>
            </div>
            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className={submitButton}>Send message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

// Tailwind CSS class names extracted for reusability and to avoid repetition in the JSX
const fieldContainer = "md:w-[50%] flex flex-col items-start";
const fieldLabel = "text-[#3F403E] mb-2 font-normal text-[1.2rem]";
const inputField = "bg-transparent border-[1px] border-[#121212] w-full p-3 rounded-[10px] outline-none";
const submitButton = "bg-[#02C2AB] my-4 py-4 rounded-full font-medium translate-y-2 hover:translate-y-0 hover:shadow-2xl hover:shadow-slate-400 w-[200px] duration-1000 justify-center";

export default WaitingListPage;
