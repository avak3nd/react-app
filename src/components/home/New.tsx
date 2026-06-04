import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import type { Game } from '../../types/game';

import { ChevronRight, ChevronLeft } from '@boxicons/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

function New() {
    const [games] = useState<Game[]>([
        {
            _id: "1",
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            img: "https://cdn1.epicgames.com/spt-assets/fa70ea4db42249d1b3c6e4775d0f65a6/dinner-1hsix.jpg",
            type: 'Base game',
            sale: 65,
            price: 69.99,
            salePrice: 24.49,
        },
        {
            _id: "2",
            title: 'Outbound',
            img: "https://cdn1.epicgames.com/spt-assets/c6cb1263d52c4212a11359ef4c8c29f0/outbound-1solh.png",
            type: 'Base game',
            price: 59.99,
        },
        {
            _id: "3",
            title: '007 First Light',
            img: "https://cdn1.epicgames.com/spt-assets/ec961a13750b4d1da6881b1ca0eaecab/007-first-light-1ccui.jpg",
            type: 'Base game',
            sale: 30,
            price: 49.99,
            salePrice: 34.99,
        },
        {
            _id: "4",
            title: 'Bus Bound',
            img: "https://cdn1.epicgames.com/offer/edc2ce9e55fc4b4a9f2b922969ffdda5/EGS_BusBoundModdingKit_stillalivestudio_S2_1200x1600-db43f90320bd43ad98f8bdd11619d0e4",
            type: 'Base game',
            price: 39.99,
        },
        {
            _id: "5",
            title: 'The Caribou Trail',
            img: "https://cdn1.epicgames.com/spt-assets/53d6b82e5c5e4ce198acd001f3e71eab/the-caribou-trail-1cl7g.png",
            type: 'Base game',
            sale: 50,
            price: 54.99,
            salePrice: 27.49,
        },
        {
            _id: "6",
            title: 'Bubsy 4D',
            img: "https://cdn1.epicgames.com/spt-assets/1ca3f2d09373400fa9a0583a184ec648/bubsy-4d-fp77s.png",
            type: 'Base game',
            sale: 65,
            price: 69.99,
            salePrice: 24.49,
        },
        {
            _id: "7",
            title: 'Rogue Fist',
            img: "https://cdn1.epicgames.com/spt-assets/9a689fef7c834b209e589adea22f6965/rogue-fist-xhnpe.png",
            type: 'Base game',
            price: 59.99,
        },
        {
            _id: "8",
            title: 'Subnautica 2',
            img: "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1eodi.png",
            type: 'Base game',
            sale: 30,
            price: 49.99,
            salePrice: 34.99,
        },
        {
            _id: "9",
            title: 'Mixtape',
            img: "https://cdn1.epicgames.com/spt-assets/0db67d9d05ad429cb85ff1a445d073bd/mixtape-5rk0f.jpg",
            type: 'Base game',
            price: 39.99,
        },
        {
            _id: "10",
            title: 'NITRO GEN OMEGA',
            img: "https://cdn1.epicgames.com/spt-assets/16feb65a46254a3788083a202a9e8334/nitro-gen-omega-1yfkq.jpg",
            type: 'Base game',
            sale: 50,
            price: 54.99,
            salePrice: 27.49,
        },
    ]);

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
                <Link to="/discover-something-new" className='flex items-center gap-3'>
                    <b className="text-[20px] max-[525px]:text-[17px]">Discover Something New</b>
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

export default New