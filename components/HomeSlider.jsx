"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import {Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <div className="container ">
          <Swiper 
           autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        navigation={true} 
        modules={[Navigation,Autoplay]} 
        className="mySwiper">
        <SwiperSlide>
            <div className='item'>
                <Image src="/slide1.png" alt="Slider Image 1" width={1344} height={514}  className='w-full'/>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item'>
                <Image src="/slide1.png" alt="Slider Image 1" width={1344} height={514}  className='w-full'/>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item'>
                <Image src="/slide1.png" alt="Slider Image 1" width={1344} height={514}  className='w-full'/>

            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider