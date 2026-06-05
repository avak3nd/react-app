import type { Game } from "../types/game";

export const getGameById = async (
    id: string
): Promise<Game> => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch game");
    }

    const data = await response.json();

    return data.game;
};