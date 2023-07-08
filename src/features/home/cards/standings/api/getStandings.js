import { useQuery } from "@tanstack/react-query";

import { api } from "../../../../../lib/axios";

export const getStandings = () => {
  return api.get("/home-standings").then((res) => res.data);
};

export const useStandings = () => {
  return useQuery({
    queryKey: ["home-standings"],
    queryFn: () => getStandings(),
  });
};
