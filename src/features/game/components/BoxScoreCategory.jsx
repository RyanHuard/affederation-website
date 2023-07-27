import { ConnectingAirportsTwoTone } from "@mui/icons-material";
import React from "react";

const BoxScoreCategory = ({
  title,
  position,
  columns,
  playerStats,
  stats, // Selected stats
  teamName,
  teamLogo
}) => {
    
  return (
    <div className="pt-6 text-black">
      <div className="mx-1 flex text-left text-sm font-semibold pb-1">
        <h2 className="flex text-black text-[13px] ">
          <img className="mr-1" width="20" src={`/src/assets/logos/${teamLogo}`} />{teamName} {title}
        </h2>
      </div>
      <table className="lg:w-[415px] w-full mb-3 table-fixed border-collapse border-b border-neutral-300">
        <thead>
          <tr>
            {columns?.map((stat, index) => {
              return (
                <th
                  className="border-y border-neutral-300 px-1 py-1 text-right text-xs font-bold first:w-[30%] first:border-r"
                  key={index}
                >
                  {stat}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {playerStats?.map((player, index) => {

            return (
              <tr className="even:bg-[#f8f8f8] " key={index}>
                {stats?.map((stat, index) => {
                  return (
                    <td
                      className="border-neutral-300 px-1 py-1 text-right text-[13px] first:border-r first:text-left"
                      key={index}
                    >
                      {player[stat]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BoxScoreCategory;
