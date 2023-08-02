import React from "react";

import Table from "/src/components/table/Table";

import { usePlayerStats } from "./api/getPlayerStats";
import { columns } from "./Columns";
import { PlaceRounded } from "@mui/icons-material";

const Stats = ({ team }) => {
  const playerStatsQuery = usePlayerStats(5, team.team_id);
  const playerStatsData = playerStatsQuery?.data;

  let teamLeaders;

  if (playerStatsQuery.isFetched) {
  // Find the player with the highest passing yards
  const maxPassingYards = Math.max(
    ...playerStatsData?.passing.map((player) => player.yards)
  );
  const playerWithMaxPassingYards = playerStatsData?.passing.find(
    (player) => player.yards === maxPassingYards
  );

  // Find the player with the highest rushing yards
  const maxRushYards = Math.max(
    ...playerStatsData?.rushing.map((player) => player.rush_yards)
  );
  const playerWithMaxRushYards = playerStatsData?.rushing.find(
    (player) => player.rush_yards === maxRushYards
  );

  // Find the player with the highest receiving yards
  const maxReceivingYards = Math.max(
    ...playerStatsData?.receiving.map((player) => player.receiving_yards)
  );
  const playerWithMaxReceivingYards = playerStatsData?.receiving.find(
    (player) => player.receiving_yards === maxReceivingYards
  );

  // Find the player with the most tackles
  const maxTackles = Math.max(
    ...playerStatsData?.defense.map((player) => player.tackles)
  );
  const playerWithMaxTackles = playerStatsData?.defense.find(
    (player) => player.tackles === maxTackles
  );

  // Find the player with the most interceptions
  const maxInterceptions = Math.max(
    ...playerStatsData?.defense.map((player) => player.interceptions)
  );
  const playerWithMaxInterceptions = playerStatsData?.defense.find(
    (player) => player.interceptions === maxInterceptions
  );

  teamLeaders = [
    {
      Passing: {
        firstName: playerWithMaxPassingYards?.first_name,
        lastName: playerWithMaxPassingYards?.last_name,
        leadingStat: playerWithMaxPassingYards?.yards,
        position: playerWithMaxPassingYards?.position,
      },
    },
    {
      Rushing: {
        firstName: playerWithMaxRushYards?.first_name,
        lastName: playerWithMaxRushYards?.last_name,
        leadingStat: playerWithMaxRushYards?.rush_yards,
        position: playerWithMaxRushYards?.position,
      },
    },
    {
      Receiving: {
        firstName: playerWithMaxReceivingYards?.first_name,
        lastName: playerWithMaxReceivingYards?.last_name,
        leadingStat: playerWithMaxReceivingYards?.receiving_yards,
        position: playerWithMaxReceivingYards?.position,
      },
    },
    {
      Tackles: {
        firstName: playerWithMaxTackles?.first_name,
        lastName: playerWithMaxTackles?.last_name,
        leadingStat: playerWithMaxTackles?.tackles,
        position: playerWithMaxTackles?.position,
      },
    },
    {
      Inteceptions: {
        firstName: playerWithMaxInterceptions?.first_name,
        lastName: playerWithMaxInterceptions?.last_name,
        leadingStat: playerWithMaxInterceptions?.interceptions,
        position: playerWithMaxInterceptions?.position,
      },
    },
  ];
  }

  return (
    <div className="-m-4">
      <div className="mb-6 w-full bg-white overflow-x-auto font-bold drop-shadow">
        <h1 className="py-2 px-3">Team Leaders</h1>
        <div className="flex h-24 font-normal ">
          {teamLeaders?.map((player, index) => {
            const category = Object.keys(player);
            const playerData = player[category];

            return (
              <div className="flex-grow flex-shrink-0 border border-neutral-200 py-2 px-3 text-sm">
                <h1 className="font-medium">{category}</h1>
                <div className="flex pt-1">
                  <img
                    width="48px"
                    className="self-center"
                    src="/src/features/team-page/components/0000.png"
                  />

                  <div className="whitespace-nowrap pl-3">
                    <span className="flex">
                      <span className="hidden lg:block">
                        {playerData.firstName} {playerData.lastName}
                      </span>
                      <span className="block lg:hidden">
                        {playerData.firstName?.charAt(0)}. {playerData.lastName}
                      </span>
                      <span className="my-auto pl-1 text-xs text-neutral-500">
                        · {playerData.position}
                      </span>
                    </span>

                    <div className="text-2xl font-bold">
                      {playerData.leadingStat}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Table
          title="Passing"
          dense
          defaultSortFieldId={2}
          data={playerStatsData?.passing}
          columns={columns[0]}
        />

        <Table
          title="Rushing"
          dense
          defaultSortFieldId={2}
          data={playerStatsData?.rushing}
          columns={columns[1]}
        />

        <Table
          title="Receiving"
          dense
          defaultSortFieldId={2}
          data={playerStatsData?.receiving}
          columns={columns[2]}
        />

        <Table
          title="Defense"
          dense
          defaultSortFieldId={2}
          data={playerStatsData?.defense}
          columns={columns[3]}
        />
        <Table />
      </div>
    </div>
  );
};

export default Stats;
