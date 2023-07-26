import React from "react";
import { Select } from "@chakra-ui/react";

const Header = ({ handleSeasonSelect, handleWeekSelect, seasonId, weekId }) => {
  return (
    <div className="border-b border-aff-blue bg-white sm:mt-0 sm:pt-12">
      <div className="m-auto max-w-7xl px-6">
        <header className="hidden text-3xl font-bold sm:block">
          AFF Schedule - {seasonId + 2021} - Week {weekId}
        </header>
        <div className="mt-6 hidden h-[2px] bg-aff-blue sm:block" />
        <div className="flex justify-center gap-6 border-b-2 py-2 sm:justify-normal sm:border-0 sm:py-6">
          <Select
            borderRadius="sm"
            width="10rem"
            onChange={handleSeasonSelect}
            defaultValue={5}
          >
            <option value={1}>2022</option>
            <option value={2}>2023</option>
            <option value={3}>2024</option>
            <option value={4}>2025</option>
            <option value={5}>2026</option>
            <option value={6}>2027</option>
          </Select>
          <Select
            borderRadius="sm"
            width="10rem"
            onChange={handleWeekSelect}
            defaultValue={1}
          >
            <option value={1}>Week 1</option>
            <option value={2}>Week 2</option>
            <option value={3}>Week 3</option>
            <option value={4}>Week 4</option>
            <option value={5}>Week 5</option>
            <option value={6}>Week 6</option>
            <option value={7}>Week 7</option>
            <option value={8}>Week 8</option>
            <option value={9}>Week 9</option>
            <option value={10}>Week 10</option>
            <option value={11}>Week 11</option>
            <option value={12}>Week 12</option>
          </Select>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
