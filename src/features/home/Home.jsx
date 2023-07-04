import React from "react";
import HomeLayout from "./HomeLayout";
import JoinCommunity from "./cards/JoinCommunity";
import MainContainer from "./containers/MainContainer";
import RightContainer from "./containers/RightContainer";


const Home = () => {
  return (
    <HomeLayout>
      <MainContainer />
      <RightContainer />
    </HomeLayout>
  );
};

export default Home;
