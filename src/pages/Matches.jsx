import React, { useEffect, useState } from "react";
import PageHeaders from "../components/PageHeaders";
import {
  expiredDate,
  fetchMatches,
  formatDate,
  leagueMapper,
} from "../utils/services";
import { MatchCard } from "../components/HomeComponents/HomeUpcomingMatches";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "../utils/swiperSettings";
import { motion } from "motion/react";
import { PiList } from "react-icons/pi";
import { Link } from "react-router";
import AON from "../utils/AON";
import ButtonGroup from "../components/ButtonGroup";
const Matches = () => {
  const buttons = ["Scheduled", "Finished"];
  let [selectedButton, setButton] = useState(buttons[0]);
  const now = new Date();
  let [scheduled, setScheduled] = useState([]);
  let [finished, setFinished] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response_scheduled = await fetchMatches("SCHEDULED", now);
      setScheduled(response_scheduled);

      if (
        sessionStorage.getItem("FINISHED") == undefined &&
        expiredDate(response_scheduled[0].utcDate, now)
      ) {
        console.log(response_scheduled);
        const response_finished = await fetchMatches(
          "FINISHED",
          now,
          true,
          "asc"
        );
        response_finished.reverse();
        setFinished(response_finished);
      } else {
        let finishedMatches = JSON.parse(sessionStorage.getItem("FINISHED"));
        finishedMatches.reverse();
        setFinished(finishedMatches);
      }
    }
    fetchData();
  }, []); // Add dependencies as needed

  return (
    <>
      <PageHeaders title="Matches" />

      <div className="">
        <div className="max-w-[1600px] mx-auto pb-12">
          <div className="justify-end items-center gap-2 flex mx-5">
            <ButtonGroup
              buttons={buttons}
              selectedButton={selectedButton}
              action={setButton}
            />

            <Link to={"/standings"}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={` bg-indigo-600 rounded-[9px] text-white text-[8pt] duration-300 cursor-pointer p-[10px] flex items-center gap-1`}
              >
                <PiList size={10} />
                <div>Standings</div>
              </motion.div>
            </Link>
          </div>

          <br />

          {selectedButton == "Scheduled" ? (
            <ScheduledMatches scheduled={scheduled} />
          ) : (
            <div className="mx-5 mb-5">
              <AON once={true}>
                <LastMatch finished={finished} />
              </AON>
              <FinishedMatch finished={finished} />
            </div>
          )}

          <div className="text-end mx-5 ">
            <p className="font-light text-[9pt] leading-2 ">Match Data from</p>
            <a href="https://www.football-data.org/" className="text-[11pt]">
              football-data.org
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const LastMatch = ({ finished }) => {
  return (
    <div>
      {/* {JSON.stringify(finished)} */}
      <div className="mb-5 font-bold narrow text-[14pt]">Last Match</div>
      <div className="bg-gray-200/50 relative p-10 rounded-3xl flex justify-around items-center overflow-hidden  mb-5">
        <div className="absolute left-[-130px] hidden lg:block size-80   grayscale opacity-10">
          <img
            className="object-contain h-full w-full"
            src={finished[0] && finished[0].homeTeam.crest}
          />
        </div>
        <div className="absolute right-[-130px] hidden lg:block size-80  grayscale opacity-10">
          <img
            className="object-cover h-full w-full"
            src={finished[0] && finished[0].awayTeam.crest}
          />
        </div>
        <div className="xl:max-w-30 max-w-15 place-items-center">
          <div className="text-[9pt] md:text-[12pt] mb-2">Home</div>

          <img
            className="object-contain"
            src={finished[0] && finished[0].homeTeam.crest}
          />
          <div className="font-bold narrow text-[15pt] mt-2">
            {finished[0] && finished[0].homeTeam.tla}
          </div>
        </div>
        <div className="basis-100 ">
          <div className="place-items-center mb-5">
            <img
              className="xl:max-w-10 max-w-8 "
              src={finished[0] && finished[0].competition.emblem}
              alt=""
            />
          </div>

          <div className="flex justify-around items-center ">
            <div
              className={`lg:text-[50pt] text-[32pt]  font-bold ${
                finished[0] && finished[0].score.winner == "HOME_TEAM"
                  ? "text-black"
                  : "text-gray-500 "
              }  `}
            >
              {finished[0] && finished[0].score.fullTime.home}
            </div>

            <div className=" lg:text-[14pt] text-[9pt] text-center">
              <div className="text-[11pt] mb-2">Full-Time</div>
              <div className="hidden lg:block text-[9pt] bg-black text-white rounded-lg p-1">
                {finished[0] && formatDate(finished[0].utcDate)}
              </div>
              <div className="p-2 text-[8pt] hidden md:block">
                MATCHDAY {finished[0] ? finished[0].matchday : "0"}
              </div>
            </div>
            <div
              className={`lg:text-[50pt] text-[32pt]  font-bold ${
                finished[0] && finished[0].score.winner == "AWAY_TEAM"
                  ? "text-black"
                  : "text-gray-500 "
              }  `}
            >
              {finished[0] && finished[0].score.fullTime.away}
            </div>
          </div>
        </div>
        <div className="xl:max-w-30 max-w-15 place-items-center">
          <div className="text-[9pt] md:text-[12pt] mb-2">Away</div>

          <img
            className="object-contain"
            src={finished[0] && finished[0].awayTeam.crest}
          />
          <div className="font-bold narrow text-[15pt] mt-2">
            {finished[0] && finished[0].awayTeam.tla}
          </div>
        </div>
      </div>
    </div>
  );
};

const FinishedMatch = ({ finished }) => {
  return (
    <>
      <div className="mb-5 font-bold narrow text-[14pt] ">
        Previous Fixtures
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {finished.slice(1).map((match) => (
          <>
            <div className="shadow-indigo-600/50 bg-gray-100/50 rounded-xl p-7 hover:scale-101 hover:shadow-lg duration-200 ">
              <div className="flex justify-between items-center">
                <div className="narrow text-[9pt] flex gap-1 items-center text-gray-500 narrow font-bold">
                  <img
                    src={match.competition.emblem}
                    className="max-w-5"
                    alt=""
                  />
                  {leagueMapper(match.competition.code)}
                </div>

                <div className="text-[8pt] text-gray-500">
                  {" "}
                  MATCHDAY {match.matchday}
                </div>
              </div>
              <div className="flex justify-between items-center p-8">
                <div className="place-items-center">
                  <div className="text-[9pt] md:text-[9.5pt] text-gray-700 mb-2">
                    Home
                  </div>
                  <img
                    src={match.homeTeam.crest}
                    loading="lazy"
                    className="max-w-15"
                    alt=""
                  />
                  <div>{match.homeTeam.tla}</div>
                </div>
                <div className="flex gap-5 text-[24pt] font-bold">
                  <div>{match.score.fullTime.home}</div>
                  <div>-</div>
                  <div>{match.score.fullTime.away}</div>
                </div>
                <div className="place-items-center">
                  <div className="text-[9pt] md:text-[9.5pt] text-gray-700 mb-2">
                    Away
                  </div>

                  <img
                    src={match.awayTeam.crest}
                    loading="lazy"
                    className="max-w-15"
                    alt=""
                  />
                  <div>{match.awayTeam.tla}</div>
                </div>
              </div>
              <div className="text-center  text-gray-700 place-items-center">
                <div className="w-fit bg-black/10 px-2 py-1 rounded-xl text-[8pt]">
                  {formatDate(match.utcDate)}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

const ScheduledMatches = ({ scheduled }) => {
  return (
    <div>
      <AON once={true}>
        <div className="mb-5 font-bold narrow text-[14pt] mx-5">Next Match</div>
        <div className="bg-gray-200/50 relative p-10 rounded-3xl flex justify-around items-center overflow-hidden mx-5">
          <div className="absolute left-[-130px] hidden lg:block size-80   grayscale opacity-10">
            <img
              className="object-contain h-full w-full"
              src={scheduled[0] && scheduled[0].homeTeam.crest}
            />
          </div>
          <div className="absolute right-[-130px] hidden lg:block size-80  grayscale opacity-10">
            <img
              className="object-cover h-full w-full"
              src={scheduled[0] && scheduled[0].awayTeam.crest}
            />
          </div>

          <div className="xl:max-w-30 max-w-15 place-items-center">
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
                className="xl:max-w-15 max-w-8"
                src={scheduled[0] && scheduled[0].competition.emblem}
                alt=""
              />
            </div>

            <div className="text-center  lg:text-[10pt] text-[8pt] lg:mt-5 px-2 py-1 lg:bg-black lg:text-white rounded-xl">
              {scheduled[0] && formatDate(scheduled[0].utcDate)}
            </div>
          </div>
          <div className="xl:max-w-30 max-w-15 place-items-center">
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
      </AON>
      <br />
      <div className="mb-5 font-bold narrow text-[14pt] mx-5">Scheduled</div>
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
  );
};

export default Matches;
