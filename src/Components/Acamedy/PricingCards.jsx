
function PricingCards() {
  return (
    <div><div className="pt-5" id="pricing">
    <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-base capitalize font-semibold leading-7 text-[#02c2ab]">
        Resources Hub Pricing
        </h1>
        <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
        Find a plan to power your business 

        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-900">
        Choose the product that works best
      </p>
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* First Product */}
        <div className="ring-1 ring-gray-700/20 rounded-3xl p-8 xl:p-10">
          <div className="flex items-center justify-between gap-x-4">
            <h2
              id="product1"
              className="text-lg sm:text-5xl font-semibold leading-8 text-black"
            >
Green            </h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
          Start with the basics and upgrade as you grow
          </p>
         
          <a
            href="/order"
            aria-describedby="product1"
            className="bg-[#02c2ab]/20 text-black hover:bg-[#02c2ab]/40 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Order Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-900 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Comprehensive Guide to ESG Policy Implementation and Reporting
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Navigating ESG Internal Controls: A Practical Approach
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Ensuring Data Integrity in ESG Reporting: Procedures and Checklist
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              see more details below
            </li>
          </ul>
        </div>
        {/* Second Product */}
        <div className="bg-white/5 ring-2 ring-[#02c2ab] rounded-3xl p-8 xl:p-10">
          <div className="flex items-baseline justify-between gap-x-4">
            <h2
              id="product2"
              className=" text-lg sm:text-5xl font-semibold leading-8 text-[#02c2ab]"
            >
              Gold
            </h2>
            <p className="rounded-full bg-[#02c2ab] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
              Most popular
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
          Everything in Green, plus higher limits and more features
          </p>
          
          <div 


            href="/order"
            aria-describedby="product2"
            className="bg-[#02c2ab] cursor-pointer text-black shadow-sm hover:bg-[#02c2ab]/30 duration-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Order Now
          </div>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-900 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              ESG Infrastructure: Templates and Procedures for All Departments
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              ESG Management: Internal Controls and Assurance Toolkit
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Strategic ESG Integration: Guidelines for Committees and Boards
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
      see more details below
            </li>
          </ul>
        </div>
        {/* Third Product */}
        <div className="ring-1 ring-gray-700/20 rounded-3xl p-8 xl:p-10">
          <div className="flex items-center justify-between gap-x-4">
            <h2
              id="product3"
              className="text-lg sm:text-5xl  font-semibold leading-8 text-black"
            >
              Platinum
            </h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
          Everything in Gold, plus more features and personalized support
          </p>
         
          <a
            href="/order"
            aria-describedby="product3"
            className="bg-[#02c2ab]/20 text-black hover:bg-[#02c2ab]/40 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Order Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-900 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Personalized 1:1 sessions with a senior advisor.            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Exclusive access to a supportive mastermind group.
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Comprehensive quarterly reviews and strategic planning sessions.
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
see more details below
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default PricingCards