"use client";
import React, { useContext } from "react";
import AccountSideBar from "../../components/AccountSideBar/Index";
import { Button } from "@mui/material";
import { GoPlus } from "react-icons/go";
import { MyContext } from "@/context/ThemeContext";
import AdressBox from "./AdressBox";



const Page = () => {
  const context = useContext(MyContext);
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container  flex gap-5">
          <div className="w-[20%]">
            <AccountSideBar />
          </div>
          <div className="wrapper w-[50%] ">
            <div className="bg-white shadow-md rounded-md mb-5">
              <div className="p-4 flex items-center justify-between border-b border-black/10">
                <div className="info">
                  <h4 className="text-[20px] font-[500] text-gray-700">
                    Address
                  </h4>
                  <p className="text-[16px] text-gray-600">
                    Manage Your Addresses
                  </p>
                </div>

                <Button
                  className="!text-primary !border !border-primary !capitalize"
                  onClick={context?.isOpenAdressPanel}
                >
                  <GoPlus size={18} /> Add Address
                </Button>
              </div>

              <div className="flex flex-col gap-3 p-5">
                <AdressBox/>
                <AdressBox/>
                <AdressBox/>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
