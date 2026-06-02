import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "@boxicons/react";

interface Product {
    id: number;
    title: string;
    image: string;
    discount: string;
    originalPrice: string;
    salePrice: string;
}

function Sales() {
    const [products] = useState<Product[]>([
        {
            id: 1,
            title: "DRAGON QUEST® XI S: Echoes of an Elusive Age™",
            image:
                "https://cdn1.epicgames.com/94a50905f377470c84c8e4b7c38f9cdd/offer/EGS_DRAGONQUESTXISEchoesofanElusiveAge_SquareEnix_S1-2560x1440-8c53482ccea57e56b7140fd0865cf74c.jpg",
            discount: "-50%",
            originalPrice: "€39.99",
            salePrice: "€19.99",
        },
        {
            id: 2,
            title: "MoonFire: A Seeker's Saga",
            image:
                "https://cdn1.epicgames.com/spt-assets/4c326848c77b4d9795b9262b789b6145/moonfire-a-seekers-saga-11bdv.jpg",
            discount: "-25%",
            originalPrice: "€19.99",
            salePrice: "€14.99",
        },
        {
            id: 3,
            title: "Nested Lands",
            image:
                "https://cdn1.epicgames.com/spt-assets/32e8ba0c2d904cd0b876304ad537e879/nested-lands-1ebi5.jpg",
            discount: "-50%",
            originalPrice: "€39.99",
            salePrice: "€19.99",
        },
    ]);

    return (
        <div className="max-w-300 mx-auto text-white">
            <Link to="/sales" className="flex items-center gap-3 w-fit">
                <b className="text-[20px]">See All The Best Deals</b>
                <ChevronRight size="base" removePadding />
            </Link>

            <div className="grid grid-cols-3 gap-6 mt-8">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        to="/product"
                        className="group"
                    >
                        <div className="overflow-hidden rounded-2xl relative">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                            />
                            <div className="absolute bottom-0 bg-indigo-600 w-full p-1 text-center font-semibold text-[15px]">
                                <p>Deals of the Week</p>
                            </div>
                        </div>
                        <p className="mt-4 font-bold text-[16px]">
                            {product.title}
                        </p>
                        <div className="mt-4 flex items-center gap-3.5">
                            <p className="text-[12px] bg-blue-700 py-1 px-3 rounded-4xl">
                                {product.discount}
                            </p>
                            <p className="text-[14px] line-through text-neutral-400">
                                {product.originalPrice}
                            </p>
                            <p className="text-[14px]">
                                {product.salePrice}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sales;