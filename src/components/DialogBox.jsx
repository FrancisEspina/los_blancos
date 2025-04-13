import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FaX } from "react-icons/fa6";

const DialogBox = ({
  children,
  open = false,
  title = "Dialog Title",
  setOpen,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] mx-5"
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="bg-black/80 inset-0 fixed flex justify-center items-center backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-5 rounded-2xl max-w-[900px] w-full mx-5 bg-white "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center ">
                <div>{title && <h1 className="narrow">{title}</h1>}</div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="bg-gray-300 cursor-pointer size-8 flex items-center justify-center p-1 rounded-md"
                >
                  <FaX size={10} />
                </motion.div>
              </div>
              <div className="mx-2">{children}</div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DialogBox;
