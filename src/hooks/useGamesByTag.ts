import { useQuery } from "@tanstack/react-query";
import { getGamesByTag } from "../api/games";

export const useGamesByTag = (tag: string) => {
    return useQuery({
        queryKey: ["games", tag],
        queryFn: () => getGamesByTag(tag),
    });
};