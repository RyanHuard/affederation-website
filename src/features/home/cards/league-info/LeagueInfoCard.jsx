import { Card } from "@chakra-ui/react";
import React from "react";
import InfoCard from "./InfoCard";

const LeagueInfoCard = () => {
  const infoCards = [
    {
      title: "FAQ",
      body: "Get your quetsions answered here",
      img: "src/assets/home/league-info/faq.png",
    },
    {
      title: "HOW IT WORKS",
      body: "Learn the in and outs of the AFF",
      img: "src/assets/home/league-info/hiw.png",
    },
    {
      title: "LEAGUE RECORDS",
      body: "Learn about the history of the AFF by seeing records set by the all-time greats",
      img: "src/assets/home/league-info/rec.png",
    },
  ];

  return (
    <div className="text-center bg-white relative h-[540px]">
      <header>
      <header className="h-12 bg-aff-blue rounded-t-sm">
        <h1 className="px-4 py-3 font-semibold text-white text-left">LEAGUE INFO</h1>
      </header>
        <h1 className="text-3xl font-bold pt-6">
          ABOUT THE AMERICAN FOOTBALL FEDERATION
        </h1>
      </header>
      <div className="flex lg:flex-row lg:gap-0 gap-12 flex-col justify-evenly pt-12">
        {infoCards.map(({ title, body, img }, index) => (
          <InfoCard key={index} title={title} body={body} img={img} />
        ))}
      </div>
    </div>
  );
};

export default LeagueInfoCard;
