'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Combine all bikes with their correct paths
const bikes = [
  { id: 1, name: "Hunter 350", price: 400000, image: "/h350.jpg", path: "/product/1" },
  { id: 2, name: "Classic 350", price: 500000, image: "/c350.jpg", path: "/product/2" },
  { id: 3, name: "Interceptor 650", price: 650000, image: "/interceptor650.jpg", path: "/product/3" },
  { id: 4, name: "KTM Duke 200", price: 400000, image: "/duke200.webp", path: "/product1/4" },
  { id: 5, name: "KTM Duke 390", price: 500000, image: "/duke390.webp", path: "/product1/5" },
  { id: 6, name: "KTM RC 200", price: 650000, image: "/rc200.webp", path: "/product1/6" },
  { id: 7, name: "Hero Xpulse 125R", price: 400000, image: "/xtreme125r.jpg", path: "/product2/7" },
  { id: 8, name: "Xpulse 210", price: 500000, image: "/xpulse210.png", path: "/product2/8" },
  { id: 9, name: "Mavrick 440", price: 650000, image: "/mavrick440.jpg", path: "/product2/9" },
  { id: 10, name: "HJ 250", price: 400000, image: "/hj250.jpg", path: "/product3/10" },
  { id: 11, name: "RM 250", price: 500000, image: "/rm250.jpg", path: "/product3/11" },
  { id: 12, name: "RMZ 250", price: 650000, image: "/rmz250.webp", path: "/product3/12" },
  { id: 13, name: "Apache RTR 200", price: 400000, image: "/apache200.webp", path: "/product4/13" },
  { id: 14, name: "TVs Ronin", price: 500000, image: "/ronin.jpg", path: "/product4/14" },
  { id: 15, name: "TVS RR 310", price: 650000, image: "/rr310.webp", path: "/product4/15" },
];

export default function Explore() {
  return (
    <div className="min-h-screen w-full bg-gray-300 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-black mb-10">
        All Available Bikes
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={bike.image}
              alt={bike.name}
              width={400}
              height={250}
              className="object-cover w-full h-56 rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{bike.name}</h3>
            <p className="text-lg font-semibold text-red-600">Rs. {bike.price}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* ✅ Dynamic View Details Button using bike.path */}
              <Link href={bike.path}>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  View Details
                </button>
              </Link>

              {/* ✅ Buy Page */}
              <Link href={`/buy/${bike.id}`}>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
