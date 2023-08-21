import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getRecentArticles = () => {
  return api.get(`/recent-articles`).then((res) => res.data);
};

export const useRecentArticles = () => {
  return useQuery({
    queryKey: ["recentArticles"],
    queryFn: () => getRecentArticles(),
  });
};

