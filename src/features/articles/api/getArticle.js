import { useQuery } from "@tanstack/react-query";

import { api } from "src/lib/axios";

export const getArticle = (articleId) => {
  return api.get(`/articles/${articleId}`).then((res) => res.data);
};

export const useArticle = (articleId) => {
  return useQuery({
    queryKey: ["getArticle", articleId],
    queryFn: () => getArticle(articleId),
  });
};

