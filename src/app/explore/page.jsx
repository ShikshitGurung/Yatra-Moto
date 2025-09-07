"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

const bikes = [
  { id: 1, name: "Hunter 350", price: 400000, image: "/h350.jpg" },
  { id: 2, name: "Classic 350", price: 500000, image: "/c350.jpg" },
  { id: 3, name: "Interceptor 650", price: 650000, image: "/interceptor650.jpg" },
  { id: 4, name: "Himalayan Hanle Black", price: 1039500, image: "/HimalayanHanleBlack.webp" },
  { id: 5, name: "KTM Duke 200", price: 400000, image: "/duke200.webp" },
  { id: 6, name: "KTM Duke 390", price: 500000, image: "/duke390.webp" },
  { id: 7, name: "KTM RC 200", price: 650000, image: "/rc200.webp" },
  { id: 8, name: "KTM Adventure 390", price: 1074000, image: "/ktma390.webp" },
  { id: 9, name: "Hero Xpulse 125R", price: 400000, image: "/xtreme125r.jpg" },
  { id: 10, name: "Xpulse 210", price: 500000, image: "/xpulse210.png" },
  { id: 11, name: "Mavrick 440", price: 650000, image: "/mavrick440.jpg" },
  { id: 12, name: "Super Splendor", price: 255900, image: "/splendor.jpg" },
  { id: 13, name: "HJ 250", price: 400000, image: "/hj250.jpg" },
  { id: 14, name: "RM 250", price: 500000, image: "/rm250.jpg" },
  { id: 15, name: "RMZ 250", price: 650000, image: "/rmz250.webp" },
  { id: 16, name: "Tracker 250", price: 370000, image: "/tracker250.jpg" },
  { id: 17, name: "Apache RTR 200", price: 400000, image: "/apache200.webp" },
  { id: 18, name: "TVs Ronin", price: 500000, image: "/ronin.jpg" },
  { id: 19, name: "Raider", price: 274900, image: "/raider.webp" },
  { id: 20, name: "TVS RR 310", price: 650000, image: "/rr310.webp" },
];

export default function Explore() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit");
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  let filteredBikes = bikes;

  if (limit) {
    const n = Number(limit);
    if (!Number.isNaN(n) && n > 0) filteredBikes = bikes.slice(0, n);
  } else if (start && end) {
    const s = Number(start);
    const e = Number(end);
    if (!Number.isNaN(s) && !Number.isNaN(e)) {
      filteredBikes = bikes.filter((bike) => bike.id >= s && bike.id <= e);
    }
  }

  const handleAddToCart = (bike) => {
    addToCart(bike);
    alert(`${bike.name} has been added to your cart!`);
  };

  return (
    <div className="min-h-screen w-full bg-gray-300 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-black mb-10">
        All available Bikes
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBikes.map((bike) => (
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

            <div className="mt-4 flex gap-5">
              <Link href={`/explore/${bike.id}`}>
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  View Details
                </button>
              </Link>

              <button
                onClick={() => handleAddToCart(bike)}
                className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
