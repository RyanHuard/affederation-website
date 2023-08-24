import React from "react";
import BoxScoreCategory from "./BoxScoreCategory";
import { Spinner } from "@chakra-ui/react";

const BoxScore = ({ boxScore, game }) => {
  const categories = {
    passing: {
      title: "Passing",
      columns: ["", "C/ATT", "YDS", "TD", "INT", "SACKS"],
      stats: [
        "name",
        "completions_and_attempts",
        "yards",
        "tds",
        "interceptions",
        "sacks",
      ],
    },
    rushing: {
      title: "Rushing",
      columns: ["", "CAR", "YDS", "AVG", "TD", "LONG"],
      stats: [
        "name",
        "rush_attempts",
        "rush_yards",
        "yards_per_carry",
        "rush_tds",
        "long",
      ],
    },
    receiving: {
      title: "Receiving",
      columns: ["", "REC", "YDS", "AVG", "TD", "LONG", "TGTS"],
      stats: [
        "name",
        "receptions",
        "receiving_yards",
        "receiving_yards_per_reception",
        "receiving_tds",
        "long",
        "receiving_targets",
      ],
    },
    defense: {
      title: "Defense",
      columns: ["", "T", "TFL", "SACKS", "INT", "DFL"],
      stats: [
        "name",
        "tackles",
        "tackles_for_loss",
        "sacks",
        "interceptions",
        "deflections",
      ],
    },
    kicking: {
      title: "Kicking",
      columns: ["", "FG", "PCT", "LONG", "XP"],
      stats: [
        "name",
        "fg_attempts_and_made",
        "fg_percentage",
        "fg_long",
        "xp_attempts_and_made",
      ],
    },
    punting: {
      title: "Punting",
      columns: ["", "PUNTS", "YDS", "LONG", "TB"],
      stats: ["name", "punt_count", "net_yards", "long", "touchbacks"],
    },
    kick_return: {
      title: "Kick Returns",
      columns: ["", "COUNT", "YDS", "LONG", "TD"],
      stats: ["name", "count", "yards", "long", "tds"],
    },
    punt_return: {
      title: "Punt Returns",
      columns: ["", "COUNT", "YDS", "LONG", "TD"],
      stats: ["name", "count", "yards", "long", "tds"],
    },
  };

  const teams = Object.keys(boxScore);

  let awayIndex, homeIndex;

  if (game?.away_team_abb == teams[0]) {
    awayIndex = 0;
    homeIndex = 1;
  } else {
    awayIndex = 1;
    homeIndex = 0;
  }

  if (game.season_id < 4) {
    return (
      <div className="mx-auto h-[500px] max-w-4xl rounded bg-white drop-shadow">
        <h1 className="p-6 text-center">
          Sorry, there are no game stats available until 2025
        </h1>
      </div>
    );
  }

  if (game.away_team_score == null) {
    return <div>TEST</div>;
  }

  return (
    <>
      <div className="mx-auto hidden max-w-fit rounded-sm bg-white pb-6 pt-2 drop-shadow lg:block">
        {Object.entries(categories).map(([position, data], index) => {
          const awayStats = boxScore?.[teams[awayIndex]]?.[position];
          const homeStats = boxScore?.[teams[homeIndex]]?.[position];

          if (!(awayStats.length > 0)) {
            return <div className="flex h-screen w-full items-center justify-center bg-[#edeef2]">
            <Spinner size="lg" className="relative bottom-64 sm:bottom-86" />
          </div>
          }

          return (
            <div className="flex h-full px-4">
              <BoxScoreCategory
                title={data["title"]}
                position={position}
                columns={data["columns"]}
                stats={data["stats"]}
                playerStats={awayStats}
                teamName={game?.away_team_location}
                teamLogo={game?.away_team_logo}
                key={awayStats?.length}
              />
              <div className="ml-4 border-l border-neutral-300 pl-4">
                <BoxScoreCategory
                  title={data["title"]}
                  position={position}
                  columns={data["columns"]}
                  playerStats={homeStats}
                  stats={data["stats"]}
                  teamName={game?.home_team_location}
                  teamLogo={game?.home_team_logo}
                  key={homeStats?.length}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="block max-w-fit rounded-sm bg-white pb-6 pt-6 drop-shadow lg:hidden">
        {Object.entries(categories).map(([position, data], index) => {
          const awayStats = boxScore[teams[awayIndex]][position];

          return (
            <div className="flex h-full px-4">
              <BoxScoreCategory
                title={data["title"]}
                position={position}
                columns={data["columns"]}
                stats={data["stats"]}
                playerStats={awayStats}
                teamName={game?.away_team_location}
                teamLogo={game?.away_team_logo}
                key={awayStats?.length}
              />
            </div>
          );
        })}

        {/*Border */}
        <div id="border" className="mt-4 h-px w-full bg-neutral-300" />

        {Object.entries(categories).map(([position, data], index) => {
          const homeStats = boxScore[teams[awayIndex]][position];

          return (
            <div className="flex h-full px-4">
              <BoxScoreCategory
                title={data["title"]}
                position={position}
                columns={data["columns"]}
                stats={data["stats"]}
                playerStats={homeStats}
                teamName={game?.home_team_location}
                teamLogo={game?.home_team_logo}
                key={homeStats?.length}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoxScore;
