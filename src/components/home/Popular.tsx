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

function Popular() {
    const [games] = useState<Game[]>([
        {
            id: "1",
            title: 'Grand Theft Auto V Enhanced',
            img: "https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/GTAV_CHARM_Epic_FirstParty_PortraitFOB_1200x1600_R02_1200x1600-a5528b33df876e64f5dee728830c80a3",
            type: 'Base game',
            price: 49.99,
        },
        {
            id: "2",
            title: 'VALORANT',
            img: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-5b905ef8bbc4437fb4388ba8aa1f958d",
            type: 'Base game',
            price: 69.99,
        },
        {
            id: "3",
            title: 'Hogwarts Legacy: Digital Deluxe Edition',
            img: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacyDigitalDeluxeEdition_AvalancheSoftware_Editions_S2_1200x1600-1e3d53ba3c78a32a86fbadba7f4b9a58",
            type: 'Base game',
            price: 49.99,
        },
        {
            id: "4",
            title: 'EA SPORTS FC™ 26 Standard Edition',
            img: "https://cdn1.epicgames.com/offer/1d4d85b1051e41ee8f1a099e99d59f3f/EGS_EASPORTSFC26StandardEdition_EACANADA_S2_1200x1600-effee280c00b9890a0c5249d4b0e5c97",
            type: 'Base game',
            price: 59.99,
        },
        {
            id: "5",
            title: 'Marvel Rivals',
            img: "https://cdn1.epicgames.com/spt-assets/eb15454c010f4a748498cd3a62096a52/marvel-rivals-wq3mr.png",
            type: 'Base game',
            price: 39.99,
        },
        {
            id: "6",
            title: 'Crosshair X',
            img: "https://cdn1.epicgames.com/spt-assets/bd49b69c7a9e410b83b7c553c837a00a/crosshair-x-gr1xw.png",
            type: 'Base game',
            sale: 50,
            price: 54.99,
            salePrice: 27.49,
        },
        {
            id: "7",
            title: 'STAR WARS™ Battlefront™ II: Celebration Edition',
            img: "https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg",
            type: 'Base game',
            sale: 65,
            price: 69.99,
            salePrice: 24.49,
        },
        {
            id: "8",
            title: 'Farming Simulator 22',
            img: "https://cdn1.epicgames.com/salesEvent/salesEvent/725818d8-9768-4a6a-a723-3039aaee1e23_1200x1600-3b6116d3fc1b566b71251d04bce27938",
            type: 'Base game',
            price: 59.99,
        },
        {
            id: "9",
            title: 'Crosshair V2',
            img: "https://cdn1.epicgames.com/spt-assets/836002e0e7e54201b3d4b68a84c3ee4c/crosshair-v2-jiemu.png",
            type: 'Base game',
            price: 39.99,
        },
        {
            id: "10",
            title: 'LONESTAR',
            img: "https://cdn1.epicgames.com/spt-assets/142bbd5f45fb4cf7a61b301d8a3b9900/lonestar-cggvr.jpg",
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
                <Link to="/most-popular" className='flex items-center gap-3'>
                    <b className="text-[20px] max-[525px]:text-[17px]">Most Popular</b>
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

export default Popular