import React from "react";

const calculateWeek = (gameId, seasonId) => {
  let seasonStartGameId = 123;
  return Math.ceil((gameId + 1 - seasonStartGameId) / 3);
};

const Game = ({ game }) => {
  const awayLogo = `/src/assets/logos/${game.away_team_logo}`;
  const homeLogo = `/src/assets/logos/${game.home_team_logo}`;

  let awayResult;
  if (game.away_team_score > game.home_team_score) {
    awayResult = true;
  } else {
    awayResult = false;
  }

  return (
    <div className="flex bg-slate-50">
      <div className="h-24 w-44 border-l border-neutral-300 py-3 pl-2">
        <span className="mb-1 flex">
          <img src={awayLogo} className="mr-1 w-6" alt="away team logo" />{" "}
          <span
            className={`my-auto w-10 text-[13px] font-bold ${
              awayResult ? "text-black" : "text-neutral-500"
            }`}
          >
            {game.away_team_abb}
          </span>
          <span
            className={`my-auto ml-1 w-4 text-[13px] font-bold ${
              awayResult ? "text-black" : "text-neutral-500"
            }`}
          >
            {game.away_team_score}
          </span>
          <span className="my-auto ml-10 text-xs text-neutral-600">
            ({game.away_team_wins}-{game.away_team_loss})
          </span>
        </span>
        <span className="flex">
          <img src={homeLogo} className="mr-1 w-6" alt="home team logo" />{" "}
          <span
            className={`my-auto w-10 text-[13px] font-bold ${
              !awayResult ? "text-black" : "text-neutral-500"
            }`}
          >
            {game.home_team_abb}
          </span>
          <span
            className={`my-auto ml-1 w-4 text-[13px] font-bold ${
              !awayResult ? "text-black" : "text-neutral-500"
            }`}
          >
            {game.home_team_score}
          </span>
          <span className="my-auto ml-10 text-xs text-neutral-600">
            ({game.home_team_wins}-{game.home_team_loss})
          </span>
        </span>
        <span className="ml-1 text-xs">Week {calculateWeek(game.game_id)}</span>
      </div>
    </div>
  );
};

export default Game;
