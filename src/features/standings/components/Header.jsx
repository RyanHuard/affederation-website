import React from "react";
import { Select } from "@chakra-ui/react";

const Header = ({ handleSeasonSelect, handleDivisionSelect}) => {
  
  return (
    <>
      <div className="bg-white sm:pt-12 w-screen">
        <div className="max-w-7xl m-auto">
        <header className="hidden text-3xl font-bold sm:block">
          STANDINGS
        </header>
          <div className="h-[2px] w-full bg-aff-orange hidden sm:block mt-6" />
        <div className="flex gap-6 py-2 sm:py-6 justify-center sm:justify-normal border-b-2 sm:border-0">
          <Select borderRadius="sm" width="10rem" onChange={handleSeasonSelect} defaultValue={6}>
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

      {/* <div className="flex justify-center gap-6 border-b-2 py-2 sm:hidden ">
        <Select border="none" borderRadius="sm" width="10rem">
          <option value="2022">2022</option>
        </Select>
        <Select border="none" borderRadius="sm" width="10rem">
          <option value="all">All Divisons</option>
        </Select>
      </div> */}
    </>
  );
};

export default Header;
