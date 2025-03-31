import React from "react";
import { navLinks } from "../routes";
import Bounce from "./Bounce";
import socials from "../data/socials";
const NavContent = ({ logo }) => {
  return (
    <>
      <div className="relative min-h-screen flex  items-center ">
        <div className="flex flex-col items-center">
          <div className="max-w-50 mb-20">
            <img className="invert" src={logo} alt="" />
          </div>
          <div className="text-white flex gap-10">
            {navLinks.map((link) => (
              <>
                <Bounce>
                  <div className="text-lg">{link.nav}</div>
                </Bounce>
              </>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 text-white flex items-center justify-center gap-12 w-full">
          {socials.map((social) => (
            <>
              <div>
                <social.icon size={30}></social.icon>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavContent;
