import { useQuery } from "@tanstack/react-query";
import { getGamesByTag } from "../api/games";

export const useGamesByTag = (
    tag: string,
    limit?: number
) => {
    return useQuery({
        queryKey: ["games", tag, limit],
        queryFn: () => getGamesByTag(tag, limit),
    });
};