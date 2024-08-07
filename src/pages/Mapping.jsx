import React from 'react';
import { motion } from 'framer-motion';

const Mapping = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <div className="w-full md:w-1/3  mb-6">
        <img src="../assets/expansive.svg" alt="Expansive" />
      </div>

      <div className="mb-4  text-2xl font-thin text-[#793a23]">
        Trident Limited is the flagship company of the esteemed Trident Group, a powerful Indian conglomerate with a global reach. We are a vertically-integrated textile and paper company, transforming raw materials into exceptional home essentials and eco-friendly paper products.
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start my-10">
        <img className="w-full mb-6 lg:mb-0 lg:mr-8" src="./Map/map.png" alt="Map" />
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 bg-[#e1f4f1] p-8 my-10'>
                   <div className='point'>
                        <div className='w-4 h-4 rounded-full bg-[#febd2a]'></div>
                        <p className='text-[#33988a] font-bold'>National/International Presence</p>
                        <div className='w-14 h-1 bg-[#febd2a]'></div>
                        <ul className='py-4'>
                           <div className='grid lg:grid-cols-4 sm:grid-cols-1 px-8'>
                              
                                    <li>New York</li>
                                    <li>England</li>
                                    <li>Dubai</li>
                                    <li>New Delhi</li>
                                    <li>Mumbai</li>  
                                    <li>Gurugram</li>
                                    <li>Ludhiana</li>
                                    <li>Chandigarh</li>
                                    <li>Bhopal</li>
                              
                           </div>
                        </ul>
                   </div>
                   <div className='point'>
                        <div className='w-4 h-4 rounded-full bg-[#f38720]'></div>
                        <p className='text-[#33988a] font-bold'>Manufacturing Plants</p>
                        <div className='w-14 h-1 bg-[#febd2a]'></div>
                        <ul className='py-4'>
                           <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-8'>
                                  <li>Sanghera, Punjab</li>
                                  <li>Dhaula, Punjab</li>
                                  <li>Budhni, Madhya Pradesh</li>
                           </div>
                        </ul>
                   </div>
              </div>
        
      
    </div>
  );
};

export default Mapping;
