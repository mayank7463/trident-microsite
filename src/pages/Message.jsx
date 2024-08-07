import React from "react";

const Message = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 mt-12">
      <div className="w-full md:w-1/3  mb-6">
        <img src="../assets/messgae.svg" alt="Message" className="w-full h-auto" />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-[#febd2a] font-bold text-xl mb-4">
            Dear Shareholders,
          </h2>

          <p className="font-bold text-2xl text-[#793a23] mb-6">
            I sincerely wish good health and overall wellbeing to all of you and your family members. During the era of India’s momentous economic liberalization, a visionary first-generation entrepreneur, started a journey in the early 1990s with few bundles of raw cotton and a dream. Padma Shri Rajinder Gupta laid the foundation of a pioneering enterprise, today popularly known as Trident Limited. Since inception this powerhouse has consistently carved its success path through innovation, integrity, and a relentless pursuit of excellence.
          </p>

          <p className="mb-6">
            Excellence here isn’t just a goal, it’s a way of life ingrained in every facet of operations. As we navigate through the ever-evolving operations of business landscape, Trident remains at the forefront embracing technological advancements in Yarn, Home Textiles, Energy, Paper & Chemical, focusing on innovation, adaptability, sustainability and traceability. Our pursuit of excellence is not limited. It extends beyond business metrics and encompasses our responsibility towards nature and society. We value creating a diverse, inclusive, and supportive environment where everyone collaborates towards a collective shared vision. As an organization, we encourage entrepreneurship, ownership, risk-taking, and thinking out-of-the-box. At Trident Limited, we prioritize the holistic well-being of employees, addressing social, physical, community, financial, and economical needs. Our developmental initiatives extend beyond the workplace, encompassing Takshashila program that encourages continuous learning and skill enhancement. While Panchsabha epitomizes our commitment to fostering an environment of openness and collaboration. Inspired by challenge and nature’s timeless wisdom, Trident Limited stands poised with excellence to shape a brighter and prosperous future!
          </p>

          <h2 className="text-[#febd2a] font-bold mb-1">
            Anthony Desa
          </h2>
          <p className="font-bold mb-6">
            Chairman
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src="../assets/message.webp" alt="Message" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Message;
