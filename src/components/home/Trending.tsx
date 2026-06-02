import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

function Trending() {
    const games = [
        {
            title: 'The Bornless',
            img: "https://cdn1.epicgames.com/spt-assets/2108caf3a9514ab0b1a4d2383197d452/the-bornless-j8etf.png",
            type: 'Base game',
            price: '€49.99',
        },
        {
            title: 'LEGO® Batman™: Legacy of the Dark Knight',
            img: "https://cdn1.epicgames.com/spt-assets/154c374195a443e9bf4e9fbd3a60d94f/rules-of-engagement-12qeu.jpg",
            type: 'Base game',
            price: '€69.99',
        },
        {
            title: 'Retrace the Light',
            img: "https://cdn1.epicgames.com/spt-assets/407fe6e2ec1040bfb596cd86b5512791/retracethelight-1xg61.png",
            type: 'Base game',
            price: '€54.99',
            sale: 50,
            salePrice: '€27.49',
        },
        {
            title: 'PROJECT_ORIGINS',
            img: "https://cdn1.epicgames.com/spt-assets/d736723c491b4714980ee65c6ff9c3bb/project_origins-1d3tt.png",
            type: 'Base game',
            price: '€69.99',
            sale: 65,
            salePrice: '€24.49',
        },
        {
            title: 'Bunny Guys!',
            img: "https://cdn1.epicgames.com/spt-assets/9022d4bbe9964858bfac21a499804b2d/bunny-guys-es0nf.jpg",
            type: 'Base game',
            price: '€59.99',
        }
    ];
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
                    <SwiperSlide key={index} className="w-[220.8px]! max-[1024px]:w-50! max-[600px]:w-45!">
                        <Link to="/product" className="group">
                            <div className="overflow-hidden rounded-2xl w-full">
                                <img
                                    src={game.img}
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

export default Trending