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
import FreeAgency from "./features/free-agency/FreeAgency";
import UploadArticles from "./manager-features/upload-articles/uploadArticles";
import Checkout from "./features/create-a-player/components/Checkout";
import Success from "./features/create-a-player/components/Success";
import Cancel from "./features/create-a-player/components/Cancel";
import ScrollToTop from "./components/scroll-to-top/ScrolLToTop";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import { Upload } from "@mui/icons-material";

function App() {
  const teams = useTeams();

  return (
    <HashRouter>
      <TeamContext.Provider value={teams?.data}>
        <AuthContext.Provider>
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

          {/* <Route path="/create-a-player">
            <Route index={true} element={<CreateAPlayer />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Route> */}

          {/* <Route path="/league-info" element={<LeagueInfo />} />
          <Route
            path="/free-agency"
            element={
              <ProtectedRoute>
                <FreeAgency />
              </ProtectedRoute>
            }
          /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/upload-article" element={<UploadArticles />} />
          </Route>
        
        </Routes>
        </AuthContext.Provider>
      </TeamContext.Provider>
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
