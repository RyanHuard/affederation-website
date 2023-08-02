import { Card } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ArticleCarousel from "./components/ArticleCarousel";
import Thumbnail from "./components/Thumbnail";
import Headlines from "./components/Headlines";

const ArticleCard = () => {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      title:
        "HOW THE SAN ANTONIO CANNONS OUTCLASSED THE RACERS IN DREAM BOWL IV",
    },
    {
      title: "WHO WON THE 2027 DRAFT?",
    },
    {
      title: "FREE AGENCY SIGNINGS THAT WILL MAKE THIS SEASON BETTER",
    },
    {
      title: "IS THIS THE YEAR OF THE BISON?",
    },
  ];

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);
    }
  }, [currentIndex]);

  return (
    <Card ref={cardRef} rounded="sm" className="drop-shadow-md">
      <ArticleCarousel itemWidth={cardWidth} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {articles.map((article, index) => {
          return <Thumbnail article={article} key={index} />;
        })}
      </ArticleCarousel>
      <Headlines articles={articles} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      
    </Card>
  );
};

export default ArticleCard;
