import React from "react";
import mbappe from "../../assets/images/squad_home.webp";
import ButtonLink from "../ButtonLink";
import Marquee from "react-fast-marquee";
import players from "../../data/players";
const HomeSquad = () => {
  const surname = (player) => {
    return player.split(" ").pop().toUpperCase();
  };
  return (
    <>
      <div className="min-h-[80vh]   relative flex items-center">
        <div className="justify-center max-w-[1600px] mx-auto absolute inset-0 z-10">
          <div className=" ">
            <div className="max-w-[500px] mx-5">
              <div className="font-bold narrow text-[32pt]">Meet The Squad</div>
              <div>
                A perfect mix of seasoned leaders and rising stars, Real
                Madrid's squad is built for success.
              </div>
              <br />
              <ButtonLink title="The Squad" path={"/squad"} />
            </div>
            <div className="flex">
              <div className="max-w-[1000px] mx-auto col-span-2 hover:scale-105 duration-400 cursor-auto ">
                <img
                  src={mbappe}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Marquee className=" h-32" direction="right" autoFill={true}>
          {players.map((player) => (
            <div className="mx-5 narrow text-4xl font-[600] text-black/25">
              {surname(player.name)}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default HomeSquad;
