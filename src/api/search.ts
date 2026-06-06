import type { Game } from "../types/game";

export const searchGames = async (
    query: string
): Promise<Game[]> => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/search?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Failed to search games");
    }

    const data = await response.json();

    return data.games;
};