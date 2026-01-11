"use client";

import React from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/material";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex w-[80%] mx-auto gap-10">
          <div className="bg-white rounded-md shadow-md w-[70%]">
            <div className="p-5 border-b border-black/10">
              <h2 className="text-[20px] text-gray-700 font-medium">
                Your Cart
              </h2>
              <p className="text-[15px] text-gray-700 font-normal">
                There are <span className="text-primary font-bold">7</span>{" "}
                products in your cart
              </p>
            </div>

            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>

          <div className="col2  w-[30%]">
            <div className="bg-white rounded-md shadow-md">
              <div className="p-5 border-b border-black/10">
                <h2 className="text-[20px] text-gray-700 font-medium">
                  Cart Totals
                </h2>
              </div>
              <div className="info p-5 ">
                <div className="flex items-center justify-between text-[17px] font-medium text-gary-700 py-2">
                  <span>Subtotal</span>
                  <span className="text-[#cb0000]">$2,133</span>

                </div>
                <div className="flex items-center justify-between text-[17px] font-medium text-gary-700 py-2">
                  <span>Shipping</span>
                  <span className="text-gray-7000">Free</span>

                </div>
                <div className="flex items-center justify-between text-[17px] font-medium text-gary-700 py-2">
                  <span>Estimate for</span>
                  <span className="text-gray-700">India</span>

                </div>
                <div className="flex items-center justify-between text-[17px] font-medium text-gary-700 py-2">
                  <span>Total</span>
                  <span className="text-[#cb0000]">$2,133</span>

                </div>

              </div>

              <div className="px-5 flex w-full pb-5">
                <Link href="/checkout" className="w-full">
                <Button className="btn-g w-full">Next</Button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
