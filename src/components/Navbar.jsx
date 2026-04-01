import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ carts }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li>
            <a className="hover:text-purple-600 transition">Products</a>
          </li>
          <li>
            <a className="hover:text-purple-600 transition">Features</a>
          </li>
          <li>
            <a className="hover:text-purple-600 transition">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-purple-600 transition">FAQ</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart */}
          <button className="relative text-gray-700  transition">
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className="text-lg sm:text-xl"
            />
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {carts.length}
            </span>
          </button>

          {/* Login */}
          <a className="hidden sm:inline-block text-gray-700  font-medium transition">
            Login
          </a>

          {/* Button */}
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm sm:text-base px-3 sm:px-5">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
