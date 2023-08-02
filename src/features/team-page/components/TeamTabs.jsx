import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const TeamTabs = ({ handleTabChange, tabIndex }) => {
    return (
      <Tabs onChange={handleTabChange} index={tabIndex}>
        <TabList className="border-b-0 pt-1">
          <div className="mx-auto flex w-[1280px]">
            <Tab>Schedule</Tab>
            <Tab>Stats</Tab>
            <Tab>Roster</Tab>
          </div>
        </TabList>
      </Tabs>
    );
  };

export default TeamTabs;