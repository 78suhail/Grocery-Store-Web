import React from "react";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
import { IoChatboxOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#FAFAFA] py-8 pb-0">
        <div className="container">
          <div className=" flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5">
            <div className="col flex items-center justify-center flex-col group w-[15%] cursor-pointer">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-medium mt-3">Fast Shipping</h3>
              <p className="text-[13px] font-medium text-gray-600">
                For all orders over $100
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%] cursor-pointer">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-medium  mt-3"> Easy Returns</h3>
              <p className="text-[13px] font-medium text-gray-600">
                For an Exchange Product
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%] cursor-pointer">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-medium  mt-3">Secure Payment</h3>
              <p className="text-[13px] font-medium text-gray-600">
                Payment Cards Accepted
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%] cursor-pointer">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-medium  mt-3">
                Special Gift Cards
              </h3>
              <p className="text-[13px] font-medium text-gray-600">
                Our First Product Order
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%] cursor-pointer">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
              <h3 className="text-[16px] font-medium  mt-3">24/7 Support</h3>
              <p className="text-[13px] font-medium text-gray-600">
                Dedicated Support
              </p>
            </div>
          </div>

          <hr className="border-0 border-t border-black/10" />

          <div className="flex justify-between py-8">
            <div className="col1 w-[20%] flex flex-col gap-4 border-r-[1px] border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[20px] font-medium text-gray-600">
                Contact Us
              </h3>
              <p className="text-[14px] font-normal">
                {" "}
                StarBazar - Mega Supar Store <br /> 507-Uinon Trade Center
                France
              </p>
              <Link
                href={"mailto:contact@starbazar.com"}
                className="text-[14px] font-normal text-gray-600 hover:text-primary"
              >
                contact@starbazar.com
              </Link>
              <span className="text-[20px] font-bold text-primary">
                (+92) 7460902506
              </span>

              <div className="flex items-center gap-3">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[16px] font-medium text-gray-700">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="col2 w-[35%] flex justify-between gap-5 pl-10">
              <div className="box">
                <h3 className="text-[20px] font-no text-gray-600">Products</h3>
                <ul className="list mt-5">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Price drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="box">
                <h3 className="text-[20px] font-medium text-gray-600">
                  Our Company
                </h3>
                <ul className="list mt-5">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link
                      href="/"
                      className="link text-[15px] font-medium text-gray-600 hover:text-primary"
                    >
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col3 w-[45%] pl-20">
              <h3 className="text-[20px] font-medium text-gray-600">
                Subscribe to newsletter
              </h3>
              <p className="text-[14px] mt-3">
                Subscribe to our latest newsletter to get news about special
                discount.
              </p>
              <form className="flex flex-col gap-5 w-[500px] mt-5">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-full h-[40px] bg-white border border-[rgba(0,0,0,0.1)] outline-none focus:ring-0 rounded-lg px-4"
                />

                <div className="btn">
                  <Button className="btn-g">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>

          <hr className="border-0 border-t border-black/10" />

          <div className="bottomStrip py-3">
            <div className="container flex items-center justify-between">
              <div className="socials flex items-center gap-2">
                <Link
                  href={"/"}
                  className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
                >
                  <FaFacebookF
                    size={20}
                    className="text-gray-600 group-hover:text-white"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
                >
                  <AiOutlineYoutube
                    size={20}
                    className="text-gray-600 group-hover:text-white"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
                >
                  <FaPinterestP
                    size={20}
                    className="text-gray-600 group-hover:text-white"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
                >
                  <FaInstagram
                    size={20}
                    className="text-gray-600 group-hover:text-white"
                  />
                </Link>
              </div>

              <p className="text-center">&copy; Ecommerce Website</p>

              <div className="flex item-center gap-1">
                <Image src="/carte_bleue.png" alt="Logo" width={50} height={40} />
                <Image src="/visa.png" alt="Logo" width={50} height={40} />
                <Image src="/master_card.png" alt="Logo" width={50} height={40} />
                <Image src="/paypal.png" alt="Logo" width={50} height={40} />
                <Image src="/american_express.png" alt="Logo" width={50} height={40} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
