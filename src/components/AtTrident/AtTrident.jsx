import React from 'react';
import { motion } from 'framer-motion';

function AtTrident() {
  return (
    <div className='marginal'>
      <motion.div 
        className='my-16'
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className='relative'>
          <motion.img 
            src="./AtTrident/theme-1.png" 
            alt="" 
            className='w-full'
            initial={{ scale: 0.9 }} 
            whileInView={{ scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div 
            className='absolute top-[10%] left-[8%] p-8'
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src="./AtTrident/ExcellenceIntro.svg" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AtTrident;
