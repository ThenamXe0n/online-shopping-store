import React, { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router";

const NavBar = () => {
  const [isLoggedIn] = useState(true);
  const [user] = useState({ name: "Rohit Sharma" });
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">ShopSphere</h1>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="/">Home</a>
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
          <a href="#offers">Offers</a>
          <a href="/order">orders</a>
          <a href="/cart">carts</a>
          <a href="/checkout">checkout</a>
        </nav>

        <div className="flex items-center gap-4 text-lg">
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />

          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                <FaUserCircle className="text-2xl" />
                <span className="text-sm font-medium hidden sm:block">
                  {user?.name}
                </span>
                <FaChevronDown className="text-xs" />
              </div>
              <Link
                to={"/register"}
                className="bg-red-600 text-white px-5 py-2 rounded-full text-sm"
              >
                logout
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to={"/login"} className="text-sm font-medium">
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-black text-white px-5 py-2 rounded-full text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
