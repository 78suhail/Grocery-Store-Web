"use client";
import React from "react";
import {  TextField, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
  
  return (
    <>
      <div className="py-20 w-full bg-gray-100 flex justify-center items-center">
        <div className="container">
          <div className="bg-white p-10 rounded-lg border border-black/10 w-[500px] mb-6 m-auto">
           <Image src={'/forgot-img.png'} alt="Forgot Password" width={80} height={80} className="mx-auto mb-4" />
            <h1 className="text-center text-[20px] font-medium">
                Forgot Your Password?
            </h1>
            <div className="my-4 w-full">
              <TextField
                id="emailField"
                label="Email"
                variant="outlined"
                className="w-full"
              />
            </div>

           

            <div className="my-4 w-full relative">
              <Button className="w-full btn-g !py-4 text-[16px]">
                Submit
              </Button>
            </div>

          

            <div className="text-center text-[15px] text-gray-600 mb-3">
              Back to{" "}
              <Link href="/login" className=" text-primary hover:text-secondary font-medium">
                Login
              </Link>
            </div>

     
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
