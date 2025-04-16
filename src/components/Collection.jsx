import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CollectionCard from "./cards/CollectionCard"

import 'swiper/css';
import 'swiper/css/navigation';

function Collection() {
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
            modules={[Navigation, FreeMode]}
            navigation
            freeMode
        >
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
            <SwiperSlide>
                <CollectionCard />
            </SwiperSlide>
        </Swiper>
    </>)
}

export default Collection
