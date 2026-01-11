"use client";

import React, { useState } from "react";

import { MyContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {


  const [isOpenAdressBox, setIsOpenAddressBox] = useState(false);
  const isOpenAdressPanel = () => {
    setIsOpenAddressBox(!isOpenAdressBox);

  }
  const value = {
    isOpenAdressBox,
    isOpenAdressPanel,
    setIsOpenAddressBox
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default ThemeProvider;
