import React from "react";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const AOS = ({
  children,
  delay = 0,
  horizontal = false,
  amount = 0.3,
  once = false,
}) => {
  const animationConfig = horizontal
    ? { initial: { opacity: 0, x: 25 }, whileInView: { opacity: 1, x: 0 } }
    : { initial: { opacity: 1, y: "100%" }, animate: { opacity: 1, y: 0 } };

  return (
    <div className="h-fit overflow-clip">
      <motion.div
        {...animationConfig}
        transition={{
          bounce: 0.3,
          type: "tween",
          ease: "easeInOut", // Fix incorrect ease array
          duration: 0.6, // Reduced duration to avoid excessive scroll lag
          delay: delay,
        }}
        viewport={{ once: once, amount: amount }} // Slightly increased amount to trigger earlier
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AOS;
