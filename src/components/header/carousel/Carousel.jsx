import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = "160";

  return (
    <div className="flex w-full min-w-full justify-between">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => setCurrentIndex(currentIndex - 1)}
        my="auto"
      />
      <div
        id="carousel-container"
        className="flex flex-nowrap overflow-hidden w-full max-w-full overflow-x-hidden"
      >
        <div
          className="flex h-24 min-w-full items-center justify-start"
          style={{
            transform: `translate(-${currentIndex * itemWidth}px)`,
            transition: "0.2s cubic-bezier(0.39, 0.575, 0.565, 1)",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {children}
        </div>
      </div>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={() => setCurrentIndex(currentIndex + 1)}
        my="auto"
      />
    </div>
  );
};

export default Carousel;
