import { Card } from "@chakra-ui/react";
import Button from "../../../components/button/Button";
import React from "react";

import discordLogo from "../../../assets/discord.png";

const JoinCommunity = () => {
  return (
    <Card borderRadius="sm" flex="59%" className="drop-shadow-md lg:w-3/5">
      <div className="mx-auto px-6 py-6">
        <h1 className="text-center text-2xl font-bold ">JOIN OUR COMMUNITY</h1>
          <p className="pt-6">Meet and discuss with owners, fellow fans, and more</p>
        <div className="mt-6 text-center">
          <div className="flex items-center gap-8 ml-14">
            <img src={discordLogo} className="w-12"/>
          <Button onClick={() => console.log("TEST")}>JOIN NOW</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JoinCommunity;
