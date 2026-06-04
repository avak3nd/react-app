import type { Game } from "../types/game";

export const getGamesByTag = async (
    tag: string
): Promise<Game[]> => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/tag/${tag}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }

    const data = await response.json();

    return data.games;
};