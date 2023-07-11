import { useQuery } from "@tanstack/react-query";

import { api } from "../../../../../lib/axios";

export const getHomeStandings = () => {
  return api.get("/home-standings").then((res) => res.data);
};

export const useHomeStandings = () => {
  return useQuery({
    queryKey: ["home-standings"],
    queryFn: () => getHomeStandings(),
  });
};
