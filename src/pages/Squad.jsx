import React, { useEffect, useState } from "react";
import PageHeaders from "../components/PageHeaders";
import { firstTeam } from "../data/players";
import ButtonGroup from "../components/ButtonGroup";
import AOS from "../utils/AOS";
import { Link } from "react-router";
const buttons = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];
const Squad = () => {
  let [selectedButton, setSelected] = useState(buttons[0]);
  let [filteredTeam, setFiltered] = useState([]);
  useEffect(() => {
    const updateFilters = () => {
      const filtered =
        selectedButton === "All"
          ? firstTeam
          : firstTeam.filter((player) => player.position === selectedButton);

      setFiltered(filtered);
      console.log(selectedButton);
      console.log(filtered);
    };

    updateFilters();
  }, [selectedButton]);

  return (
    <>
      <div>
        <PageHeaders title="First Team" />
      </div>

      <div className="mx-5 mb-12">
        <div className="max-w-[1600px] mx-auto  ">
          <div className="place-items-start">
            <ButtonGroup
              buttons={buttons}
              selectedButton={selectedButton}
              action={setSelected}
            />
          </div>
          <br />
          <div className="space-y-8">
            {/* Now loop through the positions and show players under each header */}
            {buttons.map((position) => {
              const filteredByPosition = filteredTeam.filter(
                (player) => player.position === position
              );

              if (filteredByPosition.length === 0) return null; // Skip if there are no players for that position

              return (
                <div key={position} className="space-y-6">
                  {/* Header for each position */}
                  <h2 className="text-2xl font-semibold">{position}</h2>

                  {/* Player grid for each position */}
                  <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-5 lg:grid-cols-4 gap-7 mb-12">
                    {filteredByPosition.map((player, idx) => (
                      <div
                        key={player.number}
                        className="hover:scale-102 duration-200 "
                      >
                        <AOS delay={idx / 50}>
                          <Link to={`/squad/${player.name}`}>
                            <PlayerCard player={player} />
                          </Link>
                        </AOS>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-12 narrow space-y-[-5px]">
          <p className="text-[9pt] ">Images From</p>
          <a
            className="text-indigo-600"
            href="https://www.realmadrid.com/en-US/football/first-team/players"
          >
            realmadrid.com
          </a>
        </div>
      </div>
    </>
  );
};

const PlayerCard = ({ player }) => {
  return (
    <>
      <div className="overflow-hidden  bg-gray-200/50 rounded-2xl ">
        <div className="">
          {player.img && (
            <img className="w-full h-full object-cover " src={player.img}></img>
          )}
        </div>
        <div className="px-5 pb-5 pt-3 flex items-center justify-between gap-2">
          <div>
            <div className="narrow font-bold text-gray-600 text-[15pt]">
              {player.name}
            </div>
            <p className="text-gray-400 text-[10pt] narrow leading-2 ">
              {player.position}
            </p>
          </div>

          <div className="font-[900] text-[25pt] narrow text-gray-400">
            {player.number}
          </div>
        </div>
      </div>
    </>
  );
};

export default Squad;
