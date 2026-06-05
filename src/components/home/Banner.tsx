import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Banner() {
    const [games] = useState([
        {
            id: 1,
            _id: "6a226e5c2dbcb4d6b6deaac6",
            banner: "/home/banner/1.jpg",
            logo: "/home/banner/1-1.png",
            tag: "New Release",
            description:
                "Earn the Number. 007 First Light is a thrilling espionage action-adventure game from IO Interactive. Follow James Bond as a young, and reckless recruit in MI6's training program.",
            price: "69,99 €",
            bg: "bg-yellow-700",
            color: "text-white",
        },
        {
            id: 2,
            _id: "6a226eb82dbcb4d6b6deaac8",
            banner: "/home/banner/2.jpg",
            logo: "/home/banner/2-2.png",
            tag: "Top Seller",
            description:
                "Blood will run in Ghostrunner 2, a hardcore FPP slasher set in a post-apocalyptic cyberpunk future. Become the ultimate cyber ninja and prepare for epic boss fights.",
            price: "7,99 €",
            bg: "bg-rose-700",
            color: "text-white",
        },
        {
            id: 3,
            _id: "6a211ea94c40599f7b1f2bb3",
            banner: "/home/banner/3.jpeg",
            logo: "/home/banner/3-3.png",
            tag: "Most Popular",
            description:
                "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
            price: "3.96 €",
            originalPrice: "11.31 €",
            sale: "-65%",
            bg: "bg-indigo-700",
            color: "text-white",
        },
    ]);

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            navigation={true}
            grabCursor={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={24}
            className="max-w-300"
        >
            {games.map((game) => (
                <SwiperSlide key={game.id}>
                    <div className="rounded-3xl h-135 max-[525px]:h-115 overflow-hidden relative">
                        <img
                            className="w-full h-full object-cover"
                            src={game.banner}
                            alt="banner"
                        />
                        <div className="hidden max-[525px]:block absolute inset-x-0 bottom-0 h-full backdrop-blur-[2px]" />
                        <div className="absolute bottom-0 left-0 p-10 max-[525px]:p-6 w-full bg-linear-to-r h-full flex flex-col justify-end from-black/55 max-[525px]:from-black/65 to-transparent">
                            <img
                                src={game.logo}
                                alt="logo"
                                className="w-62.5 max-[525px]:w-55"
                            />
                            <p className="mt-8 max-[525px]:mt-6.5 text-[12.5px] font-semibold uppercase text-white">
                                {game.tag}
                            </p>
                            <p className="mb-8 max-[525px]:mb-6.5 mt-2.5 max-w-100 text-[15.5px] max-[525px]:text-[14.5px] leading-6.5 text-white">
                                {game.description}
                            </p>
                            <div className="text-white flex items-center gap-4">
                                {game.sale ? (
                                    <>
                                        <p className="text-[12px] bg-blue-700 py-1 px-3 rounded-4xl">
                                            {game.sale}
                                        </p>

                                        <p className="text-[14px] font-medium line-through text-neutral-400">
                                            {game.originalPrice}
                                        </p>

                                        <p className="text-[14px] font-medium">
                                            {game.price}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-[14px] font-medium">
                                        {game.price}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <Link
                                    to={`/product/${game._id}`}
                                    className={`${game.bg} ${game.color} px-5 py-3 text-[14px] font-medium rounded-lg transition-all duration-300 hover:scale-105`}
                                >
                                    Purchase
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Banner;