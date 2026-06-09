import { Link } from "react-router-dom";
import type { Game } from "../../types/game";
import { useState } from "react";

type CardProps = {
    game: Game;
};

function CardFree({ game }: CardProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Link to={`/product/${game._id}`} className="group">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl w-full">
                {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-800" />
                )}

                <img
                    src={game.img.url}
                    alt={game.title}
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                    className={`
                        h-full w-full object-cover
                        transition-all duration-500 ease-out
                        group-hover:scale-[1.07]
                        ${isLoaded ? "opacity-100" : "opacity-0"}
                    `}
                />

                <div className="absolute bottom-0 bg-blue-700 w-full p-1 text-center font-semibold text-[15px]">
                    <p>FREE NOW</p>
                </div>
            </div>

            <p className="mt-4 font-bold text-[16px]">
                {game.title}
            </p>

            <p className="text-[14px] text-neutral-400">
                {game.price}
            </p>
        </Link>
    )
}

export default CardFree