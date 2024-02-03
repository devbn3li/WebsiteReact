import React from 'react'

function FAQs() {
  return (
 <div className="relative w-full  px-6 pt-10 pb-8 mt-8  ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
          FAQ
        </h2>
        <p className="mt-3 text-lg text-neutral-500 md:text-xl">
          Frequenty asked questions
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> What is LevelUp?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            LevelUp is a London-based sustainability technology and consulting firm. We make sustainability attainable for businesses of all sizes by providing innovative yet affordable ESG solutions, business consulting, training, and assurance services. Our team of global experts helps companies integrate sustainability into their business strategy.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> What is LevelUp's purpose?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Our purpose is to contribute to making sustainable and good business practices accessible for every business. We believe that sustainability should not be a luxury but a fundamental aspect of thriving in today's business landscape.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>What is LevelUp's mission?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Our mission is to elevate our clients’ sustainability and business practices while mitigating risks. We achieve this by offering strategic services and tailored solutions that drive impact.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> What makes LevelUp unique?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            - Affordable and tailored corporate sustainability & ESG solutions designed to meet our client's specific needs.

- Diverse global team of sustainability, data and technology experts.

- Purpose-driven and collaborative approach focused on long-term partnerships.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> Do you have any promotions or deals?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Yes, we offer extremely discounted and special pricing for third-sector and micro businesses.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> Where is LevelUp located?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            We are headquartered in London and registered in England and Wales (registration number 14093132). Our office address is 160 City Road, Kemp House, London, EC1V 2NP.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default FAQs