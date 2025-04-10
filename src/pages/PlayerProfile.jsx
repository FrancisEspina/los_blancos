import React from "react";
import { firstTeam } from "../data/players";
import { useParams } from "react-router";
import ButtonLink from "../components/ButtonLink";
import { formatDate } from "../utils/services";
import BasicTimeline from "../components/BasicTimeline";
import AOS from "../utils/AOS";
import AON from "../utils/AON";
import {
  PiShield,
  PiShieldDuotone,
  PiSoccerBall,
  PiSoccerBallDuotone,
  PiUserCheckDuotone,
  PiUserDuotone,
} from "react-icons/pi";
const PlayerProfile = () => {
  const { player_name } = useParams();
  const player = firstTeam.find((a) => a.name == player_name);

  return player ? <PlayerDetails player={player} /> : <NotFound />;
};

const PlayerDetails = ({ player }) => {
  return (
    <>
      <div className="default-container mt-20 md:mt-0 mb-10">
        <div className="flex flex-wrap w-full">
          <div className="grid xl:grid-cols-2  grid-cols-1 w-full gap-y-6 gap-x-5 items-center">
            <div className="w-full relative  overflow-hidden place-items-center rounded-3xl bg-gray-200/50  h-[30vh]">
              <div className=" font-bold  text-gray-400/70 absolute lg:top-1/2  lg:left-20 left-5 top-20 xl:text-[200pt] bg-red-500 text-[100pt]      z-[-1]  ">
                <div className="leading-0 narrow">{player.number}</div>
              </div>

              <img
                className=" object-cover w-[250px]"
                src={player.img}
                alt=""
              />
            </div>
            <div className="mb-5 md:mb-0">
              <div className="flex gap-3 items-center lg:text-[42pt] md:text-[32pt] sm:text-[30] text-[22pt] ">
                <div className="narrow font-bold  ">
                  {player.name.toUpperCase()}
                </div>
              </div>
              <p className="narrow text-xl leading-0 text-gray-500">
                {player.position}
              </p>
            </div>
          </div>
          <div className=" w-full mt-5 lg:grid-cols-2 xl:grid-cols-3  grid-cols-1 grid gap-5">
            <div className="">
              <AON delay={0}>
                <Card IconName={PiUserDuotone} title={"Personal Profile"}>
                  <div className="grid-cols-2 grid gap-x-5">
                    <Labels label={"Full Name"} content={player.full_name} />
                    <Labels
                      label={"Nationality"}
                      content={
                        <>
                          <div className="flex items-center gap-1">
                            <img src={player.flag} className="size-3"></img>
                            <div>{player.nationality}</div>
                          </div>
                        </>
                      }
                    />
                    <Labels
                      label={"Birthdate"}
                      content={formatDate(player.date_of_birth, true)}
                    />
                    <div className="flex gap-10">
                      <Labels label={"Height"} content={player.height + " m"} />
                      <Labels
                        label={"Weight"}
                        content={player.weight + " kg"}
                      />
                    </div>
                  </div>
                </Card>
              </AON>
            </div>

            <div className="">
              <AON delay={0.1}>
                <Card IconName={PiSoccerBallDuotone} title={"Player Profile"}>
                  <div className="grid-cols-2 grid gap-x-5">
                    <Labels label={"Kit Number"} content={player.number} />
                    <Labels label={"Position"} content={player.position} />
                    <Labels
                      label={"Preferred Position"}
                      content={player.specific_position}
                    />
                    <Labels
                      label={"Contract"}
                      content={player.contract_until}
                    />
                  </div>
                </Card>
              </AON>
            </div>

            <div className="">
              <AON delay={0.2}>
                <Card IconName={PiShieldDuotone} title={"Career"}>
                  <div className="grid-cols-2 grid gap-x-5 narrow  text-[10pt] ">
                    <div>
                      <BasicTimeline items={player.career} />
                    </div>
                  </div>
                </Card>
              </AON>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Labels = ({ label, content }) => {
  return (
    <>
      <div className="narrow mb-2">
        <div className="text-gray-500 text-[9pt]">{label}</div>
        <div className="font-bold text-[11pt]">{content}</div>
      </div>
    </>
  );
};

const Card = ({ title, children, IconName }) => {
  return (
    <>
      <div className="p-5 bg-gray-200/50 rounded-3xl h-[200px]  hover:scale-101 cursor-pointer duration-200 hover:shadow-xl ">
        <div className="narrow text-[13pt] md:text-[14pt] font-bold mb-3 flex gap-2 items-center">
          {IconName && <IconName className="size-5"></IconName>}
          <p>{title}</p>
        </div>

        <div className="mx-3 overflow-auto max-h-[120px]">{children}</div>
      </div>
    </>
  );
};

const NotFound = () => {
  return (
    <div className="default-container ">
      <div>
        <p className="narrow font-bold md:text-[32pt] text-[20pt]">
          PLAYER NOT FOUND
        </p>
        <ButtonLink title="Back" path={"/squad"} />
      </div>
    </div>
  );
};

export default PlayerProfile;
