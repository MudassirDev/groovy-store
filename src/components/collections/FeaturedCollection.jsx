import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CollectionCard from './CollectionCard';

const collections = [
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
    {
        name: "Graphic T-shirts",
        url: "/",
        image: "/images/demo-product.svg"
    },
]

function FeaturedCollection() {
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

export default FeaturedCollection
