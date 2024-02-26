import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

export const Sparkels = (props) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    const initParticlesEngine = async (callback) => {
      const engine = await loadSlim();
      callback(engine);
    };

    initParticlesEngine(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div animate={controls} className={"opacity-0"}>
      {init && (
       <Particles
       id={id || "tsparticles"}
       className={cn("h-full w-full")}
       particlesLoaded={particlesLoaded}
       options={{
         background: {
           color: {
             value: background || "#0d47a1",
           },
         },
         fullScreen: {
           enable: false,
           zIndex: 1,
         },
         fpsLimit: 120,
         interactivity: {
           events: {
             onClick: {
               enable: true,
               mode: "push",
             },
             onHover: {
               enable: false,
               mode: "repulse",
             },
             resize: true,
           },
           modes: {
             push: {
               quantity: 4,
             },
             repulse: {
               distance: 200,
               duration: 0.4,
             },
           },
         },
         particles: {
           color: {
             value: "#002E70", 
           },
           move: {
             speed: speed || 1,
           },
           number: {
             value: particleDensity || 120,
           },
           opacity: {
             value: 0.2,
           },
           size: {
             value: { min: minSize || 1, max: maxSize || 3 },
           },
         },
         detectRetina: true,
       }}
     />
      )}
    </motion.div>
  );
};
