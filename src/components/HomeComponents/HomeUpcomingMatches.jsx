import React, { useEffect, useState } from "react";
import { upcomingMatches } from "../../utils/api";
// Import Swiper React components
import { formatDate } from "../../utils/services";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { expiredDate, leagueMapper } from "../../utils/services";

const HomeUpcomingMatches = () => {
  const now = new Date();
  let [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const cachedMatches = localStorage.getItem("upcomingMatches");

      if (cachedMatches) {
        const finalMatches = JSON.parse(cachedMatches);
        if (expiredDate(finalMatches[0].utcDate, now)) {
          console.log("Fixtures are Already Updated");
          setUpcoming(finalMatches); // Load from cache
        } else {
          console.log("Fixtures Updated");
          const matches = await upcomingMatches();
          setUpcoming(matches || []);
          localStorage.setItem("upcomingMatches", JSON.stringify(matches)); // Cache result
        }
      } else {
        console.log("Fixtures Updated");
        const matches = await upcomingMatches();
        setUpcoming(matches || []);
        localStorage.setItem("upcomingMatches", JSON.stringify(matches)); // Cache result
      }
    };

    fetchMatches();
  }, []);

  return (
    <>
      <div></div>
      <div className="min-h-[60vh] max-w-[1600px] mx-auto  my-12 flex items-center">
        <div className="w-full">
          <div className="narrow font-bold text-3xl mx-5 ">Upcoming</div>
          <div className="w-full  ">
            {/* <div>{upcoming && JSON.stringify(upcoming[0])}</div> */}
            <br />

            {/* <div className="flex gap-10"> */}
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              style={{ padding: "20px 0px 50px 0px" }}
              spaceBetween={5}
              slidesPerView={4}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },

                1600: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {upcoming.map((match) => (
                <>
                  <SwiperSlide>
                    <Card match={match} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ match }) => {
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
