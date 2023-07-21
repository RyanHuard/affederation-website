import React from "react";
import { Select } from "@chakra-ui/react";

const Header = ({ handleSeasonSelect, handleDivisionSelect }) => {

  return (

    <div className="bg-white sm:pt-12 border-b border-aff-blue">
        <div className="m-auto max-w-7xl px-6">
          <header className="hidden text-3xl font-bold sm:block">
            STANDINGS
          </header>
          <div className="mt-6 hidden h-[2px] bg-aff-blue sm:block" />
          <div className="flex justify-center gap-6 border-b-2 py-2 sm:justify-normal sm:border-0 sm:py-6">
           
            <Select
              borderRadius="sm"
              width="10rem"
              onChange={handleSeasonSelect}
              defaultValue={6}
            >
              <option value={1}>2022</option>
              <option value={2}>2023</option>
              <option value={3}>2024</option>
              <option value={4}>2025</option>
              <option value={5}>2026</option>
              <option value={6}>2027</option>
            </Select>
            <Select borderRadius="sm" width="10rem">
              <option value="all">All Divisons</option>
            </Select>
          </div>
        </div>
      </div>

  );
};

export default Header;
