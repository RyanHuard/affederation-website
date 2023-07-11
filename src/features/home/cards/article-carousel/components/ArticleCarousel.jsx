import { useState, useEffect } from "react";

const ArticleCarousel = ({ children, currentIndex, setCurrentIndex, itemWidth }) => {


  const carouselInfiniteScroll = () => {
    if (currentIndex === children.length-1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 5000)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex w-full min-w-full justify-between bg-slate-50">
      <div
        id="carousel-container"
        className="flex w-full max-w-full flex-nowrap overflow-hidden overflow-x-hidden"
      >
        <div
          className="flex min-w-full flex-nowrap items-center justify-start"
          style={{
            transform: `translate(-${currentIndex * itemWidth}px)`,
            transition: "0.2s cubic-bezier(0.39, 0.575, 0.565, 1)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;
