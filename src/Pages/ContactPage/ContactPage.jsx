export default function ContactPage() {
  return (
    <div className="w-full flex justify-center  pt-[7rem] ">

      <section className="contactWrapper max-w-[1400px] relative w-full  px-[1rem] py-[2rem] sm:p-[3rem] ">
        <div className="contact  text-center  sm:w-[80%] mx-auto ">
          <h1 className="text-[2.5rem] font-[700] text-[#121212]">Contact</h1>
          <p className="mt-5 mb-8 text-[18px] sm:px-32 text-[#3F403E]">Reach out to us now and discover how we can collaborate to bring your vision to life. Get in touch today!
          </p>
          <form
            action="https://formsubmit.io/send/fae7788e-a910-41c2-a882-d5ba4dd4acf4"
            className="grid grid-cols-1 gap-y-6 sm:w-[80%] mx-auto ">
            <div className="flex gap-[1.5rem]  justify-center flex-col  md:flex-row">
              <div className="md:w-[50%] flex flex-col items-start">
                <label className="text-[#3F403E] mb-2 font-[400] text-[1.2rem]">First name</label>
                <input type="text"
                  maxLength="50"
                  pattern="[A-Za-z]+"
                  placeholder="First name"
                  required
                  className=" bg-transparent border-[1px] border-[#121212]  w-full p-3 rounded-[10px] outline-none " />
              </div>
              <div className="md:w-[50%] flex flex-col items-start">
                <label className="text-[#3F403E] mb-2 font-[400] text-[1.2rem]">Surname</label>
                <input type="text"
                  placeholder="Surname"
                  pattern="[A-Za-z]+"
                  maxLength="50"
                  required
                  className=" bg-transparent border-[1px] border-[#121212]  w-full p-3 rounded-[10px] outline-none" />
              </div>
            </div>
            <div className="flex gap-[1.5rem]  justify-center flex-col  md:flex-row">
              <div className="md:w-[50%] flex flex-col items-start">
                <label className="text-[#3F403E] mb-2 font-[400] text-[1.2rem]">Company name</label>
                <input type="text"
                  placeholder="Company name"
                  maxLength="50"
                  required
                  className=" bg-transparent border-[1px] border-[#121212]  w-full p-3 rounded-[10px] outline-none " />
              </div>
              <div className="md:w-[50%] flex flex-col items-start">
                <label className="text-[#3F403E] mb-2 font-[400] text-[1.2rem]">Email</label>
                <input type="email"
                  maxLength="100"
                  placeholder="Work email"
                  required
                  className=" bg-transparent border-[1px] border-[#121212]  w-full p-3 rounded-[10px] outline-none" />
              </div>
            </div>
            <div>
              <div className="w-[100%] flex flex-col items-start ">
                <label className="text-[#3F403E] mb-2 font-[400] text-[1.2rem]">Your message</label>
                <textarea placeholder="Your message"
                  rows="4"
                  cols="10"
                  className=" bg-transparent border-[1px] border-[#121212]  w-full p-3 rounded-[10px] outline-none " >
                </textarea>
              </div>
            </div>
            <div>
              <button type="submit"
                className="flex bg-[#02C2AB] my-4  py-4 rounded-[10rem] font-[500] translate-y-2 hover:translate-y-0 hover:shadow-2xl hover:shadow-slate-400 w-[200px] duration-1000 justify-center border-none">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
