import { Search } from "@boxicons/react";

type SearchBarProps = {
    rounded?: boolean;
};

function SearchBar({ rounded = false }: SearchBarProps) {
    return (
        <div
            className={`flex items-center gap-3.5 bg-neutral-800 px-5 ${rounded ? "rounded-2xl" : "rounded-4xl"
                } cursor-pointer hover:bg-neutral-700 transition-all duration-200`}
        >
            <Search fill="white" size="sm" />
            <input
                type="text"
                placeholder="Search games"
                className="text-white outline-0 text-[13px] cursor-pointer py-3 w-full"
            />
        </div>
    );
}

export default SearchBar;