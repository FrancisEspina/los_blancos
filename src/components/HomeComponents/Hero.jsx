import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { main_sponsors } from "../../data/sponsors";
import { Link } from "react-router";

import AOS from "../../utils/AOS";
const Hero = () => {
  return (
    <div className="default-container justify-between  ">
      <div className="grid lg:grid-cols-2 max-w-[1400px] bg-red- mx-auto  grid-cols-1 items-center gap-y-12">
        <div>
          <AOS delay={0.2}>
            <div className="bg-black w-fit text-white px-2 py-1 mb-1">
              <p>Kings Of Europe</p>
            </div>
          </AOS>
          <AOS>
            <div className="title font-[600] max-w-200">
              Hala Madrid y nada más
            </div>
          </AOS>
        </div>

        <div className="text-end w-full">
          <AOS>
            <p className="text-gl narrow  mb-5">Real Madrid CF</p>
          </AOS>
          <div className="flex  justify-end gap-5 text-[45pt]">
            {main_sponsors.map((sponsor, idx) => (
              <AOS delay={idx / 5}>
                <sponsor.icon></sponsor.icon>
              </AOS>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 text-[14pt]">
        <p className="text-[9pt]">Concept Website by</p>
        <div className="flex gap-2 items-center">
          <div>Francis Espiña</div>
          <FaGithub />
          <FaLink />
        </div>
        <Link to={`https://www.realmadrid.com/en-US/football/first-team/home`}>
          <p className="text-[9pt]">Visit Real Madrid CF Website</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
