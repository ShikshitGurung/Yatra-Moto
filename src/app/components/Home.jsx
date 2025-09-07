"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 text-black">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
          Welcome to Yatra<span className="text-red-600">Moto</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl pt-3 font-semibold text-black">
          GET YOUR DREAM BIKE!
        </h2>
      </div>

      {/* Bike Logos */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-10 items-center pt-20 px-4">
        <Link href="/explore?limit=4">
          <Image
            src="/royalenfield.png"
            alt="Royal Enfield"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/explore?start=5&end=8">
          <Image
            src="/ktmm.png"
            alt="KTM Bikes"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/explore?start=9&end=12">
          <Image
            src="/heroo.png"
            alt="Hero Bikes"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/explore?start=13&end=16">
          <Image
            src="/crossfire.png"
            alt="Crossfire Bikes"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/explore?start=17&end=20">
          <Image
            src="/tvss.webp"
            alt="TVS Bikes"
            width={180}
            height={180}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center items-center pt-12">
        {/* ✅ CORRECTED: The <Link> component is now styled as the button */}
        <Link 
          href="/explore"
          className="px-5 sm:px-6 py-2 sm:py-3 m-20 bg-red-600 text-white text-sm sm:text-base rounded-2xl shadow-lg hover:bg-red-700 transition"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}