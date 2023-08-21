import React from "react";

import Table from "/src/components/table/Table";
import { columns } from "./Columns";
import { Category } from "@mui/icons-material";

const Stats = ({ player }) => {
  const categories = ["Passing", "Rushing", "Receiving", "Defense"];
  console.log(player);
  return (
    <div className="h-[500px]">
      {categories.map((category, index) => {
        const categoryKey = category.toLowerCase();
        const categoryStats = player[categoryKey];
        let nonEmptySeasons = [];

        Object.keys(categoryStats).map((season, index) => {
          if (categoryStats[season].length > 0) {
            categoryStats[season][0].season_id = season;
            console.log(categoryStats[season]);
            nonEmptySeasons.push(categoryStats[season][0]);
          }
        });

        if (nonEmptySeasons.length > 0) {
          return (
            <div className="pb-6 -mx-4">
              <Table
                title={category}
                columns={columns[index]}
                data={nonEmptySeasons}
                dense
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Stats;
