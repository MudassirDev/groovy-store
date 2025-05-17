import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ProductGallery({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Main Swiper */}
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mb-4 rounded-xl overflow-hidden"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full aspect-[1/1] bg-white">
                            <img
                                src={src}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                modules={[Thumbs]}
                className="rounded-md"
                breakpoints={{
                    640: { slidesPerView: 4.4 },
                    480: { slidesPerView: 3.4 },
                    0: { slidesPerView: 2.4 },
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-square bg-white rounded-md overflow-hidden border border-gray-200 hover:border-blue-500">
                            <img
                                src={src}
                                alt={`Thumb ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductGallery
