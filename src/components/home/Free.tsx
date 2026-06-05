import { Link } from "react-router-dom";
import CardFree from "../ui/CardFree";

import { useGamesByTag } from "../../hooks/useGamesByTag";

function Free() {
    const { data: games = [], isLoading, isError } = useGamesByTag("free", 4);

    if (isLoading) {
        return (
            <div className="max-w-300 mx-auto text-white">
                Loading...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-300 mx-auto text-red-500">
                Failed to load games
            </div>
        );
    }

    return (
        <div className="max-w-300 mx-auto text-white rounded-2xl">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <b className="text-[20px] max-[525px]:text-[17px]">Free Games</b>
                </div>

                <Link
                    to="/free-games"
                    className="text-[14px] bg-neutral-800 py-2 px-4 rounded-[7px] font-semibold hover:bg-neutral-700 transition-all duration-200"
                >
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-8 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2">
                {games.map((game, index) => (
                    <CardFree key={index} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Free;