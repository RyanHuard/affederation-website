import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Game from "./game/Game";
import Carousel from "../carousel/Carousel";

import { useState, useEffect } from "react";

const Ticker = () => {
  return (
    <Carousel>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>1SA vs ALA</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>2MEM vs STL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>3SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>4SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>5SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>6SA vs ALA</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>7MEM vs STL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>8SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>9SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>0SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>1SA vs ALA</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>2MEM vs STL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>3SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>4SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>5SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>6SA vs ALA</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>7MEM vs STL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>8SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>9SHR vs ORL</h1>
      </div>
      <div className="h-20 min-w-[160px] border-l-2 border-neutral-700">
        <h1>0SHR vs ORL</h1>
      </div>
    </Carousel>
  );
};

export default Ticker;
