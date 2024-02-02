import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaAngular } from "react-icons/fa6";
import ProductsCard from './ProductsCard';


const products = [
  {
    title: "Title 1",
    description: "Small Description 1",
    icon: <FaAngular />,
    data: (<div><h1>Test 3</h1><p>TESTI TESTI TESTI</p></div>),
  },
  {
    title: "Title 2",
    description: "Small Description 2",
    icon: <FaAngular />,
    data: (<div><h1>Test 3</h1><p>TESTI TESTI TESTI</p></div>),
  },
  {
    title: "Title 3",
    description: "Small Description 3",
    icon: <FaAngular />,
    data: (<div><h1>Test 3</h1><p>TESTI TESTI TESTI</p></div>),
  },
  {
    title: "Title 4",
    description: "Small Description 4",
    icon: <FaAngular />,
    data: (<div><h1>Test 4</h1><p>TESTI TESTI TESTI</p></div>),
  },
  {
    title: "Title 5",
    description: "Small Description 5",
    icon: <FaAngular />,
    data: (<div><h1>Test 5</h1><p>TESTI TESTI TESTI</p></div>),
  },
  {
    title: "Title 6",
    description: "Small Description 6",
    icon: <FaAngular />,
    data: (<div><h1>Test 6</h1><p>TESTI TESTI TESTI</p></div>),
  },
]

const bg = "bg-[#e2c2ab]"

const Cursal = () => {
  
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const handleActiveProduct = (index) => setActiveProductIndex(index);

  useEffect(() => {
    const changeProductIndexByTime = () => {
      const numOfProducts = products.length;
      setActiveProductIndex((prevIndex) => (prevIndex + 1) % numOfProducts);
    };

    const intervalId = setInterval(changeProductIndexByTime, 10000);
    return () => clearInterval(intervalId);
  }, [activeProductIndex]);

  const productCount = Math.min(products.length, 6);
  const productAreaClass = `lg:w-2/5 w-full grid place-items-center gap-1 ${
    productCount < 6 ? `lg:col-span-${6 / productCount}` : ""
  }`;

  return (
    <section
      className={`rounded-[40px] m-auto  my-12 mt-0 p-4 w-11/12 lg:flex-row flex flex-col gap-4 min-h-[500px] lg:min-h-[700px] max-w-[calc(1400px-10%)] text-[#121212] ${bg}`}
      aria-label='Products Section'
      role='region'>
      <div className={productAreaClass}>
        {products.slice(0, productCount).map((product, index) => (
          <button
            className={`flex justify-start items-start  border-t-2 border-[${bg}]/20 p-4 text-start text-[#121212] overflow-hidden transition-all duration-500 rounded-xl before:aspect-square before:translate-x-1 before:translate-y-1/2 before:rounded-full before:bg-white before:absolute before:bottom-0 before: after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:bottom-0 after:absolute relative ${
              activeProductIndex === index
                ? "bg-white/10 w-full opacity-100 after:h-1  h-full after:animate-slideFromRightToLeft after:right-full before:h-2 before:animate-slideFromRightToLeft before:shadow-[0px_0px_100px_30px_rgb(200,200,255)]"
                : "bg-transparent w-full after:right-0 h-full  opacity-60 after:h-0 after:animate-none before:h-0 before:animate-none before:shadow-none"
            } hover:bg-white/20 hover:opacity-90`}
            key={index}
            onClick={() => handleActiveProduct(index)}
            role='tab'
            aria-controls={`product-tab-${index}`}
            aria-selected={activeProductIndex === index}
            style={{ zIndex: 1 }}>
            <span className='pr-4 text-3xl  transition-all duration-500'>
              {product.icon}
            </span>
            <div
              className={`flex flex-col   justify-start items-start transition-all  overflow-hidden ${
                activeProductIndex === index ? "h-[150px] lg:h-28" : "h-8"
              }`}>
              <span className='lg:text-2xl  relative w-full font-semibold sm:mb-2'>
                {product.title}
              </span>
              <span className='sm:text-base relative text-xs text-left text-[#121212]/80'>
                {product.description}
                {activeProductIndex === index && (
                  <span className=' relative '>
                    <a
                      href={product.link? product.link : import.meta.env.VITE_WAITLIST_URL}
                      className=' hover:text-black/40 duration-500 select-none underline  px-2 rounded-full text-xs sm:text-sm font-semibold  cursor-pointer'
                      style={{
                        opacity: activeProductIndex === index ? 1 : 0,
                        transform: `translateY(${
                          activeProductIndex === index ? 0 : 20
                        }px)`,
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        transitionDelay: `${index * 0.1}s`, // Add this line to delay the transition for each element
                      }}>
                      {product.linkName? product.linkName : "Try for free"}
                    </a>
                  </span>
                )}
              </span>
            </div>
          </button>
        ))}
      </div>
      {products[activeProductIndex].data}
    </section>
  );
};

// Cursal.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.object.isRequired,
//       description: PropTypes.string.isRequired,
//       icon: PropTypes.object.isRequired,
//       data: PropTypes.object.isRequired,
//     }).isRequired
//   ).isRequired,
//   bg: PropTypes.string.isRequired,
// };


export default Cursal;
