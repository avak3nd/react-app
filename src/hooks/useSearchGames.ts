import { useQuery } from "@tanstack/react-query";
import { searchGames } from "../api/search";

export const useSearchGames = (
    query: string
) => {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => searchGames(query),
        enabled: query.trim().length >= 2,
    });
};