import React, { useState } from "react";
import trophies from "../../data/trophies";
import { Link } from "react-router";
import Bounce from "../Bounce";
import { motion } from "motion/react";
import ButtonLink from "../ButtonLink";
const TrophyBanner = () => {
  let [focused, setFocus] = useState(null);
  return (
    <div className="text-center">
      <div className="min-h-6  w-fit mx-auto px-5 rounded-xl">
        <div className="bg-indigo-600 px-3 text-white rounded-xl">
          {focused && focused.name}
        </div>
      </div>
      <div className="flex justify-between gap-x-5  my-10 max-w-[1600px] mx-auto overflow-x-auto scroll-smooth relative p-3">
        {trophies.map((trophy) => (
          <div
            onMouseOver={() => setFocus(trophy)}
            onMouseLeave={() => setFocus(null)}
            className="shrink-0 flex flex-col justify-center items-center hover:scale-110 duration-150"
          >
            <img className="size-35  rounded-2xl" src={trophy.icon} alt="" />
            <div className="text-[22pt] narrow font-[600]">{trophy.total}</div>
          </div>
        ))}
      </div>
      <div className=" place-items-center">
        <ButtonLink title="List of Winners" path={"/trophies"} />
      </div>
    </div>
  );
};

export default TrophyBanner;
