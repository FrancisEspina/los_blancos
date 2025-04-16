import React from "react";
import logo from "../assets/icons/real_madrid.png";
import { pastLogos } from "../assets/images/past_logos/pastLogoCollector";
import { leagues } from "../assets/images/leagues/leaguesCollector";
import { slideShowImages } from "../assets/images/slideshow/slideShowCollector";
import Marquee from "react-fast-marquee";
import galacticos from "../assets/images/slideshow/Galacticos_Header.webp";
const TheClub = () => {
  return (
    <>
      <div className="flex items-center min-h-[100vh] lg:min-h-[70vh]">
        <div className="absolute inset-0 opacity-10 place-items-end">
          <img src={logo} className="max-w-[500px]" alt="" />
        </div>
        <div className="  w-full">
          <div className="max-w-[1600px] mx-auto font-bold  ">
            <div className="mx-5">
              <div>RMCF</div>
              <div className="flex justify-between items-center flex-wrap">
                <div className="text-[42pt] leading-12 narrow">LOS BLANCOS</div>
                <div className="text-[9pt] md:text-[12pt] ">About The Club</div>
              </div>
            </div>
          </div>

          <div className=" mt-5  z-[-1]">
            <Marquee direction="right" autoFill={true}>
              {slideShowImages.map((service) => (
                <div>
                  <div className="  w-[620px] rounded-md  h-[250px] mx-1 overflow-hidden ">
                    <img
                      loading="lazy"
                      src={service}
                      className="w-full   hover:scale-105 duration-200" // Different random images
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mb-12">
        <div className="mx-5 relative">
          <div className="title  font-bold text-gray-200 absolute inset-0 mix-blend-overlay place-items-start">
            <div>Real Madrid CF</div>
          </div>
          <div className="narrow font-bold text-[28pt] text-end leading-20">
            Club History
          </div>
        </div>
        <br />

        <ClubHistoryBanner />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
          <GlassContainer>
            <p className="">Crest History</p>
            <br />
            <div className="flex w-full items-center justify-center gap-2 ">
              {pastLogos.map((logo) => (
                <div className="h-20 w-20 not-hover:grayscale hover:scale-105 duration-200">
                  <img src={logo} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </GlassContainer>

          <GlassContainer>
            <p className="">Leagues</p>
            <br />
            <div className="flex w-full items-center justify-center gap-2 ">
              {leagues.map((logo) => (
                <div className="w-50 not-hover:grayscale hover:scale-105 duration-200">
                  <img src={logo} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </GlassContainer>
        </div>
        <br />
        <ClubGalacticos />
      </div>
    </>
  );
};

const GlassContainer = ({ children }) => {
  return (
    <div className="backdrop-blur-[50px] border border-black/20 rounded-xl p-5 ">
      {children}
    </div>
  );
};

const ClubHistoryBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
        <div>
          Real Madrid Club de Fútbol, founded in 1902, is one of the most
          successful and iconic football clubs in history. Granted the royal
          title "Real" by King Alfonso XIII in 1920, the club quickly rose to
          prominence, becoming a founding member of La Liga in 1929. In the
          1950s, Real Madrid dominated European football, winning the first five
          European Cups with legends like Alfredo Di Stéfano and Ferenc Puskás.
        </div>

        <div className="flex justify-end gap-12">
          <div className="place-items-end">
            <div className="text-[9pt] md:text-[12pt]">Year</div>
            <div className="text-[20pt] xl:text-[50pt] md:text-[40pt] leading-5 md:leading-12 narrow font-bold">
              1902
            </div>
          </div>

          <div className="place-items-end">
            <div className="text-[9pt] md:text-[12pt]">Place</div>
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
        <div className="rounded-xl overflow-hidden h-50 w-full place-items-center">
          <img src={galacticos} className="w-full  " alt="" />
        </div>
        <div>
          The club has continued its legacy through different eras, including
          the star-studded Galácticos of the early 2000s and the recent golden
          era under Zinedine Zidane, highlighted by five UEFA Champions League
          titles between 2014 and 2022.
        </div>
      </div>
    </>
  );
};

export default TheClub;
