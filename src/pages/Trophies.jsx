import React from "react";
import bg from "../assets/images/cabinet.webp";
import trophies from "../data/trophies";
const Trophies = () => {
  return (
    <>
      <div className="">
        <div className="default-container  flex-col justify-center">
          <div className="inset-0 absolute rounded-3xl overflow-hidden mt-[115px] z-[-1] mb-5 mx-5">
            <img src={bg} className="h-full w-full object-cover " alt="" />
          </div>
          <p className="text-[42pt] lg:text-[60pt] 2xl:text-[120pt] leading-12 md:leading-normal text-center  text-white narrow   mix-blend-difference font-bold">
            KINGS OF EUROPE
          </p>
          <br />
          <div className="flex gap-2 justify-center absolute bottom-12 flex-wrap max-w-[1500px]">
            {trophies.map((trophy) => (
              <div className="invert brightness-0 rounded-lg">
                <img className="size-6 md:size-15" src={trophy.icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" min-h-screen mt-5">
        <div className="grid grid-cols-2 gap-2 justify-center  max-w-[1500px] mx-auto">
          {trophies.map((trophy) => (
            <div className="rounded-lg">
              <img
                className="h-full w-full object-cover"
                src={trophy.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trophies;
