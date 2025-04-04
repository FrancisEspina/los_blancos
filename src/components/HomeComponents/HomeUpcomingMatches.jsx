import React, { useEffect, useState } from "react";
// Import Swiper React components
import { swiperSettings } from "../../utils/swiperSettings";
import { expiredDate, formatDate, leagueMapper } from "../../utils/services";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getMatches } from "../../utils/api";
import ButtonLink from "../ButtonLink";
const HomeUpcomingMatches = () => {
  const now = new Date();
  let [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    const fetchMatches = async () => {
      let matches = JSON.parse(localStorage.getItem("scheduledMatches"));

      if (matches) {
        if (expiredDate(matches[0].utcDate, now)) {
          console.log("DATA IS UP TO DATE");
          let scheduled = JSON.parse(localStorage.getItem("scheduledMatches"));
          setUpcoming(scheduled);
          return;
        } else {
        }
      }
      console.log("UPDTED MATCHES");
      let scheduled = await getMatches("SCHEDULED");
      localStorage.setItem("scheduledMatches", JSON.stringify(scheduled));
      setUpcoming(scheduled);
    };

    fetchMatches();
  }, []);

  return (
    <>
      <div className="min-h-[60vh] max-w-[1600px] mx-auto  my-12 flex items-center">
        <div className="w-full">
          <div className="flex items-center justify-between mx-5 ">
            <div className="narrow font-bold text-3xl ">Upcoming Matches</div>
            <div className="text-end">
              <p className="font-light text-[9pt] leading-2 ">
                Match Data from
              </p>
              <a href="https://www.football-data.org/" className="text-[11pt]">
                football-data.org
              </a>
            </div>
          </div>
          <div className="w-full  ">
            <br />
            <Swiper
              {...swiperSettings}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {upcoming.map((match) => (
                <>
                  <SwiperSlide>
                    <MatchCard match={match} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
          <div className="w-fit ml-auto mx-5">
            <ButtonLink path={"/matches"} title="View All Matches" />
          </div>
        </div>
      </div>
    </>
  );
};

export const MatchCard = ({ match }) => {
  return (
    <>
      <div className="hover:scale-101 cursor-pointer min-w-[320px] max-w-[800px] mx-5 flex-grow duration-300 hover:shadow-lg shadow-indigo-600/50 bg-gray-100/50 rounded-2xl overflow-hidden ">
        <div className="p-7">
          <div className="flex justify-between items-center">
            <p className="narrow text-[10pt]">First Team</p>
            <p className="text-[10pt] narrow">
              {leagueMapper(match.competition.code)}
            </p>
          </div>

          <div className="flex justify-between py-10 px-5 items-center">
            <Crest crest={match && match.homeTeam.crest} />
            <div>
              <img
                className="max-w-10"
                src={match && match.competition.emblem}
                alt=""
              />
            </div>
            <Crest crest={match && match.awayTeam.crest} />
          </div>
          <div className="text-center text-[9pt]">
            <p className="bg-black/8 w-fit mx-auto px-3 py-[0.9px] rounded-xl mb-1">
              Matchday {match && match.season.currentMatchday}
            </p>
            <p className="text-[10pt] narrow">
              {match && formatDate(match.utcDate)}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-black/2 rounded-t-2xl p-5">
          <div>
            <p className="text-[9pt]">Home</p>
            <b className="narrow text-[14pt] text-gray-600">
              {match && match.homeTeam.shortName}
            </b>
          </div>
          <div className="text-end">
            <p className="text-[9pt]">Away</p>
            <b className="narrow text-[14pt] text-gray-600">
              {match && match.awayTeam.shortName}
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

const Crest = ({ crest }) => {
  return (
    <>
      <div>
        <img className="max-w-14" src={crest && crest} alt="" />
      </div>
    </>
  );
};

export default HomeUpcomingMatches;
