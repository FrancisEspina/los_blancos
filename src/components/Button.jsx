import { motion } from "motion/react";
import React from "react";
import Bounce from "./Bounce";
import { Link } from "react-router";
const Button = ({ title = "Button", path }) => {
  return (
    <>
      <div className="w-fit">
        <Link to={path}>
          <Bounce>
            <div className="hover:bg-indigo-600 px-4 py-2 rounded-xl duration-60 border hover:text-white">
              {title}
            </div>
          </Bounce>
        </Link>
      </div>
    </>
  );
};

export default Button;
