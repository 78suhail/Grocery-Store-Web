"use client";
import React from "react";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/context/ThemeContext";

const Checkout = () => {

  const context = useContext(MyContext);

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container !w-[65%] m-auto flex gap-5">
          <div className="bg-white rounded-md shadow-md w-[70%] p-8">
            <div className="flex items-center justify-between p-5 border-b border-black/10 mb-5">
              <h2 className="text-[18px] font-medium text-gray-800">
                Select Delivery Address
              </h2>
              <Button className="!text-primary !border !border-primary !capitalize" onClick={context?.isOpenAdressPanel}>
                <GoPlus size={18} /> Add New Address
              </Button>
            </div>

            <div className="addresSec w-full flex flex-col gap-5 p-5">
              <label className="adress border border-black/10 p-4 rounded-md bg-gray-100 flex  gap-4 justify-between cursor-pointer">
                <Radio />
                <div className="info flex flex-col gap-1 pt-2 ">
                  <h1 className="text-[15px] font-normal text-gray-700">
                    Home
                  </h1>
                  <h3 className="text-[16px] font-medium text-gray-700">
                    John Doe
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    123, Main Street, City, State, 12345
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Phone: (123) 456-7890
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  <Button variant="text" className="!text-primary !capitalize">
                    Edit
                  </Button>
                </div>
              </label>
              <label className="adress border border-black/10 p-4 rounded-md bg-gray-100 flex  gap-4 justify-between cursor-pointer">
                <Radio />
                <div className="info flex flex-col gap-1 pt-2">
                  <h1 className="text-[15px] font-normal text-gray-700">
                    Home
                  </h1>
                  <h3 className="text-[16px] font-medium text-gray-700">
                    John Doe
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    123, Main Street, City, State, 12345
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Phone: (123) 456-7890
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  <Button variant="text" className="!text-primary !capitalize">
                    Edit
                  </Button>
                </div>
              </label>
            </div>
          </div>

          <div className="w-[35%] sticky top-20 h-fit">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-5 py-4 border-b border-black/10">
                <h2 className="text-[18px] font-medium text-gray-800">
                  Your Order
                </h2>
              </div>

              {/*  PRODUCTS SCROLL AREA */}
              <div className="max-h-[300px] overflow-y-auto">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="p-5 flex gap-4 border-b border-black/10"
                  >
                    <Image
                      src="/product.png"
                      alt="product"
                      width={70}
                      height={70}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800">
                        Chyawanprash : 2X Immunity Energy Booster | 500g
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-2">
                        Qty: 1
                      </p>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      ₹299
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Details */}
              <div className="p-5 flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Item total</span>
                  <span className="font-medium">₹299</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between font-semibold border-t border-black/10 pt-2">
                  <span>Grand Total</span>
                  <span>₹299</span>
                </div>
              </div>

              <div className="p-5">
                <Button
                  fullWidth
                  className="btn-g !text-white !capitalize !py-3"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
