import type { Game } from "../types/game";

type GameResponse = {
    message: string;
    game?: Game;
    error?: string;
};

export const getGameById = async (
    id: string
): Promise<Game> => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/${id}`
    );

    const data: GameResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || data.error || "Failed to fetch game"
        );
    }

    if (!data.game) {
        throw new Error("Game not found");
    }

    return data.game;
};