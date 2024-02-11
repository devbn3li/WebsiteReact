import React, { useEffect } from "react";
import { MdCelebration, MdOutlineReport } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import backgroundImage from "/assets/images/bg/1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Why = () => {
  const reasons = [
    {
      title: "Expertise in Data Science",
      description:
        "Our team consists of highly skilled data scientists and AI experts, each bringing a wealth of knowledge and experience in leveraging data for sustainability.",
      icon: <MdCelebration />,
      url: "#",
    },
    {
      title: "Advanced Analytical Tools",
      description:
        "We utilize the latest in statistical modelling, machine learning algorithms, and natural language processing to extract meaningful insights from complex ESG data.",
      icon: <FaLevelUpAlt />,
      url: "#",
    },
    {
      title: "Customized Solutions",
      description:
        "Recognizing that each organization's sustainability journey is unique, we offer tailored analytics and dashboards to meet your specific needs and goals.",
      icon: <MdOutlineReport />,
      url: "#",
    },
    {
      title: "Commitment to Impact",
      description:
        "Our focus goes beyond merely analyzing data. We strive to provide strategic guidance that translates insights into actionable, impactful sustainability initiatives.",
      icon: <FaLevelUpAlt />,
      url: "#",
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
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="why max-w-7xl mx-auto pt-28"
      >
        <div className="px-[5%] w-full pb-20">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                Unlocking the Potential of ESG Data
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  ">
                At LevelUp Data Lab, we&apos;re more than just data scientists;
                we&apos;re pioneers on a mission to redefine sustainability
                through the lens of advanced data analytics. In a world where
                environmental, social, and governance (ESG) considerations are
                becoming increasingly crucial, our goal is to empower
                organizations to not only navigate but thrive in this landscape.
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              className="flex flex-wrap gap-4 justify-center"
            >
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
