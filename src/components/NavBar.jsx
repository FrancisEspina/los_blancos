import React, { useState } from "react";
import logo from "../assets/icons/real_madrid.png";
import bernabeu from "../assets/icons/bernabeu.svg";
import ucl from "../assets/icons/ucl.svg";
import { PiList, PiX } from "react-icons/pi"; // Added PiX for close button
import { AnimatePresence, motion } from "framer-motion"; // ✅ Correct import
import Bounce from "../components/Bounce";
import { Link } from "react-router-dom";
import NavContent from "../components/NavContent";
import { navLinks, shortLinks } from "../routes";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      {/* Indigo Background Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.33, 0.71, 0.2, 1.01],
            }}
            className="fixed inset-0 bg-indigo-800 z-50 flex flex-col items-center justify-center"
          >
            <NavContent close={close} />
            <div
              onClick={() => setOpen(false)} // Close menu on click
              className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            >
              <Bounce>
                <PiX size={40} />
              </Bounce>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Top Section */}

      <div className=" fixed flex items-center justify-between backdrop-blur-[10px]  w-full p-5 z-20 border-gray-300 border-b ">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Link to="/">
            <Bounce>
              <div className="max-w-10 ">
                <img
                  src={logo}
                  className="object-cover h-full w-full"
                  alt="Logo"
                />
              </div>
            </Bounce>
          </Link>

          <Link to="/">
            <Bounce>
              <div className="max-w-10  ">
                <img
                  src={ucl}
                  className="object-cover h-full w-full "
                  alt="Logo"
                />
              </div>
            </Bounce>
          </Link>
        </div>

        <div className="hidden xl:block lg:block">
          <div className="flex gap-10 ">
            {shortLinks.map((button) => (
              <>
                <Link to={button.path}>
                  <Bounce>{button.nav}</Bounce>
                </Link>
              </>
            ))}
          </div>
        </div>
        {/* Open Menu Button */}
        <div className="flex gap-5 items-center">
          <div className="max-w-12">
            <Bounce>
              <img className="w-full h-full" src={bernabeu} alt="" />
            </Bounce>
          </div>

          <div
            className="group"
            onClick={() => setOpen(true)} // Open menu on click
          >
            <Bounce>
              <PiList className="group-hover:text-indigo-600 duration-100 cursor-pointer text-3xl " />
            </Bounce>
          </div>
        </div>
      </div>

      <div className="h-8 xl:h-0"></div>
    </>
  );
};

export default NavBar;
