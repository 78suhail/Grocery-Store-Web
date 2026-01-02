import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="headerWrapper sticky top-0 bg-white z-50">
        <header className="py-3 border-b border-black/10">
          <div className="container flex items-center justify-between">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={243}
                  height={73}
                  priority
                />
              </Link>
            </div>
            <Search />

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Link href="/login" className="hover:text-primary">
                  Login
                </Link>
                <span>|</span>
                <Link href="/register" className="hover:text-primary">
                  Register
                </Link>
              </div>

              <div className="flex items-center gap-8 ">
                <Link href={"/wishlist"} className="relative flex group">
                  <span className="bg-[#Dc2626] w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2 text-white text-xs">
                    3
                  </span>
                  <FaRegHeart
                    size={25}
                    className="text-gray-700 group-hover:text-primary"
                  />
                </Link>
                <Link href={"/cart"} className="relative flex group">
                  <span className="bg-[#Dc2626] w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2 text-white text-xs">
                    3
                  </span>
                  <HiOutlineShoppingBag
                    size={30}
                    className="text-gray-700  group-hover:text-primary"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>
    </>
  );
};

export default Header;
