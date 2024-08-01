import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Financial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
        <img src="../assets/financial.svg" alt="Financial" className="w-full h-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between mb-6">
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f1.png" alt="Financial 1" className="w-[90%] h-auto" />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f2.png" alt="Financial 2" className="w-[90%] h-auto" />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f3.png" alt="Financial 3" className="w-[90%] h-auto" />
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between mb-6">
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f4.png" alt="Financial 4" className="w-[90%] h-auto" />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f5.png" alt="Financial 5" className="w-[90%] h-auto" />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/3 p-2"
          initial="hidden"
          animate={controls}
          variants={fastFadeInUp}
          ref={ref}
        >
          <img src="../assets/f6.png" alt="Financial 6" className="w-[90%] h-auto" />
        </motion.div>
      </div>

      <motion.div
        className="w-full"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <img src="../assets/10years.png" alt="10 Years" className="w-[96%] h-auto" />
      </motion.div>
    </div>
  );
};

export default Financial;