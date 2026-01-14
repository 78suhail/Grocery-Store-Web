"use client";
import React, { useContext } from "react";
import AccountSideBar from "../../components/AccountSideBar/Index";
import { Button } from "@mui/material";
import { MyContext } from "@/context/ThemeContext";
import Image from "next/image";
import Rating from '@mui/material/Rating';
import { IoMdClose } from "react-icons/io";

const MyList = () => {
  const context = useContext(MyContext);
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container  flex gap-5">
          <div className="w-[20%]">
            <AccountSideBar />
          </div>
          <div className="wrapper w-[60%] ">
            <div className="bg-white shadow-md rounded-md mb-5">
              <div className="p-4 flex items-center justify-between border-b border-black/10">
                <div className="info">
                  <h4 className="text-[20px] font-[500] text-gray-700">
                    My List
                  </h4>
                  <p className="text-[15px] text-gray-600">
                    There are 4 products in your My List
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-3">
                <div className="myListBox flex items-center gap-3 border-b border-black/10 py-3">
                  <div className="img group overflow-hidden">
                    <Image
                      src="/prodImage1.webp"
                      alt="img"
                      width={90}
                      height={90}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </div>

                  <div className="info flex flex-col gap-[5px]">
                    <span className="text-[13px] text-gray-600">Fortune</span>
                    <h3>Fortune Sunlite Refined Sunflower Oil 1 L</h3>

                    <Rating name="read-only" value={5} readOnly size="small"/>

                    <div className="flex items-center gap-5">
                        <span className="text-[#cb0000] text-[16px] font-medium">$25.99</span>
                        <span className="text-[#A4A4A4] text-[16px] font-medium line-through">$38.10</span> 
                         <span className="text-primary text-[16px] font-bold">14%OF</span>

                    </div>

                  </div>

                  <Button   className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !p-0 !text-gray-700 !ml-auto"><IoMdClose size={20}/></Button>
                </div>
              </div>
               <div className="flex flex-col gap-2 p-3">
                <div className="myListBox flex items-center gap-3 border-b border-black/10 py-3">
                  <div className="img group overflow-hidden">
                    <Image
                      src="/prodImage1.webp"
                      alt="img"
                      width={90}
                      height={90}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </div>

                  <div className="info flex flex-col gap-[5px]">
                    <span className="text-[13px] text-gray-600">Fortune</span>
                    <h3>Fortune Sunlite Refined Sunflower Oil 1 L</h3>

                    <Rating name="read-only" value={5} readOnly size="small"/>

                    <div className="flex items-center gap-5">
                        <span className="text-[#cb0000] text-[16px] font-medium">$25.99</span>
                        <span className="text-[#A4A4A4] text-[16px] font-medium line-through">$38.10</span> 
                         <span className="text-primary text-[16px] font-bold">14%OF</span>

                    </div>

                  </div>

                  <Button   className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !p-0 !text-gray-700 !ml-auto"><IoMdClose size={20}/></Button>
                </div>
              </div>
               <div className="flex flex-col gap-2 p-3">
                <div className="myListBox flex items-center gap-3 border-b border-black/10 py-3">
                  <div className="img group overflow-hidden">
                    <Image
                      src="/prodImage1.webp"
                      alt="img"
                      width={90}
                      height={90}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </div>

                  <div className="info flex flex-col gap-[5px]">
                    <span className="text-[13px] text-gray-600">Fortune</span>
                    <h3>Fortune Sunlite Refined Sunflower Oil 1 L</h3>

                    <Rating name="read-only" value={5} readOnly size="small"/>

                    <div className="flex items-center gap-5">
                        <span className="text-[#cb0000] text-[16px] font-medium">$25.99</span>
                        <span className="text-[#A4A4A4] text-[16px] font-medium line-through">$38.10</span> 
                         <span className="text-primary text-[16px] font-bold">14%OF</span>

                    </div>

                  </div>

                  <Button   className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !p-0 !text-gray-700 !ml-auto"><IoMdClose size={20}/></Button>
                </div>
              </div>
               <div className="flex flex-col gap-2 p-3">
                <div className="myListBox flex items-center gap-3 border-b border-black/10 py-3">
                  <div className="img group overflow-hidden">
                    <Image
                      src="/prodImage1.webp"
                      alt="img"
                      width={90}
                      height={90}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </div>

                  <div className="info flex flex-col gap-[5px]">
                    <span className="text-[13px] text-gray-600">Fortune</span>
                    <h3>Fortune Sunlite Refined Sunflower Oil 1 L</h3>

                    <Rating name="read-only" value={5} readOnly size="small"/>

                    <div className="flex items-center gap-5">
                        <span className="text-[#cb0000] text-[16px] font-medium">$25.99</span>
                        <span className="text-[#A4A4A4] text-[16px] font-medium line-through">$38.10</span> 
                         <span className="text-primary text-[16px] font-bold">14%OF</span>

                    </div>

                  </div>

                  <Button   className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !p-0 !text-gray-700 !ml-auto"><IoMdClose size={20}/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyList;
