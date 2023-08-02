import React, { useContext } from "react";

import { TeamContext } from "../../lib/TeamContext";
import { Link, NavLink } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

const Teams = () => {
  let teams = useContext(TeamContext);
  const teamData = teams?.data.sort((a, b) =>
    a.team_location.localeCompare(b.team_location)
  );

  const homeTowns = [
    "Birmingham, AL",
    "Fargo, ND",
    "Louisville, KY",
    "Memphis, TN",
    "Norman, OK",
    "Orlando, FL",
    "San Antonio, TX",
    "Shreveport, LA",
    "Charleston, SC",
    "St. Louis, MO"
  ]

  const managers = [
    "Colby Garrett",
    "Andrew Munie",
    "Tucker James",
    "Hutch Dunavant",
    "Andrew Brady",
    "Jeb Wells",
    "Ryan Huard",
    "Jackson Baird",
    "Graydon Cowgill",
    "Griffon Kipper"
  ]




  return (
    <MainLayout>
      <div className="flex flex-wrap justify-center gap-x-36 gap-y-20 gap pt-12 sm:pt-0">
        {teamData?.map((team, index) => {
          const teamLink  = (
            team.team_location.replace(".", "") + "-" + team.team_name
          )
            .replace(" ", "-")
            .toLowerCase();
          return (
            <NavLink to={`/teams/${team.team_id}/${teamLink}`} key={index} >
              <img width="300" src={`/src/assets/helmets/${team.helmet}`} />
              <div className="flex-col flex text-center leading-5">
                <span className="font-bold">
                  {team.team_location} {team.team_name}
                </span>
                <span>{homeTowns[index]}</span>
                <span>General Manager: {managers[index]}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Teams;
