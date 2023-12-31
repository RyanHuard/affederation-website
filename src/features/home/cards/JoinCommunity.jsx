import { Card } from "@chakra-ui/react";
import Button from "../../../components/button/Button";
import React from "react";

import discordLogo from "../../../assets/discord.png";

const JoinCommunity = () => {
  return (
    <Card borderRadius="sm" className="drop-shadow-md">
      <div className="mx-auto px-6 py-6">
        <h1 className="text-center text-2xl font-bold ">JOIN OUR COMMUNITY</h1>
          <p className="pt-6">Meet and discuss with owners, fellow fans, and more</p>
        <div className="pt-6 text-center">
          <div className="flex items-center gap-8 ml-14">
            <img src={discordLogo} className="w-12"/>
          <Button onClick={() => alert("Our discord will be available to all fans coming soon!")}>JOIN NOW</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JoinCommunity;
