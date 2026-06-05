import { Link } from "react-router-dom";
import { ChevronRight } from "@boxicons/react";
import CardSales from "../ui/CardSales";
import CardLoading from "../ui/CardLoading";

import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGamesByTag } from "../../hooks/useGamesByTag";

function Sales() {
    const { data: games = [], isLoading, isError } = useGamesByTag("sale", 4);

    if (isLoading) {
        return (
            <SkeletonTheme
                baseColor="oklch(26.9% 0 0)"
                highlightColor="oklch(37.1% 0 0)"
            >
                <div className="max-w-300 mx-auto">
                    <div className="flex items-center justify-between">
                        <Skeleton width={240} height={24} />

                        <div className="flex gap-3">
                            <Skeleton width={100} height={32} />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mt-8 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CardLoading key={index} />
                        ))}
                    </div>
                </div>
            </SkeletonTheme>
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