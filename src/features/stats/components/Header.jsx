import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";
import Table from "src/components/table/Table";

const Header = ({
  handleSeasonSelect,
  seasonId,
  handleTabChange,
  categories,
}) => {
  return (
    <div className="border-b border-aff-blue bg-white sm:pt-12">
      <div className="m-auto max-w-7xl px-6">
        <header className="hidden text-3xl font-bold sm:block">
          PLAYER STATISTICS - {seasonId + 2021}
        </header>
        <Tabs className="mt-6" onChange={handleTabChange}>
          <TabList>
            {categories.map((name, index) => {
              return (
                <Tab
                  _selected={{
                    borderBottomColor: "#e49740",
                    color: "#e49740",
                  }}
                  key={index}
                >
                  {name}
                </Tab>
              );
            })}
          </TabList>
        </Tabs>
        <div className="-mt-[2px] hidden h-[2px] bg-aff-blue sm:block" />
        <div className="flex justify-center gap-6 border-b-2 py-2 sm:justify-normal sm:border-0 sm:py-6">
          <Select
            borderRadius="sm"
            width="10rem"
            defaultValue={6}
            onChange={handleSeasonSelect}
          >
            <option value={4}>2025</option>
            <option value={5}>2026</option>
            <option value={6}>2027</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
