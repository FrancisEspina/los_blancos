import React, { useState } from "react";
import logo from "../assets/icons/real_madrid.png";
import bernabeu from "../assets/icons/bernabeu.svg";
import { PiList, PiX } from "react-icons/pi"; // Added PiX for close button
import { motion } from "framer-motion"; // ✅ Correct import
import Bounce from "../components/Bounce";
import { Link } from "react-router-dom";
import NavContent from "../components/NavContent";
import { shortLinks } from "../routes";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Indigo Background Menu */}
      <motion.div
        initial={{ x: 0, opacity: 0 }} // Start hidden
        animate={{ x: open ? 0 : -2000, opacity: open ? 1 : 0 }} // Slide in and out
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
        className="fixed inset-0 bg-indigo-800 z-50 flex flex-col items-center justify-center"
      >
        <NavContent logo={logo} />
        <div
          onClick={() => setOpen(false)} // Close menu on click
          className="absolute top-10 right-10 text-white text-3xl cursor-pointer"
        >
          <Bounce>
            <PiX size={40} />
          </Bounce>
        </div>
      </motion.div>

      {/* Navbar Top Section */}

      <div className=" fixed flex items-center justify-between w-full p-5 z-10 ">
        {/* Logo */}
        <Link to="/">
          <Bounce>
            <div className="max-w-10 cursor-pointer">
              <img
                src={logo}
                className="object-cover h-full w-full"
                alt="Logo"
              />
            </div>
          </Bounce>
        </Link>

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

      <div className="h-15 xl:h-0"></div>
    </>
  );
};

export default NavBar;
