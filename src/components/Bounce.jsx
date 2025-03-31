import { motion } from "motion/react";
import React from "react";
const Bounce = ({ children }) => {
  return (
    <motion.div className="cursor-pointer" whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export default Bounce;
