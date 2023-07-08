import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = "176";

  return (
    <div className="flex w-full min-w-full justify-between bg-slate-50">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => setCurrentIndex(currentIndex - 1)}
        my="auto"
        h="24"
        bg="rgb(245 245 245)"
      />
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
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={() => setCurrentIndex(currentIndex + 1)}
        my="auto"
        h="24"
        bg="rgb(245 245 245)"
      />
    </div>
  );
};

export default Carousel;
