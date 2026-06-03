import { Link } from "react-router-dom";
import type { Game } from "../../types/game";

type CardProps = {
    game: Game;
};

function CardFree({ game }: CardProps) {
    return (
        <Link to="/product" className="group">
            <div className="overflow-hidden rounded-2xl relative">
                <img
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                    src={game.img}
                    alt={game.title}
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