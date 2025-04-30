import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

function FeaturedProducts() {
    return (<>
        <div>
            <div className="flex flex-col">
                <h1 className="text-[49.3px]">GDenimLabs</h1>
                <p className="text-[13.8px]">We just dropped our second Denim drop, did you check It out?</p>
            </div>
            <Swiper
                breakpoints={{
                    576: {
                        slidesPerView: 2.2,
                    },
                    768: {
                        slidesPerView: 4.2,
                    },
                }}
                spaceBetween={20}
                slidesPerView={1.2}
                className='mt-2'
                modules={[Navigation]}
                navigation
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    </>)
}

export default FeaturedProducts
