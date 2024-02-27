import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { api } from "src/lib/axios";

export const publishArticle = ({ data }) => {
  return api.post(`/articles/publish`, data, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set content type to multipart form data
    },
  });
};
export const usePublishArticle = () => {
  return useMutation((articleData) => publishArticle({ data: articleData }), {
    onError: (error) => {
      toast.error(error.response.data.error, {
        autoClose: 5000,
        delay: 5
      })
    },
    onSuccess: () => {
      toast("Article published successfully!", {autoClose: 5000, delay: 5})
    }
  });
};