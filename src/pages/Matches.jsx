import React, { useEffect, useState } from "react";
import PageHeaders from "../components/PageHeaders";
import { fetchMatches, formatDate } from "../utils/services";
import { MatchCard } from "../components/HomeComponents/HomeUpcomingMatches";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "../utils/swiperSettings";
const Matches = () => {
  let [scheduled, setScheduled] = useState([]);
  let [nextMatch, setNextMatch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetchMatches("SCHEDULED");
      setScheduled(response);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <>
      <PageHeaders title="Matches" />

      <div className="max-w-[1600px] mx-auto px-5">
        {}
        <br />
        <div className="mb-5 font-bold narrow text-[14pt]">Next Match</div>

        <div className="bg-gray-200/50 relative p-10 rounded-3xl flex justify-around items-center overflow-hidden">
          <div className="absolute left-2.5 hidden lg:block   grayscale opacity-10">
            <img
              className="object-contain h-full w-full"
              src={scheduled[0] && scheduled[0].homeTeam.crest}
            />
          </div>
          <div className="absolute right-2.5 hidden lg:block  grayscale opacity-10">
            <img
              className="object-cover h-full w-full"
              src={scheduled[0] && scheduled[0].awayTeam.crest}
            />
          </div>

          <div className="w-20 place-items-center">
            <div className="mb-2">Home</div>
            <img
              className="object-contain"
              src={scheduled[0] && scheduled[0].homeTeam.crest}
            />
            <div className="font-bold narrow text-[15pt] mt-2">
              {scheduled[0] && scheduled[0].homeTeam.tla}
            </div>
          </div>
          <div className="place-items-center">
            <div>
              <img
                className="max-w-10"
                src={scheduled[0] && scheduled[0].competition.emblem}
                alt=""
              />
            </div>

            <div className="text-center  lg:text-[10pt] text-[8pt] mt-5 px-2 py-1 lg:bg-black lg:text-white rounded-xl">
              {scheduled[0] && formatDate(scheduled[0].utcDate)}
            </div>
          </div>
          <div className="w-20 place-items-center">
            <div className="mb-2">Away</div>
            <img
              className="object-contain"
              src={scheduled[0] && scheduled[0].awayTeam.crest}
            />
            <div className="font-bold narrow text-[15pt] mt-2">
              {scheduled[0] && scheduled[0].awayTeam.tla}
            </div>
          </div>
        </div>
        <br />
        <div className="mb-5 font-bold narrow text-[14pt]">Scheduled</div>
        <Swiper {...swiperSettings}>
          {scheduled.slice(1).map((match) => (
            <>
              <SwiperSlide>
                <MatchCard match={match} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Matches;
