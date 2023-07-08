import React from "react";

import { useStandings } from "./api/getStandings";
import { Divider, Spinner } from "@chakra-ui/react";

const Standings = () => {
  const standingsQuery = useStandings();

  const westStandings = standingsQuery.data?.filter(
    (team) => team.division == "west"
  );
  const eastStandings = standingsQuery.data?.filter(
    (team) => team.division == "east"
  );

  if (standingsQuery.isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden pb-4">
      <section className="w-1/2 px-4 pt-1">
        <header className="mb-2 border-b border-b-black px-1 pb-2 pt-2 font-semibold">
          West
        </header>
        <div>
          {westStandings.map((team, index) => {
            const logo = `src/assets/logos/${team.team_logo}`;

            return (
              <div key={index} className="flex border-b px-2 py-2 last-of-type:border-0">
                <span className="my-auto">{index + 1}.{" "}</span>
                <span className="ml-2 flex">
                  <img src={logo} width="30px" className="mr-2" />
                  <span className="my-auto hidden sm:block lg:hidden xl:block">
                    {team.team.split(" ")[team.team.split(" ").length - 1]}
                  </span>
                  <span className="my-auto sm:hidden block lg:block xl:hidden">
                    {team.stats_team_city}
                  </span>
                </span>
                <span className="ml-auto">
                  {team.wins}-{team.loss}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <div className="pt-4">
      <Divider orientation="vertical"/>
      </div>
      <section className="w-1/2 px-4 pt-1">
        <header className="mb-2 border-b border-b-black px-1 pb-2 pt-2 font-semibold">
          East
        </header>
        <div>
          {eastStandings.map((team, index) => {
            const logo = `src/assets/logos/${team.team_logo}`;

            return (
              <div key={index} className="flex border-b px-2 py-2 last-of-type:border-0">
                <span className="my-auto">{index + 1}.{" "}</span>
                <span className="ml-2 flex">
                  <img src={logo} width="30px" className="mr-2" />
                  <span className="my-auto hidden sm:block lg:hidden xl:block">
                    {team.team.split(" ")[team.team.split(" ").length - 1]}
                  </span>
                  <span className="my-auto sm:hidden block lg:block xl:hidden">
                    {team.stats_team_city}
                  </span>
                </span>
                <span className="ml-auto">
                  {team.wins}-{team.loss}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Standings;
