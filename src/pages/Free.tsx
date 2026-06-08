import { useEffect } from "react";

import Card from "../components/ui/Card"
import CardLoading from "../components/ui/CardLoading";

import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useInfiniteGamesByTag } from "../hooks/useInfiniteGamesByTag";

function Free() {
    document.title = "React Games | Free Games";

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteGamesByTag("free", 10);

    const games = data?.pages.flatMap((page) => page) ?? [];

    useEffect(() => {
        const handleScroll = () => {
            const nearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 500;

            if (
                nearBottom &&
                hasNextPage &&
                !isFetchingNextPage
            ) {
                fetchNextPage();
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, [
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    ]);

    if (isLoading) {
        return (
            <SkeletonTheme
                baseColor="oklch(26.9% 0 0)"
                highlightColor="oklch(37.1% 0 0)"
            >
                <div className="max-w-300 mx-auto py-8">
                    <div className="flex items-center justify-between">
                        <Skeleton width={240} height={24} />
                    </div>

                    <div className="grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2 pt-14 max-[768px]:pt-10 max-[500px]:pt-7.5 gap-x-6 gap-y-14 max-[500px]:gap-y-10">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CardLoading key={index} />
                        ))}
                    </div>
                </div>
            </SkeletonTheme>
        );
    }

    if (isError) {
        return (
            <div className="max-w-300 mx-auto text-red-500 py-8">
                Failed to load games
            </div>
        );
    }

    return (
        <div className="max-w-300 mx-auto text-white py-8">
            <b className="text-[35px] max-[768px]:text-[30px] max-[500px]:text-[25px] max-[400px]:text-[20px]">Free Games</b>

            <div className="grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2 pt-14 max-[768px]:pt-10 max-[500px]:pt-7.5 gap-x-6 gap-y-14 max-[500px]:gap-y-10">
                {games.map((game, index) => (
                    <div key={index}>
                        <Card game={game} />
                    </div>
                ))}
            </div>

            {isFetchingNextPage && (
                <div className="flex flex-col items-center justify-center gap-3 py-10">
                    <div className="w-8 h-8 border-3 border-neutral-700 border-t-white rounded-full animate-spin" />

                    <span className="text-neutral-400 text-sm">
                        Loading more games...
                    </span>
                </div>
            )}
        </div>
    )
}

export default Free