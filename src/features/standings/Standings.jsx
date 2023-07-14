import React, { ChangeEvent, useState } from "react";

import Header from "./components/Header";
import Tables from "./components/Tables";
import MainLayout from "src/components/layout/MainLayout";

const Standings = () => {
  const [seasonId, setSeasonId] = useState(6);

  const handleSeasonSelect = (e) => {
    setSeasonId(parseInt(e.target.value));
  };

  return (
    <MainLayout header={<Header handleSeasonSelect={handleSeasonSelect} />}>
      <Tables seasonId={seasonId} />
    </MainLayout>
  );
};

export default Standings;
