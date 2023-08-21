import React from "react";
import { Link } from "react-router-dom";

const Game = ({ ...game }) => {

  return (
    <Link to={`/game/${game.season_id}/${game.game_id}`}>
    <div className="mx-2 lg:mx-0 mb-4 flex h-14 items-center justify-center rounded-sm bg-white drop-shadow">
   
      <div className="flex  w-64 items-center justify-end">
        <span className="hidden px-1 sm:block">
          ({game.away_team_wins}-{game.away_team_loss})
        </span>
        <span className="hidden px-1 text-lg sm:block">
          {game.away_team_name}
        </span>
        <div className="flex-col-reverse flex text-center mt-2">
          <span className="text-md px-2 sm:hidden">{game.away_team_abb}</span>
          <img
            className="mx-3 w-7 sm:w-11"
            src={`/assets/helmets/${game.away_team_helmet}`}
          />
        </div>
        <span className={`${game?.away_team_score == null && "hidden" } w-10 px-2 text-center text-lg font-bold sm:text-xl`}>
          {game.away_team_score}
        </span>
      </div>

      <div className="px-4 text-2xl ">@</div>

      <div className="flex  w-64 flex-row-reverse items-center justify-end">
        <span className="hidden px-1 sm:block">
          ({game.home_team_wins}-{game.home_team_loss})
        </span>
        <span className="hidden px-1 text-lg sm:block">
          {game.home_team_name}
        </span>
        <div className="flex-col-reverse flex text-center mt-2">
          <span className="text-md px-2 sm:hidden">{game.home_team_abb}</span>
          <img
            className="mx-3 w-7 sm:w-11"
            src={`/assets/helmets/${game.home_team_helmet}`}
          />
        </div>
        <span className={`${game?.away_team_score == null && "hidden" } w-10 text-center text-lg font-bold sm:text-xl`}>
          {game.home_team_score}
        </span>
      </div>
    
    </div>
    </Link>
  );
};

export default Game;
