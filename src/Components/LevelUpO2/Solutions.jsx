import React from "react";

const Solutions = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center py-20 px-[5%]">
      <h2 className="text-6xl text-[#121212] font-bold mb-12">Solution</h2>
      <p className="max-w-[750px] mb-12">
        Introducing LevelUp O2, your one-stop solution for streamlined and
        efficient carbon accounting. Our powerful platform, powered by expert
        guidance and robust AI, empowers you to
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Measure</h3>
          <p className="text-gray-600 mb-6">
            Quickly and confidently calculate your Scope 1, 2, and 3 emissions,
            gaining a comprehensive understanding of your carbon footprint
            across all operations.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Reduce</h3>
          <p className="text-gray-600 mb-6">
            Visualize your footprint by scope to identify high-impact areas and
            set data-driven ESG targets for effective emissions reduction.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Report</h3>
          <p className="text-gray-600 mb-6">
            Generate audit-ready emissions data tailored to leading investor,
            supply chain, and regulatory frameworks (GRI, CDP, SASB, TCFB,
            ISSB).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
