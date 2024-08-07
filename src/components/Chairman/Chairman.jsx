import React from 'react';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 1 } },
};

function Chairman() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className='marginal'>
      <div className='my-8'>
        <motion.div
          ref={ref}
          className='grid lg:grid-cols-2 grid-cols-1 gap-4'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div variants={imageVariants}>
            <img src="./Chairman/chair-1.png" alt="" />
          </motion.div>
          <motion.div variants={textVariants}>
            <div className='w-[40%]'>
              <img src="./Chairman/messgae.svg" alt="" />
            </div>
            <div>
              <p className='text-xl'>
                I sincerely wish good health and overall wellbeing to all of you and your family members. During the era of India’s momentous economic liberalization, a visionary first-generation entrepreneur, started a journey in the early 1990s with few bundles of raw cotton and a dream. Padma Shri Rajinder Gupta laid the foundation of a pioneering enterprise, today popularly known as Trident Limited. Since inception this powerhouse has consistently carved its success path through innovation, integrity, and a relentless pursuit of excellence.
              </p>
              <div className='py-8'>
                <p className='text-[#febd2a] font-bold'>Anthony Desa</p>
                <p className='font-bold'>Chairman</p>
                <motion.div className='flex justify-start py-10' variants={buttonVariants}>
                  <Link to='/chair-message'><ReadMoreButton /></Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Chairman;
