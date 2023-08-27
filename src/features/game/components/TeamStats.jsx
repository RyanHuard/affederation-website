import React from "react";

import Bar from "./Bar";
import { useTeamStats } from "../api/getTeamStats";

const TeamStats = ({ game }) => {
  const awayStatsQuery = useTeamStats(game?.away_team_id, game?.season_id);
  const homeStatsQuery = useTeamStats(game?.home_team_id, game?.season_id);

  if (game.season_id < 4) {
    return (
      <div className="mx-auto h-[500px] max-w-4xl rounded bg-white drop-shadow">
        <h1 className="p-6 text-center">
          Sorry, there are no game stats available until 2025
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto lg:max-w-[900px]">
      <div className="rounded-sm border-b border-neutral-400 bg-white p-6 drop-shadow lg:border-0">
        <div className="pb-4 text-center text-lg font-bold">
          Offensive Stats (per game)
        </div>
        <div className="flex justify-between pb-4">
          <h2 className="flex self-center font-semibold">
            <img
              width="30"
              className="mr-2 "
              src={`/assets/helmets/${game?.away_team_helmet}`}
            />
            <span className="hidden sm:block">
              {game?.away_team_location} {game?.away_team_name}
            </span>
            <span className="block sm:hidden">{game?.away_team_abb}</span>
          </h2>
          <h2 className="flex self-center font-semibold">
            <span className="hidden sm:block">
              {game?.home_team_location} {game?.home_team_name}
            </span>
            <span className="block sm:hidden">{game?.home_team_abb}</span>
            <img
              width="30"
              className="ml-2"
              src={`/assets/helmets/${game?.home_team_helmet}`}
            />
          </h2>
        </div>
        <div>
          <Bar
            title="Yards Per Game"
            away={awayStatsQuery?.data?.["offense"]?.[0]}
            home={homeStatsQuery?.data?.["offense"]?.[0]}
          />
          <Bar
            title="Passing Yards"
            away={awayStatsQuery?.data?.["offense"]?.[1]}
            home={homeStatsQuery?.data?.["offense"]?.[1]}
          />
          <Bar
            title="Rushing Yards"
            away={awayStatsQuery?.data?.["offense"]?.[2]}
            home={homeStatsQuery?.data?.["offense"]?.[2]}
          />
          <Bar
            title="Points Per Game"
            away={awayStatsQuery?.data?.["offense"]?.[3]}
            home={homeStatsQuery?.data?.["offense"]?.[3]}
          />
        </div>
      </div>

      <div className="mx-auto rounded-sm bg-white p-6 drop-shadow lg:mt-12">
        <div className="pb-4 text-center text-lg font-bold">
          Defensive Stats (per game)
        </div>
        <div className="flex justify-between pb-4">
          <h2 className="flex self-center font-semibold">
            <img
              width="30"
              className="mr-2"
              src={`/assets/helmets/${game?.away_team_helmet}`}
            />
            <span className="hidden sm:block">
              {game?.away_team_location} {game?.away_team_name}
            </span>
            <span className="block sm:hidden">{game?.away_team_abb}</span>
          </h2>
          <h2 className="flex self-center font-semibold">
            <span className="hidden sm:block">
              {game?.home_team_location} {game?.home_team_name}
            </span>
            <span className="block sm:hidden">{game?.home_team_abb}</span>
            <img
              width="30"
              className="ml-2"
              src={`/assets/helmets/${game?.home_team_helmet}`}
            />
          </h2>
        </div>
        <div>
          <Bar
            title="Yards Per Game"
            away={awayStatsQuery?.data?.["defense"]?.[0]}
            home={homeStatsQuery?.data?.["defense"]?.[0]}
          />
          <Bar
            title="Passing Yards"
            away={awayStatsQuery?.data?.["defense"]?.[1]}
            home={homeStatsQuery?.data?.["defense"]?.[1]}
          />
          <Bar
            title="Rushing Yards"
            away={awayStatsQuery?.data?.["defense"]?.[2]}
            home={homeStatsQuery?.data?.["defense"]?.[2]}
          />
          <Bar
            title="Points Per Game"
            away={awayStatsQuery?.data?.["defense"]?.[3]}
            home={homeStatsQuery?.data?.["defense"]?.[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
