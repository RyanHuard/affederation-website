import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

import { TeamContext } from "/src/lib/TeamContext.js";
import MainLayout from "../../components/layout/MainLayout";
import Header from "./components/Header";

import Schedule from "./components/Schedule";
import Table from "/src/components/table/Table";
import TeamTabs from "./components/TeamTabs";
import Stats from "./components/Stats";

const Team = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { teamId } = useParams();
  const teamContext = useContext(TeamContext);

  const team = teamContext?.data?.find(
    (team) => team.team_id === parseInt(teamId)
  );

  const handleTabChange = (e) => {
    setTabIndex(e);
  };

  return (
    <MainLayout
      header={
        <Header
          team={team}
          tabs={
            <TeamTabs handleTabChange={handleTabChange} tabIndex={tabIndex} />
          }
        />
      }
    >
      <div className=" h-screen">
      <Tabs index={tabIndex}>
        <TabPanels>
          <TabPanel>
            <Schedule team={team} />
          </TabPanel>
          <TabPanel>
            <Stats team={team} />
          </TabPanel>
          <TabPanel>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </div>
    </MainLayout>
  );
};

export default Team;
