import React from "react";

import Table from "../../../components/table/Table";
import { useStandings } from "../api/getStandings";
import { Spinner } from "@chakra-ui/react";
import columns from "./Columns";

const Tables = ({ seasonId }) => {
  const standingsQuery = useStandings();
  console.log(standingsQuery.data)

  if (seasonId <= 5) {
    return (
      <div className="m-auto my-0 pb-6 sm:my-12">
        <div className="mb-6 border-2">
          <Table
            title="American Football Federation"
            data={standingsQuery?.data[seasonId - 1]}
            columns={columns}
            progressPending={standingsQuery.isLoading}
          />
        </div>
      </div>
    );
  } else if (seasonId >= 6) {
    const westTeams = standingsQuery?.data?.[seasonId - 1]?.filter(
      (team) => team.division === "west"
    );
    const eastTeams = standingsQuery?.data?.[seasonId - 1]?.filter(
      (team) => team.division === "east"
    );

    return (
      <div className="max-w-screen">
        <div className="mb-0 border md:mb-6 ">
          <Table
            title="West"
            data={westTeams}
            columns={columns}
            progressPending={standingsQuery.isLoading}
          />
        </div>

        <div className="border-2">
          <Table
            title="East"
            data={eastTeams}
            columns={columns}
            progressPending={standingsQuery.isLoading}
          />
        </div>
      </div>
    );
  }
};

export default Tables;
