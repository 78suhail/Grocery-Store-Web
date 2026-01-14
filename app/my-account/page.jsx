"use client";
import React, { useState } from "react";
import AccountSideBar from "../../components/AccountSideBar/Index";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ReactCollapse from "react-collapse";

const MyAccount = () => {
  const [phone, setPhone] = useState("");
   const [isOpenChangePasswordBox, setIsOpenChangePasswordBox] = useState(false);
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
                    My Profile
                  </h4>
                  <p className="text-[16px] text-gray-600">
                    All Your account information in one place
                  </p>
                </div>

                <Button className="btn-border-g !px-5"  onClick={() => setIsOpenChangePasswordBox(!isOpenChangePasswordBox)}>Change Password</Button>
              </div>
              <form className=" pb-5 p-5">

                <div className="grid grid-cols-2 gap-5">
                   <div className="form-group">
                  <TextField
                    id="fullName"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                     className="w-full"
                  />
                </div>
                <div className="form-group w-full">
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
                </div>
               <div className="flex items-center justify-center mt-4">
                 <Button className="btn-g !px-5">Update Profile</Button>
               </div>

               
              </form>
            </div>


            <ReactCollapse isOpened={isOpenChangePasswordBox}>

              <div className="bg-white shadow-md rounded-md ">
              <div className="p-4 flex items-center justify-between border-b border-black/10">
                <div className="info">
                  <h4 className="text-[20px] font-[500] text-gray-700">
                   Change Password
                  </h4>
                  <p className="text-[14px] text-gray-600">
                    Update Your Password
                  </p>
                </div>              
              </div>

               <form className=" pb-5 p-5">
               <div className="grid grid-cols-2 gap-5">
                   <div className="form-group">
                  <TextField
                    id="oldPassword"
                    label="Old Password"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="newPassword"
                    label="New Password"
                    variant="outlined"
                    size="small"
                     className="w-full"
                  />
                </div>
                   <div className="form-group">
                  <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                     className="w-full"
                  />
                </div>
                </div>
               <div className="flex items-center justify-center mt-4">
                 <Button className="btn-g !px-5">Change Password</Button>
               </div>

               
              </form>

              </div>



            </ReactCollapse>


            

          </div>


           

          
        </div>
      </section>
    </>
  );
};

export default MyAccount;
