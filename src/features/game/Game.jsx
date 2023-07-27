import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import MainLayout from "src/components/layout/MainLayout";
import BoxScore from "./components/BoxScore";

import { usePlayerStats } from "./api/getPlayerStats";
import { useGame } from "./api/getGame";

const Game = () => {
  let { seasonId, gameId } = useParams();

  let playerStatsQuery = usePlayerStats(seasonId, gameId);
  let gameQuery = useGame(seasonId, gameId);

  return (
    <MainLayout>
      {gameId}
      {playerStatsQuery?.isLoading ? (
        <div className="flex h-24 w-full items-center justify-center bg-[#edeef2]">
          <Spinner size="lg" />
        </div>
      ) : (
        <BoxScore
          boxScore={playerStatsQuery?.data}
          game={gameQuery?.data[0]}
        />
      )}
    </MainLayout>
  );
};

export default Game;
