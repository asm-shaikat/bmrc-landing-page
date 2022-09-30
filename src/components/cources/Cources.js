import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./cources.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
    return (
        <>
            <p className='text-xl border-2 border-yellow-400 border-b-4 border-white ml-8  mb-4 w-24 text-center text-white'>Cources</p>
            <div className="w-full pb-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-side bg-purple-700 shadow-xl">
                            <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <p className="card-title text-white">New movie is released!</p>
                                <p className="text-2xs">Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success normal-case text-white">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
