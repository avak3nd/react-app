import { useState } from "react";
import { Link } from "react-router-dom";

interface Game {
    title: string;
    image: string;
}

function Free() {
    const [games] = useState<Game[]>([
        {
            title: "Rocket League",
            image: "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-81ee7dcdd3e3495fa637d085f7b913b5",
        },
        {
            title: "Fortnite",
            image: "https://cdn1.epicgames.com/offer/fn/FNBR_40-41_C7S2_EndEvent_PowerHour-DualHelmets_EGS_Launcher_Blade_1200x1600_1200x1600-253c504f235140eabcc43cf9c5c6e6c9",
        },
        {
            title: "PUBG: BATTLEGROUNDS",
            image: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1rx7f.png",
        },
        {
            title: "Genshin Impact",
            image: "https://cdn1.epicgames.com/spt-assets/99dc46c68ea14324964a856d18dcac5b/genshin-impact-hqdph.jpg",
        },
    ]);

    return (
        <div className="max-w-300 mx-auto text-white rounded-2xl">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <b className="text-[20px]">Free Games</b>
                </div>

                <Link
                    to="/free-games"
                    className="text-[14px] bg-neutral-800 py-2 px-4 rounded-[7px] font-semibold hover:bg-neutral-700 transition-all duration-200"
                >
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-8">
                {games.map((game, index) => (
                    <Link key={index} to="/product" className="group">
                        <div className="overflow-hidden rounded-2xl relative">
                            <img
                                className="transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                                src={game.image}
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
                            Free
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Free;