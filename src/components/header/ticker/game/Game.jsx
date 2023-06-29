import React from 'react'
import { useGames } from './api/getGames'
import { Spinner } from '@chakra-ui/react';

const Game = () => {
  const gamesQuery = useGames();

  if (gamesQuery.isLoading) {
    return (
        <div className="w-full h-20 flex justify-center items-center">
          <Spinner />
        </div>
    )
  }

  return (
    <div>Game</div>
  )
}

export default Game