"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-white/80 text-black">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
          Welcome to Yatra<span className="text-red-600">Moto</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl pt-3 font-semibold text-white">
          GET YOUR DREAM BIKE!
        </h2>
      </div>

      {/* Bike Logos */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-10 items-center pt-20 px-4">
        <Link href="/product">
          <Image
            src="/royalenfield.png"
            alt="Royal Enfield"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <Link href="/product1">
          <Image
            src="/ktmm.png"
            alt="KTM"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <Link href="/product2">
          <Image
            src="/heroo.png"
            alt="Hero"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <Link href="/product3">
          <Image
            src="/crossfire.png"
            alt="Crossfire"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <Link href="/product4">
          <Image
            src="/tvss.webp"
            alt="TVS"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center items-center pt-12">
        <Link href="/explore">
          <button className="px-5 sm:px-6 py-2 sm:py-3 m-20 bg-red-600 text-white text-sm sm:text-base rounded-2xl shadow-lg hover:bg-red-700 transition">
            Explore More
          </button>

        </Link>
      </div>
    </div>
  );
}
