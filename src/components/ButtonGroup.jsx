import { motion } from "motion/react";
import React from "react";
const ButtonGroup = ({ buttons, action, selectedButton }) => {
  return (
    <>
      <div className="flex gap-2  ring-2 ring-indigo-100 w-fit p-[7px] rounded-xl ">
        {buttons.map((button) => (
          <>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => action(button)}
              className={`${
                button == selectedButton && "bg-indigo-100 ring-2 "
              } ring-offset-2 ring-indigo-200 px-2 py-1 rounded-md text-[8pt] duration-300 cursor-pointer`}
            >
              {button}
            </motion.div>
          </>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
