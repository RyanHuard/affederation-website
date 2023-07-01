import React from "react";
import { useGames } from "./api/getGames";
import { Spinner } from "@chakra-ui/react";

const Game = () => {
  const gamesQuery = useGames();

  //   if (gamesQuery.isLoading) {
  //     return (
  //         <div className="w-full h-20 flex justify-center items-center">
  //           <Spinner />
  //         </div>
  //     )
  //   }

  return (
    <div className="flex">
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>1SA vs ALA</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>2MEM vs STL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>3SHR vs ORL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>4SHR vs ORL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>5SHR vs ORL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>6SA vs ALA</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>7MEM vs STL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>8SHR vs ORL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>9SHR vs ORL</h1>
      </div>
      <div className="h-20 w-40 border-l-2 border-neutral-700">
        <h1>0SHR vs ORL</h1>
      </div>
    </div>
  );
};

export default Game;
