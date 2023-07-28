import { TabList, Tabs, Tab } from "@chakra-ui/react";
import React from "react";

const Header = ({ game }) => {
  const winnerColor = "bg-black";
  const loserColor = "bg-neutral-500";

  return (
    <div className="border-b border-aff-blue bg-white pt-6 sm:mt-0">
      <div className="m-auto px-1 sm:px-6">
        <header className="flex justify-center border-b border-neutral-300 pb-4">
          <div className="flex font-semibold">
            <img
              className="my-auto h-12 w-12 md:h-24 md:w-24"
              src={`/src/assets/logos/${game?.away_team_logo}`}
            />
            <div className="my-auto hidden px-4 lg:block">
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
              <div className="text-neutral-500">
                ({game?.away_team_wins}-{game?.away_team_loss})
              </div>
            </div>
            <div
              className={`my-auto w-[54px] pl-4 text-right text-3xl font-bold sm:w-32 sm:pl-16 sm:text-5xl ${
                game?.away_team_score < game?.home_team_score
                  ? "text-neutral-400"
                  : ""
              }`}
            >
              {game?.away_team_score}
            </div>
          </div>
          <div className="my-auto px-[5%] font-bold md:px-24">FINAL</div>
          <div
            className={`my-auto w-[54px] pr-4 text-left text-3xl font-bold sm:w-32 sm:pr-16 sm:text-5xl ${
              game?.away_team_score > game?.home_team_score
                ? "text-neutral-400"
                : ""
            }`}
          >
            {game?.home_team_score}
          </div>
          <div className="flex flex-row-reverse font-semibold">
            <img
              className="my-auto h-12 w-12 md:h-24 md:w-24"
              src={`/src/assets/logos/${game?.home_team_logo}`}
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
          </div>
        </header>
   
        <div className="max-w-[960px] mx-auto pt-1">
          <Tabs>
            <TabList>
              <Tab>Box Score</Tab>
              <Tab>Team Stats</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Header;
