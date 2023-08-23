import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import "./App.css";
import { TeamContext, useTeams } from "./lib/TeamContext";


import Standings from "./features/standings/Standings";
import Home from "./features/home/Home";
import PlayerStats from "./features/stats/PlayerStats";
import Schedule from "./features/schedule/Schedule";
import Game from "./features/game/Game";
import Teams from "./features/teams/Teams";
import Team from "./features/team-page/Team";
import Article from "./features/articles/Article";
import Player from "./features/player/Player";
import CreateAPlayer from "./features/create-a-player/CreateAPlayer";
import LeagueInfo from "./features/league-info/LeagueInfo";
// import UploadArticles from "./manager-features/upload-articles/uploadArticles";



function App() {
  const teams = useTeams();

  return (
    <HashRouter>
      <TeamContext.Provider value={teams?.data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/stats" element={<PlayerStats />} />

            <Route path="/game/:seasonId/:gameId" element={<Game />} />

            <Route path="/teams/:teamId/:teamName" element={<Team />} />

            <Route path="/news/:title/:articleId" element={<Article />} />

            <Route path="/players/:player" element={<Player />} />

            <Route path="/create-a-player" element={<CreateAPlayer />} />
            <Route path="/league-info" element={<LeagueInfo />} />
{/* 
            <Route path="/upload-article" element={<UploadArticles />} /> */}

          </Routes>
      </TeamContext.Provider>
    </HashRouter>
  );
}

export default App;
