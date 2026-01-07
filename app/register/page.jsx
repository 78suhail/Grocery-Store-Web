"use client";
import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="py-10 w-full bg-gray-100 flex justify-center items-center">
        <div className="container">
          <div className="bg-white p-10 rounded-lg border border-black/10 w-[500px] mb-6 m-auto">
            <h1 className="text-center text-[20px] font-medium">
              Login to your account
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
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                className="w-full "
                type={showPassword === true ? "text" : "password"}
              />

              <IconButton
                aria-label="password"
                size="large"
                className="!absolute right-[5px] top-[5px] z-20"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword === true ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </IconButton>
            </div>

            <div className="py-1">
              <Link
                href="/forgot-password"
                className="text-[15px] text-gray-700 font-medium hover:text-primary"
              >
                Forgot Password?
              </Link>

            </div>

            <div className="my-4 w-full relative">
              <Button className="w-full btn-g !py-4 text-[16px]">
                Register
              </Button>
            </div>

            <div className="text-center text-[15px] text-gray-600 mb-3">
              <span>
                Not have an account?{" "}
                <Link
                  href="/Register"
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Sign Up
                </Link>
              </span>
            </div>

            <div className="text-center text-[15px] text-gray-600 mb-3">
              or continue with social accounts
            </div>

            <Button
            loading={false}
              loadingPosition="end"
              startIcon={<FcGoogle />}
              variant="outlined"
              size="large"
              className="w-full !bg-gray-200 !text-gray-800 !font-semibold !py-3 !border
              !border-black/10 hover:!bg-gray-300"
            >
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
