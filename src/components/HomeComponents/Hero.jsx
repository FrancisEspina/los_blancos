import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { main_sponsors } from "../../data/sponsors";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div className="default-container justify-between">
      <div className="grid lg:grid-cols-2  grid-cols-1 items-center gap-y-12">
        <div>
          <p>Kings Of Europe</p>
          <div className="title font-[600] max-w-200">
            Hala Madrid y nada más
          </div>
        </div>

        <div className="text-end w-full">
          <p className="text-gl narrow  mb-5">Real Madrid CF</p>
          <div className="flex  justify-end gap-5 text-[45pt]">
            {main_sponsors.map((sponsor) => (
              <sponsor.icon></sponsor.icon>
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
