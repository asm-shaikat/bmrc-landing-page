import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://media.wired.com/photos/5cdef92d38916b321aa0c474/master/pass/Facebook-Robots-00.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image?w=150&h=180" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image?w=150&h=180" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image?w=150&h=180" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image?w=150&h=180" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://api.lorem.space/image?w=150&h=180" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
