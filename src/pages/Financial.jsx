import React from "react";

const Financial = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <div className="w-1/3  mb-6">
        <img src="../assets/financial.svg" alt="Financial" className="w-full h-auto" />
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between mb-6">
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f1.png" alt="Financial 1" className="w-[90%] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f2.png" alt="Financial 2" className="w-[90%] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f3.png" alt="Financial 3" className="w-[90%] h-auto" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between mb-6">
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f4.png" alt="Financial 4" className="w-[90%] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f5.png" alt="Financial 5" className="w-[90%] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <img src="../assets/f6.png" alt="Financial 6" className="w-[90%] h-auto" />
        </div>
      </div>

      <div className="w-full">
        <img src="../assets/10years.png" alt="10 Years" className="w-[96%] h-auto" />
      </div>
    </div>
  );
};

export default Financial;
