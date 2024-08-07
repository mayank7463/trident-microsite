import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Trends = () => {
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

  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <motion.div
        className="w-1/3  mb-6"
        initial="hidden"
        animate="visible"
        variants={fastFadeIn}
      >
        <img src="../assets/trends.svg" alt="Trends" className="w-full h-auto" />
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.div
          className="w-full"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/trends1.webp" alt="Trends 1" className="w-full h-auto mb-6" />
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/trends2.webp" alt="Trends 2" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Trends;
