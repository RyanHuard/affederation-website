import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Spinner, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";

import { TeamContext } from "/src/lib/TeamContext.js";
import MainLayout from "../../components/layout/MainLayout";
import Header from "./components/Header";
import { usePlayerInfo } from "./api/getPlayer";
import PlayerTabs from "./components/PlayerTabs";
import Stats from "./components/Stats";

const Player = () => {
  const [tabIndex, setTabIndex] = useState(0);

  let { player } = useParams();


  let firstName = player.split("-")[0];
  let lastName = player.split("-")[1];
  console.log(firstName, lastName)
  const playerQuery = usePlayerInfo(firstName, lastName);

  const playerInfo = playerQuery?.data?.["player_info"];

  const teamContext = useContext(TeamContext);

  const team = teamContext?.data?.find(
    (team) => team.team_id === parseInt(playerInfo?.tid)
  );

  const handleTabChange = (e) => {
    setTabIndex(e);
  };

  return (
    <MainLayout
      header={
        !playerQuery.isLoading && (
          <Header playerInfo={playerInfo} team={team} tabs={<PlayerTabs />} />
        )
      }
    >
      {playerQuery?.isLoading ? (
        <div className="flex w-full mt-16 items-center justify-center bg-[#edeef2]">
          <Spinner size="lg" />
        </div>
      ) : (
        <div>
          <Tabs index={tabIndex}>
            <TabPanels>
              <TabPanel>
                <Stats player={playerQuery?.data} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      )}
    </MainLayout>
  );
};

export default Player;
