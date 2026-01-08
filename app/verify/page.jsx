"use client";
import React, { useState } from "react";
import {  TextField, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import OtpBox from "../../components/OtpBox";

const VerifyOtp = () => {

  const [otp , setOtp] = useState("");

  const handleChange = (value) => {
    setOtp(value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP Submitted: ${otp}`);
    console.log("Submitted OTP:", otp);
  }
  return (
    <>
      <div className="py-20 w-full bg-gray-100 flex justify-center items-center">
        <div className="container">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg border border-black/10 w-[500px] mb-6 m-auto">
           <Image src={'/forgot-img.png'} alt="Forgot Password" width={80} height={80} className="mx-auto mb-4" />
            <div className="text-center">
              <h1 className="text-center text-[20px] font-medium text-gray-800">Verify OTP</h1>
                <span className="text-[16px]">OTP send to <span className="text-primary font-bold">Suhail@786.com</span> </span>
            </div>

            <div className="flex items-center justify-center mt-4">
              <OtpBox length={6} onChange={handleChange} />

            </div>
            <div className="my-4 w-full relative">
              <Button type="submit" className="w-full btn-g !py-4 text-[16px]">
                Verify
              </Button>
            </div>
            <div className="text-center text-[15px] text-gray-600 mb-3">
              Back to{" "}
              <Link href="/login" className=" text-primary hover:text-secondary font-medium">
                Login
              </Link>
            </div>

     
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
