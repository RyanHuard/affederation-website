import React from "react";

import { Select } from "@chakra-ui/react";
import calculateOverall from "../calculateOverall.js";
import formatSalary from "../formatSalary.js";

const Header = ({ playerInfo, team, tabs }) => {
  const overall = calculateOverall(
    playerInfo?.position,
    playerInfo?.skill,
    playerInfo?.speed,
    playerInfo?.agility,
    playerInfo?.strength
  );

  return (
    <div className="border-b border-aff-blue bg-white sm:pt-6 pt-4 sm:mt-0">
      <div className="m-auto max-w-7xl border-b border-neutral-300 lg:px-6">
        <header className="mx-auto flex h-full max-w-7xl py-2 ">
          <img
            className="h-full w-48 md:w-56"
            src={`/src/assets/players/season_6/${playerInfo?.fname}_${playerInfo?.lname}.png`}
          />
          <div className="sm:flex px-4 md:px-8">
          <div className="sm:w-44">
            <div className="text-xl md:text-3xl">
              <div className="">{playerInfo?.fname}</div>
              <div className="font-bold">{playerInfo?.lname}</div>
            </div>
            <div className="flex sm:py-4 py-2 text-sm md:text-base">
              <img
                className="-ml-1 w-6 md:w-8"
                src={`/src/assets/logos/${team?.team_logo}`}
              />
              <span className="my-auto ml-1">
                {team?.team_location} · {playerInfo?.position}
              </span>
            </div>
          </div>

          <div className="mx-6 mb-6 hidden w-px bg-neutral-300 sm:block" />

          <div className="hidden gap-12 pt-1 text-sm font-semibold sm:flex">
            <ul className="md:space-y-4 space-y-[11px]">
              <li className="flex w-44 justify-between">
                <div className="text-neutral-500">COLLEGE</div>
                <div>{playerInfo?.college}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">PERSONALITY</div>
                <div>{playerInfo?.personality}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">AGE</div>
                <div>{playerInfo?.age}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">CONTRACT</div>
                <div>{playerInfo?.contract} years</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">SALARY</div>
                <div>{formatSalary(playerInfo?.salary)}</div>
              </li>
            </ul>
            <ul className="space-y-4 hidden lg:block">
              <li className="flex justify-between">
                <div className="text-neutral-500">OVERALL</div>
                <div>{overall}</div>
              </li>
              <li className="flex w-44 justify-between">
                <div className="text-neutral-500">SKILL</div>
                <div>{playerInfo?.skill}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">SPEED</div>
                <div>{playerInfo?.speed}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">AGILITY</div>
                <div>{playerInfo?.agility}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">STRENGTH</div>
                <div>{playerInfo?.strength}</div>
              </li>
            </ul>
          </div>

          <div className="text-xs sm:hidden block">
            <ul className="space-y-1 w-40">
              <li className="flex justify-between">
                <div className="text-neutral-500">COLLEGE</div>
                <div>{playerInfo?.college}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">PERSONALITY</div>
                <div>{playerInfo?.personality}</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">CONTRACT</div>
                <div>{playerInfo?.contract} Years</div>
              </li>
              <li className="flex justify-between">
                <div className="text-neutral-500">SALARY</div>
                <div>{formatSalary(playerInfo?.salary)}</div>
              </li>
            </ul>
          </div>
          </div>
        </header>
      </div>
      <div className="">{tabs}</div>
    </div>
  );
};

export default Header;
