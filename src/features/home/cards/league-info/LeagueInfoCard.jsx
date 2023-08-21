import { Card } from "@chakra-ui/react";
import React from "react";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";

const LeagueInfoCard = () => {
  const infoCards = [
    {
      title: "FAQ",
      body: "Get your quetsions answered here",
      // top 3 questions
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
    <div className="relative bg-white pb-12 text-center lg:h-[540px]">
      <header>
        <header className="h-12 rounded-t-sm bg-aff-blue">
          <h1 className="px-4 py-3 text-left font-semibold text-white">
            LEAGUE INFO
          </h1>
        </header>
        <h1 className="pt-6 text-2xl font-bold lg:text-3xl">
          ABOUT THE AMERICAN FOOTBALL FEDERATION
        </h1>
      </header>
      <Link to="/league-info">
        <div className="flex flex-col justify-evenly gap-12 pt-12 lg:flex-row lg:gap-0">
          {infoCards.map(({ title, body, img }, index) => (
            <InfoCard key={index} title={title} body={body} img={img} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default LeagueInfoCard;
