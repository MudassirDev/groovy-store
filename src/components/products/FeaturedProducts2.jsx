import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ProductCard from './ProductCard';

function FeaturedProducts2() {
    return (<>
        <div>
            <div className="flex justify-center">
                <h1>
                    <a href="/" className="uppercase underline">browse the drop</a>
                </h1>
            </div>
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
        </div>
    </>)
}

export default FeaturedProducts2
