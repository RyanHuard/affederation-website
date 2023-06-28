import React, { useContext } from "react";

import { Team, TeamContext, sortAlphabetically } from "../../../TeamContext";

const TeamsHeader = () => {
  let teams: any[] = useContext(TeamContext);
  teams = teams?.data;
  teams = sortAlphabetically(teams);
  

  return (
    <div className="bg-black">
      <div className="h-14 flex justify-center space-x-6">
      {teams?.map((team, key) => {
        const logoPath = `/src/assets/${team.team_logo}`;
        return <img className="h-11 my-auto" src={logoPath} alt="Team Logo" key={key} />;
      })}
      </div>
    </div>
  );
};

export default TeamsHeader;
