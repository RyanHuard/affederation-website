import React from 'react'
import { useParams } from 'react-router-dom';

import MainLayout from "src/components/layout/MainLayout";

const Game = () => {
  let { gameId } = useParams();

  return (
    <MainLayout>{gameId}</MainLayout>
  )
}

export default Game