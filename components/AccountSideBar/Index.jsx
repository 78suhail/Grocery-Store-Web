"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaHeart,
  FaBox,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";

const menuItems = [
  { label: "Profile", icon: FaUser, href: "/my-account" },
  { label: "Addresses", icon: FaMapMarkerAlt, href: "/address" },
  { label: "MyList", icon: FaHeart, href: "/my-list" },
  { label: "Orders", icon: FaBox, href: "/my-orders" },
  { label: "Logout", icon: FaSignOutAlt, href: "/logout" },
];

const AccountSideBar = () => {
  const pathname = usePathname();

  // profile image preview state
  const [profileImage, setProfileImage] = useState(
    "/dummy-profile-pic-2.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setProfileImage(previewUrl);
  };

  return (
    <aside className="w-full md:w-[280px] bg-white rounded-xl shadow-sm">
      
      {/* ================= Profile Section ================= */}
      <div className="px-6 pt-8 pb-6 flex flex-col items-center text-center">
        
        {/* Avatar */}
        <div className="relative w-[96px] h-[96px] rounded-full border border-gray-300 overflow-hidden group">
          <Image
            src={profileImage}
            alt="Profile"
            fill
            className="object-cover"
            priority
          />

          {/* Upload Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <FaCamera className="text-white text-[18px]" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <h3 className="mt-4 text-[16px] font-semibold text-gray-900">
          Suhail Rana
        </h3>
        <p className="text-[13px] text-gray-500">
          suhailrana@gmail.com
        </p>
      </div>

      {/* ================= Menu ================= */}
      <nav className="pb-4 bg-gray-100">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`
                flex items-center gap-4 px-6 py-3
                text-[14px] font-medium transition
                ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              <Icon
                className={`text-[16px] ${
                  isActive ? "text-primary" : "text-gray-700"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
};

export default AccountSideBar;
