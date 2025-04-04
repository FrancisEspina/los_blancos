import React from "react";
import { navLinks } from "../routes";
import Bounce from "./Bounce";
import socials from "../data/socials";
import logo from "../../src/assets/icons/real_madrid.png";
import { Link } from "react-router";
const NavContent = ({ close }) => {
  return (
    <>
      <div className="relative min-h-screen flex  items-center ">
        <div className="flex flex-col items-center">
          <div className="max-w-50 mb-20">
            <img loading="lazy" className="invert" src={logo} alt="" />
          </div>
          <div className="text-white flex gap-10">
            {navLinks.map((link) => (
              <>
                <Link to={link.path}>
                  <Bounce>
                    <div onClick={close} className="text-lg ">
                      {link.nav}
                    </div>
                  </Bounce>
                </Link>
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
