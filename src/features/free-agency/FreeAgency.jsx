import { Card } from "@chakra-ui/react";
import React, { useContext } from "react";

import MainLayout from "src/components/layout/MainLayout";

import { TeamContext } from "/src/lib/TeamContext.js";
import { useFreeAgents } from "./api/getFreeAgents";
import Table from "../../components/table/Table";

const FreeAgency = () => {
  let freeAgentsQuery = useFreeAgents();
  let freeAgents = freeAgentsQuery?.data;

  let currentPlayerIndex = 4;
  let currentPlayer = freeAgents?.[currentPlayerIndex];

  const teams = useContext(TeamContext)?.data;

  let offers = [
    {
      team: "Orlando",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Alabama",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Fargo",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "San Antonio",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "St. Louis",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "South Carolina",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Shreveport",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Memphis",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Oklahoma",
      contract: "4/5",
      entries: "20",
    },
    {
      team: "Kentucky",
      contract: "4/5",
      entries: "20",
    },
  ];

  return (
    <div className="bg-[#edeef2]">
      <div className="border-b-2 border-gray-300 pb-8 pt-8">
        <h1 className="text-center text-2xl font-bold">
          AMERICAN FOOTBALL FEDERATION FREE AGENCY 2028
        </h1>
      </div>
      <div className="flex h-[89.3vh] justify-center gap-8 p-8  [&>*]:bg-white [&>*]:drop-shadow-md">
        <div className="w-[50rem] overflow-scroll">
          <table className="w-full table-auto text-[14px]">
            <thead>
              <tr className="border-b border-gray-400 text-left [&>*]:py-2 [&>*]:pl-2">
                <th>Player</th>
                <th>Pos</th>
                <th>College</th>
                <th>Ovr</th>
                <th>Skl</th>
                <th>Spd</th>
                <th>Agl</th>
                <th>Str</th>
                <th>Personality</th>
                <th>Age</th>
                <th>Former</th>
                <th>New</th>
                <th>Contract</th>
              </tr>
            </thead>
            <tbody>
              {freeAgents?.map((player, index) => {
                const playerTeam = teams?.find(
                  (team) => team.team_name === player.former_team
                );
                return (
                  <tr
                    key={index}
                    className={` border-b border-gray-400 even:bg-gray-50 [&>*]:px-2 [&>*]:py-1 ${
                      currentPlayerIndex == index && "bg-green-500"
                    }`}
                  >
                    <td>{player.name}</td>
                    <td>{player.pos}</td>
                    <td>{player.college}</td>
                    <td className="font-bold">{player.overall}</td>
                    <td>{player.skill}</td>
                    <td>{player.speed}</td>
                    <td>{player.agility}</td>
                    <td>{player.strength}</td>
                    <td>{player.personality}</td>
                    <td>{player.age}</td>
                    <td>
                      {playerTeam && (
                        <img
                          src={`/assets/logos/${playerTeam?.team_logo}`}
                          alt={`${player?.former_team} Logo`}
                          width="30"
                        />
                      )}
                    </td>
                    <td>{player.new_team}</td>
                    {player.contract_salary ? (
                      <td>
                        ${player.contract_salary} mil/{player.contract_years}yrs
                      </td>
                    ) : (
                      <div></div>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

       <div className="w-[30rem]">
  {offers.map((offer, index) => {
    let formattedOffer = `$${offer.contract.split("/")[0]} million / ${offer.contract.split("/")[1]} years`;

    const playerTeam = teams?.find((team) => team.team_location === offer.team);
    
    // Check if the index is less than 3 (first three elements)
    const isThirdIndex = index === 2;
    const isFirstThreeElements = index < 3;

    return (
      <div
        key={index}
        className={`border-b-2 px-4 h-[10%] ${isThirdIndex && 'border-black border-b-2'}`}
      >
        <div className="flex">
          <img
            src={`/assets/logos/${playerTeam?.team_logo}`}
            alt={`${offer.former_team} Logo`}
            width="60"
            className="pt-2"
          />
          <span className="my-auto ml-4">{formattedOffer}</span>
          <span className="my-auto ml-auto pr-8">{offer.entries} entries</span>
        </div>
      </div>
    );
  })}
</div>


        <div className="h-fit min-h-[50%] w-[30rem]">
          <div className="px-6 pt-6">
            <h2 className="text-xl font-semibold">
              {currentPlayer?.name} is now accepting offers:
            </h2>
            <div className="pt-6">
              <div className="flex gap-4">
                <img
                  width="170"
                  src={`assets/players/season_6/${
                    currentPlayer?.name.split(" ")[0]
                  }_${currentPlayer?.name.split(" ")[1]}.png`}
                />
                <div className="flex gap-2">
                  <ul className="font-semibold [&>*]:pb-2">
                    <li>Name:</li>
                    <li>Position: </li>
                    <li>College:</li>
                    <li>Age:</li>
                    <li>Personality:</li>
                  </ul>
                  <ul className="[&>*]:pb-2">
                    <li>{currentPlayer.name}</li>
                    <li>{currentPlayer.pos}</li>
                    <li>{currentPlayer.college}</li>
                    <li>{currentPlayer.age}</li>
                    <li>{currentPlayer.personality}</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-8 py-6">
                <div className="flex gap-2">
                  <ul className="font-semibold [&>*]:pb-2 ">
                    <li className="font-bold">Overall:</li>
                    <li>Skill: </li>
                    <li>Speed:</li>
                    <li>Agility:</li>
                    <li>Strength:</li>
                  </ul>
                  <ul className="[&>*]:pb-2">
                    <li className="font-bold">{currentPlayer.overall}</li>
                    <li>{currentPlayer.skill}</li>
                    <li>{currentPlayer.speed}</li>
                    <li>{currentPlayer.agility}</li>
                    <li>{currentPlayer.strength}</li>
                  </ul>
                </div>
                <div className="ml-16">
                  <span className="font-bold">Your current offer:</span>
                  <div className="pt-2">$4,000,000 / 3 years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAgency;
