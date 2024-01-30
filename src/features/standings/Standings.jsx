import React, { ChangeEvent, useState } from "react";

import Header from "./components/Header";
import Tables from "./components/Tables";
import MainLayout from "src/components/layout/MainLayout";

const Standings = () => {
  const [seasonId, setSeasonId] = useState(7);

  const handleSeasonSelect = (e) => {
    setSeasonId(parseInt(e.target.value));
  };

  return (
    <MainLayout header={<Header handleSeasonSelect={handleSeasonSelect} seasonId={seasonId} />}>
      <Tables seasonId={seasonId} />
    </MainLayout>
  );
};

export default Standings;
