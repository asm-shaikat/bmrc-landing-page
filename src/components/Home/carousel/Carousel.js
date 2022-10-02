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
            <div className="w-full">
            <p className='text-xl border-2 border-yellow-400 border-b-4 border-white ml-8  mb-4 w-24 text-center text-white'>Gallery</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <img src="https://thechive.com/wp-content/uploads/2018/03/iron-man-armors-lead.jpg?attachment_cache_bust=2420851&quality=85&strip=info" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://venturebeat.com/wp-content/uploads/2017/05/terminator.jpg?w=1200&strip=all" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/69db88e8782fb641a2de21d80ddfba135d9afca9253840e1a351b8cd5a00d0da._SX1080_.jpg" alt="" />
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <img src="https://static01.nyt.com/images/2019/02/15/arts/15alitabattle/15alitabattle-videoSixteenByNineJumbo1600.jpg?year=2019&h=901&w=1600&s=592ea4c545f70e65fdebf660aa21b98a1f3a2608cd80fe4827a4ce8d7a290758&k=ZQJBKqZ0VN&tw=1" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.vox-cdn.com/thumbor/s8h7xqI2i2lBkjJqUyafXfs09lI=/0x42:2100x1141/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21882543/marvel_avengers_a_day_prologue.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/War-Machine-and-Iron-Patriot-armors-in-the-MCU.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.vanityfair.com/photos/6000d378d507f0e0031b845e/master/pass/justice_league_photo41.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    );
}
