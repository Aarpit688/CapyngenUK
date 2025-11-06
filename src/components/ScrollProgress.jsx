import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`fixed inset-x-0 top-0 z-90 h-0.5 origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] ${className}`}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;
