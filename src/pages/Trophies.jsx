import React, { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import bg from "../assets/images/cabinet.webp";
import trophies from "../data/trophies";
import AON from "../utils/AON";
import AOS from "../utils/AOS";
import logo from "../assets/icons/real_madrid.png";
import DialogBox from "../components/DialogBox";

import { motion } from "motion/react";
const Trophies = () => {
  let [open, setOpen] = useState(false);
  let [selectedTrophy, setSelectedTrophy] = useState(null);
  const openDialog = (data) => {
    setSelectedTrophy(data);
    setOpen(true);
    console.log(data);
  };
  return (
    <>
      <TropyDialog
        open={open}
        setOpen={setOpen}
        selectedTrophy={selectedTrophy}
      />
      <div className="">
        <div className="default-container  flex-col justify-center">
          <div className="inset-0 absolute rounded-3xl overflow-hidden mt-[115px] z-[-1] mb-5 mx-5">
            <img src={bg} className="h-full w-full object-cover " alt="" />
          </div>
          <div className="text-[42pt] lg:text-[60pt] 2xl:text-[120pt] leading-12 md:leading-normal text-center  text-white  mix-blend-difference font-bold">
            <div>
              <div className="text-[12pt] leading-0 ">REAL MADRID CF</div>
              <AOS>
                <div className="narrow">KINGS OF EUROPE</div>
              </AOS>
            </div>
          </div>
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
      <div className=" min-h-screen mt-5 mx-5 mb-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center  max-w-[1500px] mx-auto">
          {trophies.map((trophy) => (
            <>
              <AON>
                <TrophyCard trophy={trophy} setOpen={openDialog} />
              </AON>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const TrophyCard = ({ trophy, setOpen }) => {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setOpen(trophy);
        }}
      >
        <div className="rounded-3xl cursor-pointer flex  shadow-indigo-600/50 hover:shadow-lg duration-200 bg-gray-200/50 items-center  overflow-hidden py-5 px-10 hover:scale-101">
          <div className="md:max-w-[150px] max-w-[60px] ">
            <img
              className="h-full w-full object-cover mix-blend-multiply
                  "
              src={trophy.image}
              alt=""
            />
          </div>
          <div className="narrow font-bold md:text-[14pt] text-[10pt] max-w-50 md:max-w-60 leading-5 mb-2">
            {trophy.name}
          </div>

          <div className="narrow text-indigo-600 font-bold text-[20pt] md:text-[42pt] ml-auto  bg-gray-200 md:size-25 rounded-xl  size-10 flex items-center justify-center">
            {trophy.total}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const TropyDialog = ({ open, setOpen, selectedTrophy }) => {
  if (!selectedTrophy) return null;
  return (
    <>
      <DialogBox title="Competition" open={open} setOpen={setOpen}>
        <div className="relative">
          <div className="narrow text-[20pt] leading-8 font-normal md:text-[50pt] md:leading-15">
            {selectedTrophy.name}
          </div>
          <div className="w-full place-items-center">
            <img src={selectedTrophy.image} alt="" />
          </div>
          <div>{selectedTrophy.description}</div>
          <br />
          <div className="flex flex-wrap gap-2 max-h-[200px] overflow-auto justify-center mb-2">
            {selectedTrophy.years.map((year) => (
              <div className="py-1 px-2 text-[9pt] text-center w-fit rounded-full bg-indigo-600/20">
                {year}
              </div>
            ))}
          </div>
        </div>
      </DialogBox>
    </>
  );
};

export default Trophies;
