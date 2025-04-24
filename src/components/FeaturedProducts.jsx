import ProductCard from "./cards/ProductCard"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function FeaturedProducts() {
    return (<>
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
    </>)
}

export default FeaturedProducts
