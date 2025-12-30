import Link from "next/link";
import React from "react";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';

const ProductItem = () => {
  return (
    <>
      <div className="productItem shadow-md w-full bg-white rounded-md ">
        <Link href={"/"} className="img overflow-hidden group flex p-4">
          <img
            src="/productitem_img/Rectangle1.png"
            alt="Product Image"
            className="transition group-hover:scale-105"
          />
        </Link>
        <div className="info p-3 flex flex-col gap-1">
          <span className="text-[14px] text-gray-700">Bingo</span>
          <Link
            href={"/"}
            className="text-[15px] text-gray-800 hover:text-primary"
          >
            100 Percent Apple Juice – 64 fl oz Bottle
          </Link>
          <Rating name="read-only" value={4} readOnly size="small"/>

          <div className="flex items-center justify-between">
            <span className="text-[#cb0000] text-[18px] font-semibold">$25.99</span>
            <span className="text-[#A4A4A4] text-[18px] font-semibold line-through">$25.99</span>

          </div>
          <Button className="btn-border-g">Add to Cart</Button>
        </div>
      </div>
    </>
  );  
};

export default ProductItem;
