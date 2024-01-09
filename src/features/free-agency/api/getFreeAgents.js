import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getFreeAgents = () => {
  return api.get(`/free-agents`).then((res) => res.data);
};

export const useFreeAgents = () => {
  return useQuery({
    queryKey: ["free_agents"],
    queryFn: () => getFreeAgents(),
  });
};
