import { useState, useRef, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSwipeable } from "react-swipeable";


const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 160;
    const containerRef = useRef(null);
    const touchStartRef = useRef(0);
    const touchMoveRef = useRef(0);
  
    const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientX;
      touchMoveRef.current = 0;
    };
  
    const handleTouchMove = (e) => {
      const touchMove = e.touches[0].clientX;
      touchMoveRef.current = touchStartRef.current - touchMove;
    };
  
    const handleTouchEnd = () => {
      const movement = touchMoveRef.current;
      const threshold = itemWidth / 2;
  
      if (movement > threshold) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (movement < -threshold) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
  
      touchStartRef.current = 0;
      touchMoveRef.current = 0;
    };
  
    return (
      <div className="flex w-full min-w-full justify-between">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
          my="auto"
        />
        <div
          id="carousel-container"
          className="flex flex-nowrap overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            touchAction: "pan-y", // Allow vertical scrolling
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          <div
            className="flex h-24 min-w-full items-center justify-start"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              transition: "transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1)",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {children}
          </div>
        </div>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
          my="auto"
        />
      </div>
    );
  };
export default Carousel;
