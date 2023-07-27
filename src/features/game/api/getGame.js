import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getGame = (seasonId, gameId) => {
  return api.get(`/schedule/${seasonId}/${gameId}`).then((res) => res.data);
};

export const useGame = (seasonId, gameId) => {
  return useQuery({
    queryKey: ["schedule", seasonId, gameId],
    queryFn: () => getGame(seasonId, gameId),
  });
};
