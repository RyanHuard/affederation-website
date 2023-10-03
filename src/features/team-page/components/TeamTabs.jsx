import React from "react";
import { Tabs, TabList, Tab, Select } from "@chakra-ui/react";

import hasTeamCredentials from "src/lib/hasTeamCredentials";

const TeamTabs = ({ handleTabChange, tabIndex }) => {
  return (
    <Tabs onChange={handleTabChange} index={tabIndex}>
      <TabList className="border-b-0 pt-1">
        <div className="mx-auto flex w-[1280px]">
          <Tab>Schedule</Tab>
          <Tab>Stats</Tab>
          <Tab isDisabled>Roster</Tab>
          {/* {hasTeamCredentials() && (
            <Tab>
              Manage
            </Tab>
          )} */}
        </div>
      </TabList>
    </Tabs>
  );
};

export default TeamTabs;
