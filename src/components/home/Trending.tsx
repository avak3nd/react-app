import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import CardLoading from "../ui/CardLoading";

import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

import { useGamesByTag } from "../../hooks/useGamesByTag";

function Trending() {
    const { data: games = [], isLoading, isError } = useGamesByTag("trending", 5);

    if (isLoading) {
        return (
            <SkeletonTheme
                baseColor="oklch(26.9% 0 0)"
                highlightColor="oklch(37.1% 0 0)"
            >
                <div className="max-w-300 mx-auto">
                    <div className="flex items-center justify-between">
                        <Skeleton width={240} height={24} />

                        <div className="flex gap-3">
                            <Skeleton circle width={32} height={32} />
                            <Skeleton circle width={32} height={32} />
                        </div>
                    </div>
                    <Swiper
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
                        {Array.from({ length: 5 }).map((_, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-[220.8px]! max-[1024px]:w-50! max-[600px]:w-45!"
                            >
                                <CardLoading />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </SkeletonTheme>
        );
    }

    if (isError) {
        return (
            <div className="max-w-300 mx-auto text-red-500">
                Failed to load games
            </div>
        );
    }

    return (
        <div className="max-w-300 mx-auto text-white">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <b className="text-[20px] max-[525px]:text-[17px]">Trending</b>
                </div>

                <Link
                    to="/trending"
                    className="text-[14px] bg-neutral-800 py-2 px-4 rounded-[7px] font-semibold hover:bg-neutral-700 transition-all duration-200"
                >
                    View More
                </Link>
            </div>
            <Swiper
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

export default Trending