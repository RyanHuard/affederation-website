import React from "react";
import { Select, Tab, TabList, Tabs } from "@chakra-ui/react";

const Header = ({ team, tabs, handleSeasonSelect, seasonId }) => {
  const background = { borderColor: `${team?.primary_color}` };
  //   let division = team.division;

  // // Capitalize the first character
  // let capitalizedDivision = division.charAt(0).toUpperCase() + division.slice(1);
  console.log(team)
  return (
    <div className="bg-white">
      <div style={background} className={`whitespace-nowrap border-b-2 pt-6`}>
        <div className="m-auto px-2">
          <header className="mx-auto flex max-w-7xl border-b border-neutral-300 pb-4">
            <img
              className="w-20 md:w-24"
              src={`/assets/logos/${team?.team_logo}`}
            />
            <div className="my-auto px-2 md:px-4">
              <div className="text-xl md:text-3xl">
                {team?.team_location}{" "}
                <span className="font-bold">{team?.team_name}</span>
              </div>
              <div>
                {/* ({team?.wins}-{team?.loss}) */}
              </div>
            </div>
          </header>
        </div>
      </div>
      <div>{tabs}</div>
      <div className="mx-auto h-16 max-w-7xl bg-white px-4">
        <Select defaultValue={7} borderRadius={"sm"} width="10rem" className="my-[0.75rem]" onChange={handleSeasonSelect}>
          <option value={1}>2022</option>
          <option value={2}>2023</option>
          <option value={3}>2024</option>
          <option value={4}>2025</option>
          <option value={5}>2026</option>
          <option value={6}>2027</option>
          <option value={7}>2028</option>
        </Select>
      </div>
    </div>
  );
};

export default Header;
