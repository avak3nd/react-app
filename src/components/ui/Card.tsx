import { Link } from "react-router-dom";
import type { Game } from "../../types/game";

type CardProps = {
    game: Game;
};

function Card({ game }: CardProps) {
    return (
        <Link to="/product" className="group">
            <div className="overflow-hidden rounded-2xl w-full">
                <img
                    src={game.img}
                    className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                    alt={game.title}
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
                            {game.price}
                        </p>

                        <p className="text-[14px]">
                            {game.salePrice}
                        </p>
                    </>
                ) : (
                    <p className="text-[14px]">
                        {game.price}
                    </p>
                )}
            </div>
        </Link>
    );
}

export default Card;