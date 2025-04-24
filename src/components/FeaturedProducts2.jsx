import ProductCard from "./cards/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function FeaturedProducts2() {
    return (<>
        <Swiper
            breakpoints={{
                576: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }}
            spaceBetween={10}
            slidesPerView={2.2}
            className='mt-2'
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
        </Swiper>
    </>)
}

export default FeaturedProducts2
