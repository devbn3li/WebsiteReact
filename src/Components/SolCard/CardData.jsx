import PropTypes from "prop-types";

const BenefitsSection = (props) => {
  return (
    <div className="w-full  backdrop-blur-md rounded-e-3xl shadow-none">
      <section className="why max-w-7xl mx-auto pt-28">
        <div className="px-[5%] w-full pb-20">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col max-w-[90.25rem] gap-3">
              <h1 className="mb-4 text-4xl capitalize max-w-[1000px] font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
                {props.title}
              </h1>
              <p className="mb-8 text-lg font-normal  lg:text-xl  ">
                {props.Sectiondescription}
              </p>
              <div className="">
                {" "}
                <div className="w-full border-[#02c2ab]  border-b-2     mb-10"></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4  justify-center">
              {props.reasons.map((reason, index) => (
                <a
                  href={reason.url}
                  key={index}
                  className="reason-link max-w-[500px] border-2 border-gray-200/80 backdrop-blur-lg   transition duration-500 hover:bg-[#02c2ab]/20 transform hover:scale-95 rounded-2xl	p-6"
                >
                  <div className="flex gap-2">
                    <div className="reason-item mb-3 flex items-center justify-center rounded-md bg-[#02c2ab] w-[40px] h-[40px] ">
                      {reason.icon}
                    </div>
                    <div className="grid place-items-center">
                      {" "}
                      <h3 className="mb-4 text-2xl max-w-[1000px] font-extrabold tracking-tight leading-6  md:text-2xl lg:text-3xl ">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="min-h-[100px] grid place-items-center">
                    <p className="mb-8 text-lg font-normal  lg:text-xl ">
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

BenefitsSection.propTypes = {
  title: PropTypes.string.isRequired,
  reasons: PropTypes.array.isRequired,
  Sectiondescription: PropTypes.string.isRequired,
};

export default BenefitsSection;
