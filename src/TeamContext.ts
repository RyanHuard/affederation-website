import { createContext } from "react";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
})

const getTeams = () => {
    return api.get("/teams")
}

export const useTeams = () => {
    return useQuery({
        queryKey: ["teams"],
        queryFn: () => getTeams()
    })
}

export const sortAlphabetically = (teams) => {
    return teams?.sort((a, b) => a.team_location.localeCompare(b.team_location));
}

export const hyphenateAndLowerCaseTeam = (location: String, name: String) => {
    let team = location.replace(" ", "-").replace(".", "") + "-" + name.replace(" ", "-");
    team = team.toLowerCase();
    return team;
}


export const TeamContext = createContext([])