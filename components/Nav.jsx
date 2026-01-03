import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";


const Nav = () => {
  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between gap-5">
        <Link href="/" className="text-[17px] font-medium text-gray-800 hover:text-primary">
          Home
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Fruits & Vegetables
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Meats & Seafood
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Breakfast & Dairy
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Breads & Bakery
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Beverages
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Frozen Foods
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Biscuits & Snacks
        </Link>

        <Link
          href="/products"
          className="text-[17px] font-medium text-gray-800 hover:text-primary"
        >
          Grocery & Staples
        </Link>

      <div className="relative group">
          <span className="text-[17px] font-medium text-gray-800 hover:text-primary flex items-center gap-1 cursor-pointer">
          More <FaAngleDown size={18} />
        </span>
        <div className="dropdown-menu flex flex-col absolute top-[100%] right-0 bg-white shadow-md rounded-md overflow-hidden w-[200px] invisible opacity-0 transition group-hover:opacity-100 group-hover:visible pt-4" >
           <Link
          href="/products"
          className="text-[16px] font-medium text-gray-800 hover:text-primary flex py-2 px-3"
        >
          Grocery 
        </Link>
        <Link
          href="/products"
          className="text-[16px] font-medium text-gray-800 hover:text-primary flex py-2 px-3"
        >
          Fruits & Vegetables
        </Link>

        <Link
          href="/products"
          className="text-[16px] font-medium text-gray-800 hover:text-primary flex py-2 px-3"
        >
          Meats & Seafood
        </Link>

        <Link
          href="/products"
          className="text-[16px] font-medium text-gray-800 hover:text-primary flex py-2 px-3"
        >
          Breakfast & Dairy
        </Link>


        </div>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
