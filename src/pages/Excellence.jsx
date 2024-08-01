import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Excellence = () => {
  // Create animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Track if the element is in view
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  // Trigger animations when the elements come into view
  React.useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, scale: 1 });
    } else {
      controls1.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView1, controls1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, scale: 1 });
    } else {
      controls2.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView2, controls2]);

  React.useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, scale: 1 });
    } else {
      controls3.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView3, controls3]);

  return (
    <div className="text-center">
      <motion.img
        ref={ref1}
        src='../assets/excellence2.svg'
        alt="Excellence"
        className="w-1/3 mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls1}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        ref={ref2}
        src='../assets/excellence2nd.png'
        alt="Excellence"
        className="w-[70%] mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls2}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.img
        ref={ref3}
        src='../assets/CI.png'
        alt="Excellence"
        className="w-[70%] mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls3}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </div>
  );
};

export default Excellence;
