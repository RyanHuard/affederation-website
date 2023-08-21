import { Card } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ArticleCarousel from "./components/ArticleCarousel";
import Thumbnail from "./components/Thumbnail";
import Headlines from "./components/Headlines";
import { useRecentArticles } from "./api/getArticles";

const ArticleCard = () => {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const articleQuery = useRecentArticles();

  const articles = articleQuery?.data;

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);
    }
  }, [currentIndex]);

  return (
    <Card ref={cardRef} rounded="sm" className="drop-shadow-md overflow-hidden">
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
