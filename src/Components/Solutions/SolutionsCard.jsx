// eslint-disable-next-line no-unused-vars
import React from "react";

function SolutionsCard() {
  const DataSolutionCard = [
    {
      id: 1,
      title: "LevelUp ESG Pluse",
      img: "",
      desc1:
        "Sustainability management can be complex, and even more challenging for small and medium enterprises (SMEs) with limited resources and time but with LevelUp it doesn’t have to be",
      desc2:
        "We built LevelUp ESG Pulse, an innovative online ESG Diagnostic platform that provides a rapid assessment of your current ESG performance against most common ESG factors.",
      desc3:
        "Our ESG Diagnostic Assessment is a simple yet powerful way to benchmark your current sustainability initiatives. This short online questionnaire evaluates your company's policies and performance across key ESG categories.",
      desc4:
        "Within minutes, you'll receive an assessment of your ESG program against most common ESG factors. It outlines actionable next steps to strengthen governance, reduce environmental footprint, and increase social responsibility.",
      btn: "Start Free",
    },
    {
      id: 2,
      title: "LevelUp Sustainability Tracker ",
      img: "",
      desc1:
        "Introducing LevelUp Sustainability Tracker - the automated ESG data management platform that empowers your sustainability journey.",
      desc2:
        "Sustainability Tracker makes ESG data collection and reporting simple through intuitive software that works the way you do. Our platform saves you time on data handling, so you can focus on impact creation.",
      desc3:
        "Sustainability Tracker puts essential insights at your fingertips. Gain clarity on your biggest ESG opportunities and progress towards goals. Focus your time on initiatives that drive real change.",
      desc4:
        "With streamlined data collection and tailored reporting, Sustainability Tracker gives you the information you need to guide your sustainability journey. The path forward starts with getting connected. Let us show you how our intuitive platform can accelerate your ESG performance.",
      btn: "Demo",
    },
    {
      id: 3,
      title: "LevelUp Data Lab",
      img: "",
      desc1:
        "Our team of talented data scientists and AI experts empower companies to accelerate their sustainability journey through data.",
      desc2:
        "We deliver cutting-edge analytics and insights leveraging advanced statistical modelling, machine learning algorithms, and natural language processing.",
      desc3:
        "Our customized dashboards visualize complex ESG data to reveal targeted opportunities for improving your environmental, social and governance performance.",
      desc4:
        "Our analytics translate complex information into focused strategies and measurable progress.",
      btn: "Book a consultation",
    },
  ];
  return (
    <div className="mt-[10rem]">
      {DataSolutionCard.map(
        ({ id, title, img, desc1, desc2, desc3, desc4 }) => (
          <div
            key={id}
            className="bg-[#03C2AB]/10 rounded-xl p-5 w-[90%] mx-auto mb-[2rem] grid md:grid-cols-3 gap-5 "
          >
            <div>
              <h1 className="text-2xl">{title}</h1>
              <img src={img} alt={title} />
            </div>
            <div>
              <p className="mb-2 text-sm">{desc1}</p>

              <p className="my-2 text-sm">{desc2}</p>
            </div>
            <div>
              <p className="mb-2 text-sm">{desc3}</p>

              <p className="my-2 text-sm">{desc4}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default SolutionsCard;
