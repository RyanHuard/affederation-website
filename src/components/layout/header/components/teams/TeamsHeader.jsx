import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  TeamContext,
  sortAlphabetically,
  hyphenateAndLowerCaseTeam,
} from "src/lib/TeamContext";

const TeamsHeader = () => {
  let teams = useContext(TeamContext);
  teams = teams?.data;
  teams = sortAlphabetically(teams);

  return (
    <div className="hidden bg-black md:block">
      <div className="flex h-14 justify-center space-x-6">
        {teams?.map((team, key) => {
          const logoPath = `/assets/logos/${team.team_logo}`;
          const teamPath = `/teams/${team.team_id}/${hyphenateAndLowerCaseTeam(
            team.team_location,
            team.team_name
          )}`;

          return (
            <Link to={teamPath} className="my-auto" key={key}>
              <img className="h-10" src={logoPath} alt="Team Logo" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsHeader;
