import { api } from "../../../../../lib/axios";
import { useQuery } from "@tanstack/react-query";

// Null season_id returns all seasons schedule
export const getGames = (season_id = null) => {
    let url = '/schedule';
    if (season_id) {
      url += `/${season_id}`;
    }
    
    return api.get(url).then(res => res.data);
  };

export const useGames = (season_id) => {
    return (
        useQuery({
            queryKey: ["games"],
            queryFn: () => getGames(season_id),
        })
    );
};



