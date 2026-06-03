import { Link } from "react-router-dom";
import CardFree from "../ui/CardFree";
import type { Game } from "../../types/game";
import { useState } from "react";

function Free() {
    const [games] = useState<Game[]>([
        {
            id: "1",
            title: "Rocket League",
            img: "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-81ee7dcdd3e3495fa637d085f7b913b5",
            price: "Free",
        },
        {
            id: "2",
            title: "Fortnite",
            img: "https://cdn1.epicgames.com/offer/fn/FNBR_40-41_C7S2_EndEvent_PowerHour-DualHelmets_EGS_Launcher_Blade_1200x1600_1200x1600-253c504f235140eabcc43cf9c5c6e6c9",
            price: "Free",
        },
        {
            id: "3",
            title: "PUBG: BATTLEGROUNDS",
            img: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1rx7f.png",
            price: "Free",
        },
        {
            id: "4",
            title: "Genshin Impact",
            img: "https://cdn1.epicgames.com/spt-assets/99dc46c68ea14324964a856d18dcac5b/genshin-impact-hqdph.jpg",
            price: "Free",
        },
    ]);

    return (
        <div className="max-w-300 mx-auto text-white rounded-2xl">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <b className="text-[20px] max-[525px]:text-[17px]">Free Games</b>
                </div>

                <Link
                    to="/free-games"
                    className="text-[14px] bg-neutral-800 py-2 px-4 rounded-[7px] font-semibold hover:bg-neutral-700 transition-all duration-200"
                >
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-8 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2">
                {games.map((game, index) => (
                    <CardFree key={index} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Free;