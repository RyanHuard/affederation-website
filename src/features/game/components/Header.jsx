import { TabList, Tabs, Tab } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ game }) => {
  let awayWin;
  if (game?.away_team_score > game?.home_team_score) {
    awayWin = true;
  } else {
    awayWin = false;
  }

  let awayTeamLink, homeTeamLink;
  awayTeamLink = (
    game?.away_team_location.replace(".", "") + "-" + game?.away_team_name
  )
    .replace(" ", "-")
    .toLowerCase();

    homeTeamLink = (
      game?.home_team_location.replace(".", "") + "-" + game?.home_team_name
    )
      .replace(" ", "-")
      .toLowerCase();

  return (
    <div className="whitespace-nowrap border-b border-aff-blue bg-white pt-6 sm:-mt-6 sm:mt-0">
      <div className="m-auto px-2 sm:px-6">
        <header className="flex justify-center border-b border-neutral-300 pb-4">
          <Link 
            to={`/teams/${game?.away_team_id}/${awayTeamLink}`}
          className="flex font-semibold xl:w-64">
            <img
              className="my-auto h-12 w-12 sm:h-24 sm:w-24"
              src={`/assets/logos/${game?.away_team_logo}`}
            />
            <div className="my-auto hidden px-4 lg:block ">
              <div className="text-neutral-500">
                <span className="font-normal">
                  {game?.away_team_location} ({game?.away_team_wins}-
                  {game?.away_team_loss})
                </span>
              </div>
              <span>{game?.away_team_name}</span>
            </div>
            <div className="my-auto block pl-2 sm:pl-4 lg:hidden">
              <div>{game?.away_team_abb}</div>
              <div className="text-neutral-500 ">
                ({game?.away_team_wins}-{game?.away_team_loss})
              </div>
            </div>
          </Link>
          <div
            className={`my-auto w-[54px] pl-4 text-right text-3xl font-bold sm:w-32 sm:pl-16 sm:text-5xl ${
              !awayWin ? "text-neutral-400" : ""
            }`}
          >
            {game?.away_team_score}
          </div>

          <div className="my-auto px-[5%] font-bold md:px-24">
            {game?.away_team_score != null ? (
              <span>FINAL</span>
            ) : (
              <span className="text-3xl font-normal sm:text-5xl">@</span>
            )}
          </div>

          <div
            className={`my-auto w-[54px] pr-4 text-left text-3xl font-bold sm:w-32 sm:pr-16 sm:text-5xl ${
              awayWin ? "text-neutral-400" : ""
            }`}
          >
            {game?.home_team_score}
          </div>

          <Link
            to={`/teams/${game?.home_team_id}/${homeTeamLink}`}
            className="flex flex-row-reverse font-semibold xl:w-64"
          >
            <img
              className="my-auto h-12 w-12 sm:h-24 sm:w-24"
              src={`/assets/logos/${game?.home_team_logo}`}
            />
            <div className="my-auto hidden px-4 lg:block">
              <div className="text-neutral-500">
                <span className="font-normal">
                  {game?.home_team_location} ({game?.home_team_wins}-
                  {game?.home_team_loss})
                </span>
              </div>
              <span>{game?.home_team_name}</span>
            </div>
            <div className="my-auto block pr-2 sm:pr-4 lg:hidden">
              <div>{game?.home_team_abb}</div>
              <div className="text-neutral-500">
                ({game?.home_team_wins}-{game?.home_team_loss})
              </div>
            </div>
          </Link>
        </header>
        {/*    
        <div className="max-w-[960px] mx-auto pt-1">
          <Tabs>
            <TabList>
              <Tab>Box Score</Tab>
              <Tab>Team Stats</Tab>
            </TabList>
          </Tabs>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
