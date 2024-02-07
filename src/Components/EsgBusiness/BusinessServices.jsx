import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import backgroundImage from "../../../public/assets/images/bg/1.jpg";

const Why = () => {
  const reasons = [
    {
      title: "Internal Audit",
      description:
        "Our internal audit services deliver assurance and advice to improve your operations. Our flexible",
      icon: <MdCelebration />,
      url: "/service/internal-audit",
    },
    {
      title: "Compliance",
      description:
        "We assist in monitoring regulations, assessing compliance risk, building effective programs, and providing compliance reviews and audits for assurance and reputation protection",
      icon: <FaLevelUpAlt />,
      url: "/service/compliance",
    },
    {
      title: "Risk Management and Business Continuity",
      description:
        "Our risk management services map, assess, and mitigate risks while assisting in business continuity planning to minimize disruptions, ensuring readiness for uncertainty.",
      icon: <MdOutlineReport />,
      url: "/service/risk-management",
    },
    {
      title: "Finance and Business Transformation",
      description:
        "We evaluate finance capabilities, drive transformation, and optimize functions with technology, ensuring enhanced performance for insights and value. Contact us for integrated GRC services.",
      icon: <FaLevelUpAlt />,
      url: "/service/finance",
    },

  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-[#F9FFF5] shadow-none"
    >
      <section className="why max-w-7xl mx-auto pt-28">
        <div className="px-[5%] w-full pb-20">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                Navigate Success with Our Services
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  ">
                Explore our suite of services designed for robust governance,
                compliance, risk management, and transformative financial
                insights. Elevate your business&apos;s potential today.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-gray-200 transform hover:scale-95 rounded-2xl	p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px] ">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      {" "}
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6 text-gray-900 md:text-2xl lg:text-3xl ">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
                      {reason.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
