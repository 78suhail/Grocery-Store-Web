"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ProductSlider = () => {
  return (
    <>
      <div className="productSlider">
        <Swiper
        slidesPerView={6}
          spaceBetween={5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductSlider;
