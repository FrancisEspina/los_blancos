import React from "react";
import { motion } from "framer-motion";

const AON = ({
  children,
  delay = 0,
  horizontal = false,
  amount = 0.3,
  once = false,
}) => {
  const animationConfig = horizontal
    ? { initial: { opacity: 0, x: 25 }, whileInView: { opacity: 1, x: 0 } }
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <motion.div
      {...animationConfig}
      transition={{
        bounce: 0.3,
        type: "spring",
        ease: "easeInOut", // Fix incorrect ease array
        duration: 1.5, // Reduced duration to avoid excessive scroll lag
        delay: delay,
      }}
      viewport={{ once: once, amount: amount }} // Slightly increased amount to trigger earlier
    >
      {children}
    </motion.div>
  );
};

export default AON;
