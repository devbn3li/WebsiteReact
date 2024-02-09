import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img3 from "../../public/assets/Premasset/dashhero2.png";
import PrimaryButton from "./Buttons/PrimaryButton";

const LandingSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const hoverImageAnimation = {
    scale: 1.05,
    transition: {
      duration: 0.7,
    },
  };

  const simpleFloatAnimation = {
    y: ["-20px", "25px"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 4,
      ease: "easeInOut",
    },
  };

  return (
    <section className="my-28 max-md:mt-40" ref={ref}>
      <motion.div
        className="container mx-auto px-[5%]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            className="w-full md:w-1/2 text-left"
            variants={itemVariants}
          >
            <h2 className="text-6xl font-extrabold text-[#002e70] max-md:text-center">
              LevelUp for Better Business & Planet.
            </h2>
            <motion.p
              className="my-12 text-[#002e70] max-md:text-center text-2xl"
              variants={itemVariants}
            >
              Welcome to LevelUp, where we combine sustainability technology,
              science, and human expertise to make a meaningful impact.
            </motion.p>
            <div className="flex gap-6 max-md:flex-col">
              <PrimaryButton
                path="/about"
                title="About Us"
                additionalClasses="hover:bg-blue-600 transition duration-300"
              />
              <PrimaryButton
                path="/impact"
                title="Make an Impact, Together"
                additionalClasses="hover:bg-gray-300 transition duration-300"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-4 md:mt-0 max-md:hidden"
            variants={itemVariants}
            whileHover={hoverImageAnimation}
          >
            <div className="flex justify-center p-4 rounded-lg my-6">
              <motion.img
                src={img3}
                className="w-[80%]"
                alt="Landing section"
                animate={simpleFloatAnimation}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingSection;
