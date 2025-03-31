import React from "react";
import hero_image from "../../assets/images/hero.jpg";
import { shortLinks } from "../../routes";
import { Link } from "react-router";
import Bounce from "../Bounce";
const Hero = () => {
  return (
    <div className="default-container justify-between">
      <div className="inset-0 absolute flex z-[-1] opacity-20 sepia bg-black">
        <img
          src={hero_image}
          className="w-full h-full object-cover blur-[10px]"
          alt=""
        />
      </div>
      <div className="grid lg:grid-cols-2  grid-cols-1 items-center gap-y-12">
        <div>
          <p>Kings Of Europe</p>
          <div className="title font-[600] max-w-200">
            Hala Madrid y nada más
          </div>
        </div>

        <div className="text-end">
          <p className="text-xl narrow font-bold mb-5">Real Madrid CF</p>
          <div className="flex  max-w-[500px] ml-auto justify-between">
            {shortLinks.map((link) => (
              <Bounce>
                <Link to={link.path}>
                  <div>{link.nav}</div>
                </Link>
              </Bounce>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
