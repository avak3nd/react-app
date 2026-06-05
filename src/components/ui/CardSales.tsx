import { Link } from "react-router-dom";
import type { Game } from "../../types/game";
import { useState } from "react";

type CardProps = {
    game: Game;
};

function CardSales({ game }: CardProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Link to={`/product/${game._id}`} className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-video">
                {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-800" />
                )}

                <img
                    src={game.img2}
                    alt={game.title}
                    onLoad={() => setIsLoaded(true)}
                    className={`
                        h-full w-full object-cover
                        transition-all duration-500 ease-out
                        group-hover:scale-[1.07]
                        ${isLoaded ? "opacity-100" : "opacity-0"}
                    `}
                />

                <div className="absolute bottom-0 bg-indigo-600 w-full p-1 text-center font-semibold text-[15px]">
                    <p>Deals of the Week</p>
                </div>
            </div>

            <p className="mt-4 font-bold text-[16px]">
                {game.title}
            </p>

            <div className="mt-4 flex items-center gap-3.5">
                <p className="text-[12px] bg-blue-700 py-1 px-3 rounded-4xl">
                    -{game.sale}%
                </p>

                <p className="text-[14px] line-through text-neutral-400">
                    €{game.price}
                </p>

                <p className="text-[14px]">
                    €{game.salePrice}
                </p>
            </div>
        </Link>
    );
}

export default CardSales;