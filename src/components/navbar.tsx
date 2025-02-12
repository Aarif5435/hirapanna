"use client";

import logo from "../../public/hirapann_logo.svg";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` ${
          isBlurred ? "backdrop-blur-md" : ""
        } flex fixed top-0 left-0 right-0 z-50 py-4 px-4 items-center bg-opacity-50`}
      >
        <div className="flex-1 hidden lg:flex justify-start text-black text-xs font-semibold">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-[#E6721D]">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6721D]">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-[#E6721D]">
                COLLECTIONS
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image className="h-12 w-24 object-cover" src={logo} alt="logo" />
        </div>

        <div className="flex-1 flex justify-end gap-4">
          <Link href="/cart">
            <IoBagOutline size={22} className="hover:text-[#E6721D]" />
          </Link>
          <HiBars2 size={25} className="hover:text-[#E6721D]" />
        </div>
      </nav>
    </>
  );
}
