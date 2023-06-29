import { createContext } from "react";
import { api } from "./axios";
import { useQuery } from "@tanstack/react-query";


export const getTeams = () => {
  return api.get("/teams");
};

export const useTeams = () => {
  return (
    useQuery({
      queryKey: ["teams"],
      queryFn: () => getTeams(),
    })
  );
};

export const sortAlphabetically = (teams) => {
  return teams?.sort((a, b) => a.team_location.localeCompare(b.team_location));
};

export const hyphenateAndLowerCaseTeam = (location, name) => {
  let team =
    location.replace(" ", "-").replace(".", "") + "-" + name.replace(" ", "-");
  team = team.toLowerCase();
  return team;
};

export const TeamContext = createContext([]);
