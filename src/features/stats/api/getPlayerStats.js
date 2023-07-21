import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getPlayerStats = (seasonId) => {
  return api.get(`/stats/${seasonId}`).then((res) => res.data);
};

export const usePlayerStats = (seasonId) => {
  return useQuery({
    queryKey: ["playerStats", seasonId],
    queryFn: () => getPlayerStats(seasonId),
  });
};
