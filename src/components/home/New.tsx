import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Link } from 'react-router-dom';

import { ChevronRight } from '@boxicons/react';
import { ChevronLeft } from '@boxicons/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

function New() {
    const games = [
        {
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            type: 'Base game',
            price: '€69.99',
            sale: 65,
            salePrice: '€24.49',
        },
        {
            title: 'Cyber Strike: Neon Rebellion',
            type: 'Base game',
            price: '€59.99',
        },
        {
            title: 'Kingdoms of Emberfall',
            type: 'Base game',
            price: '€49.99',
            sale: 30,
            salePrice: '€34.99',
        },
        {
            title: 'Starship Odyssey',
            type: 'Base game',
            price: '€39.99',
        },
        {
            title: 'Shadow Hunters: Eclipse',
            type: 'Base game',
            price: '€54.99',
            sale: 50,
            salePrice: '€27.49',
        },
        {
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            type: 'Base game',
            price: '€69.99',
            sale: 65,
            salePrice: '€24.49',
        },
        {
            title: 'Cyber Strike: Neon Rebellion',
            type: 'Base game',
            price: '€59.99',
        },
        {
            title: 'Kingdoms of Emberfall',
            type: 'Base game',
            price: '€49.99',
            sale: 30,
            salePrice: '€34.99',
        },
        {
            title: 'Starship Odyssey',
            type: 'Base game',
            price: '€39.99',
        },
        {
            title: 'Shadow Hunters: Eclipse',
            type: 'Base game',
            price: '€54.99',
            sale: 50,
            salePrice: '€27.49',
        },
    ];

    const swiperRef = useRef<SwiperClass | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateButtons = (swiper: SwiperClass) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="max-w-282.5 mx-auto text-white">
            <div className='flex items-center justify-between'>
                <b className="text-[20px]">Discover Something New</b>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className={`rounded-full p-1 transition ${isBeginning
                            ? 'bg-neutral-900 text-neutral-600 cursor-not-allowed'
                            : 'bg-neutral-800 hover:bg-neutral-700 cursor-pointer'
                            }`}
                    >
                        <ChevronLeft size="base" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={isEnd}
                        className={`rounded-full p-1 transition ${isEnd
                            ? 'bg-neutral-900 text-neutral-600 cursor-not-allowed'
                            : 'bg-neutral-800 hover:bg-neutral-700 cursor-pointer'
                            }`}
                    >
                        <ChevronRight size="base" />
                    </button>
                </div>
            </div>
            <Swiper
                onSwiper={(swiper: SwiperClass) => {
                    swiperRef.current = swiper;
                    updateButtons(swiper);
                }}
                onSlideChange={(swiper: SwiperClass) => updateButtons(swiper)}
                effect="coverflow"
                grabCursor
                centeredSlides={false}
                spaceBetween={24}
                slidesPerView={5}
                slidesPerGroup={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                }}
                modules={[EffectCoverflow]}
                className="mt-8"
            >
                {games.map((game, index) => (
                    <SwiperSlide key={index} className="w-[206.8px]!">
                        <Link to="/product" className="group">
                            <div className="overflow-hidden rounded-2xl w-full">
                                <img
                                    src="https://cdn1.epicgames.com/spt-assets/fa70ea4db42249d1b3c6e4775d0f65a6/dinner-1hsix.jpg"
                                    className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                                    alt={game.title}
                                />
                            </div>

                            <p className="mt-4 text-[13px] text-neutral-400 font-medium">
                                {game.type}
                            </p>

                            <p className="mt-1.5 font-bold text-[14px]">
                                {game.title}
                            </p>

                            <div className="mt-4 flex items-center gap-3.5">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default New