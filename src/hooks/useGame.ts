import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../api/game";

export const useGame = (id: string) => {
    return useQuery({
        queryKey: ["game", id],
        queryFn: () => getGameById(id),
        enabled: !!id,
    });
};