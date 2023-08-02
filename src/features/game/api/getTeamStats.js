import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getTeamStats = (teamId, seasonId) => {
  return api.get(`/teams/${teamId}/stats/${seasonId}`).then((res) => res.data);
};

export const useTeamStats = (teamId, seasonId) => {
  return useQuery({
    queryKey: ["teamStats", teamId, seasonId],
    queryFn: () => getTeamStats(teamId, seasonId),
  });
};
