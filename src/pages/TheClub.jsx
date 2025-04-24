import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/real_madrid.png";
import { pastLogos } from "../assets/images/past_logos/pastLogoCollector";
import { leagues } from "../assets/images/leagues/leaguesCollector";
import { slideShowImages } from "../assets/images/slideshow/slideShowCollector";
import Marquee from "react-fast-marquee";
import galacticos from "../assets/images/slideshow/Galacticos_Header.webp";
import trophies from "../data/trophies";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { AnimatePresence, motion } from "motion/react";

const TheClub = () => {
  const years = [
    "1902",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
  ];

  const maxValue = years.length - 1;
  let [year, setYear] = useState(0);

  const estimateYear = (value) => {
    let newValue = (value / 100) * maxValue;
    setYear(Math.round(newValue));
  };

  return (
    <div className="pb-18">
      <div className="default-container ">
        <img src={logo} className="opacity-5 ml-auto" alt="" />
        <div className="">
          <div className="absolute inset-0 top-[35%] ">
            <div className="mx-5">
              <div className="flex items-center justify-between max-w-[1600px] mx-auto flex-wrap">
                <div>
                  <p className="narrow">The Club</p>
                  <div className="text-[32pt] narrow lg:text-[42pt] font-bold">
                    LOS BLANCOS
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Marquee autoFill={true}>
                {slideShowImages.map((image, index) => (
                  <div className="h-50 w-100 mx-2 overflow-hidden rounded-xl">
                    <img src={image} className=" w-full object-cover" alt="" />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <div className="max-w-[1600px] mx-auto space-y-25">
          <div>
            <div className="lg:place-items-end">
              <Title title="Club History" />
            </div>
            <br />
            <div className="title text-gray-200 font-bold">Real Madrid CF</div>
            <br />
            <ClubHistoryBanner />
          </div>
          <div className="flex flex-wrap gap-5 mt-5">
            <GlassContainer>
              <div>
                <div>Crest</div>
                <div className="flex flex-wrap items-center justify-center gap-5 ">
                  {pastLogos.map((logo, idx) => (
                    <>
                      <div className="size-20 min-w-20 not-hover:grayscale hover:scale-110 duration-200">
                        <img
                          src={logo}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </GlassContainer>

            <GlassContainer>
              <div>
                <div>Leagues</div>
                <div className="flex flex-wrap items-center justify-center gap-5 ">
                  {leagues.map((logo, idx) => (
                    <>
                      <div className="size-20 not-hover:grayscale hover:scale-110 duration-200">
                        <img
                          src={logo}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </GlassContainer>
          </div>

          <ClubGalacticos />
          <br />
          <div className="title relative h-6 opacity-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full  "
              >
                {years[year]}
              </motion.div>
            </AnimatePresence>
          </div>
          <Slider
            defaultValue={year}
            trackStyle={{ backgroundColor: "#6366F1", height: 20 }}
            railStyle={{ backgroundColor: "lightgray", height: 20 }}
            onChange={(value) => estimateYear(value)}
            handleStyle={{
              borderColor: "white",
              height: 30,
              width: 30,
              marginLeft: -10,
              marginTop: -5,
              backgroundColor: "#6366F1",
            }}
          />
        </div>
      </div>
    </div>
  );
};
const GlassContainer = ({ children }) => {
  return (
    <div className="backdrop-blur-[50px] border border-black/20 rounded-xl p-5 flex-grow min-w-[300px] ">
      {children}
    </div>
  );
};

const ClubHistoryBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 text-[10pt] md:text-[12pt]">
        <div>
          Real Madrid Club de Fútbol, founded in 1902, is one of the most
          successful and iconic football clubs in history. Granted the royal
          title "Real" by King Alfonso XIII in 1920, the club quickly rose to
          prominence, becoming a founding member of La Liga in 1929. In the
          1950s, Real Madrid dominated European football, winning the first five
          European Cups with legends like Alfredo Di Stéfano and Ferenc Puskás.
        </div>

        <div className="flex lg:justify-end gap-12">
          <div className="place-items-start">
            <div className="text-[9pt] md:text-[12pt]">Year</div>
            <div className="text-[20pt] xl:text-[50pt] md:text-[40pt] leading-5 md:leading-12 narrow font-bold">
              1902
            </div>
          </div>

          <div className="place-items-start">
            <div className="text-[9pt] md:text-[12pt]">Origin</div>
            <div className="text-[20pt] xl:text-[50pt] md:text-[40pt] leading-5 md:leading-12 narrow font-bold">
              Madrid, Spain
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ClubGalacticos = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-5 items-center my-5">
        <div className="rounded-xl overflow-hidden  w-full h-full place-items-center ">
          <img
            src={galacticos}
            className="w-full h-full  object-cover "
            alt=""
          />
        </div>
        <div>
          <Title title="Legacy" />
          <br />
          <div>
            The club has continued its legacy through different eras, including
            the star-studded Galácticos of the early 2000s and the recent golden
            era under Zinedine Zidane, highlighted by five UEFA Champions League
            titles between 2014 and 2022.
          </div>
          <br />
          <TrophySummary />
        </div>
      </div>
    </>
  );
};

const TrophySummary = () => {
  const barRefs = useRef([]);

  const totalTrophies = trophies.reduce((acc, trophy) => acc + trophy.total, 0);

  const computeWidth = (value) => {
    return Math.floor((value / totalTrophies) * 100) + "%";
  };

  useEffect(() => {
    barRefs.current.forEach((bar, index) => {
      if (bar) {
        bar.style.width = computeWidth(trophies[index].total);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[10pt] md:text-[12pt]">
      {trophies.map((trophy, index) => (
        <div key={index} className="p-2">
          <div className="flex items-center gap-2 ">
            <img src={trophy.icon} alt={trophy.name} />
            <div className="text-[9pt] max-w-70 leading-4 narrow">
              {trophy.name}
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              ref={(el) => (barRefs.current[index] = el)}
              className="bg-indigo-600 h-full duration-500 transition-all rounded-full"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Title = ({ title = "title" }) => {
  return (
    <>
      <div className=" narrow font-bold lg:text-[20pt] text-indigo-500 bg-indigo-100 w-fit  px-5 py-2 rounded-xl ">
        {title}
      </div>
    </>
  );
};

export default TheClub;
