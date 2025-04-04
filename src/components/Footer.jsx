import React from "react";
import main_logo from "../assets/icons/rm_main_logo.png";
import logo from "../assets/icons/real_madrid.png";
import { footerdata } from "../data/footerdata";
import socials from "../data/socials";
import { Link } from "react-router";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <>
      <div>
        <div className="w-full border-t-1  border-black/20 p-10 ">
          <div className="max-w-[1800px] mx-auto grid xl:grid-cols-4 grid-cols-1 gap-5">
            <div className=" max-h-[200px]">
              <img
                src={main_logo}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            {footerdata.map((column) => (
              <>
                <div className=" ">
                  <b>{column.header}</b>
                  <div className={`mt-1 text-[10pt]`}>
                    {column.content.map((subheader) => (
                      <div className="w-fit">
                        <Link to={subheader.path}>
                          <div className="hover:text-indigo-600 hover:underline w-fit">
                            <p>{subheader.name}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
            <div>
              <b>Follow</b>
              <div className="flex flex-wrap gap-4 h-fit w-fit mt-1">
                {socials.map((social) => (
                  <>
                    <Link to={social.path}>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <social.icon
                          className="hover:text-indigo-600"
                          size={30}
                        ></social.icon>
                      </motion.div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-1  border-black/20 p-5 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="">
              <img className="max-h-5" src={main_logo} alt="" />
            </div>
            <div className="narrow">Real Madrid</div>
          </div>

          <div className="text-sm flex items-center gap-2">
            <a className="hover:underline" href="https://www.realmadrid.com">
              realmadrid.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
