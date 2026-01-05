"use client";
import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="productRow flex items-center gap-5 p-5 border-b border-black/10">
        <Link href={"/product/1"} className="img group">
          <Image
            src={"/product.png"}
            alt="product-img"
            width={100}
            height={100}
            className="w-full transition group-hover:scale-105"
          />
        </Link>

        <div className="info flex flex-col gap-2 w-[80%]">
          <span className="text-[15px] text-gray-600 ">Fortune</span>
          <Link
            href={"/product/1"}
            className="text-[18px] text-gray-700 font-medium hover:text-primary"
          >
            Fortune Sunlite Refined Sunflower Oil 1 L
          </Link>
          <Rating name="read only" value={5} readOnly size="small" />

          <div className="flex items-center gap-5">
            <div className="relative">
              <Button
                className="!bg-gray-200 !text-gray-700 !py-[3px] !px-2 !capitalize !border-b !border-black/10 "
                onClick={handleClick}
              >
                Qty: 1 <IoMdArrowDropdown size={18} />{" "}
              </Button>

              <Menu
                id="qtyDrop"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    sx: {
                      maxHeight: 200,
                      overflowY: "auto",
                    },
                  },
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                {Array.from({ length: 15 }).map((_, index) => (
                  <MenuItem key={index} onClick={() => handleClose(index + 1)}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <div className="flex items-center justify-between gap-5">
              <span className="text-[#cb0000] text-[18px] font-semibold">
                $25.99
              </span>
              <span className="text-[#A4A4A4] text-[18px] font-semibold line-through">
                $25.99
              </span>

              <span className="text-primary text-[16px] font-bold">14% OF</span>
            </div>
          </div>
        </div>

        <IoMdClose size={25} className="cursor-pointer hover:text-primary" />
      </div>
    </>
  );
};

export default CartItems;
