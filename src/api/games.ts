import type { Game } from "../types/game";

type GamesResponse = {
    message: string;
    count?: number;
    games?: Game[];
    error?: string;
};

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

    const data: GamesResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || data.error || "Failed to fetch games"
        );
    }

    return data.games || [];
};