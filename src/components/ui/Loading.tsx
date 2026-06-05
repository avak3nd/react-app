import CardLoading from "../ui/CardLoading";
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

function Loading() {
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

export default Loading