import { Card } from "@chakra-ui/react";
import Button from "../../../components/button/Button";
import React from "react";

const JoinCommunity = () => {
  return (
    <Card className="h-48" bg="white" border="1px" borderRadius="0">
      <div className="mx-auto h-full px-12 py-6">
        <h1 className="text-center text-2xl font-bold ">
          JOIN OUR COMMUNITY TODAY
        </h1>
        <p className="mt-6">
          Meet the owners, discuss with fellow fans, and make predictions
        </p>
        <div className="mt-6 text-center">
          <Button onClick={() => console.log("TEST")}>JOIN NOW</Button>
        </div>
      </div>
    </Card>
  );
};

export default JoinCommunity;
