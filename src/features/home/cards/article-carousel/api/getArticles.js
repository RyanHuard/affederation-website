import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";


export const getRecentArticles = (count) => {
  return api.get(`/recent-articles/${count}`).then((res) => res.data);
};

export const useRecentArticles = (count) => {
  return useQuery({
    queryKey: ["recentArticles", count],
    queryFn: () => getRecentArticles(count),
  });
};

