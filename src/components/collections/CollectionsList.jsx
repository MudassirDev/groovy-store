import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CollectionCard from './CollectionCard';

const collections = [
    {
        name: "The Vintage Drop V",
        url: "/collections/test",
        image: "/images/VINTAGE_DROP_BANNER.svg"
    },
    {
        name: "The Vintage Drop V",
        url: "/collections/test",
        image: "/images/VINTAGE_DROP_BANNER.svg"
    },
    {
        name: "The Vintage Drop V",
        url: "/collections/test",
        image: "/images/VINTAGE_DROP_BANNER.svg"
    },
    {
        name: "The Vintage Drop V",
        url: "/collections/test",
        image: "/images/VINTAGE_DROP_BANNER.svg"
    },
    {
        name: "The Vintage Drop V",
        url: "/collections/test",
        image: "/images/VINTAGE_DROP_BANNER.svg"
    },
]

function CollectionList() {
    return (<>
        <Swiper
            breakpoints={{
                576: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 3.2,
                },
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            className='mt-2'
            modules={[Navigation]}
            navigation
        >
            {collections.map(collection => {
                return (
                    <SwiperSlide>
                        <CollectionCard collection={collection} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </>)
}

export default CollectionList

