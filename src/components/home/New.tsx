import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import CardLoading from "../ui/CardLoading";

import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ChevronRight, ChevronLeft } from "@boxicons/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";

import { useGamesByTag } from "../../hooks/useGamesByTag";

function New() {
    const { data: games = [], isLoading, isError } = useGamesByTag("new", 10);

    const swiperRef = useRef<SwiperClass | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateButtons = (swiper: SwiperClass) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

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

                    <div className="mt-8 grid grid-cols-5 gap-6 max-[1024px]:grid-cols-4 max-[600px]:grid-cols-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CardLoading key={index} />
                        ))}
                    </div>
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
            <div className="flex items-center justify-between">
                <Link
                    to="/discover-something-new"
                    className="flex items-center gap-3"
                >
                    <b className="text-[20px] max-[525px]:text-[17px]">
                        Discover Something New
                    </b>

                    <ChevronRight
                        size="base"
                        removePadding
                    />
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() =>
                            swiperRef.current?.slidePrev()
                        }
                        disabled={isBeginning}
                        className={`rounded-full p-1 transition ${isBeginning
                            ? "bg-neutral-900 text-neutral-600 cursor-not-allowed"
                            : "bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
                            }`}
                    >
                        <ChevronLeft size="base" />
                    </button>

                    <button
                        onClick={() =>
                            swiperRef.current?.slideNext()
                        }
                        disabled={isEnd}
                        className={`rounded-full p-1 transition ${isEnd
                            ? "bg-neutral-900 text-neutral-600 cursor-not-allowed"
                            : "bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
                            }`}
                    >
                        <ChevronRight size="base" />
                    </button>
                </div>
            </div>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    updateButtons(swiper);
                }}
                onSlideChange={updateButtons}
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
                {games.map((game) => (
                    <SwiperSlide
                        key={game._id}
                        className="w-[220.8px]! max-[1024px]:w-50! max-[600px]:w-45!"
                    >
                        <Card game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default New;