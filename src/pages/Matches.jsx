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
        const response_finished = await fetchMatches("FINISHED", now, true);
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
          <div className="place-items-end">
            <div className="flex gap-3  ring-2 ring-indigo-100 w-fit p-[7px] rounded-xl mx-5">
              {buttons.map((button) => (
                <>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setButton(button)}
                    className={`${
                      button == selectedButton && "bg-indigo-100 ring-2 "
                    } ring-offset-2 ring-indigo-200 px-2 py-1 rounded-md text-[8pt] duration-300 cursor-pointer`}
                  >
                    {button}
                  </motion.div>
                </>
              ))}
            </div>
          </div>
          <br />

          {selectedButton == "Scheduled" ? (
            <ScheduledMatches scheduled={scheduled} />
          ) : (
            <div className="mx-5 mb-5">
              <LastMatch finished={finished} />
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
          <div className="mb-2">Home</div>
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
                finished[0].score.winner == "HOME_TEAM"
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
            </div>
            <div
              className={`lg:text-[50pt] text-[32pt]  font-bold ${
                finished[0].score.winner == "AWAY_TEAM"
                  ? "text-black"
                  : "text-gray-500 "
              }  `}
            >
              {finished[0] && finished[0].score.fullTime.away}
            </div>
          </div>
        </div>
        <div className="xl:max-w-30 max-w-15 place-items-center">
          <div className="mb-2">Away</div>
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
        {finished.map((match) => (
          <>
            <div className="shadow-indigo-600/50 bg-gray-100/50 rounded-xl p-7 hover:scale-101 hover:shadow-lg duration-200 ">
              <div className="narrow text-[9pt] flex gap-1 items-center text-gray-500 narrow font-bold">
                <img
                  src={match.competition.emblem}
                  className="max-w-5"
                  alt=""
                />
                {leagueMapper(match.competition.code)}
              </div>
              <div className="flex justify-between items-center p-8">
                <div className="place-items-center">
                  <div>Home</div>
                  <img src={match.homeTeam.crest} className="max-w-15" alt="" />
                  <div>{match.homeTeam.tla}</div>
                </div>
                <div className="flex gap-5 text-[24pt] font-bold">
                  <div>{match.score.fullTime.home}</div>
                  <div>-</div>
                  <div>{match.score.fullTime.away}</div>
                </div>
                <div className="place-items-center">
                  <div>Away</div>
                  <img src={match.awayTeam.crest} className="max-w-15" alt="" />
                  <div>{match.awayTeam.tla}</div>
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
