import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getFreeAgents = () => {
  return api.get(`/free-agents`).then((res) => res.data);
};

export const useFreeAgents = (currentPlayerIndex) => {
  return useQuery({
    queryKey: ["free_agents", currentPlayerIndex],
    queryFn: () => getFreeAgents(),
  });
};
