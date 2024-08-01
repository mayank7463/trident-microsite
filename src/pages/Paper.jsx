import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Paper = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fastFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const fastFadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <motion.div
        className="w-1/3 mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fastFadeIn}
      >
        <img src="../assets/paper.svg" alt="Paper" className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <img src="../assets/portfolio.png" alt="Portfolio" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Paper;
