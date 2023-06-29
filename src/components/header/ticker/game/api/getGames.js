import { api } from "../../../../../lib/axios";
import { useQuery } from "@tanstack/react-query";

export const getGames = () => {
    return api.get("/schedule?season=current");
};

export const useGames = () => {
    return (
        useQuery({
            queryKey: ["games"],
            queryFn: () => getGames(),
        })
    );
};



