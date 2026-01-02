"uase client";
import { FormGroup } from "@mui/material";
import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactCollapse from "react-collapse";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { IoIosStar } from "react-icons/io";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Sidebar = () => {
  const [isOpenCatFilter, setIsOpenCatFilter] = useState(true);
  const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(true);
  const [price, setPrice] = useState([0, 3000]);
  return (
    <>
      <aside className="sticky top-[150px] flex flex-col gap-5">
        <div className="box">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[16px] font-normal text-gray-700">
              Shop by Category
            </h3>
            <button
              className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-gray-800 flex items-center justify-center hover:bg-gray-200"
              onClick={() => setIsOpenCatFilter(!isOpenCatFilter)}
            >
              {isOpenCatFilter === true ? (
                <LiaAngleDownSolid size={20} className="text-gray-800" />
              ) : (
                <LiaAngleDownSolid
                  size={20}
                  className="text-gray-800 rotate-180"
                />
              )}
            </button>
          </div>

          <ReactCollapse isOpened={isOpenCatFilter}>
            <div className="scroll overflow-scroll max-h-[250px]">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Fruits & Vegetables"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Meats & Seafood"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Breads & Bakery"
                />
                <FormControlLabel control={<Checkbox />} label="Beverages" />
                <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Biscuits & Snacks"
                />
                <FormControlLabel control={<Checkbox />} label="Dairy & Eggs" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cooking Needs"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Personal Care"
                />
              </FormGroup>
            </div>
          </ReactCollapse>
        </div>

        <div className="box">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-normal text-gray-700">
              Filter by Price
            </h3>
          </div>

          <RangeSlider
            value={price}
            onInput={setPrice}
            min={0}
            max={1000}
            step={5}
          />

          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-700 text-[14px]">${price[0]}</span>
            <span className="text-gray-700 text-[14px]">${price[1]}</span>
          </div>
        </div>

        <div className="box">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[16px] font-normal text-gray-700">
              Shop by Rating
            </h3>
            <button
              className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-gray-800 flex items-center justify-center hover:bg-gray-200"
              onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)}
            >
              {isOpenRatingFilter === true ? (
                <LiaAngleDownSolid size={20} className="text-gray-800" />
              ) : (
                <LiaAngleDownSolid
                  size={20}
                  className="text-gray-800 rotate-180"
                />
              )}
            </button>
          </div>

          <ReactCollapse isOpened={isOpenRatingFilter}>
            <div className="scroll overflow-scroll max-h-[250px] ratingFilter">
              <div className="flex flex-col items-center">
                <div className="item flex items-center w-full">
                  <Checkbox {...label} />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                </div>
                <div className="item flex items-center w-full">
                  <Checkbox {...label} />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                </div>
                <div className="item flex items-center w-full">
                  <Checkbox {...label} />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                </div>
                <div className="item flex items-center w-full">
                  <Checkbox {...label} />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                </div>
                <div className="item flex items-center w-full">
                  <Checkbox {...label} />
                  <IoIosStar size={20} className="text-[#ffc107]" />
                </div>
              </div>
            </div>
          </ReactCollapse>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
