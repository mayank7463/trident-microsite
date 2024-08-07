import React from 'react';

const Paper = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <div className="w-1/3 mb-6">
        <img src="../assets/paper.svg" alt="Paper" className="w-full h-auto" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-16 ">
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-1.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-2.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-3.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-4.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-5.png" alt="" />
          </div>
      </div>
      <div className='h-[1px] w-full bg-[#000]'></div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-16">
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200 '>
               <img src="./brand/brand-6.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-7.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-8.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-9.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-10.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-11.png" alt="" />
          </div>
          <div className='w-[70%] shadow-xl hover:scale-125 transition-transform duration-200'>
               <img src="./brand/brand-12.png" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Paper;
