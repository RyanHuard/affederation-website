import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import MainLayout from "src/components/layout/MainLayout";
import BoxScore from "./components/BoxScore";

import { usePlayerStats } from "./api/getPlayerStats";
import { useGame } from "./api/getGame";
import Header from "./components/Header";
import TeamStats from "./components/TeamStats";

const Game = () => {
  let { seasonId, gameId } = useParams();

  let playerStatsQuery = usePlayerStats(seasonId, gameId);
  let gameQuery = useGame(seasonId, gameId);

  let isCompleted;

  if (gameQuery?.data?.[0].away_team_score != null) {
    isCompleted = true;
  } else {
    isCompleted = false;
  }

  return (
    <MainLayout
      header={
        !playerStatsQuery?.isLoading &&
        !gameQuery?.isLoading && <Header game={gameQuery?.data?.[0]} />
      }
    >
      {playerStatsQuery?.isLoading || gameQuery?.isLoading ? 
      (
        <div className="flex h-screen w-full items-center justify-center bg-[#edeef2]">
          <Spinner size="lg" className="relative bottom-64 sm:bottom-86" />
        </div>
      ) : isCompleted ? 
      (
        <BoxScore
          boxScore={playerStatsQuery?.data}
          game={gameQuery?.data?.[0]} />
      ) : 
      (
        <TeamStats game={gameQuery?.data?.[0]} />
      )}
    </MainLayout>
  );
};

export default Game;
