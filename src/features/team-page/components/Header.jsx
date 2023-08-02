import React from "react";
import { Select, Tab, TabList, Tabs } from "@chakra-ui/react";

const Header = ({ team, tabs }) => {

  const background = { borderColor: `${team.primary_color}` };
  return (
    <div className="bg-white">
      <div
        style={background}
        className={`whitespace-nowrap border-b-2 pt-6`}
      >
        <div className="m-auto px-2">
          <header className="mx-auto flex max-w-7xl border-b border-neutral-300 pb-4">
            <img className="md:w-24 w-20" src={`/src/assets/logos/${team.team_logo}`} />
            <div className="my-auto md:px-4 px-2 ">
              <div className="md:text-3xl text-xl">
                {team.team_location}{" "}
                <span className="font-bold">{team.team_name}</span>
              </div>
              <div>
                ({team.wins}-{team.loss})
              </div>
            </div>
          </header>
        </div>
      </div>
      <div>
        {tabs}
      </div>
    </div>
  );
};

export default Header;
