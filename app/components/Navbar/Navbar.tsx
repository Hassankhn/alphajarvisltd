"use client";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  return (
    <div className="w-full h-16 lg:h-28 border-gray-500 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-10 flex items-center justify-between">
        <Image
          src="/assets/images/AJ Wordmark Inverted.png"
          alt="logo"
          width={105}
          height={86}
        />
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navLi">Home</li>
          <li className="navLi">Pages</li>
          <li className="navLi">Services</li>
          <li className="navLi">Portfolio</li>
          <li className="navLi">Blog</li>
          <li className="navLi">Shop</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-hoverColor hover:text-yellow-600 cursor-pointer" />
          <div className="relative">
            <ImCart className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
          <button className="w-40 h-10 bg-white bg-gradient-to-r text-black from-white via-slate-100 to-white uppercase text-sm font-semibold rounded-md hover:from-pink-500 hover:to-yellow-500 hover:text-white duration-300">
            Get in Touch
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
