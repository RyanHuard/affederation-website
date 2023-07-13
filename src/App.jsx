import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import "./App.css";

import Standings from "./features/standings/Standings";
import Home from "./features/home/Home";
import Header from "./components/header/Header";
import { TeamContext, useTeams } from "./lib/TeamContext";
import Navbar from "./components/header/navbar/Navbar";
import Layout from "./Layout";

function App() {
  const teams = useTeams();

  return (
    <BrowserRouter>
      <TeamContext.Provider value={teams?.data}>
        <Header />
        <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
          <Navbar />
        </div>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
          </Routes>
        </Layout>
      </TeamContext.Provider>
    </BrowserRouter>
  );
}

export default App;
