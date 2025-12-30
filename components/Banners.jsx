"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Banners = () => {
  return (
    <>
      <section className="py-5 bg-white pt-0">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="py-3 px-2">
              <Link
                href="/"
                className="item group rounded-md overflow-hidden block"
              >
                <Image
                  src="/banner_img/Banner1.png"
                  alt="banner"
                  width={413}
                  height={211}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Link
                href="/"
                className="item group rounded-md overflow-hidden block"
              >
                <Image
                  src="/banner_img/Banner2.png"
                  alt="banner"
                  width={413}
                  height={211}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Link
                href="/"
                className="item group rounded-md overflow-hidden block"
              >
                <Image
                  src="/banner_img/Banner3.png"
                  alt="banner"
                  width={413}
                  height={211}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banners;
