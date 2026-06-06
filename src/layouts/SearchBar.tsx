import { Search } from "@boxicons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchGames } from "../hooks/useSearchGames";
import SearchImage from "../components/ui/SearchImage";

type SearchBarProps = {
    rounded?: boolean;
};

function SearchBar({ rounded = false }: SearchBarProps) {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search.trim());
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);

    const { data: games = [], isFetching, isError } = useSearchGames(debouncedSearch);

    const showDropdown = debouncedSearch.length >= 2;

    return (
        <div className="relative">
            <div
                className={`flex items-center gap-3.5 bg-neutral-800 px-5 ${rounded
                    ? "rounded-2xl"
                    : "rounded-4xl"
                    } hover:bg-neutral-700 transition-all duration-200`}
            >
                <Search fill="white" size="sm" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search games"
                    className="text-white outline-0 text-[13px] py-3 w-full bg-transparent"
                />
            </div>

            {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-800 rounded-xl shadow-xl/20 z-50 max-h-96 overflow-auto">
                    {isFetching && (
                        <div className="p-4 text-sm text-neutral-400">
                            Searching...
                        </div>
                    )}

                    {isError && (
                        <div className="p-4 text-sm text-red-400">
                            Failed to search games
                        </div>
                    )}

                    {!isFetching &&
                        !isError &&
                        games.length === 0 && (
                            <div className="p-4 text-sm text-neutral-400">
                                No games found
                            </div>
                        )}

                    {!isFetching &&
                        !isError &&
                        games.length > 0 &&
                        games.map((game) => (
                            <Link
                                key={game._id}
                                to={`/product/${game._id}`}
                                className="flex items-center gap-4 py-3 px-4 hover:bg-neutral-700 transition"
                                onClick={() => setSearch("")}
                            >
                                <SearchImage
                                    src={game.img}
                                    alt={game.title}
                                />

                                <div className="flex flex-col">
                                    <p className="text-[13px] text-neutral-400 font-medium">
                                        {game.type}
                                    </p>

                                    <p className="font-semibold text-[14px] mt-px text-white line-clamp-2 leading-5">
                                        {game.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;