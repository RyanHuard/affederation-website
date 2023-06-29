import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'

import "./App.css";

import Standings from "./features/standings/Standings";
import Home from "./features/home/Home";
import Header from "./components/header/Header";
import { TeamContext, useTeams } from "./lib/TeamContext";

function App() {
  const teams = useTeams();

  
  return (
    <BrowserRouter>
      <TeamContext.Provider value={teams?.data}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </TeamContext.Provider>
    </BrowserRouter>
  );
}

export default App;
