"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const CatSlider = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Swiper
            slidesPerView={10}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full h-[110px] rounded-md shadow-md flex items-center justify-center
                transition group-hover:bg-gray-100">
                  <Image
                    src="/cat1.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Fruits & Vegetables
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat2.png"
                    alt="Category 1"
                    width={50}
                    height={50}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Meats & Seafood
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat3.png"
                    alt="Category 1"
                    width={70}
                    height={70}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Breaksfast & Dairy
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat4.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Breads & Bakery
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat5.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Beverages
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat6.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Frozen Foods
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat7.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Biscuits & Snacks
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat8.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Grocery & Staples
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat9.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Baby & Pregnancy
                </h1>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className="group">
                <div className="bg-white p-3 w-full  h-[110px] rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                  <Image
                    src="/cat10.png"
                    alt="Category 1"
                    width={60}
                    height={60}
                    className="transition group-hover:scale-105"
                  />
                </div>
                <h1 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary">
                  Healthcare
                </h1>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
