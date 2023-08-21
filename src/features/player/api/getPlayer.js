import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getPlayerInfo = (firstName, lastName) => {
  return api.get(`/player-info/${firstName}/${lastName}`).then((res) => res.data);
};

export const usePlayerInfo = (firstName, lastName) => {
  return useQuery({
    queryKey: ["playerInfo", firstName, lastName],
    queryFn: () => getPlayerInfo(firstName, lastName),
  });
};
