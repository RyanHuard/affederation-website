import { Card } from "@chakra-ui/react";
import React from "react";
import Standings from "./components/Standings";

const StandingsCard = () => {
  return (
    <Card
      bg="white"
      borderRadius="sm"
      className="drop-shadow-md"
    >
      <div className="h-12 bg-aff-blue rounded-t-sm">
        <h1 className="px-4 py-3 font-semibold text-white">STANDINGS</h1>
      </div>
      <Standings />
    </Card>
  );
};

export default StandingsCard;
