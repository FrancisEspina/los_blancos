import React from "react";
import { Link } from "react-router";
import Bounce from "./Bounce";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import { motion } from "motion/react";

const ButtonLink = ({ title = "Link", path }) => {
  return (
    <motion.div className="w-fit relative">
      <Link to={path}>
        <Bounce>
          <motion.div
            className="relative group hover:text-indigo-700"
            whileHover={{
              x: 2,
            }}
          >
            <span className="flex items-center">
              <RiArrowRightSFill size={25} />
              <div>{title}</div>
            </span>
          </motion.div>
        </Bounce>
      </Link>
    </motion.div>
  );
};

export default ButtonLink;
