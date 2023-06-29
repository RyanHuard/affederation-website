import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  TeamContext,
  sortAlphabetically,
  hyphenateAndLowerCaseTeam,
} from "../../../TeamContext";

const TeamsHeader = () => {
  let teams = useContext(TeamContext);
  teams = teams?.data;
  teams = sortAlphabetically(teams);
  console.log(teams)

  return (
    <div className="bg-black">
      <div className="flex h-14 justify-center space-x-6">
        {teams?.map((team, key) => {
          const logoPath = `/src/assets/${team.team_logo}`;
          const teamPath = `/teams/${hyphenateAndLowerCaseTeam(
            team.team_location,
            team.team_name
          )}`;

          return (
            <Link to={teamPath} className="my-auto" key={key}>
              <img className="h-11" src={logoPath} alt="Team Logo" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsHeader;
