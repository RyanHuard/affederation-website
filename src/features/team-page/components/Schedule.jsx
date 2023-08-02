import React, { useContext } from "react";

import Table from "/src/components/table/Table";
import { useSchedule } from "./api/Schedule";
import { getColumns } from "./ScheduleColumns";

const Schedule = ({ team }) => {
  const scheduleQuery = useSchedule(6, team.team_id);

  const scheduleData = scheduleQuery?.data;

  const columns = getColumns(team.team_id);

  return (
    <div className="-m-4">
      <Table
        title="Regular Season"
        columns={columns}
        data={scheduleQuery?.data}
      />
    </div>
  );
};

export default Schedule;
