import { Link } from "react-router-dom";
import { ChevronRight } from "@boxicons/react";
import CardSales from "../ui/CardSales";
import type { Game } from "../../types/game";
import { useState } from "react";

function Sales() {
    const [games] = useState<Game[]>([
        {
            id: "1",
            title: "DRAGON QUEST® XI S: Echoes of an Elusive Age™",
            img:
                "https://cdn1.epicgames.com/94a50905f377470c84c8e4b7c38f9cdd/offer/EGS_DRAGONQUESTXISEchoesofanElusiveAge_SquareEnix_S1-2560x1440-8c53482ccea57e56b7140fd0865cf74c.jpg",
            sale: 50,
            price: 39.99,
            salePrice: 19.99,
        },
        {
            id: "2",
            title: "MoonFire: A Seeker's Saga",
            img:
                "https://cdn1.epicgames.com/spt-assets/4c326848c77b4d9795b9262b789b6145/moonfire-a-seekers-saga-11bdv.jpg",
            sale: 25,
            price: 19.99,
            salePrice: 14.99,
        },
        {
            id: "3",
            title: "Nested Lands",
            img:
                "https://cdn1.epicgames.com/spt-assets/32e8ba0c2d904cd0b876304ad537e879/nested-lands-1ebi5.jpg",
            sale: 50,
            price: 39.99,
            salePrice: 19.99,
        },
    ]);

    return (
        <div className="max-w-300 mx-auto text-white">
            <Link to="/sales" className="flex items-center gap-3 w-fit">
                <b className="text-[20px] max-[525px]:text-[17px]">See All The Best Deals</b>
                <ChevronRight size="base" removePadding />
            </Link>

            <div className="grid grid-cols-3 gap-6 mt-8 max-[1024px]:grid-cols-2 max-[525px]:grid-cols-1">
                {games.map((game) => (
                    <CardSales key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Sales;