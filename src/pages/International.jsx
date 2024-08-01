import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const International = () => {
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
        className="w-1/3 mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fastFadeIn}
      >
        <img src="../assets/international.svg" alt="International" className="w-full h-auto" />
      </motion.div>

      <motion.h2
        className="text-[#148979] text-2xl font-bold mb-4"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        Our International Home Textile Brands
      </motion.h2>

      <motion.p
        className="mb-6"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        Committed to a holistic approach of adding value, our product portfolio comprises an extensive range of in-house brands, making us a one-stop solution for home textiles.
      </motion.p>

      <motion.div
        className="w-full"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <img src="../assets/internation.png" alt="International Products" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default International;
