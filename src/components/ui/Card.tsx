import { Link } from "react-router-dom";
import { useState } from "react";
import type { Game } from "../../types/game";

type CardProps = {
    game: Game;
};

function Card({ game }: CardProps) {
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
            </div>

            <p className="mt-4 text-[13px] text-neutral-400 font-medium">
                {game.type}
            </p>

            <p className="mt-1.5 font-bold text-[14px] line-clamp-2">
                {game.title}
            </p>

            <div className="mt-4 flex items-center flex-wrap gap-3.5">
                {game.sale ? (
                    <>
                        <p className="text-[12px] bg-blue-700 py-1 px-3 rounded-4xl">
                            -{game.sale}%
                        </p>

                        <p className="text-[14px] line-through text-neutral-400">
                            €{game.price}
                        </p>

                        <p className="text-[14px]">
                            €{game.salePrice}
                        </p>
                    </>
                ) : (
                    <p className="text-[14px]">
                        {game.price === "Free" ? game.price : `€${game.price}`}
                    </p>
                )}
            </div>
        </Link>
    );
}

export default Card;