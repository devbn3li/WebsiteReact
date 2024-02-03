import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsCard from './ProductsCard';
import { Suspense } from "react";


const bg = "bg-[#03C2AB]"

const Cursal = ({services}) => {

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const handleActiveProduct = (index) => setActiveProductIndex(index);

  useEffect(() => {
    const changeProductIndexByTime = () => {
      const numOfservices = services.length;
      setActiveProductIndex((prevIndex) => (prevIndex + 1) % numOfservices);
    };

    const intervalId = setInterval(changeProductIndexByTime, 10000);
    return () => clearInterval(intervalId);
  }, [activeProductIndex]);

  const productCount = Math.min(services.length, 6);
  const productAreaClass = `lg:w-2/5 w-full grid place-items-center gap-1 ${productCount < 6 ? `lg:col-span-${6 / productCount}` : ""
    }`;

  return (
    <section
      className={`rounded-[40px] m-auto  my-12 mt-0 p-4  w-11/12 lg:flex-row flex flex-col gap-4 h-full max-w-[calc(1400px-10%)] text-[#fff] ${bg}`}
      aria-label='services Section'
      role='region'>
      <div className={productAreaClass}>
        {services.slice(0, productCount).map((product, index) => (
          <button
            className={`flex justify-start items-start bg-[#F9FFF5]  border-t-2 border-[${bg}]/20 p-4 text-start text-[#000] overflow-hidden transition-all duration-500 rounded-xl before:aspect-square before:translate-x-1 before:translate-y-1/2 before:rounded-full before:bg-white before:absolute before:bottom-0 before: after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:bottom-0 after:absolute relative ${activeProductIndex === index
                ? "bg-[#F9FFF5] w-full opacity-100 after:h-1  h-full after:animate-slideFromRightToLeft after:right-full before:h-2 before:animate-slideFromRightToLeft before:shadow-[0px_0px_100px_30px_rgb(200,200,255)]"
                : "bg-[#F9FFF5] w-full after:right-0 h-full  opacity-60 after:h-0 after:animate-none before:h-0 before:animate-none before:shadow-none"
              } hover:bg-[#F9FFF5]/90 hover:opacity-90`}
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
              className={`flex flex-col   justify-start items-start transition-all  overflow-hidden ${activeProductIndex === index ? "h-auto" : "h-[25px] sm:h-[30px] lg:h-[30px] xl:h-[25px]"
                }`}>
              <span className='text-xl  relative w-full font-semibold sm:mb-2'>
                {product.title}
              </span>
              <span className='sm:text-base relative text-xs text-left text-[#000]/80'>
                {product.description}
                {activeProductIndex === index && (
                  <span className=' relative '>
                    <a
                      href={product.link ? product.link : import.meta.env.VITE_WAITLIST_URL}
                      className=' hover:text-black/40 duration-500 select-none underline  px-2 rounded-full text-xs sm:text-sm font-semibold  cursor-pointer'
                      style={{
                        opacity: activeProductIndex === index ? 1 : 0,
                        transform: `translateY(${activeProductIndex === index ? 0 : 20
                          }px)`,
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        transitionDelay: `${index * 0.1}s`, // Add this line to delay the transition for each element
                      }}>
                      {product.linkName ? product.linkName : "Try for free"}
                    </a>
                  </span>
                )}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div
        className='lg:w-3/5 w-full  min-h-[400px] bg-[#fff]/20 relative rounded-3xl overflow-hidden '
        role='tabpanel'
        id={`product-tab-${activeProductIndex}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsCard
            title={services[activeProductIndex].data.title}
            discription={services[activeProductIndex].data.discription}
            LOTTIEanimationData={services[activeProductIndex].data.LOTTIEanimationData}
          />
        </Suspense>
      </div>
    </section>
  );
};

Cursal.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        discription: PropTypes.string.isRequired,
        LOTTIEanimationData: PropTypes.string.isRequired
      }).isRequired,
    }).isRequired
  ).isRequired,
};


export default Cursal;
