"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "./Searchbar";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-black to-white/80 text-white px-4 sm:px-8 md:px-20 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-center md:text-left">
        Yatra<span className="text-red-500">Moto</span>
      </div>

      {/* Global Search */}
      <div className="w-full flex justify-center md:w-1/3">
        <SearchBar />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex justify-center md:justify-end text-black font-bold space-x-6 sm:space-x-10">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
