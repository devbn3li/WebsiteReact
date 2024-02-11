import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "./Buttons/PrimaryButton";

const Business = () => {
  return (
    <>
      <section className="business sm:mt-12 max-w-7xl mx-auto">
        <div className="px-[5%] w-full pb-20">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[50%] md:max-w-[530px]">
              <h2 className="text-3xl md:text-5xl mt-0 mb-6  text-[#112b65]  font-bold  ">
                ESG Impact Made Simple & Affordable
              </h2>
              <p className="mb-6 text-lg text-[#112b65]">
                Drive real ESG impact without the hefty price tag. Our
                AI-powered solutions, data science, and human expertise simplify
                sustainability execution. We provide actionable insights to
                advance your goals affordably.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 py-1 gap-6">
                <div>
                  <div className="flex justify-center items-center bg-[#02c2ab] hover:rotate-6 duration-700 cursor-pointer hover:scale-110 mb-3 text-[#002E70] aspect-square max-w-10 box-border p-2 rounded-lg">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <h2 className="mb-3 text-xl text-[#112b65] font-bold">
                    Innovation and Expertise
                  </h2>
                  <p className="text-[#112b65]">
                    We support our clients in tackling the world’s greatest
                    sustainability challenges by combining cutting-edge
                    technology, data-driven science, and an unparalleled expert
                    network.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center bg-[#02c2ab] hover:rotate-6 duration-700 cursor-pointer hover:scale-110 mb-3 text-[#002E70] aspect-square max-w-10 box-border p-2 rounded-lg">
                    <FontAwesomeIcon icon={faDollarSign}  />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-[#112b65]">
                    Purpose and Profit
                  </h2>
                  <p className="text-[#112b65]">
                    Enhance your financial performance while concurrently
                    fostering positive Environmental and societal impact by assembling a dedicated
                    and purpose-driven team focused on sustainable business
                    practices.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <PrimaryBtn
                  path="/contact"
                  title="Make Impact with Us"
                  classes="px-6 py-3 text-[#112b65] border-none !text-white font-semibold	"
                />
              </div>
            </div>
            <div className="hidden md:block w-full md:w-[45%] h-full mt-6 md:mt-0 rounded-2xl overflow-hidden">
              <img
                className="w-full md:h-[640px] object-cover "
                src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg?w=826&t=st=1706137903~exp=1706138503~hmac=cfbc5fab392e60d7864f89003e46f74922d16ca7b762432f348691c53df40bd6"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
