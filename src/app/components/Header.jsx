"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./Searchbar";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const { cartCount, isLoaded: isCartLoaded } = useCart();
  const { currentUser, logout, isLoaded: isAuthLoaded } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    logout();
    setIsProfileMenuOpen(false);
  };
  
  return (
    <header className="bg-gray-800 text-white px-4 sm:px-8 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/YM.png" alt="YatraMoto Logo" width={40} height={40} className="rounded-full" />
          <div className="text-xl sm:text-2xl font-bold">
            Yatra<span className="text-red-500">Moto</span>
          </div>
        </Link>
        
        {/* Center: Nav Links & Search */}
        <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 font-medium">
                <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-red-400 transition-colors">About</Link>
                <Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
            </nav>
            <SearchBar />
        </div>
        
        {/* Right: Cart & Profile */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
            <FaShoppingCart size={22} />
            {isCartLoaded && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="relative" ref={profileMenuRef}>
            <button onClick={() => setIsProfileMenuOpen(p => !p)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <FaUserCircle size={24} />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-1 z-50">
                {isAuthLoaded && currentUser ? (
                  <>
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm text-gray-600">Signed in as</p>
                      <p className="font-semibold truncate">{currentUser.email}</p>
                    </div>
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">My Profile</Link>
                    <button onClick={handleSignOut} className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 text-red-600 font-medium">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-100">Login</Link>
                    <Link href="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100">Signup</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}