import React, { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import Header from "./components/Header";
import Table from "src/components/table/Table";

import { usePlayerStats } from "./api/getPlayerStats";
import { columns } from "./components/Columns/Columns";
import { TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const PlayerStats = () => {
  const [seasonId, setSeasonId] = useState(6);
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState("Passing");

  const categories = [
    "Passing",
    "Rushing",
    "Receiving",
    "Defense",
    "Kicking",
    "Punting",
    "Kickoff Returns",
    "Punt Returns",
  ];

  const handleSeasonSelect = (e) => {
    setSeasonId(parseInt(e.target.value));
  };

  const handleTabChange = (e) => {
    setTabIndex(e);
    setCategory(categories[e]);
  };

  let playerStatsQuery = usePlayerStats(seasonId);
  let stats = playerStatsQuery?.data?.[category.toLowerCase()];

  return (
    <MainLayout
      header={
        <Header
          handleSeasonSelect={handleSeasonSelect}
          seasonId={seasonId}
          handleTabChange={handleTabChange}
          categories={categories}
        />
      }
    >
      <div>
        <Table
          key={category}
          data={stats}
          columns={columns[tabIndex]}
          title={category}
          progressPending={playerStatsQuery.isLoading}
          defaultSortFieldId={2}
          pagination={true}
          paginationPerPage={20}
          paginationComponentOptions={{
            selectAllRowsItem: true,
            rowsPerPageText: "Players per row",
          }}
          fontSize="14px"
        />
      </div>
    </MainLayout>
  );
};

export default PlayerStats;
