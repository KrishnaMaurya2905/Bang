import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
const ShopLanding = ({ ShopLandingdata }) => {
  const container2 = useRef();
  const { scrollYProgress } = useScroll({
    target: container2,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"]);
  const titleParts = ShopLandingdata.Title.split(" ");
  return (
    <div ref={container2}>
      <div className="h-[80vh] overflow-hidden">
        <motion.div style={{ y }} className="flex h-full w-full">
          <img
            className="h-full w-full object-cover absolute"
            src={ShopLandingdata.Img}
            alt=""
          />

          <div className="h-full w-full max-[450px]:mt-[4vh]  backdrop-blur-sm top-0 flex px-20 max-lg:px-10 max-sm:px-5">
            <div className="text-white flex flex-col justify-center gap-5 xl:mt-[9vh] ">
              <h1 className="xl:text-7xl font-primary font-[650] max-sm:text-3xl max-md:text-5xl md:text-4xl ">
                {titleParts[0]}
                <br />
                {titleParts.slice(1).join(" ")}
              </h1>
              <h2 className="text-white font-Secondary w-[45%] tracking-tight leading-5  max-md:text-sm max-sm:w-full">
                {ShopLandingdata.Para}
              </h2>
              <Button text={"Explore More"} p={"group-hover:text-black"} circ={"bg-white text-black"} customclass={`w-fit bg-[#ffffff3a] md:text-xs md:px-5 max-md:text-xs max-md:px-4 `} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-[40vh] w-full bg-white flex flex-col justify-center items-center gap-5">
        <h1 className="px-10 text-5xl font-primary font-[650] max-lg:text-3xl text-center max-sm:text-xl">
          {ShopLandingdata.shopQue}
        </h1>
        <h2 className="font-Secondary text-xl w-[50%] max-lg:text-sm max-xl:text-lg max-sm:w-[80%] text-center max-md:px-10">
          {ShopLandingdata.shopCompare}
        </h2>
        <Button text={"Explore More "} p={"group-hover:text-black "} circ={"bg-white "} customclass={`w-fit bg-[#FFC356] border-2 text-white md:text-xs md:px-5 max-md:text-xs max-md:px-4 `} />
      </div>
    </div>
  );
};

export default ShopLanding;