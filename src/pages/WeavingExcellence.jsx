import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const WeavingExcellence = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section first comes into view
    threshold: 0.1, // Trigger when at least 10% of the section is visible
  });

  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <img
        className="w-full md:w-1/3  mb-6"
        src="../assets/Excellence.svg"
        alt="Excellence"
      />
      
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 lg:pr-8">
          <h4 className="mb-4 text-2xl font-thin text-[#793a23]">
            Trident Limited is the flagship company of the esteemed Trident Group, a powerful Indian conglomerate with a global reach. We are a vertically-integrated textile and paper company, transforming raw materials into exceptional home essentials and eco-friendly paper products.
          </h4>
          <p className="mb-4">
            Our story began in the early 1990s, fueled by a simple dream and a commitment to excellence. From humble beginnings involving crafting yarn, we have evolved into a leading global manufacturer of home textiles. Innovation and integrity are at the core of everything we do—they propel us on a journey of continuous improvement.
          </p>
          <p className="mb-4">
            We specialize in Bath and Bed Linen and Wheat Straw-based Paper. Our dedication to quality has earned us a loyal customer base across India and beyond. We work closely with national brands, private labels, and retailers, ensuring everyone has access to our top-notch products.
          </p>
          <p className="mb-4">
            Operating state-of-the-art facilities in Barnala and Dhaula (Punjab) and Budhni (Madhya Pradesh), we cater to the needs of our global clientele.
          </p>
          <p>
            The recognition we have received is not just from satisfied customers. We are proud to have been acknowledged by vendors and government entities for our dedication to social responsibility and environmental practices. High-quality products, sustainability, and ethical sourcing are the cornerstones of our business.
          </p>
        </div>
        
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img className="w-full" src="./assets/weaving.webp" alt="Weaving" />
        </div>
      </div>

      <div className="pt-12" ref={sectionRef}>
        <div>
          <h2 className="text-[#148979] text-2xl font-bold">Numbers that matter</h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          <div className="mb-4 mt-4 w-full md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp end={90} suffix="+" /> : "90+"}
              </span>
              <br /> Countries
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp end={61} suffix="%" /> : "61%"}
              </span>
              <br /> Exports
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp end={25} suffix="+" /> : "25+"}
              </span>
              <br /> E-commerce website presence
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp end={15500} suffix="+" /> : "15,500+"}
              </span>
              <br /> Workforce
            </div>
          </div>
          <div className="mb-4 mt-4 w-full md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <span className="text-5xl font-bold">
                World’s Largest
              </span>
              <br /> Wheat Straw-Based Paper Manufacturer
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp start={0} end={67903} separator="," prefix="₹" /> : "₹67,903 Million"}
              </span>
              <br /> Revenue
            </div>
            <div className="mb-4">
              <span className="text-5xl font-bold">
                {inView ? <CountUp start={0} end={9949} separator="," prefix="₹" /> : "₹9,949 Million"}
              </span>
              <br /> EBITDA
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <img className="w-full" src="../assets/1.webp" alt="Stats" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeavingExcellence;
