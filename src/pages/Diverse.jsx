import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Diverse = () => {
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
        className="w-full md:w-1/3 mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fastFadeIn}
      >
        <img src="../assets/diverse.svg" alt="Diverse" />
      </motion.div>

      <motion.div
        className="mb-4 font-bold text-2xl font-thin text-[#793a23]"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        At Trident, we are dedicated to weaving excellence into everything we do. This dedication starts with our products.
      </motion.div>

      <motion.div
        className="mb-12"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <h4 className="text-[#148979] font-bold">Evolving with lifestyles</h4>
        <p className="mb-4">
          We continuously innovate our product range, ensuring our yarns, bed and bath linens and eco-friendly paper meet the changing preferences of the contemporary customer.
        </p>

        <h4 className="text-[#148979] font-bold">Quality and sustainability</h4>
        <p className="mb-4">
          High-quality materials and sustainable practices are at the heart of our creations. Every product is crafted to meet the highest standards of durability and environmental responsibility.
        </p>

        <p className="mb-4">
          Building a strong brand goes hand-in-hand with exceptional products. We invest in brand-building initiatives to:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>
            Improve visibility - We engage in promotional activities to expand our global reach and enhance brand recognition.
          </li>
          <li>
            Loyal customer base - Our focus on quality and brand identity has resulted in a network of loyal clientele worldwide.
          </li>
        </ol>
        <p className="mb-4">
          We understand that a robust distribution network is key to connecting with our customers. Here is how we ensure our products are readily available to all:
        </p>

        <h4 className="text-[#148979] font-bold">Diverse channels</h4>
        <p className="mb-4">
          We utilise multi-brand shops, shop-in-shop concepts, and long-standing partnerships to deepen customer engagement and expand our reach.
        </p>

        <h4 className="text-[#148979] font-bold">Digital focus</h4>
        <p className="mb-4">
          Alliances with major online retailers enable us to meet the evolving demands of today’s tech-savvy customers.
        </p>

        <h4 className="text-[#148979] font-bold">Leading the Industry</h4>
        <p className="mb-4">
          We participate in industry events such as Bharat Tex, India’s premier Textile Event, as Silver Sponsors. This involvement underscores our significant contribution to the industry’s growth and development.
        </p>

        <h4 className="text-[#148979] font-bold">Innovation beyond textiles</h4>
        <p className="mb-4">
          Our commitment to excellence extends beyond our core business. Participation in events like PaperEx’23 demonstrates our ongoing dedication to innovation and excellence in the paper sector as well. By constantly pushing boundaries, we strive to be a leader in all the areas we operate in.
        </p>

        <h4 className="text-[#148979] font-bold">Revenue split between segments</h4>
      </motion.div>

      <motion.div
        className="flex justify-center gap-6"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <img className="w-1/3" src="../assets/e1.png" alt="Revenue segment 1" />
        <img className="w-1/3" src="../assets/e2.png" alt="Revenue segment 2" />
        <img className="w-1/3" src="../assets/e3.png" alt="Revenue segment 3" />
      </motion.div>
    </div>
  );
};

export default Diverse;
