import { Link } from "react-router-dom";
import { ChevronRight } from "@boxicons/react";
import CardSales from "../ui/CardSales";

import { useGamesByTag } from "../../hooks/useGamesByTag";

function Sales() {
    const { data: games = [], isLoading, isError } = useGamesByTag("sale", 4);

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
        <div className="max-w-300 mx-auto text-white">
            <Link to="/sales" className="flex items-center gap-3 w-fit">
                <b className="text-[20px] max-[525px]:text-[17px]">See All The Best Deals</b>
                <ChevronRight size="base" removePadding />
            </Link>

            <div className="grid grid-cols-3 gap-6 mt-8 max-[1024px]:grid-cols-2 max-[525px]:grid-cols-1">
                {games.map((game, index) => (
                    <div
                        key={game._id}
                        className={index === 3 ? "max-[1024px]:block min-[1025px]:hidden" : ""}
                    >
                        <CardSales game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sales;