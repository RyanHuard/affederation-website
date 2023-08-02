
import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getPlayerStats = (seasonId, teamId) => {
  return api.get(`/stats/${seasonId}?teamid=${teamId}`).then((res) => res.data);
};

export const usePlayerStats = (seasonId, teamId) => {
  return useQuery({
    queryKey: ["playerStats", seasonId, teamId],
    queryFn: () => getPlayerStats(seasonId, teamId),
  });
};
