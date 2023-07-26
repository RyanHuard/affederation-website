import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import "./App.css";
import { TeamContext, useTeams } from "./lib/TeamContext";


import Standings from "./features/standings/Standings";
import Home from "./features/home/Home";
import PlayerStats from "./features/stats/PlayerStats";
import Schedule from "./features/schedule/Schedule";
import Game from "./features/game/Game";


function App() {
  const teams = useTeams();

  return (
    <BrowserRouter>
      <TeamContext.Provider value={teams?.data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/stats" element={<PlayerStats />} />

            <Route path="/game/:seasonId/:gameId" element={<Game />} />

          </Routes>
      </TeamContext.Provider>
    </BrowserRouter>
  );
}

export default App;
