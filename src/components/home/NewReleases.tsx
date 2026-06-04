import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

import { ChevronRight, ChevronLeft } from '@boxicons/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

function NewReleases() {
    const games = [
        {
            _id: "1",
            title: '007 First Light',
            img: "https://cdn1.epicgames.com/spt-assets/ec961a13750b4d1da6881b1ca0eaecab/007-first-light-1ccui.jpg",
            type: 'Base game',
            price: 49.99,
        },
        {
            _id: "2",
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            img: "https://cdn1.epicgames.com/spt-assets/fa70ea4db42249d1b3c6e4775d0f65a6/dinner-1hsix.jpg",
            type: 'Base game',
            price: 69.99,
        },
        {
            _id: "3",
            title: 'Subnautica 2',
            img: "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1eodi.png",
            type: 'Base game',
            price: 49.99,
        },
        {
            _id: "4",
            title: 'Crimson Desert',
            img: "https://cdn1.epicgames.com/spt-assets/f9616d900e1048a29ee9ffe9523c1594/crimson-desert-1lwr4.png",
            type: 'Base game',
            price: "Free",
        },
        {
            _id: "5",
            title: 'Resident Evil Requiem',
            img: "https://cdn1.epicgames.com/spt-assets/b2e589fac93746fc8d20b4177f5b3a60/resident-evil-requiem-1fwby.png",
            type: 'Base game',
            price: 39.99,
        },
        {
            _id: "6",
            title: 'REANIMAL',
            img: "https://cdn1.epicgames.com/offer/099a5ae11e914547af1c0cca4c9ffde2/EGS_REANIMAL_TarsierStudios_S2_1200x1600-a46513d4ef10fe0a339929f47db71ac9",
            type: 'Base game',
            price: 54.99,
            sale: 50,
            salePrice: 27.49,
        },
        {
            _id: "7",
            title: 'Windrose',
            img: "https://cdn1.epicgames.com/spt-assets/37958149814246918b62a0da04d31e21/windrose-1go8w.jpg",
            type: 'Base game',
            price: 69.99,
            sale: 65,
            salePrice: 24.49,
        },
        {
            _id: "8",
            title: 'Dead as Disco',
            img: "https://cdn1.epicgames.com/spt-assets/bed013a0fb1e4aa09ce233304d4486c8/dead-as-disco-atazj.png",
            type: 'Base game',
            price: 59.99,
        },
        {
            _id: "9",
            title: 'DEATH STRANDING 2: ON THE BEACH',
            img: "https://cdn1.epicgames.com/spt-assets/3e0c82e7863e40818a56f934edc55712/project-murray-10vqs.png",
            type: 'Base game',
            price: 39.99,
        },
        {
            _id: "10",
            title: 'Stray',
            img: "https://cdn1.epicgames.com/spt-assets/84a18d8cf0024c43915abf945899f352/stray-smmq5.jpg",
            type: 'Base game',
            price: 54.99,
            sale: 50,
            salePrice: 27.49,
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
        <div className="max-w-300 mx-auto text-white">
            <div className='flex items-center justify-between'>
                <Link to="/top-new-releases" className='flex items-center gap-3'>
                    <b className="text-[20px] max-[525px]:text-[17px]">Top New Releases</b>
                    <ChevronRight size="base" removePadding />
                </Link>
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
                slidesPerView="auto"
                slidesPerGroup={1}
                spaceBetween={24}
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
                    <SwiperSlide
                        key={index}
                        className="w-[220.8px]! max-[1024px]:w-50! max-[600px]:w-45!"
                    >
                        <Card game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NewReleases