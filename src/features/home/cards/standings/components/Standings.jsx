import React from "react";

import { useHomeStandings } from "../api/getHomeStandings";
import { Divider, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Standings = () => {
  const standingsQuery = useHomeStandings();

  const westStandings = standingsQuery.data?.filter(
    (team) => team.division == "west"
  );
  const eastStandings = standingsQuery.data?.filter(
    (team) => team.division == "east"
  );

  if (standingsQuery.isLoading) {
    return (
      <div className="m-auto">
        <Spinner />
      </div>
    );
  }

  return (
    <Link to={"/standings"}>
    <div className="flex overflow-hidden pb-4">
      <section className="w-1/2 px-4 pt-1">
        <header className="mb-2 border-b border-b-black px-1 pb-2 pt-2 font-semibold">
          West
        </header>
        <div>
          {westStandings.map((team, index) => {
            const logo = `src/assets/logos/${team.team_logo}`;

            return (
              <div
                key={index}
                className="flex border-b px-2 py-2 last-of-type:border-0"
              >
      
                <span className=" flex">
                  <img src={logo} width="30px" className="mr-[.25rem]" />
                  <span className="my-auto hidden sm:block lg:hidden xl:block">
                    {team.team.split(" ")[team.team.split(" ").length - 1]}
                  </span>
                  <span className="my-auto block sm:hidden lg:block xl:hidden">
                    {team.stats_team_city}
                  </span>
                </span>
                <span className="my-auto ml-auto">
                  {team.wins}-{team.loss}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-4">
        <Divider orientation="vertical" />
      </div>

      <section className="w-1/2 px-4 pt-1">
        <header className="mb-2 border-b border-b-black px-1 pb-2 pt-2 font-semibold">
          East
        </header>
        <div>
          {eastStandings.map((team, index) => {
            const logo = `src/assets/logos/${team.team_logo}`;

            return (
              <div
                key={index}
                className="flex border-b px-2 py-2 last-of-type:border-0"
              >
            
                <span className="flex">
                  <img src={logo} width="30px" className="mr-[.35rem]" />
                  <span className="my-auto hidden sm:block lg:hidden xl:block">
                    {team.team.split(" ")[team.team.split(" ").length - 1]}
                  </span>
                  <span className="my-auto block sm:hidden lg:block xl:hidden">
                    {team.stats_team_city}
                  </span>
                </span>
                <span className="my-auto ml-auto">
                  {team.wins}-{team.loss}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
    </Link>
  );
};

export default Standings;
