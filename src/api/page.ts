import type { Game } from "../types/game";

export const getGamesByTagPage = async (
    tag: string,
    page: number,
    limit = 10
): Promise<Game[]> => {
    const url = new URL(
        `${import.meta.env.VITE_API_URL}/games/tag/${tag}`
    );

    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }

    const data = await response.json();

    return data.games;
};