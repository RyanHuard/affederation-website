import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getPlayerStats = (seasonId, gameId) => {
  return api.get(`/stats/${seasonId}/${gameId}`).then((res) => res.data);
};

export const usePlayerStats = (seasonId, gameId) => {
  return useQuery({
    queryKey: ["playerStats", seasonId, gameId],
    queryFn: () => getPlayerStats(seasonId, gameId),
  });
};
