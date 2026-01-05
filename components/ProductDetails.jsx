"use client";
import React, { useState } from "react";
import ProductZoom from "./ProductZoom";
import { Button, Rating, TextField, Tooltip } from "@mui/material";
import QtyBox from "./QtyBox";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const ProductDetailsComponent = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [value, setValue] = useState(2);

  return (
    <>
      <div className="flex gap-10">
        <ProductZoom />
        <div className="content">
          <h1 className="text-[30px] font-bold text-gray-800 mt-4">
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
          <p className="text-[16px] font-normal text-gray-700 leading-8 pr-40 text-justify">
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
        </div>
      </div>

      {/* Description  &  Reviews  */}
      <div className="flex items-center gap-8 mt-8 mb-6">
        <span
          className={`text-[18px] font-medium cursor-pointer pb-1 ${
            isActiveTab === 0
              ? "text-primary border-b-2 border-primary"
              : "text-gray-800"
          }`}
          onClick={() => setIsActiveTab(0)}
        >
          Description
        </span>

        <span
          className={`text-[18px] font-medium cursor-pointer pb-1 ${
            isActiveTab === 1
              ? "text-primary border-b-2 border-primary"
              : "text-gray-800"
          }`}
          onClick={() => setIsActiveTab(1)}
        >
          Reviews
        </span>
      </div>

      {/* Description Section */}

      {isActiveTab === 0 && (
        <p className="text-[16px] font-normal text-gray-700 leading-8 pr-40 text-justify w-[80%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      )}

      {/* Reviews Section */}

      {isActiveTab === 1 && (
        <div className="reviewsSection w-[70%]">
          <h2 className="text-[18px] font-medium text-gray-700 mb-8">
            Customer questions & answers
          </h2>
          <div className="scroll max-h-[300px] overflow-y-scroll flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src="/dummy-profile-pic-2.jpg"
                    alt="User profile image"
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="info flex flex-col gap-1 w-[70%]">
                <h3 className="text[15px] text-gray-700 font-medium">
                  Suhail Rana
                </h3>
                <span className="text[14px] text-gray-700 font-normal">
                  04-01-2026
                </span>
                <p className="text-[15px] font-normal text-gray-700 leading-7 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="w-[30%] flex justify-end pr-4">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src="/dummy-profile-pic-2.jpg"
                    alt="User profile image"
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="info flex flex-col gap-1 w-[70%]">
                <h3 className="text[15px] text-gray-700 font-medium">
                  Suhail Rana
                </h3>
                <span className="text[14px] text-gray-700 font-normal">
                  04-01-2026
                </span>
                <p className="text-[15px] font-normal text-gray-700 leading-7 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="w-[30%] flex justify-end pr-4">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src="/dummy-profile-pic-2.jpg"
                    alt="User profile image"
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="info flex flex-col gap-1 w-[70%]">
                <h3 className="text[15px] text-gray-700 font-medium">
                  Suhail Rana
                </h3>
                <span className="text[14px] text-gray-700 font-normal">
                  04-01-2026
                </span>
                <p className="text-[15px] font-normal text-gray-700 leading-7 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="w-[30%] flex justify-end pr-4">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>
          </div>

          {/* ReviewsForm */}

          <div className="reviewsForm w-[75%] mt-5">
            <h2 className="text-[18px] font-medium text-gray-700 mb-5">
              Add a review
              <form className="flex flex-col gap-5 mt-4">
                <TextField
                  id="reviewInput"
                  label="Write a review"
                  variant="outlined"
                  multiline
                  rows={5}
                  className="w-full"
                />

                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <div className="btnWrapper">
                  <Button className="btn-g !px-5 !py-2">Submit Review</Button>
                </div>
              </form>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsComponent;
