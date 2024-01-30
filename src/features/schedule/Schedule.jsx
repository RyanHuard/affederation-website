import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";

import MainLayout from "src/components/layout/MainLayout";
import Header from "./components/Header";
import Week from "./components/Week";

import { useSchedule } from "./api/getSchedule";

const Schedule = () => {
  const [seasonId, setSeasonId] = useState(7);
  const [weekId, setWeekId] = useState(1);

  const handleSeasonSelect = (e) => {
    setSeasonId(parseInt(e.target.value));
  };

  const handleWeekSelect = (e) => {
    setWeekId(parseInt(e.target.value));
  };

  let scheduleQuery = useSchedule(seasonId);

  return (
    <MainLayout
      header={
        <Header
          handleSeasonSelect={handleSeasonSelect}
          seasonId={seasonId}
          weekId={weekId}
          handleWeekSelect={handleWeekSelect}
        />
      }
    >
      {scheduleQuery?.isLoading ? (
        <div className="flex h-24 w-full items-center justify-center bg-[#edeef2]">
          <Spinner size="lg" />
        </div>
      ) : (
        <Week
          seasonId={seasonId}
          weekId={weekId}
          schedule={scheduleQuery?.data}
        />
      )}
    </MainLayout>
  );
};

export default Schedule;
