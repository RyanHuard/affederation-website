import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getSchedule = (seasonId, teamId) => {
  return api.get(`/schedule/${seasonId}?teamid=${teamId}`).then((res) => res.data);
};

export const useSchedule = (seasonId, teamId) => {
  return useQuery({
    queryKey: ["schedule", seasonId, teamId],
    queryFn: () => getSchedule(seasonId, teamId),
  });
};
