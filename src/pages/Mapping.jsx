import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Mapping = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fastFadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fastFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const fastFadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <motion.div
        className="w-full md:w-1/3 mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fastFadeIn}
      >
        <img src="../assets/expansive.svg" alt="Expansive" />
      </motion.div>

      <motion.div
        className="mb-4 font-bold text-2xl font-thin text-[#793a23]"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        Trident Limited is the flagship company of the esteemed Trident Group, a powerful Indian conglomerate with a global reach. We are a vertically-integrated textile and paper company, transforming raw materials into exceptional home essentials and eco-friendly paper products.
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start"
        initial="hidden"
        animate={controls}
        variants={fastFadeInRight}
        ref={ref}
      >
        <img className="w-full  mb-6 lg:mb-0 lg:mr-8" src="../assets/map.png" alt="Map" />
      </motion.div>
    </div>
  );
};

export default Mapping;
