"use client";
import React from "react";
import ProductZoom from "./ProductZoom";
import { Button, Rating, Tooltip } from "@mui/material";
import QtyBox from "./QtyBox";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const ProductDetailsComponent = () => {
  return (
    <>
      <div className="flex gap-10">
        <ProductZoom />

        <div className="content">
          <h1 className="text-[25px] font-bold text-gray-800">
            Lay's American Style Cream & Onion Potato Chips 82 g
          </h1>
          <div className="flex items-center gap-4 my-4">
            <p className="text-[18px] text-gray-600 font-normal flex items-center gap-3">
              Brand: <span className="font-normal">Lay's</span>
            </p>
            <Rating name="read-only" value={4} readOnly />
            <span className="text-[18px] font-normal cursor-pointer text-primary hover:text-secondary">
              Review(0)
            </span>
          </div>

          <div className="flex items-center  gap-5 my-4">
            <div className="flex items-center justify-between gap-4 ">
              <span className="text-[#cb0000] text-[20px] font-semibold">
                $25.99
              </span>
              <span className="text-[#A4A4A4] text-[20px] font-semibold line-through">
                $25.99
              </span>
            </div>
          </div>
          <p className="text-[16px] font-normal text-gray-700 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make va type specimen book. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>

          <div className="flex items-center gap-4 mt-4">
            <QtyBox />
            <Button className="btn-g !px-8 !h-[45px] gap-1">
              {" "}
              <IoCartOutline size={25} /> Add to cart
            </Button>

            <Tooltip title="Add to wishlist" placement="top">
              <Button
                variant="outlined"
                disableRipple
                className="!w-[45px] !min-w-[45px] !h-[45px] !rounded-full !border !border-[rgba(0,0,0,0.2)] !text-gray-700 !p-0
             hover:!bg-primary hover:!text-white"
              >
                <FaRegHeart size={22} />
              </Button>
            </Tooltip>
          </div>

          <div className="flex items-center gap-8 mt-8">
            <span className="text-[18px] text-gray-800 font-medium cursor-pointer">
              Description
            </span>
            <span className="text-[18px] text-gray-800 font-medium cursor-pointer">
              Reviews
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
