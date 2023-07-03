import React from "react";


const Game = ({ game }) => {
  const awayLogo = `/src/assets/${game.away_team_logo}`;
  const homeLogo = `/src/assets/${game.home_team_logo}`;
  
  return (
    <div className="flex">
      <div
        className="h-24 w-40 border-l border-neutral-700 py-2 pl-2"
      >
        <span className="flex ">
          <img src={awayLogo} className="mr-2 w-7" />{" "}
          <span className="font-bold text-[15px] my-auto">{game.away_team_abb}</span>
        </span>
        <span className="flex">
          <img src={homeLogo} className="mr-2 w-7" />{" "}
          <span className="font-bold text-[15px] my-auto">{game.home_team_abb}</span>
        </span>
      </div>
    </div>
  );
};

export default Game;
