import { useInfiniteQuery } from "@tanstack/react-query";
import { getGamesByTagPage } from "../api/page";

export const useInfiniteGamesByTag = (
    tag: string,
    limit = 10
) => {
    return useInfiniteQuery({
        queryKey: ["games", tag, "infinite"],
        initialPageParam: 1,

        queryFn: ({ pageParam }) =>
            getGamesByTagPage(tag, pageParam, limit),

        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < limit) {
                return undefined;
            }

            return allPages.length + 1;
        },
    });
};