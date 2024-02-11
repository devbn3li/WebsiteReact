import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function FAQs() {
  return (
    <div className="relative w-full  px-6 pt-10 pb-8 mt-8  sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5 text-[#002E70]" >
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                        FAQ
                      </h2>
                      <p className="mt-3 text-lg md:text-xl">
                        Frequenty asked questions
                      </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1800" className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold"> What is LevelUp?</span>
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
                          <p className="group-open:animate-fadeIn mt-3 ">
                            LevelUp is a London-based sustainability technology and
                            consulting firm. We make sustainability attainable for
                            businesses of all sizes by providing innovative yet affordable
                            ESG solutions, and advice. Our team of global experts and
                            scientists helps companies integrate sustainability into their
                            business strategy and operations.
                          </p>
                        </details>
                      </div>
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold"> What is LevelUp&apos;s purpose?</span>
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
                          <p className="group-open:animate-fadeIn mt-3">
                            Our purpose is to contribute to making sustainable and good
                            business practices accessible for every business. We believe
                            that sustainability should not be a luxury but a fundamental
                            aspect of thriving in today&rsquo;s business landscape.
                          </p>
                        </details>
                      </div>
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold">What is LevelUp&apos;s mission?</span>
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
                          <p className="group-open:animate-fadeIn mt-3 ">
                            Our mission is to elevate our clients’ sustainability and
                            business practices while mitigating risks.We achieve this by
                            leveraging innovative AI technology and strategic expertise to
                            deliver tailored solutions that drive measurable impact. Our
                            human-led, tech-enabled approach simplifies executing ESG
                            initiatives, empowering organizations to advance their goals and
                            make meaningful progress.
                          </p>
                        </details>
                      </div>
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold"> What makes LevelUp unique?</span>
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
                          <p className="group-open:animate-fadeIn mt-3">
                            <span className="font-semibold">
                              {" "}
                              Cutting-Edge Technology for Meaningful Impact
                            </span>
                            <br />
                            Experience innovation with LevelUp&apos;s cutting-edge technology and
                            AI integration, empowering businesses to gain greater control
                            over their data and create a lasting ESG impact.
                            <br />
                            <br />
                            <span className="font-semibold">
                              {" "}
                              Affordability & Customization
                            </span>
                            <br />
                            Unlock tailored ESG solutions at accessible prices, designed
                            exclusively for your business&apos;s needs. No one-size-fits-all –
                            just solutions crafted for sustainable success.
                            <br />
                            <br />
                            <span className="font-semibold">
                              {" "}
                              Global Expertise at Your Fingertips
                            </span>
                            <br />
                            Leverage our diverse team of sustainability, data, and
                            technology experts spread across the globe. Benefit from a
                            powerful blend of knowledge tailored to address your unique
                            challenges.
                            <br />
                            <br />
                            <span className="font-semibold">
                              Long-Term Partnership Commitment
                            </span>
                            <br />
                            Choose more than a tech supplier - choose a partner committed to
                            your success. Our purpose-driven, collaborative approach ensures
                            a lasting ESG impact through enduring partnerships.
                            <br />
                            <br />
                          </p>
                        </details>
                      </div>
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold">
                              {" "}
                              Do you have any promotions or deals?
                            </span>
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
                          <p className="group-open:animate-fadeIn mt-3">
                            Yes, we offer extremely discounted and special pricing for
                            third-sector and micro businesses.
                          </p>
                        </details>
                      </div>
                      <div className="py-5">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="font-bold"> Where is LevelUp located?</span>
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
                          <p className="group-open:animate-fadeIn mt-3 ">
                            Our office address is 128 City Road, London, UK, EC1V 2NX
                          </p>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

export default FAQs;
