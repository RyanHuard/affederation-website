import React from "react";

import HomeLayout from "./HomeLayout";

import JoinCommunity from "./cards/JoinCommunity";
import CreateAPlayer from "./cards/CreateAPlayer";
import ArticleCard from "./cards/article-carousel/Card";
import StandingsCard from "./cards/standings/StandingsCard";
import SocialsCard from "./cards/SocialsCard";
import { Box } from "@chakra-ui/react";

const Home = () => {
  // Different component order for mobile vs desktop
  return (
    <>
      <div className="hidden lg:block">
        <HomeLayout>
          <JoinCommunity />
          <CreateAPlayer />
          <ArticleCard />
          <Box className="lg:w-1/3" flex="37%">
            <div className="mb-6">
            <StandingsCard  />
            </div>
            <SocialsCard />
          </Box>
        </HomeLayout>
      </div>
      <div className="lg:hidden">
        <HomeLayout>
          <ArticleCard />
          <JoinCommunity />
          <CreateAPlayer />
          <StandingsCard />
          <SocialsCard />
        </HomeLayout>
      </div>
    </>
  );
};

export default Home;
