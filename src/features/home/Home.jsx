import React from "react";

import HomeLayout from "./HomeLayout";
import Layout from "../../Layout";

import welcomeBanner from "../../assets/welcome-banner.png";

import JoinCommunity from "./cards/JoinCommunity";
import CreateAPlayer from "./cards/CreateAPlayer";
import ArticleCard from "./cards/article-carousel/ArticleCard";
import StandingsCard from "./cards/standings/StandingsCard";
import SocialsCard from "./cards/SocialsCard";
import { Box } from "@chakra-ui/react";
import LeagueInfoCard from "./cards/league-info/LeagueInfoCard";
const Header = () => {
  return (
    <header className="hidden lg:block -mt-6">
      <img src={welcomeBanner} />
    </header>
  );
};
const Home = () => {
  // Different component order for mobile vs desktop
  return (
    <>
      <div className="hidden lg:block">
        <Layout header={<Header />}>
          <HomeLayout>
          <div className="col-span-6 flex-col space-y-6">
            <JoinCommunity />
            <ArticleCard />
          </div>

          <div className="col-span-3 space-y-6">
            <CreateAPlayer />
            <StandingsCard />
            <SocialsCard />
          </div>

          <div className="col-span-9">
            <LeagueInfoCard />
          </div>
          </HomeLayout>
        </Layout>
      </div>

      <div className="mr lg:hidden">
        <HomeLayout>
          <ArticleCard />
          <JoinCommunity />
          <CreateAPlayer />
          <StandingsCard />
          <SocialsCard />
          <LeagueInfoCard />
        </HomeLayout>
      </div>
    </>
  );
};

export default Home;
