import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Team, TeamContext, sortAlphabetically, hyphenateAndLowerCaseTeam } from "../../../TeamContext";

const TeamsHeader = () => {
  let teams: any[] = useContext(TeamContext);
  teams = teams?.data;
  teams = sortAlphabetically(teams);
  

  return (
    <div className="bg-black">
      <div className="h-14 flex justify-center space-x-6">
      {teams?.map((team, key) => {
        const logoPath = `/src/assets/${team.team_logo}`;
        return <Link to={`/teams/${hyphenateAndLowerCaseTeam(team.team_location, team.team_name)}`} className="my-auto"><img className="h-11" src={logoPath} alt="Team Logo" key={key} /></Link>
      })}
      </div>
    </div>
  );
};

export default TeamsHeader;
