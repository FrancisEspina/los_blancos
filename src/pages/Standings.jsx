import React, { useEffect, useState } from "react";
import PageHeaders from "../components/PageHeaders";
import {
  fetchStandings,
  formatYear,
  leagueMapper,
  ordinalNum,
} from "../utils/services";
import laliga_logo from "../assets/images/leagues/laliga.png";
import ucl_logo from "../assets/images/leagues/ucl.png";
import { FaCircleChevronRight } from "react-icons/fa6";
import { motion } from "motion/react";
import AOS from "../utils/AOS";
const headers = ["Club", "GP", "W", "D", "L", "GF", "GA", "GD", "PTS"];

const getRank = (division) => {
  const rank = division.standings[0].table.find(
    (entry) => entry.team.shortName == "Real Madrid"
  ).position;

  return ordinalNum(rank);
};

const Standings = () => {
  let [laliga, setLaliga] = useState(null);
  let [ucl, setUCL] = useState(null);
  let [selectedLeague, setLeague] = useState(null);

  const updateLeague = () => {
    if (selectedLeague == laliga) {
      setLeague(ucl);
    } else {
      setLeague(laliga);
    }
  };

  useEffect(() => {
    async function fetchData() {
      let PD = await fetchStandings("PD");
      let CL = await fetchStandings("CL");
      setLaliga(PD);
      setUCL(CL);
      setLeague(PD);
    }
    fetchData();
  }, []);
  return (
    <div>
      <PageHeaders title="Standings" />
      <LeagueTable league={selectedLeague} setLeague={updateLeague} />
    </div>
  );
};

const LeagueTable = ({ league, setLeague }) => {
  return (
    <>
      <div className="mx-5">
        <div className=" max-w-[1200px] mx-auto">
          <div className="flex justify-between  gap-5 items-center md:text-[16pt] text-[9pt]">
            <div className="flex items-center gap-5">
              <div className="md:max-w-55 max-w-30 flex items-center gap-3 ">
                <div>
                  <p className="narrow text-gray-500 text-[9pt]">League</p>

                  <AOS delay={0.2}>
                    <img
                      src={
                        league &&
                        leagueMapper(league.competition.code) == "La Liga"
                          ? laliga_logo
                          : ucl_logo
                      }
                      className=" brightness-0 hover:brightness-100 cursor-pointer"
                      alt=""
                    />
                  </AOS>
                </div>
                <motion.div
                  onClick={() => {
                    setLeague();
                  }}
                  className="cursor-pointer hover:text-indigo-600 mt-3"
                  whileTap={{ scale: 0.9 }}
                >
                  <FaCircleChevronRight size={20} />
                </motion.div>
              </div>
            </div>

            <div>
              <div>
                <p className="narrow text-gray-500 text-[9pt]">Rank</p>
                <AOS delay={0.3}>
                  <div className="font-bold  narrow leading-6">
                    {league && getRank(league)}
                  </div>
                </AOS>
              </div>
            </div>

            <div>
              <p className="narrow text-gray-500 text-[9pt]">Season</p>
              <AOS delay={0.6}>
                <div className="font-bold  narrow leading-6">
                  {league && formatYear(league.season.startDate)} /{" "}
                  {league && formatYear(league.season.endDate)}
                </div>
              </AOS>
            </div>
          </div>
          <br />
          {/* <div>League: {laliga && JSON.}</div> */}
          <div class=" overflow-x-auto   md:rounded-2xl rounded-md  shadow-xl mb-12 ">
            <table className="w-full table-fixed    text-[7pt] md:text-[11pt]  rounded-xl  rtl:text-right ">
              <thead>
                <tr className="text-white  bg-black   ">
                  {headers.map((header, idx) => (
                    <th
                      className={`text-center py-5  ${
                        idx == 0 && "text-left ps-5 w-3/7"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {league &&
                  league.standings.map((standing) =>
                    standing.table.map((entry, idx) => (
                      <tr
                        className={`text-center ${
                          entry.team.shortName == "Real Madrid" && "bg-gray-100"
                        }`}
                      >
                        <td className="px-3 py-3  max-w-40">
                          <AOS delay={idx / 10}>
                            <div className="flex items-center gap-2 my-1">
                              <div className="bg-gray-200 size-5 items-center flex justify-center md:text-[9pt] text-[6pt] text-center rounded-sm">
                                {entry.position}
                              </div>
                              <img
                                src={entry.team.crest}
                                className="max-w-5 md:max-w-7 "
                                alt=""
                              />
                              <div className="w-fit ">
                                {entry.team.shortName}
                              </div>
                            </div>
                          </AOS>
                        </td>
                        <td>{entry.playedGames}</td>
                        <td>{entry.won}</td>
                        <td>{entry.draw}</td>
                        <td>{entry.lost}</td>
                        <td>{entry.goalsFor}</td>
                        <td>{entry.goalsAgainst}</td>
                        <td>{entry.goalDifference}</td>
                        <td>{entry.points}</td>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Standings;
