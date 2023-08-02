import React from "react";

import Game from "./Game";

const Week = ({ schedule, seasonId, weekId }) => {

  let gamesPerWeek = 5;
  if (seasonId >= 6) {
    gamesPerWeek = 5;
  } else if (seasonId >= 3) {
    gamesPerWeek = 3;
  } else {
    gamesPerWeek = 2;
  }

  const calculateGameIndex = (index, weekId, gamesPerWeek) => {
    return index + ((weekId - 1) * gamesPerWeek);
  }

  const makeWeek = (weekId, gamesPerWeek) => {
    let games = [];

    for (let i = 0; i < gamesPerWeek; i++) {
      let gameIndex = calculateGameIndex(i, weekId, gamesPerWeek)
      let game = schedule?.[gameIndex]
      games.push(<Game {...game}/>);
    }

    return games;
  };

  return ( 
    <div className="pt-3 sm:pt-0">
      <h1 className="md:text-2xl text-xl font-bold pb-3 sm:pb-6 pl-2 lg:pl-0">Season {seasonId} - Week {weekId}</h1>
      {makeWeek(weekId, gamesPerWeek)}
    </div>
  );
};

export default Week;
