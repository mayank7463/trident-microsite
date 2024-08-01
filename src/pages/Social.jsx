import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Social = () => {
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
        <img
          src="../assets//social.svg"
          alt="Environment"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="mb-6"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <h4 className="mb-4 font-bold text-2xl font-thin text-[#793a23]">
        Incorporating social development into our business activities is an integral part of our corporate strategy, and we are investing in our local communities through CSR projects addressing education, health & wellness, women empowerment and agro-waste management.  We have touched the lives of 50,000+ people positively through various initiatives across health, education, sanitation and self-sufficiency.
        </h4>
        <p>
        Madhuban Hospital in Budhni, Madhya Pradesh, is a significant healthcare facility funded by the Trident Limited, under its CSR initiatives. It addresses the pressing healthcare needs not only of Budhni’s residents but also those of neighbouring communities like Hoshangabad, Obedullaganj, Rehti, Nasrullahganj, and Barkhedi, all within a 50 km radius. The hospital’s comprehensive facilities include 30 patient beds, 7 day care beds, 6 ICU beds, separate male and female wards, recovery and labour rooms, infant ICU units, and labour beds, ensuring accommodation tailored to diverse medical requirements. Equipped with state-of-the-art medical equipment, the hospital’s pathology lab offers a wide array of diagnostic services, including biochemistry analysis, haematology testing, arterial blood gas analysis, electrolyte and hormonal analysis, urine analysis, and coagulation testing. Complementing these facilities is a team of highly qualified doctors covering various specialties, ranging from General Medicine, OBS and Gynae, General Surgery, Paediatric, Orthopaedic, Maxillo-Facial Surgery, Radiology and Pathology, ensuring comprehensive healthcare delivery to the community. Madhuban Hospital emerges as a beacon of modern healthcare, dedicated to enhancing accessibility and quality of medical services in Madhya Pradesh.        </p>
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        animate={controls}
        variants={fastFadeInUp}
        ref={ref}
      >
        <img
          src="../assets/Social.jpg"
          alt="Environment"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Social;