import { Star, StarHalf } from "@boxicons/react";
import { Child, LaurelWreath } from "@boxicons/react";

interface HeaderProps {
    game: {
        title: string;
        img: string;
    };
    isLoaded: boolean;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ game, isLoaded, setIsLoaded }: HeaderProps) {
    return (
        <div className="flex items-center gap-9">
            <div className="relative aspect-3/4 max-w-37.5 overflow-hidden rounded-2xl w-full">
                {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-800" />
                )}

                <img
                    src={game.img}
                    alt={game.title}
                    onLoad={() => setIsLoaded(true)}
                    className={`
                        h-full w-full object-cover
                        transition-all duration-500 ease-out
                        group-hover:scale-[1.07]
                            ${isLoaded ? "opacity-100" : "opacity-0"}
                    `}
                />
            </div>

            <div>
                <h1 className="text-3xl font-extrabold">{game.title}</h1>

                <div className="flex items-center flex-wrap gap-5 mt-3 text-[14px]">
                    
                    {/* Rankings */}
                    <div className="flex items-center">
                        <Star pack="filled" size="sm" />
                        <Star pack="filled" size="sm" />
                        <Star pack="filled" size="sm" />
                        <Star pack="filled" size="sm" />
                        <StarHalf pack="filled" size="sm" />
                        <p className="ml-2">4.8</p>
                    </div>

                    {/* Badges */}
                    <div className="text-neutral-400 flex items-center gap-2">
                        <Child fill="white" />
                        <p className="text-nowrap">Great for Beginners</p>
                    </div>

                    <div className="text-neutral-400 flex items-center gap-2">
                        <LaurelWreath fill="white" />
                        <p className="text-nowrap">Highly Recommended</p>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-6 text-[13.5px] flex flex-wrap gap-3">
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Action-Adventure
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Controller Support
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Narrative
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        RPG
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Open World
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Racing
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Rewards
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Tournaments
                    </p>
                    <p className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">
                        Survival
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;