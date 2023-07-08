import { Card } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import Thumbnail from "./Thumbnail";

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
      console.log(width)
    }
  }, [currentIndex]);

  return (
    <Card ref={cardRef} className="drop-shadow-md lg:w-3/5 h-full">
      <ArticleCarousel itemWidth={cardWidth} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {articles.map((article, index) => {
          return <Thumbnail article={article} key={index} />;
        })}
      </ArticleCarousel>

      <div className="flex h-16 flex-grow gap-1 bg-white">
        {articles?.map((article, index) => {
          const isActive = index === currentIndex;
          const activeBgColor = isActive ? "aff-orange" : "aff-blue";

          return (
            <div
              onClick={() => setCurrentIndex(index)}
              className="my-auto h-full flex-1 cursor-pointer overflow-hidden"
              key={index}
            >
              <div
                className={`h-[.2rem] bg-${activeBgColor}`}
              ></div>
              <span
                className={`block text-sm font-semibold text-${activeBgColor} h-12 overflow-hidden p-2 leading-5`}
              >
                {article?.title}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ArticleCard;
