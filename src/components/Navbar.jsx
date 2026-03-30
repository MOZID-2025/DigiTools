import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <a className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>

        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li>
            <a className=" transition">Products</a>
          </li>
          <li>
            <a className=" transition">Features</a>
          </li>
          <li>
            <a className=" transition">Testimonials</a>
          </li>
          <li>
            <a className=" transition">FAQ</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-700 transition">
            <FontAwesomeIcon icon={faCartArrowDown} className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              8
            </span>
          </button>

          <a className="hidden sm:inline-block text-gray-700 font-medium transition">
            Login
          </a>

          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm sm:text-base px-4">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
