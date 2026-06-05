import { Link } from "react-router-dom";
import type { Game } from "../../types/game";

type CardProps = {
    game: Game;
};

function CardSales({ game }: CardProps) {
    return (
        <div>
            <Link to={`/product/${game._id}`} className="group">
                <div className="overflow-hidden rounded-2xl relative">
                    <img
                        src={game.img2}
                        alt={game.title}
                        className="transition-transform duration-500 ease-out group-hover:scale-[1.07]"
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
        </div>
    )
}

export default CardSales