import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_black-9.png";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#6F4E37] font-semibold"
              : "hover:text-[#6F4E37] transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#6F4E37] font-semibold"
              : "hover:text-[#6F4E37] transition duration-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-[#6F4E37] font-semibold"
              : "hover:text-[#6F4E37] transition duration-300"
          }
        >
          Products
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="navbar max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="w-6 h-6 text-[#6F4E37]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {link}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-medium">{link}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-5 text-2xl">
          <IoIosSearch className="cursor-pointer hover:scale-110 transition-transform duration-300 text-[#6F4E37]" />
          <MdOutlineShoppingCart className="cursor-pointer hover:scale-110 transition-transform duration-300 text-[#6F4E37]" />
        </div>
      </div>
    </div>
  );
}; 

export default Navbar;
