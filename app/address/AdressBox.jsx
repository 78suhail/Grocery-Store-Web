"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const AdressBox = () => {
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
      <div className="addressBox w-full p-4 bg-[#fafafa] rounded-md border border-black/10 flex items-center justify-between">
        <div className="info w-[80%]">
          <span className="inline-block bg-gray-200 text-[14px] p-2 py-1 rounded-md">
            Home
          </span>
          <h3 className="py-1 text-[18px] text-gray-700 font-medium">
            RINKU VERMA +7460902506
          </h3>
          <p className="text-[14px] text-gray-700">
            H No 222 Govindpuri Kalkaji New Delhi 110019
          </p>
        </div>

        <div className="action relative">
          <Button
            className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !p-0 !text-gray-700"
            onClick={handleClick}
          >
            <HiOutlineDotsVertical size={25} />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default AdressBox;
