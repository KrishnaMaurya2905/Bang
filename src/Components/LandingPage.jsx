import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import InteractiveImage from "./InteractiveImage";

const LandingPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);

  return (
    <div className=" overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
        <InteractiveImage />
      </motion.div>
    </div>
  );
};

export default LandingPage;