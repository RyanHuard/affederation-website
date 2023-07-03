import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

import { useGames } from "./game/api/getGames";
import Game from "./game/Game";
import Carousel from "../carousel/Carousel";


const Ticker = () => {
  // current season
  const gamesQuery = useGames("current-season");
  console.log(gamesQuery.data)

  if (gamesQuery.isLoading) {
    return (
      <div className="flex h-20 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Carousel>
      {gamesQuery.data.map((game, index) => {
        return <Game game={game} key={index}/>
      })}
    </Carousel>
  );
};

export default Ticker;
