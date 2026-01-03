"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';



const ProductZoom = () => {
  const [slideIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goToSlide = (index) => {
    setSliderIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSml.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="imageWrapper w-[30%] ">
        <div className="isliderWrapper border border-[rgba(0,0,0,0.2)] p-5 rounded-lg overflow-hidden">
          <Swiper className="bigSlider" ref={zoomSliderBig}>
            <SwiperSlide>
              <div className="item">

                <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                src="/prodImage1.webp"
              />
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                src="/prodImage2.webp"
              />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                src="/prodImage1.webp"
              />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="smlSliderWrapper pt-4">
          <Swiper
            className="smlSlider"
            slidesPerView={5}
            spaceBetween={10}
            ref={zoomSliderSml}
          >
            <SwiperSlide>
              <div
                className={`item border ${
                  slideIndex === 0
                    ? "border-[rgba(0,0,0,0.3)]"
                    : "border-[rgba(0,0,0,0.1)]"
                } p-3 cursor-pointer rounded-md`}
                onClick={() => goToSlide(0)}
              >
                <Image
                  src="/prodImage1.webp"
                  alt="product-Img"
                  width={80}
                  height={80}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item border ${
                  slideIndex === 1
                    ? "border-[rgba(0,0,0,0.3)]"
                    : "border-[rgba(0,0,0,0.1)]"
                } p-3 cursor-pointer rounded-md`}
                onClick={() => goToSlide(1)}
              >
                <Image
                  src="/prodImage2.webp"
                  alt="product-Img"
                  width={80}
                  height={80}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item border ${
                  slideIndex === 2
                    ? "border-[rgba(0,0,0,0.3)]"
                    : "border-[rgba(0,0,0,0.1)]"
                } p-3 cursor-pointer rounded-md`}
                onClick={() => goToSlide(2)}
              >
                <Image
                  src="/prodImage1.webp"
                  alt="product-Img"
                  width={80}
                  height={80}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
