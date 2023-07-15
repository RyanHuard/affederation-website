import React from "react";

import MainLayout from "../../components/layout/MainLayout";
import Header from "./components/Header";
import Table from "src/components/table/Table";
import { usePlayerStats } from "./api/getPlayerStats";
import { Passing } from "./components/columns/Passing";

const PlayerStats = () => {
  const playerStatsQuery = usePlayerStats(5);
  const data = playerStatsQuery?.data;
  const pos = data?.["passing"];
  console.log(pos);

  return (
    <MainLayout header={<Header />}>
      <Table
        data={pos}
        columns={Passing}
        title="Passing"
        progressPending={playerStatsQuery.isLoading}
      />
    </MainLayout>
  );
};

export default PlayerStats;
