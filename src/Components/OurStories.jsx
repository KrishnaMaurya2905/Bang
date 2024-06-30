import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const OurStories = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const images = [
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484619/stories1_s35uay.webp",
      style:
        "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh] max-lg:h-[30vh] max-lg:w-[25vw] max-lg:left-[-32vw] max-sm:w-[30vw] max-sm:top-[-30vh] max-sm:w-[42%] max-sm:left-[-26%]",
    },
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484619/stories2_j3pwa1.webp",
      style:
        "top-[-30vh] left-[10vh] w-[35vw] h-[30vh] max-lg:w-[45vw] max-sm:w-[50vw] max-sm:left-[22%] ",
    },
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484619/stories3_nq9urk.webp",
      style:
        "top-[2vh] left-[27vw] w-[25vw] h-[30vh] max-lg:left-[30vw] max-sm:w-[30vw] max-sm:left-[32vw] max-sm:hidden",
    },
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484619/stories4_sdahfx.webp",
      style: " left-[-20vw] top-[30vh] w-[35vw] h-[30vh] max-sm:left-[-28vw] max-sm:w-[40%] max-sm:left-[-27%] max-sm:top-[30vh] max-sm:h-[30vh]",
    },
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484619/stories5_y1zy9u.webp",
      style: " top-[33vh] left-[12vw] w-[25vw] h-[25vh] max-sm:w-[52%] max-sm:left-[21%] max-sm:top-[30vh] max-sm:h-[30vh]",
    },
    {
      img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484620/stories6_o8owvc.webp",
      style: "top-[0vh] left-[0vh] w-[25vw] max-sm:w-[94%] h-[25vh] max-sm:h-[28vh] max-sm:left-[0%] max-lg:w-[30vw] ",
    },
  ];

  return (
    <div className="w-full  bg-white">
      <div ref={containerRef} className="h-[300vh] pt-10 bg-white relative">
        <div className="sticky top-0 overflow-hidden h-[100vh]">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              style={{ scale }}
              className="w-full h-full absolute top-0 flex items-center justify-center"
            >
              <div className={`relative ${item.style}`}>
                <img
                  className="object-cover w-full h-full"
                  src={item.img}
                  alt=""
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStories;
