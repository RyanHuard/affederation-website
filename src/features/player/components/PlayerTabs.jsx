import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const PlayerTabs = ({ handleTabChange, tabIndex }) => {
    return (
      <Tabs onChange={handleTabChange} index={tabIndex}>
        <TabList className="border-b-0 pt-1">
          <div className="mx-auto flex w-[1280px] lg:px-6">
            <Tab>Stats</Tab>
          </div>
        </TabList>
      </Tabs>
    );
  };

export default PlayerTabs;