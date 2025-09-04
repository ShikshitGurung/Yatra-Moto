"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./Searchbar";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // 🔑 replace with your auth logic
  const [cartCount, setCartCount] = useState(2); // 🛒 replace with cart context/global state
  const [isLoaded, setIsLoaded] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Close profile menu on outside click
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white px-4 sm:px-8 md:px-20 p-3 pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      {/* Logo */}
      <div className="flex items-center gap-3 justify-center md:justify-start">
        <img src="/YM.png" alt="YatraMoto Logo" className="h-10 rounded-full" />
        <div className="text-xl sm:text-2xl font-bold text-center md:text-left">
          Yatra<span className="text-red-500">Moto</span>
        </div>
      </div>

      {/* Middle Section: Search + Cart + Profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <SearchBar className="w-40 sm:w-64" />

        {/* Cart */}

      </div>

      {/* Navigation */}
      <nav>
        <ul className="justify-center items-center hidden md:flex text-white font-bold space-x-6 sm:space-x-10">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <div>

          </div>
          <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative flex items-center p-2 hover:bg-white/20 rounded-full transition"
          >
            <FaShoppingCart size={22} />
            {isLoaded && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Greeting */}
          {currentUser && (
            <span className="text-sm hidden sm:block font-medium">
              Welcome, {currentUser.name}
            </span>
          )}

          {/* Profile Dropdown */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={toggleProfileMenu}
              className="p-2 hover:bg-white/20 rounded-full transition"
            >
              <FaUserCircle size={24} />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2 z-30">
                {currentUser ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p>Signed in as</p>
                      <p className="font-semibold truncate">{currentUser.email}</p>
                    </div>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 text-red-600 font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
