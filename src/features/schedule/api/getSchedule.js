import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getSchedule = (seasonId) => {
  return api.get(`/schedule/${seasonId}`).then((res) => res.data);
};

export const useSchedule = (seasonId) => {
  return useQuery({
    queryKey: ["schedule", seasonId],
    queryFn: () => getSchedule(seasonId),
  });
};
