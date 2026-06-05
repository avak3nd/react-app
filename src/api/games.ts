import type { Game } from "../types/game";

export const getGamesByTag = async (
    tag: string,
    limit?: number
): Promise<Game[]> => {
    const url = new URL(
        `${import.meta.env.VITE_API_URL}/games/tag/${tag}`
    );

    if (limit) {
        url.searchParams.set("limit", limit.toString());
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }

    const data = await response.json();

    return data.games;
};